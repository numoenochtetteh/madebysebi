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

    if (eager) {
      setShouldLoad(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);

          if (video.readyState >= 2) {
            video.play().catch(() => undefined);
          }
        } else if (shouldLoad) {
          video.pause();
        }
      },
      {
        rootMargin: "350px 0px",
        threshold: 0.01,
      },
    );

    observer.observe(video);

    return () => observer.disconnect();
  }, [eager, shouldLoad]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !shouldLoad) return;

    video.load();
    video.play().catch(() => undefined);
  }, [shouldLoad, src]);

  return (
    <video
      ref={videoRef}
      muted
      loop
      playsInline
      preload={shouldLoad ? "metadata" : "none"}
      poster={eager || shouldLoad ? poster : undefined}
      className={className}
      aria-label={ariaLabel}
    >
      {shouldLoad ? <source src={src} type="video/mp4" /> : null}
    </video>
  );
}
