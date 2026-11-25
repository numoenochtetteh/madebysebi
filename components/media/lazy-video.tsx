"use client";

import { useEffect, useRef, useState } from "react";
import posters from "@/lib/video-posters.json";

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
  const [shouldLoad, setShouldLoad] = useState(false);
  const [posterVisible, setPosterVisible] = useState(false);
  const nearViewport = useRef(false);
  const autoAllowed = useRef(false);
  const manualPlayback = useRef(false);
  const userPaused = useRef(false);
  const mobileSrc = MOBILE_SOURCES[src];

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const connection = (navigator as Navigator & {
      connection?: EventTarget & { saveData?: boolean; effectiveType?: string };
    }).connection;
    let unloadTimer: number | undefined;

    const update = () => {
      window.clearTimeout(unloadTimer);
      // Browsers fetch a poster even inside a closed <details>. Defer it until
      // the video is visible, independently of consent to automatic playback.
      setPosterVisible(nearViewport.current && !document.hidden);
      autoAllowed.current = !motion.matches && !connection?.saveData &&
        !/^(slow-)?2g$/.test(connection?.effectiveType ?? "");
      if (nearViewport.current && !document.hidden && (autoAllowed.current || manualPlayback.current)) {
        setShouldLoad(true);
        if (!userPaused.current && video.readyState >= 2) video.play().catch(() => undefined);
      } else {
        video.pause();
        unloadTimer = window.setTimeout(() => setShouldLoad(false), 2000);
      }
    };
    const observer = new IntersectionObserver(([entry]) => {
      nearViewport.current = entry.isIntersecting;
      update();
    }, { rootMargin: eager ? "240px 0px" : "120px 0px", threshold: 0.01 });
    observer.observe(video);
    document.addEventListener("visibilitychange", update);
    motion.addEventListener("change", update);
    connection?.addEventListener("change", update);
    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", update);
      motion.removeEventListener("change", update);
      connection?.removeEventListener("change", update);
      window.clearTimeout(unloadTimer);
    };
  }, [eager]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.load();
    if (shouldLoad && nearViewport.current && !document.hidden && !userPaused.current &&
      (autoAllowed.current || manualPlayback.current)) video.play().catch(() => undefined);
  }, [shouldLoad, src]);

  const requestPlayback = () => {
    manualPlayback.current = true;
    userPaused.current = false;
    setShouldLoad(true);
  };

  return (
    <video
      ref={videoRef}
      muted
      loop
      playsInline
      controls
      onPointerDown={requestPlayback}
      onKeyDown={(event) => {
        if (event.key === " " || event.key === "Enter") requestPlayback();
      }}
      onPlay={() => { userPaused.current = false; }}
      onPause={() => {
        if (nearViewport.current && !document.hidden && (videoRef.current?.readyState ?? 0) >= 2)
          userPaused.current = true;
      }}
      preload={shouldLoad ? "metadata" : "none"}
      poster={posterVisible && poster ? (posters as Record<string, string>)[poster] ?? poster : undefined}
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
