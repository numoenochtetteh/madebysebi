"use client";

import { useEffect, useRef, useState } from "react";

type LazyVideoProps = {
  src: string;
  poster?: string;
  className?: string;
  ariaLabel?: string;
  eager?: boolean;
};

export function LazyVideo({
  src,
  poster,
  className,
  ariaLabel,
  eager = false,
}: LazyVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [shouldLoad, setShouldLoad] = useState(eager);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let nearViewport = false;
    let unloadTimer: number | undefined;

    const stop = () => {
      video.pause();
      window.clearTimeout(unloadTimer);
      // Give quick scroll reversals time to reuse the loaded video.
      unloadTimer = window.setTimeout(() => setShouldLoad(false), 2000);
    };

    const start = () => {
      window.clearTimeout(unloadTimer);
      setShouldLoad(true);
      if (video.readyState >= 2) video.play().catch(() => undefined);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        nearViewport = entry.isIntersecting;
        if (nearViewport && !document.hidden) start();
        else stop();
      },
      {
        rootMargin: "350px 0px",
        threshold: 0.01,
      },
    );

    observer.observe(video);

    const onVisibilityChange = () => {
      if (nearViewport && !document.hidden) start();
      else stop();
    };
    document.addEventListener("visibilitychange", onVisibilityChange);

    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", onVisibilityChange);
      window.clearTimeout(unloadTimer);
    };
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Removing the source and resetting the element frees offscreen decoders.
    video.load();
    if (shouldLoad && !document.hidden) {
      const bounds = video.getBoundingClientRect();
      if (bounds.bottom > -350 && bounds.top < window.innerHeight + 350) {
        video.play().catch(() => undefined);
      }
    }
  }, [shouldLoad, src]);

  return (
    <video
      ref={videoRef}
      muted
      loop
      playsInline
      preload={shouldLoad ? "metadata" : "none"}
      poster={poster}
      className={className}
      aria-label={ariaLabel}
    >
      {shouldLoad ? <source src={src} type="video/mp4" /> : null}
    </video>
  );
}
