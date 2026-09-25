"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";

import { ArrowRight, ArrowUpRight, Sparkles } from "lucide-react";

/* =========================================================
   PROJECTS
========================================================= */

const projects = [
  {
    number: "01",
    title: "Forever Peng Hair",
    industry: "Beauty",
    type: "Booking platform",
    year: "2026",
    description:
      "A premium booking and digital experience created for a London-based hair specialist.",
    image: "/showcase/creative-workspace.jpg",
    video: "/expertise/111.mp4",
    href: "/work/pengtresses",
    liveUrl: "https://foreverpenghair.com",
    accent: "#cefa74",
    layout: "featured",
    capabilities: ["Booking platform", "Payments", "Automation", "Admin dashboard"],
  },
  {
    number: "06",
    title: "Lucenex",
    industry: "Data & AI",
    type: "Company website",
    year: "2026",
    description:
      "A modern business website for a US data and AI company, built to communicate services clearly and position the brand with more authority online.",
    image: "/case-studies/lucenex/01-home.png",
    video: "/expertise/03.mp4",
    href: "/work/lucenex",
    liveUrl: null,
    accent: "#ffd66b",
    layout: "standard",
    capabilities: ["Data & AI", "Company website", "Services", "Frontend"],
  },
  {
    number: "03",
    title: "Total Logistics",
    industry: "Logistics",
    type: "Business website",
    year: "2026",
    description:
      "A logistics website built to explain shipping services clearly and make import and export enquiries across Ghana easier to start.",
    image: "/case-studies/total-logistics/05-ship-hero.jpg",
    href: "/work/total-logistics",
    liveUrl: "https://totallog.org",
    accent: "#2d7dff",
    layout: "standard",
    capabilities: ["Website", "Logistics", "Responsive", "Strategy"],
  },
  {
    number: "02",
    title: "Power Electrode Ltd",
    industry: "Manufacturing",
    type: "Website + digital presence",
    year: "2026",
    description:
      "A manufacturing website designed to explain products clearly, build trust fast and support enquiries from industrial buyers across Ghana.",
    image: "/case-studies/power-electrode/03-values.png",
    video: "/case-studies/power-electrode/hero-video.mp4",
    href: "/work/power-electrode-ltd",
    liveUrl: "https://www.powerelectrodeltd.com/",
    accent: "#ff6a00",
    layout: "standard",
    capabilities: ["Website", "SEO", "Manufacturing", "Growth"],
  },
  {
    number: "04",
    title: "NUMO & SEBI",
    industry: "E-commerce",
    type: "Jewellery storefront",
    year: "2026",
    description:
      "A premium jewellery e-commerce concept that combines editorial storytelling, product detail and a clean shopping flow.",
    image: "/case-studies/numo-sebi/04-editorial.webp",
    video: "/case-studies/numo-sebi/hero-video.mp4",
    href: "/work/numo-sebi",
    liveUrl: "https://jewelry-store-numo-sebi-two.vercel.app",
    accent: "#c9bfff",
    layout: "wide",
    capabilities: ["E-commerce", "Frontend", "Product UI", "Responsive"],
  },
  {
    number: "05",
    title: "Kent Architects",
    industry: "Architecture",
    type: "Portfolio website",
    year: "2026",
    description:
      "An architecture portfolio experience built to present residential projects with calm layouts, strong imagery and a more considered sense of professionalism.",
    image: "/case-studies/kent-architects/02-modern-villa.jpg",
    href: "/work/kent-architects",
    liveUrl: "https://kent-architects.vercel.app",
    accent: "#79dcb5",
    layout: "standard",
    capabilities: ["Architecture", "Portfolio", "Frontend", "Responsive"],
  },
];

/* =========================================================
   PAGE
========================================================= */

export default function WorkPage() {
  useEffect(() => {
    const elements = document.querySelectorAll("[data-reveal]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      {
        threshold: 0.1,
      },
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* =====================================================
          HEADER
      ====================================================== */}

      <Navigation />

      <main className="work-page">
        {/* =====================================================
            HERO
        ====================================================== */}

        <section className="work-hero">
          <div className="work-hero-glow work-glow-lime" />
          <div className="work-hero-glow work-glow-blue" />

          <div className="work-hero-inner">
            <span className="work-badge" data-reveal>
              <span />
              OUR WORK
            </span>

            <h1 data-reveal>
              Work built to
              <br />
              move businesses.
            </h1>

            <div className="work-hero-bottom" data-reveal>
              <p>
                Websites, platforms and digital experiences created to help
                businesses communicate clearly, look credible and grow online.
              </p>

              <Link href="#projects">
                Explore projects
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>

          {/* =================================================
              HERO VISUAL
          ================================================= */}

          <div className="work-hero-showcase" data-reveal>
            <div className="work-browser">
              <div className="work-browser-header">
                <div className="browser-dots">
                  <span />
                  <span />
                  <span />
                </div>

                <span>madebysebi / work</span>

                <ArrowUpRight size={15} />
              </div>

              <div className="work-browser-media">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  poster="/showcase/creative-workspace.jpg"
                >
                  <source src="/expertise/1.mp4" type="video/mp4" />
                </video>
              </div>
            </div>

            <div className="hero-work-card hero-work-card-one">
              <span>01</span>

              <div>
                <small>BEAUTY</small>
                <strong>Forever Peng Hair</strong>
              </div>

              <ArrowUpRight size={18} />
            </div>

            <div className="hero-work-card hero-work-card-two">
              <span>02</span>

              <div>
                <small>MANUFACTURING</small>
                <strong>Power Electrode</strong>
              </div>

              <ArrowUpRight size={18} />
            </div>

            <div className="hero-work-card hero-work-card-three">
              <Sparkles size={17} />

              <div>
                <small>MADEBYSEBI</small>
                <strong>Made for growth.</strong>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            MOVING STRIP
        ====================================================== */}

        <section className="work-marquee">
          <div className="work-marquee-track">
            {[...projects, ...projects].map((project, index) => (
              <div
                className="work-marquee-item"
                key={`${project.title}-${index}`}
              >
                <span style={{ backgroundColor: project.accent }} />

                {project.title}

                <i>✦</i>

                {project.industry}
              </div>
            ))}
          </div>
        </section>

        {/* =====================================================
            INTRO
        ====================================================== */}

        <section className="work-intro">
          <div className="work-intro-inner">
            <div className="work-section-label" data-reveal>
              <span>01</span>
              SELECTED PROJECTS
            </div>

            <div data-reveal>
              <h2>
                Different businesses.
                <br />
                Different challenges.
                <br />
                <span>Same attention to detail.</span>
              </h2>

              <p>
                Every project starts with understanding what the business needs
                to communicate and what customers need to understand.
              </p>
            </div>
          </div>
        </section>

        {/* =====================================================
            PROJECT GRID
        ====================================================== */}

        <section id="projects" className="project-gallery">
          <div className="project-gallery-inner">
            <div className="project-grid">
              {projects.map((project) => (
                <article
                  className="portfolio-project-card"
                  style={
                    {
                      "--project-accent": project.accent,
                    } as React.CSSProperties
                  }
                  key={project.number}
                  data-reveal
                >
                  <Link
                    href={project.href}
                    className="portfolio-media-link"
                    aria-label={`View ${project.title} case study`}
                  >
                    <div className="portfolio-media">
                      {project.video ? (
                        <video autoPlay muted loop playsInline poster={project.image}>
                          <source src={project.video} type="video/mp4" />
                        </video>
                      ) : (
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          sizes="(max-width: 820px) 100vw, 50vw"
                        unoptimized
                        />
                      )}

                      <div className="portfolio-media-shade" />

                      <span className="portfolio-number">{project.number}</span>

                      <span className="portfolio-arrow">
                        <ArrowUpRight size={20} />
                      </span>
                    </div>
                  </Link>

                  <div className="portfolio-card-body">
                    <div className="portfolio-title-line">
                      <h3>{project.title}</h3>
                      <em>· {project.type}</em>
                    </div>

                    <p>{project.description}</p>

                    <div className="portfolio-tags">
                      {project.capabilities.map((item) => (
                        <span key={item}>{item}</span>
                      ))}
                    </div>

                    <div className="portfolio-actions">
                      {project.liveUrl ? (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="portfolio-action portfolio-action-live"
                        >
                          View live site
                          <ArrowUpRight size={14} />
                        </a>
                      ) : (
                        <span className="portfolio-action portfolio-action-muted">
                          Private project
                        </span>
                      )}

                      <Link
                        href={project.href}
                        className="portfolio-action portfolio-action-study"
                      >
                        View case study
                        <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            FINAL CTA
        ====================================================== */}

        <section className="work-final">
          <div className="work-final-inner" data-reveal>
            <div className="work-final-glow" />

            <div className="work-final-copy">
              <span>YOUR PROJECT COULD BE NEXT</span>

              <h2>
                Let&apos;s build
                <br />
                something good.
              </h2>
            </div>

            <Link href="/contact">
              Start a project
              <span>
                <ArrowUpRight size={22} />
              </span>
            </Link>
          </div>
        </section>

        {/* =====================================================
            STYLES
        ====================================================== */}

        <style jsx global>{`
          /* =====================================================
             GLOBAL
          ====================================================== */

          .work-page {
            overflow: hidden;
            background: #f4f4f1;
            color: #111;
          }

          [data-reveal] {
            opacity: 0;
            transform: translateY(36px);
            transition:
              opacity 0.9s cubic-bezier(0.22, 1, 0.36, 1),
              transform 0.9s cubic-bezier(0.22, 1, 0.36, 1);
          }

          [data-reveal].is-visible {
            opacity: 1;
            transform: translateY(0);
          }

          /* =====================================================
             HERO
          ====================================================== */

          .work-hero {
            position: relative;
            min-height: 1080px;
            overflow: hidden;
            padding: 145px 28px 90px;
          }

          .work-hero-inner {
            position: relative;
            z-index: 5;
            width: min(1350px, 100%);
            margin: 0 auto;
          }

          .work-badge {
            display: inline-flex;
            align-items: center;
            gap: 9px;
            border: 1px solid #d4cec1;
            border-radius: 6px;
            padding: 8px 12px;
            color: #5f574f;
            font-family:
              ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
            font-size: 9px;
            font-weight: 700;
            letter-spacing: 0.16em;
          }

          .work-badge > span {
            width: 8px;
            height: 8px;
            border-radius: 2px;
            background: #cefa74;
          }

          .work-hero h1 {
            max-width: 1100px;
            margin: 38px 0 0;
            font-size: clamp(62px, 8vw, 125px);
            font-weight: 650;
            line-height: 0.85;
            letter-spacing: -0.075em;
          }

          .work-hero-bottom {
            display: flex;
            align-items: flex-end;
            justify-content: space-between;
            gap: 60px;
            margin-top: 45px;
          }

          .work-hero-bottom p {
            max-width: 600px;
            margin: 0;
            color: #67615a;
            font-size: 16px;
            line-height: 1.6;
          }

          .work-hero-bottom a {
            display: inline-flex;
            flex-shrink: 0;
            align-items: center;
            gap: 28px;
            border-radius: 999px;
            background: #111;
            padding: 16px 21px 16px 26px;
            color: white;
            font-size: 12px;
            font-weight: 600;
            text-decoration: none;
          }

          .work-hero-bottom a svg {
            color: #cefa74;
          }

          /* =====================================================
             HERO GLOW
          ====================================================== */

          .work-hero-glow {
            position: absolute;
            border-radius: 50%;
            filter: blur(120px);
            pointer-events: none;
            animation: workGlowMove 8s ease-in-out infinite;
          }

          .work-glow-lime {
            top: 170px;
            left: -100px;
            width: 480px;
            height: 480px;
            background: rgba(206, 250, 116, 0.2);
          }

          .work-glow-blue {
            top: 300px;
            right: -100px;
            width: 500px;
            height: 500px;
            background: rgba(92, 121, 255, 0.15);
            animation-delay: -4s;
          }

          @keyframes workGlowMove {
            50% {
              transform: translate3d(35px, -25px, 0) scale(1.08);
            }
          }

          /* =====================================================
             HERO SHOWCASE
          ====================================================== */

          .work-hero-showcase {
            position: relative;
            z-index: 4;
            width: min(1150px, 90%);
            height: 490px;
            margin: 80px auto 0;
          }

          .work-browser {
            position: absolute;
            inset: 0 100px;
            overflow: hidden;
            border: 1px solid #d7d4cd;
            border-radius: 28px;
            background: white;
            box-shadow: 0 35px 80px rgba(0, 0, 0, 0.1);
            transform: perspective(1200px) rotateX(3deg);
          }

          .work-browser-header {
            display: grid;
            height: 52px;
            grid-template-columns: 1fr auto 1fr;
            align-items: center;
            padding: 0 18px;
            border-bottom: 1px solid #eceae5;
          }

          .browser-dots {
            display: flex;
            gap: 5px;
          }

          .browser-dots span {
            width: 7px;
            height: 7px;
            border-radius: 50%;
            background: #d8d6d0;
          }

          .work-browser-header > span {
            color: #8b8781;
            font-size: 9px;
          }

          .work-browser-header > svg {
            justify-self: end;
          }

          .work-browser-media {
            height: calc(100% - 52px);
          }

          .work-browser-media video {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }

          .hero-work-card {
            position: absolute;
            z-index: 7;
            display: flex;
            align-items: center;
            gap: 12px;
            border: 1px solid rgba(17, 17, 17, 0.09);
            border-radius: 15px;
            background: rgba(255, 255, 255, 0.9);
            padding: 11px 14px;
            box-shadow: 0 18px 50px rgba(0, 0, 0, 0.1);
            backdrop-filter: blur(16px);
            animation: workCardFloat 4.5s ease-in-out infinite;
          }

          .hero-work-card-one {
            top: 60px;
            left: 0;
          }

          .hero-work-card-two {
            top: 210px;
            right: 0;
            animation-delay: -1.5s;
          }

          .hero-work-card-three {
            bottom: 30px;
            left: 60px;
            animation-delay: -3s;
          }

          @keyframes workCardFloat {
            50% {
              transform: translateY(-14px);
            }
          }

          .hero-work-card > span:first-child {
            display: grid;
            width: 38px;
            height: 38px;
            place-items: center;
            border-radius: 11px;
            background: #cefa74;
            font-family: ui-monospace, monospace;
            font-size: 9px;
          }

          .hero-work-card > div {
            display: flex;
            min-width: 125px;
            flex-direction: column;
          }

          .hero-work-card small {
            color: #8e8983;
            font-family: ui-monospace, monospace;
            font-size: 6px;
            letter-spacing: 0.08em;
          }

          .hero-work-card strong {
            margin-top: 3px;
            font-size: 11px;
          }

          /* =====================================================
             MARQUEE
          ====================================================== */

          .work-marquee {
            overflow: hidden;
            border-top: 1px solid #d1cec7;
            border-bottom: 1px solid #d1cec7;
            background: #e8e6df;
          }

          .work-marquee-track {
            display: flex;
            width: max-content;
            animation: workMarqueeMove 28s linear infinite;
          }

          .work-marquee-item {
            display: flex;
            height: 70px;
            align-items: center;
            gap: 17px;
            padding: 0 25px;
            white-space: nowrap;
            font-size: 14px;
          }

          .work-marquee-item > span {
            width: 9px;
            height: 9px;
            border-radius: 2px;
          }

          .work-marquee-item i {
            color: #9b958e;
            font-style: normal;
          }

          @keyframes workMarqueeMove {
            to {
              transform: translateX(-50%);
            }
          }

          /* =====================================================
             INTRO
          ====================================================== */

          .work-intro {
            padding: 130px 28px;
          }

          .work-intro-inner {
            display: grid;
            width: min(1350px, 100%);
            margin: 0 auto;
            grid-template-columns: 0.35fr 1fr;
            gap: 70px;
          }

          .work-section-label {
            display: flex;
            gap: 17px;
            padding-top: 10px;
            color: #77716b;
            font-family: ui-monospace, monospace;
            font-size: 9px;
            letter-spacing: 0.12em;
          }

          .work-section-label span {
            color: #9aac00;
          }

          .work-intro h2 {
            margin: 0;
            font-size: clamp(53px, 6vw, 92px);
            font-weight: 600;
            line-height: 0.91;
            letter-spacing: -0.065em;
          }

          .work-intro h2 span {
            color: #827b74;
          }

          .work-intro p {
            max-width: 570px;
            margin: 32px 0 0;
            color: #6b645e;
            font-size: 15px;
            line-height: 1.65;
          }

          /* =====================================================
             PROJECT GALLERY
          ====================================================== */

          .project-gallery {
            padding: 0 28px 105px;
          }

          .project-gallery-inner {
            width: min(1350px, 100%);
            margin: 0 auto;
          }

          .project-grid {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 24px;
          }

          .portfolio-project-card {
            display: flex;
            min-width: 0;
            overflow: hidden;
            border: 1px solid #dcd9d1;
            border-radius: 28px;
            background: rgba(255, 255, 255, 0.72);
            padding: 14px;
            flex-direction: column;
            box-shadow: 0 18px 45px rgba(27, 27, 23, 0.035);
            transition:
              transform 0.45s cubic-bezier(0.22, 1, 0.36, 1),
              box-shadow 0.45s ease,
              border-color 0.35s ease;
          }

          .portfolio-project-card:hover {
            border-color: #c9c5bb;
            transform: translateY(-5px);
            box-shadow: 0 28px 65px rgba(27, 27, 23, 0.075);
          }

          .portfolio-media-link {
            display: block;
            color: inherit;
            text-decoration: none;
          }

          .portfolio-media {
            position: relative;
            aspect-ratio: 1.48 / 1;
            overflow: hidden;
            border-radius: 21px;
            background: #deddd7;
          }

          .portfolio-media img,
          .portfolio-media video {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.85s cubic-bezier(0.22, 1, 0.36, 1);
          }

          .portfolio-project-card:hover .portfolio-media img,
          .portfolio-project-card:hover .portfolio-media video {
            transform: scale(1.035);
          }

          .portfolio-media-shade {
            position: absolute;
            inset: 0;
            background: linear-gradient(
              180deg,
              rgba(0, 0, 0, 0.07),
              transparent 34%,
              rgba(0, 0, 0, 0.04)
            );
            pointer-events: none;
          }

          .portfolio-number {
            position: absolute;
            top: 14px;
            left: 14px;
            z-index: 3;
            display: grid;
            min-width: 40px;
            height: 30px;
            place-items: center;
            border: 1px solid rgba(17, 17, 17, 0.05);
            border-radius: 999px;
            background: rgba(255, 255, 255, 0.94);
            font-family: ui-monospace, monospace;
            font-size: 8px;
            backdrop-filter: blur(12px);
          }

          .portfolio-arrow {
            position: absolute;
            top: 13px;
            right: 13px;
            z-index: 3;
            display: grid;
            width: 43px;
            height: 43px;
            place-items: center;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.95);
            color: #111;
            backdrop-filter: blur(12px);
            transition:
              transform 0.35s ease,
              background 0.35s ease;
          }

          .portfolio-project-card:hover .portfolio-arrow {
            background: var(--project-accent);
            transform: rotate(45deg);
          }

          .portfolio-card-body {
            display: flex;
            min-height: 310px;
            padding: 26px 14px 14px;
            flex-direction: column;
          }

          .portfolio-title-line {
            display: flex;
            align-items: baseline;
            gap: 8px;
            flex-wrap: wrap;
          }

          .portfolio-title-line h3 {
            margin: 0;
            font-size: clamp(30px, 3vw, 46px);
            font-weight: 650;
            line-height: 0.96;
            letter-spacing: -0.055em;
          }

          .portfolio-title-line em {
            color: #5f5b55;
            font-family: Georgia, serif;
            font-size: 16px;
            font-weight: 600;
          }

          .portfolio-card-body > p {
            max-width: 560px;
            margin: 18px 0 0;
            color: #5f5b55;
            font-size: 14px;
            line-height: 1.6;
          }

          .portfolio-tags {
            display: flex;
            gap: 7px;
            margin-top: 24px;
            flex-wrap: wrap;
          }

          .portfolio-tags span {
            display: inline-flex;
            min-height: 29px;
            align-items: center;
            justify-content: center;
            border: 1px solid #d4d1ca;
            border-radius: 999px;
            background: #eeece7;
            padding: 0 11px;
            color: #34312d;
            font-size: 8px;
            font-weight: 700;
            letter-spacing: 0.015em;
            text-transform: uppercase;
          }

          .portfolio-actions {
            display: flex;
            gap: 9px;
            margin-top: auto;
            padding-top: 28px;
            flex-wrap: wrap;
          }

          .portfolio-action {
            display: inline-flex;
            min-height: 43px;
            align-items: center;
            justify-content: center;
            gap: 9px;
            border-radius: 999px;
            padding: 0 17px;
            font-size: 10px;
            font-weight: 700;
            text-decoration: none;
            transition:
              transform 0.3s ease,
              background 0.3s ease,
              border-color 0.3s ease;
          }

          .portfolio-action-live {
            border: 1px solid #c9c6bf;
            background: #fff;
            color: #111;
          }

          .portfolio-action-live:hover {
            border-color: #111;
            transform: translateY(-2px);
          }

          .portfolio-action-study {
            border: 1px solid #111;
            background: #111;
            color: #fff;
          }

          .portfolio-action-study svg {
            color: var(--project-accent);
          }

          .portfolio-action-study:hover {
            background: #222;
            transform: translateY(-2px);
          }

          .portfolio-action-muted {
            border: 1px solid #d3d0c9;
            background: #ebe8e2;
            color: #807c75;
            cursor: default;
          }

          /* =====================================================
             FINAL
          ====================================================== */

          .work-final {
            padding: 30px 28px 70px;
          }

          .work-final-inner {
            position: relative;
            display: flex;
            width: min(1350px, 100%);
            min-height: 530px;
            margin: 0 auto;
            align-items: flex-end;
            justify-content: space-between;
            gap: 50px;
            overflow: hidden;
            border-radius: 34px;
            background: #dedbd3;
            padding: 60px;
          }

          .work-final-glow {
            position: absolute;
            top: -120px;
            right: 5%;
            width: 480px;
            height: 480px;
            border-radius: 50%;
            background: rgba(206, 250, 116, 0.75);
            filter: blur(100px);
          }

          .work-final-copy {
            position: relative;
            z-index: 3;
          }

          .work-final-copy > span {
            font-family: ui-monospace, monospace;
            font-size: 8px;
            letter-spacing: 0.14em;
          }

          .work-final h2 {
            margin: 25px 0 0;
            font-size: clamp(65px, 7vw, 108px);
            font-weight: 600;
            line-height: 0.86;
            letter-spacing: -0.07em;
          }

          .work-final-inner > a {
            position: relative;
            z-index: 3;
            display: flex;
            flex-shrink: 0;
            align-items: center;
            gap: 30px;
            border-radius: 999px;
            background: #111;
            padding: 7px 8px 7px 27px;
            color: white;
            font-size: 12px;
            font-weight: 600;
            text-decoration: none;
          }

          .work-final-inner > a > span {
            display: grid;
            width: 54px;
            height: 54px;
            place-items: center;
            border-radius: 50%;
            background: #cefa74;
            color: #111;
            transition: transform 0.3s ease;
          }

          .work-final-inner > a:hover > span {
            transform: rotate(45deg);
          }

          /* =====================================================
             TABLET
          ====================================================== */

          @media (max-width: 900px) {
            .work-hero {
              min-height: auto;
              padding-top: 125px;
            }

            .work-hero-bottom {
              align-items: flex-start;
              flex-direction: column;
            }

            .work-hero-showcase {
              width: 100%;
            }

            .work-browser {
              inset: 0 40px;
            }

            .work-intro-inner {
              grid-template-columns: 1fr;
              gap: 30px;
            }

            .project-pair {
              grid-template-columns: 1fr;
            }

            .case-project-banner {
              grid-template-columns: 1fr;
            }

            .banner-media {
              min-height: 450px;
            }

            .work-feature-inner {
              grid-template-columns: 1fr;
            }

            .work-feature-visual {
              min-height: 550px;
            }

            .philosophy-bottom {
              align-items: flex-start;
              flex-direction: column;
            }

            .work-final-inner {
              align-items: flex-start;
              flex-direction: column;
              justify-content: flex-end;
            }
          }

          /* =====================================================
             MOBILE
          ====================================================== */

          @media (max-width: 600px) {
            .work-hero {
              padding: 100px 14px 70px;
            }

            .work-badge {
              padding: 6px 9px;
              font-size: 7px;
            }

            .work-hero h1 {
              margin-top: 30px;
              font-size: 42px;
              line-height: 1.04;
            }

            .work-hero-bottom {
              margin-top: 28px;
              gap: 28px;
            }

            .work-hero-bottom p {
              font-size: 14px;
            }

            .work-hero-showcase {
              height: 310px;
              margin-top: 55px;
            }

            .work-browser {
              inset: 0;
              border-radius: 20px;
            }

            .hero-work-card {
              padding: 8px;
            }

            .hero-work-card-one {
              top: 25px;
              left: -5px;
            }

            .hero-work-card-two {
              top: 135px;
              right: -5px;
            }

            .hero-work-card-three {
              bottom: 10px;
              left: 15px;
            }

            .hero-work-card > div {
              min-width: 90px;
            }

            .hero-work-card strong {
              font-size: 8px;
            }

            .work-marquee-item {
              height: 62px;
              padding: 0 20px;
              font-size: 12px;
            }

            .work-intro {
              padding: 85px 14px;
            }

            .work-intro h2 {
              font-size: 47px;
            }

            .project-gallery {
              padding-right: 12px;
              padding-bottom: 80px;
              padding-left: 12px;
            }

            .case-project-featured .case-media,
            .case-project-half .case-media {
              height: 360px;
              border-radius: 20px;
            }

            .case-content {
              display: block;
              padding: 18px 3px 40px;
            }

            .case-content h3 {
              font-size: 38px;
            }

            .case-content > p {
              margin-top: 18px;
            }


            .case-project-details {
              margin-top: 18px;
            }

            .case-project-details > p {
              font-size: 12px;
              line-height: 1.55;
            }

            .case-content-small .case-project-details {
              margin-top: 16px;
            }

            .case-actions {
              gap: 8px;
              margin-top: 16px;
            }

            .case-action {
              min-height: 42px;
              padding: 0 14px;
              font-size: 9.5px;
            }

            .case-project-banner {
              min-height: auto;
              border-radius: 20px;
            }

            .banner-content {
              min-height: 380px;
              padding: 24px;
            }


            .banner-actions {
              padding-right: 0;
            }

            .banner-content h3 {
              font-size: 48px;
            }

            .banner-media {
              min-height: 320px;
            }

            .work-feature-section {
              padding: 12px;
            }

            .work-feature-inner {
              min-height: auto;
              border-radius: 22px;
            }

            .work-feature-copy {
              padding: 50px 24px;
            }

            .work-feature-copy h2 {
              font-size: 48px;
            }

            .feature-points {
              grid-template-columns: 1fr;
            }

            .work-feature-visual {
              min-height: 420px;
            }

            .feature-ring-one {
              width: 170px;
              height: 170px;
            }

            .feature-ring-two {
              width: 285px;
              height: 285px;
            }

            .feature-ring-three {
              width: 390px;
              height: 390px;
            }

            .feature-center {
              width: 95px;
              height: 95px;
            }

            .feature-node {
              padding: 8px 10px;
              font-size: 7px;
            }

            .project-gallery-bottom {
              padding-top: 80px;
            }

            .work-philosophy {
              padding: 90px 14px;
            }

            .work-philosophy h2 {
              font-size: 55px;
            }

            .philosophy-bottom {
              margin-top: 40px;
            }

            .work-final {
              padding: 20px 12px 50px;
            }

            .work-final-inner {
              min-height: 470px;
              border-radius: 22px;
              padding: 28px 22px;
            }

            .work-final h2 {
              font-size: 54px;
            }

            .work-final-inner > a {
              width: 100%;
              justify-content: space-between;
            }
          }

          /* =====================================================
             RESPONSIVE PROJECT GRID
          ====================================================== */

          @media (max-width: 980px) {
            .portfolio-card-body {
              min-height: 300px;
            }
          }

          @media (max-width: 820px) {
            .project-grid {
              grid-template-columns: 1fr;
            }

            .project-gallery {
              padding-right: 18px;
              padding-left: 18px;
            }

            .portfolio-card-body {
              min-height: auto;
            }

            .portfolio-actions {
              margin-top: 26px;
            }
          }

          @media (max-width: 600px) {
            .project-gallery {
              padding-right: 12px;
              padding-bottom: 72px;
              padding-left: 12px;
            }

            .project-grid {
              gap: 18px;
            }

            .portfolio-project-card {
              border-radius: 22px;
              padding: 9px;
            }

            .portfolio-media {
              aspect-ratio: 1.3 / 1;
              border-radius: 17px;
            }

            .portfolio-card-body {
              padding: 21px 9px 10px;
            }

            .portfolio-title-line {
              gap: 6px;
            }

            .portfolio-title-line h3 {
              font-size: 31px;
            }

            .portfolio-title-line em {
              font-size: 14px;
            }

            .portfolio-card-body > p {
              margin-top: 14px;
              font-size: 12.5px;
            }

            .portfolio-tags {
              margin-top: 18px;
            }

            .portfolio-tags span {
              min-height: 27px;
              padding: 0 9px;
              font-size: 7px;
            }

            .portfolio-actions {
              display: grid;
              grid-template-columns: 1fr 1fr;
              gap: 8px;
              padding-top: 22px;
            }

            .portfolio-action {
              width: 100%;
              min-height: 44px;
              padding: 0 10px;
              font-size: 9px;
            }

          }

          @media (max-width: 390px) {
            .portfolio-title-line h3 {
              font-size: 28px;
            }

            .portfolio-actions {
              grid-template-columns: 1fr;
            }

          }

          /* =====================================================
             REDUCED MOTION
          ====================================================== */

          @media (prefers-reduced-motion: reduce) {
            .work-hero-glow,
            .hero-work-card,
            .work-marquee-track,
            .feature-center,
            .feature-node {
              animation: none !important;
            }

            [data-reveal] {
              opacity: 1;
              transform: none;
            }
          }
        `}</style>
      </main>

      {/* =====================================================
          FOOTER
      ====================================================== */}

      <FooterSection />
    </>
  );
}
