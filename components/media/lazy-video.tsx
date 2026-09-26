"use client";

import Image from "next/image";
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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 620px)");
    const update = () => setIsMobile(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (isMobile) return;

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
  }, [eager, shouldLoad, isMobile]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isMobile) {
      video.pause();
      video.load();
      return;
    }

    if (!shouldLoad) return;

    video.load();
    video.play().catch(() => undefined);
  }, [shouldLoad, src, isMobile]);

  return (
    <>
      {poster && (
        <span className="lazy-video-mobile-poster">
          <Image src={poster} alt={ariaLabel ?? "Project preview"} fill sizes="(max-width: 620px) 100vw, 1px" />
        </span>
      )}
      <video
        ref={videoRef}
        muted
        loop
        playsInline
        preload={shouldLoad && !isMobile ? "metadata" : "none"}
        poster={eager || shouldLoad ? poster : undefined}
        className={className}
        aria-label={ariaLabel}
      >
        {shouldLoad && !isMobile ? <source src={src} type="video/mp4" /> : null}
      </video>
      <style jsx global>{`
        .lazy-video-mobile-poster { display: none; }
        @media (max-width: 620px) {
          .lazy-video-mobile-poster { display: block; position: absolute; inset: 0; }
          .lazy-video-mobile-poster img { object-fit: cover; }
          .expertise-media .lazy-video-mobile-poster img { object-fit: contain; object-position: center bottom; }
          .expertise-media video, .home-case-media video { display: none; }
        }
      `}</style>
    </>
  );
}
