"use client";

import { useEffect, useRef, useState } from "react";
import type { FocusEvent, KeyboardEvent, TouchEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { CAROUSEL_INTERVAL, nextSlide, swipeDirection } from "@/lib/home-interactions";
import styles from "./home.module.css";

export type FeaturedProject = {
  slug: string;
  title: string;
  industry: string;
  type: string;
  image: string;
};

export function FeaturedCarousel({ projects }: { projects: FeaturedProject[] }) {
  const [active, setActive] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [visible, setVisible] = useState(true);
  const [onscreen, setOnscreen] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [saveData, setSaveData] = useState(false);
  const regionRef = useRef<HTMLDivElement>(null);
  const touchStart = useRef<{ x: number; y: number } | null>(null);

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
    const connection = (navigator as Navigator & { connection?: EventTarget & { saveData?: boolean } }).connection;
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
    if (projects.length < 2 || hovered || focused || !visible || !onscreen || reducedMotion || saveData) return;
    const timer = window.setInterval(
      () => setActive(current => nextSlide(current, 1, projects.length)),
      CAROUSEL_INTERVAL
    );
    return () => window.clearInterval(timer);
  }, [projects.length, hovered, focused, visible, onscreen, reducedMotion, saveData]);

  if (!projects.length) return null;
  const current = projects[active];

  const move = (direction: number) => setActive(currentIndex => nextSlide(currentIndex, direction, projects.length));
  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
    event.preventDefault();
    move(event.key === "ArrowRight" ? 1 : -1);
  };
  const onTouchStart = (event: TouchEvent<HTMLDivElement>) => {
    touchStart.current = { x: event.touches[0].clientX, y: event.touches[0].clientY };
  };
  const onTouchEnd = (event: TouchEvent<HTMLDivElement>) => {
    if (!touchStart.current || !event.changedTouches.length) return;
    const direction = swipeDirection(touchStart.current, { x: event.changedTouches[0].clientX, y: event.changedTouches[0].clientY });
    touchStart.current = null;
    if (direction) move(direction);
  };
  const onBlur = (event: FocusEvent<HTMLDivElement>) => {
    if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false);
  };

  return (
    <div className={`${styles.heroVisual} ${styles.orbitShowcase}`}
      ref={regionRef} role="region" aria-roledescription="carousel"
      aria-label="Featured MadeBySebi projects" tabIndex={0} onKeyDown={onKeyDown}
      onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}
      onTouchCancel={() => { touchStart.current = null; }}
      onPointerEnter={() => setHovered(true)} onPointerLeave={() => setHovered(false)}
      onFocusCapture={() => setFocused(true)} onBlurCapture={onBlur}
    >
      <div className={styles.orbitHeading}>
        <span className={styles.orbitEyebrow}>SELECTED PROJECTS / 2026</span>
        <span className={styles.orbitCount}>{String(active + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}</span>
      </div>

      <div className={styles.orbitStage} aria-label="Explore featured project previews">
        {projects.map((project, index) => {
          const difference = (index - active + projects.length) % projects.length;
          const position = difference > Math.floor(projects.length / 2) ? difference - projects.length : difference;
          const content = (
            <>
              <Image src={project.image} fill alt={`${project.title} project preview`}
                sizes="(max-width: 600px) 65vw, (max-width: 1023px) 40vw, 27vw"
                loading={position === 0 ? "eager" : "lazy"}
                fetchPriority={index === 0 ? "high" : "auto"} />
              <span className={styles.orbitCardLabel}>{project.title}</span>
            </>
          );
          return position === 0 ? (
            <Link key={project.slug} href={`/work/${project.slug}`}
              className={styles.orbitCard} data-position={position}
              aria-label={`Explore the ${project.title} case study`}>
              {content}
            </Link>
          ) : (
            <button key={project.slug} type="button" className={styles.orbitCard}
              data-position={position} onClick={() => setActive(index)}
              aria-label={`Show ${project.title}`}>{content}</button>
          );
        })}
      </div>

      <div className={styles.orbitFooter}>
        <div className={styles.orbitProjectInfo}>
          <span>{current.industry} / {current.type}</span>
          <strong>{current.title}</strong>
        </div>
        <div className={styles.carouselControls}>
          <button type="button" onClick={() => move(-1)} aria-label="Previous project">
            <ArrowLeft size={19} aria-hidden="true" />
          </button>
          <button type="button" onClick={() => move(1)} aria-label="Next project">
            <ArrowRight size={19} aria-hidden="true" />
          </button>
          <Link href={`/work/${current.slug}`} className={styles.roundLink}
            aria-label={`Read the ${current.title} case study`}>
            <ArrowUpRight size={20} aria-hidden="true" />
          </Link>
        </div>
      </div>
      <div className={styles.carouselDots} aria-label="Choose a featured project">
        {projects.map((project, index) => (
          <button type="button" key={project.slug} onClick={() => setActive(index)}
            aria-label={`Show ${project.title}`}
            aria-current={active === index ? "true" : undefined} />
        ))}
      </div>
    </div>
  );
}
