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
    if (!regionRef.current || !('IntersectionObserver' in window)) return;
    const observer = new IntersectionObserver(([entry]) => setOnscreen(entry.isIntersecting), { threshold: 0.1 });
    observer.observe(regionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (projects.length < 2 || hovered || focused || !visible || !onscreen || reducedMotion || saveData) return;
    const timer = window.setInterval(() => setActive(current => nextSlide(current, 1, projects.length)), CAROUSEL_INTERVAL);
    return () => window.clearInterval(timer);
  }, [projects.length, hovered, focused, visible, onscreen, reducedMotion, saveData]);

  const move = (direction: number) => setActive(current => nextSlide(current, direction, projects.length));
  const project = projects[active];
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
    <div className={styles.heroVisual} ref={regionRef} role="region" aria-roledescription="carousel"
      aria-label="Featured MadeBySebi projects" tabIndex={0} onKeyDown={onKeyDown}
      onTouchStart={onTouchStart} onTouchEnd={onTouchEnd} onTouchCancel={() => { touchStart.current = null; }}
      onPointerEnter={() => setHovered(true)} onPointerLeave={() => setHovered(false)}
      onFocusCapture={() => setFocused(true)} onBlurCapture={onBlur}>
      <div className={styles.visualTopline}>
        <span>From first impression to everyday action</span>
        <span>{String(active + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}</span>
      </div>
      <Link key={project.slug} href={`/work/${project.slug}`} className={`${styles.browser} ${styles.carouselReveal}`}
        aria-label={`Explore the ${project.title} case study`}>
        <div className={styles.browserBar} aria-hidden="true">
          <span /><span /><span /><small>{project.title}</small>
        </div>
        <div className={styles.heroImage}>
          <Image src={project.image} fill alt={`${project.title} project preview`}
            sizes="(max-width: 767px) 90vw, (max-width: 1023px) 80vw, 44vw"
            loading="eager" fetchPriority={active === 0 ? "high" : "auto"} />
        </div>
      </Link>
      <div className={styles.heroCaption}>
        <div><span>Selected work / {project.industry} · {project.type}</span><strong>{project.title}</strong></div>
        <div className={styles.carouselControls}>
          <button type="button" onClick={() => move(-1)} aria-label="Previous project"><ArrowLeft size={19} aria-hidden="true" /></button>
          <button type="button" onClick={() => move(1)} aria-label="Next project"><ArrowRight size={19} aria-hidden="true" /></button>
          <Link href={`/work/${project.slug}`} className={styles.roundLink} aria-label={`Read the ${project.title} case study`}>
            <ArrowUpRight size={20} aria-hidden="true" />
          </Link>
        </div>
      </div>
      <div className={styles.carouselDots} aria-label="Choose a featured project">
        {projects.map((item, index) => <button type="button" key={item.slug} onClick={() => setActive(index)}
          aria-label={`Show ${item.title}`} aria-current={active === index ? "true" : undefined} />)}
      </div>
    </div>
  );
}
