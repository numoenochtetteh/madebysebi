"use client";

import { useEffect, useRef, useState } from "react";

const MOBILE_SOURCES: Record<string, string> = {
  "/expertise/111.mp4": "/expertise/111-mobile.mp4",
  "/expertise/03.mp4": "/expertise/03-mobile.mp4",
  "/expertise/0001.mp4": "/expertise/0001-mobile.mp4",
  "/expertise/1080.mp4": "/expertise/1080-mobile.mp4",
  "/expertise/brand-experience.mp4": "/expertise/brand-experience-mobile.mp4",
  "/case-studies/numo-sebi/hero-video.mp4": "/case-studies/numo-sebi/hero-video-mobile.mp4",
  "/case-studies/power-electrode/hero-video.mp4": "/case-studies/power-electrode/hero-video-mobile.mp4",
  "/case-studies/elegante/site-tour.mp4": "/case-studies/elegante/site-tour-mobile.mp4"
};

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
  const mobileSrc = MOBILE_SOURCES[src];

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
        rootMargin: "120px 0px",
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
      if (bounds.bottom > -120 && bounds.top < window.innerHeight + 120) {
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
      {shouldLoad ? (
        <>
          {mobileSrc ? <source media="(max-width: 767px)" src={mobileSrc} type="video/mp4" /> : null}
          <source src={src} type="video/mp4" />
        </>
      ) : null}
    </video>
  );
}
