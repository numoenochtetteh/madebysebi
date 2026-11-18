"use client";

import { useEffect, useRef, useState } from "react";
import type { FocusEvent, KeyboardEvent, PointerEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight, Pause, Play } from "lucide-react";
import styles from "./home.module.css";

export type FeaturedProject = {
  slug: string;
  title: string;
  industry: string;
  type: string;
  image: string;
  video?: string;
};

/**
 * A continuously drifting project ribbon: cards move along an arc rather than
 * jumping between slides. React renders the cards once; RAF changes transforms
 * directly so the headline and page don't re-render for each animation frame.
 */
export function FeaturedCarousel({ projects }: { projects: FeaturedProject[] }) {
  const [active, setActive] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [visible, setVisible] = useState(true);
  const [onscreen, setOnscreen] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [saveData, setSaveData] = useState(false);
  const [playing, setPlaying] = useState(true);
  const [playPreview, setPlayPreview] = useState(false);
  const regionRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLElement | null)[]>([]);
  const progressRef = useRef(0);
  const lastActiveRef = useRef(0);
  const swipeRef = useRef<{ x: number; y: number } | null>(null);
  const didSwipeRef = useRef(false);
  const count = projects.length;
  const paused = hovered || focused || !visible || !onscreen || reducedMotion || saveData || !playing;

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    const update = () => setVisible(document.visibilityState === "visible");
    update();
    document.addEventListener("visibilitychange", update);
    return () => document.removeEventListener("visibilitychange", update);
  }, []);

  useEffect(() => {
    const connection = (navigator as Navigator & {
      connection?: EventTarget & { saveData?: boolean };
    }).connection;
    if (!connection) return;
    const update = () => setSaveData(Boolean(connection.saveData));
    update();
    connection.addEventListener("change", update);
    return () => connection.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (!regionRef.current || !("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(([entry]) => setOnscreen(entry.isIntersecting), { threshold: 0.1 });
    observer.observe(regionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!count) return;
    let frame = 0;
    let last = 0;
    const tick = (time: number) => {
      const stageWidth = stageRef.current?.getBoundingClientRect().width ?? 900;
      if (!paused && last) {
        // ~one card every 5.5s. A capped delta avoids huge jumps on tab resume.
        progressRef.current = (progressRef.current + Math.min(time - last, 48) / 5500) % count;
      }
      last = time;
      const step = stageWidth < 640 ? stageWidth * 0.38 : Math.min(stageWidth * 0.245, 310);
      for (let index = 0; index < count; index++) {
        const element = cardsRef.current[index];
        if (!element) continue;
        let offset = (index - progressRef.current + count) % count;
        if (offset > count / 2) offset -= count;
        const distance = Math.abs(offset);
        const x = offset * step;
        const y = Math.pow(distance, 1.45) * (stageWidth < 640 ? 18 : 24);
        const scale = Math.max(0.7, 1.08 - distance * 0.105);
        element.style.transform = `translate(calc(-50% + ${x.toFixed(2)}px), ${y.toFixed(2)}px) rotate(${(offset * 8).toFixed(2)}deg) scale(${scale.toFixed(3)})`;
        element.style.opacity = String(Math.max(0, Math.min(1, (count / 2 + 0.05 - distance) * 1.35)));
        element.style.zIndex = String(100 - Math.round(distance * 20));
      }
      const current = Math.round(progressRef.current) % count;
      if (current !== lastActiveRef.current) {
        lastActiveRef.current = current;
        setActive(current);
        setPlayPreview(false);
      }
      if (!paused) frame = window.requestAnimationFrame(tick);
    };
    frame = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(frame);
  }, [count, paused, active]);

  if (!count) return null;
  const currentProject = projects[active];

  const move = (direction: number) => {
    progressRef.current = (Math.round(progressRef.current) + direction + count) % count;
    lastActiveRef.current = progressRef.current;
    setActive(progressRef.current);
    setPlayPreview(false);
  };
  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
    event.preventDefault();
    move(event.key === "ArrowRight" ? 1 : -1);
  };
  const onPointerDown = (event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== "touch") return;
    didSwipeRef.current = false;
    swipeRef.current = { x: event.clientX, y: event.clientY };
  };
  const onPointerUp = (event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== "touch" || !swipeRef.current) return;
    const deltaX = event.clientX - swipeRef.current.x;
    const deltaY = event.clientY - swipeRef.current.y;
    swipeRef.current = null;
    if (Math.abs(deltaX) >= 45 && Math.abs(deltaX) > Math.abs(deltaY) * 1.25) {
      didSwipeRef.current = true;
      move(deltaX < 0 ? 1 : -1);
    }
  };
  const onBlur = (event: FocusEvent<HTMLDivElement>) => {
    if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false);
  };
  const videoAllowed = Boolean(currentProject.video && playPreview && onscreen && visible && !reducedMotion && !saveData);

  return (
    <div className={`${styles.heroVisual} ${styles.orbitShowcase} ${styles.driftingShowcase}`}
      ref={regionRef} role="region" aria-roledescription="carousel"
      aria-label="Continuously moving MadeBySebi project gallery"
      tabIndex={0} onKeyDown={onKeyDown}
      onPointerDown={onPointerDown} onPointerUp={onPointerUp}
      onPointerCancel={() => { swipeRef.current = null; }}
      onClickCapture={event => {
        if (didSwipeRef.current) { event.preventDefault(); event.stopPropagation(); didSwipeRef.current = false; }
      }}
      onFocusCapture={() => setFocused(true)} onBlurCapture={onBlur}>
      <div className={styles.orbitHeading}>
        <span className={styles.orbitEyebrow}>SELECTED PROJECTS / DIGITAL EXPERIENCES</span>
        <span className={styles.orbitCount}>{String(active + 1).padStart(2, "0")} / {String(count).padStart(2, "0")}</span>
      </div>
      <div ref={stageRef} className={styles.orbitStage}>
        {projects.map((project, index) => {
          const isActive = index === active;
          return (
            <Link key={project.slug} href={`/work/${project.slug}`}
              ref={element => { cardsRef.current[index] = element; }}
              className={styles.orbitCard} data-active={isActive}
              aria-label={`Explore the ${project.title} case study`}
              tabIndex={isActive ? 0 : -1}
              onPointerEnter={() => setHovered(true)}
              onPointerLeave={() => setHovered(false)}>
              <Image src={project.image} fill alt={`${project.title} website preview`}
                sizes="(max-width: 600px) 55vw, (max-width: 1023px) 42vw, 27vw"
                loading={index === 0 ? "eager" : "lazy"}
                fetchPriority={index === 0 ? "high" : "auto"} />
              {isActive && videoAllowed && project.video ? (
                <video key={project.slug} className={styles.orbitVideo}
                  autoPlay muted loop playsInline preload="none"
                  poster={project.image} aria-hidden="true">
                  <source src={project.video} type="video/mp4" />
                </video>
              ) : null}
              <span className={styles.orbitCardLabel}>{project.title}</span>
            </Link>
          );
        })}
      </div>
      <div className={styles.orbitFooter}>
        <div className={styles.orbitProjectInfo}>
          <span>{currentProject.industry} / {currentProject.type}</span>
          <strong>{currentProject.title}</strong>
        </div>
        <div className={styles.carouselControls}>
          <button type="button" onClick={() => move(-1)} aria-label="Previous project">
            <ArrowLeft size={19} aria-hidden="true" />
          </button>
          <button type="button" onClick={() => move(1)} aria-label="Next project">
            <ArrowRight size={19} aria-hidden="true" />
          </button>
          <button type="button" className={styles.orbitMotionToggle}
            onClick={() => setPlaying(value => !value)}
            aria-label={playing ? "Pause gallery motion" : "Resume gallery motion"}
            aria-pressed={!playing} disabled={reducedMotion || saveData}>
            {playing ? <Pause size={15} aria-hidden="true" /> : <Play size={15} aria-hidden="true" />}
          </button>
          {currentProject.video && (
            <button type="button" className={styles.orbitVideoToggle}
              onClick={() => setPlayPreview(value => !value)}
              aria-label={playPreview ? "Stop project video preview" : "Play project video preview"}
              aria-pressed={playPreview} disabled={reducedMotion || saveData}>
              {playPreview ? "Stop" : "Video"}
            </button>
          )}
          <Link href={`/work/${currentProject.slug}`} className={styles.roundLink}
            aria-label={`Read the ${currentProject.title} case study`}>
            <ArrowUpRight size={20} aria-hidden="true" />
          </Link>
        </div>
      </div>
      <div className={styles.carouselDots} aria-label="Choose a featured project">
        {projects.map((project, index) => (
          <button type="button" key={project.slug}
            onClick={() => move((index - Math.round(progressRef.current) + count) % count)}
            aria-label={`Show ${project.title}`}
            aria-current={active === index ? "true" : undefined} />
        ))}
      </div>
    </div>
  );
}
