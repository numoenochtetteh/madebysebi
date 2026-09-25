"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";
import { LazyVideo } from "@/components/media/lazy-video";

import {
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  Target,
  Linkedin,
} from "lucide-react";

const capabilities = [
  { title: "Web Design", href: "/services#web-design-development" },
  { title: "Web Development", href: "/services#web-design-development" },
  { title: "UX/UI", href: "/services#ux-ui-product-design" },
  { title: "Branding", href: "/services#branding-visual-design" },
  { title: "SEO & GEO", href: "/services#seo-geo-visibility" },
  { title: "Digital Strategy", href: "/services#digital-marketing-growth" },
  { title: "Website Audits", href: "/services#consultation-audits" },
  { title: "Performance", href: "/services#consultation-audits" },
];

const teamMembers = [
  {
    name: "Numo Nanortey Francis",
    role: "WordPress Engineer | Full Stack",
    image: "/team/francis-team.jpg",
    linkedin: "https://www.linkedin.com/in/numofrancis/",
    imageClass: "team-image-francis",
  },
  {
    name: "Enoch Numo Tetteh",
    role: "Frontend Engineer",
    image: "/team/enoch-team.jpg",
    linkedin: "https://www.linkedin.com/in/enoch-numo-tetteh-993432358/",
    imageClass: "team-image-enoch",
  },
  {
    name: "Bernard Numo",
    role: "Frontend Developer",
    image:
      "https://images.pexels.com/photos/30767586/pexels-photo-30767586.jpeg?cs=srgb&dl=pexels-uiliamnornberg-30767586.jpg&fm=jpg",
    linkedin: "",
    imageClass: "team-image-bernard",
  },
];

export default function AboutPage() {
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
        threshold: 0.12,
      },
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navigation />

      <main className="about-page">
        {/* =====================================================
            HERO
        ===================================================== */}

        <section className="about-hero">
          <div className="about-glow about-glow-lime" />
          <div className="about-glow about-glow-blue" />

          <div className="about-hero-inner">
            <span className="about-badge" data-reveal>
              <span />
              ABOUT MADEBYSEBI
            </span>

            <h1 data-reveal>
              We build digital
              <br />
              experiences businesses
              <br />
              can grow with.
            </h1>

            <div className="about-hero-bottom" data-reveal>
              <p>
                MadeBySebi is an independent digital studio in Accra creating
                thoughtful websites, web apps and brand experiences for
                businesses that want to feel clearer, sharper and more confident
                online.
              </p>

              <Link href="/contact">
                Start a project
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>

          {/* =====================================================
              HERO VISUAL
          ===================================================== */}

          <div className="about-hero-visual" data-reveal>
            <div className="about-main-media">
              <LazyVideo
                src="/expertise/0001.mp4"
                poster="/showcase/creative-workspace.jpg"
                eager
              />

              <div className="about-media-overlay" />

              <span className="about-media-label">
                <span />
                DESIGN · DEVELOPMENT · STRATEGY
              </span>
            </div>

            <div className="about-floating-card about-floating-one">
              <span>01</span>

              <div>
                <small>BASED IN</small>
                <strong>Accra, Ghana · Working worldwide</strong>
              </div>
            </div>

            <div className="about-floating-card about-floating-two">
              <Target size={19} />

              <div>
                <small>FOCUS</small>
                <strong>Business growth</strong>
              </div>
            </div>

            <div className="about-floating-card about-floating-three">
              <Sparkles size={18} />

              <div>
                <small>MADEBYSEBI</small>
                <strong>Websites built seriously.</strong>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            MARQUEE
        ===================================================== */}

        <section className="about-marquee">
          <div className="about-marquee-track">
            {[...capabilities, ...capabilities].map((item, index) => (
              <div
                className="about-marquee-item"
                key={`${item.title}-${index}`}
              >
                <span />
                {item.title}
                <i>✦</i>
              </div>
            ))}
          </div>
        </section>

        {/* =====================================================
            INTRO STORY
        ===================================================== */}

        <section className="about-story">
          <div className="about-story-inner">
            <div className="about-section-label" data-reveal>
              <span>01</span>
              WHO WE ARE
            </div>

            <div className="about-story-copy">
              <h2 data-reveal>
                Good design.
                <br />
                Better business.
              </h2>

              <div className="about-story-text" data-reveal>
                <p>
                  We built MadeBySebi around a simple belief: strong digital
                  work should feel considered, useful and unmistakably connected
                  to the business behind it.
                </p>

                <p>
                  Strategy, design and development stay connected from the first
                  conversation to launch, so every decision supports the same
                  story, experience and business goal.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            SPLIT FEATURE
        ===================================================== */}

        <section className="about-feature">
          <div className="about-feature-inner">
            <div className="about-feature-media" data-reveal>
              <Image
                src="/showcase/coding-workspace.jpg"
                alt="MadeBySebi workspace"
                fill
                sizes="(max-width: 900px) 100vw, 50vw"
              />

              <div className="feature-media-overlay" />

              <div className="feature-media-tag">
                <span>02</span>
                THE WAY WE THINK
              </div>
            </div>

            <div className="about-feature-copy" data-reveal>
              <span className="about-mini-label">
                <span />
                OUR APPROACH
              </span>

              <h2>
                Start with the
                <br />
                business.
                <br />
                <em>Then design.</em>
              </h2>

              <p>
                Before choosing colours, motion or layouts, we get clear on the
                business, the audience and the action the experience needs to
                make easier.
              </p>

              <p>
                That clarity becomes the creative foundation for everything that
                follows — messaging, structure, visual direction, development
                and the final launch.
              </p>

              <Link href="/services">
                Explore our services
                <ArrowUpRight size={17} />
              </Link>
            </div>
          </div>
        </section>

        {/* =====================================================
            CAPABILITIES
        ===================================================== */}

        <section className="about-capabilities">
          <div className="about-capabilities-inner">
            <div className="capabilities-heading" data-reveal>
              <div className="about-section-label">
                <span>03</span>
                CAPABILITIES
              </div>

              <h2>
                What we bring
                <br />
                to the table.
              </h2>
            </div>

            <div className="capabilities-list">
              {capabilities.map((capability, index) => (
                <Link
                  className="capability-row"
                  href={capability.href}
                  key={capability.title}
                  data-reveal
                  aria-label={`Explore ${capability.title} services`}
                >
                  <span>{String(index + 1).padStart(2, "0")}</span>

                  <h3>{capability.title}</h3>

                  <span className="capability-action" aria-hidden="true">
                    <ArrowUpRight size={19} />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            TEAM
        ===================================================== */}

        <section className="about-team">
          <div className="about-team-inner">
            <div className="about-team-heading" data-reveal>
              <div className="about-team-heading-left">
                <div className="about-section-label">
                  <span>04</span>
                  OUR TEAM
                </div>

                <h2>
                  Our team.
                  <br />
                  Built to deliver.
                </h2>
              </div>

              <div className="about-team-heading-right">
                <p>
                  Three developers combining design, frontend engineering and
                  full-stack development to build thoughtful digital experiences
                  for businesses in Ghana and around the world.
                </p>
              </div>
            </div>

            <div className="about-team-grid">
              {teamMembers.map((member, index) => (
                <article
                  className="about-team-card"
                  key={member.name}
                  data-reveal
                >
                  <div className="about-team-photo">
                    <img
                      src={member.image}
                      alt={`${member.name} — ${member.role}`}
                      loading="lazy"
                      decoding="async"
                      className={member.imageClass}
                    />

                    <span className="about-team-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <div className="about-team-info">
                    <div className="about-team-copy">
                      <h3>{member.name}</h3>
                      <p>{member.role}</p>
                    </div>

                    <div className="about-team-actions">
                      {member.linkedin ? (
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="about-team-linkedin"
                          aria-label={`${member.name} LinkedIn profile`}
                        >
                          <Linkedin size={16} strokeWidth={2} />
                          <span>LinkedIn</span>
                          <ArrowUpRight size={13} strokeWidth={2} />
                        </a>
                      ) : (
                        <span className="about-team-action-space" />
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            FINAL CTA
        ===================================================== */}

        <section className="about-final">
          <div className="about-final-inner" data-reveal>
            <div className="about-final-glow" />

            <div className="about-final-copy">
              <span>READY WHEN YOU ARE</span>

              <h2>
                Let&apos;s build
                <br />
                something useful.
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

        <style jsx global>{`
          .about-page {
            overflow: hidden;
            background: #f4f4f1;
            color: #111;
          }

          [data-reveal] {
            opacity: 0;
            transform: translateY(35px);
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
          ===================================================== */

          .about-hero {
            position: relative;
            min-height: 1080px;
            overflow: hidden;
            padding: 145px 28px 90px;
          }

          .about-hero-inner {
            position: relative;
            z-index: 5;
            width: min(1350px, 100%);
            margin: 0 auto;
          }

          .about-badge,
          .about-mini-label {
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

          .about-badge > span,
          .about-mini-label > span {
            width: 8px;
            height: 8px;
            border-radius: 2px;
            background: #cefa74;
          }

          .about-hero h1 {
            max-width: 1170px;
            margin: 38px 0 0;
            font-size: clamp(62px, 7.5vw, 118px);
            font-weight: 650;
            line-height: 0.86;
            letter-spacing: -0.075em;
          }

          .about-hero-bottom {
            display: flex;
            align-items: flex-end;
            justify-content: space-between;
            gap: 50px;
            margin-top: 45px;
          }

          .about-hero-bottom p {
            max-width: 620px;
            margin: 0;
            color: #68615a;
            font-size: 16px;
            line-height: 1.6;
          }

          .about-hero-bottom a {
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

          .about-hero-bottom a svg {
            color: #cefa74;
          }

          /* =====================================================
             GLOW
          ===================================================== */

          .about-glow {
            position: absolute;
            border-radius: 50%;
            filter: blur(120px);
            pointer-events: none;
            animation: aboutGlow 8s ease-in-out infinite;
          }

          .about-glow-lime {
            top: 180px;
            left: -80px;
            width: 480px;
            height: 480px;
            background: rgba(206, 250, 116, 0.2);
          }

          .about-glow-blue {
            top: 300px;
            right: -100px;
            width: 500px;
            height: 500px;
            background: rgba(95, 126, 255, 0.15);
            animation-delay: -4s;
          }

          @keyframes aboutGlow {
            50% {
              transform: translate3d(35px, -25px, 0) scale(1.08);
            }
          }

          /* =====================================================
             HERO VISUAL
          ===================================================== */

          .about-hero-visual {
            position: relative;
            z-index: 4;
            width: min(1180px, 92%);
            height: 500px;
            margin: 80px auto 0;
          }

          .about-main-media {
            position: absolute;
            inset: 0 90px;
            overflow: hidden;
            border-radius: 30px;
            background: #ddd;
            box-shadow: 0 30px 80px rgba(0, 0, 0, 0.11);
          }

          .about-main-media video {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }

          .about-media-overlay {
            position: absolute;
            inset: 0;
            background: linear-gradient(
              180deg,
              rgba(0, 0, 0, 0.03),
              transparent 60%,
              rgba(0, 0, 0, 0.22)
            );
          }

          .about-media-label {
            position: absolute;
            bottom: 20px;
            left: 20px;
            z-index: 3;
            display: inline-flex;
            align-items: center;
            gap: 9px;
            border-radius: 999px;
            background: rgba(255, 255, 255, 0.86);
            padding: 10px 13px;
            font-family: ui-monospace, monospace;
            font-size: 8px;
            backdrop-filter: blur(15px);
          }

          .about-media-label > span {
            width: 8px;
            height: 8px;
            border-radius: 2px;
            background: #cefa74;
          }

          .about-floating-card {
            position: absolute;
            z-index: 6;
            display: flex;
            align-items: center;
            gap: 12px;
            border: 1px solid rgba(17, 17, 17, 0.1);
            border-radius: 15px;
            background: rgba(255, 255, 255, 0.9);
            padding: 11px 14px;
            box-shadow: 0 18px 45px rgba(0, 0, 0, 0.1);
            backdrop-filter: blur(15px);
            animation: aboutCardFloat 4.5s ease-in-out infinite;
          }

          .about-floating-one {
            top: 60px;
            left: 0;
          }

          .about-floating-two {
            top: 220px;
            right: 0;
            animation-delay: -1.5s;
          }

          .about-floating-three {
            bottom: 25px;
            left: 45px;
            animation-delay: -3s;
          }

          @keyframes aboutCardFloat {
            50% {
              transform: translateY(-14px);
            }
          }

          .about-floating-card > span:first-child {
            display: grid;
            width: 38px;
            height: 38px;
            place-items: center;
            border-radius: 11px;
            background: #cefa74;
            font-family: ui-monospace, monospace;
            font-size: 9px;
          }

          .about-floating-card > svg {
            width: 38px;
            height: 38px;
            border-radius: 11px;
            background: #cefa74;
            padding: 9px;
          }

          .about-floating-card > div {
            display: flex;
            min-width: 135px;
            flex-direction: column;
          }

          .about-floating-card small {
            color: #8b857f;
            font-family: ui-monospace, monospace;
            font-size: 6px;
            letter-spacing: 0.08em;
          }

          .about-floating-card strong {
            margin-top: 3px;
            font-size: 10px;
          }

          /* =====================================================
             MARQUEE
          ===================================================== */

          .about-marquee {
            overflow: hidden;
            border-top: 1px solid #d1cec7;
            border-bottom: 1px solid #d1cec7;
            background: #e8e6df;
          }

          .about-marquee-track {
            display: flex;
            width: max-content;
            animation: aboutMarquee 26s linear infinite;
          }

          .about-marquee-item {
            display: flex;
            height: 70px;
            align-items: center;
            gap: 17px;
            padding: 0 25px;
            white-space: nowrap;
            font-size: 14px;
          }

          .about-marquee-item > span {
            width: 9px;
            height: 9px;
            border-radius: 2px;
            background: #cefa74;
          }

          .about-marquee-item i {
            color: #9b958e;
            font-style: normal;
          }

          @keyframes aboutMarquee {
            to {
              transform: translateX(-50%);
            }
          }

          /* =====================================================
             STORY
          ===================================================== */

          .about-story {
            padding: 96px 28px 56px;
          }

          .about-story-inner {
            display: grid;
            width: min(1350px, 100%);
            margin: 0 auto;
            grid-template-columns: 0.35fr 1fr;
            gap: 70px;
          }

          .about-section-label {
            display: flex;
            gap: 17px;
            padding-top: 10px;
            color: #77716b;
            font-family: ui-monospace, monospace;
            font-size: 9px;
            letter-spacing: 0.12em;
          }

          .about-section-label > span {
            color: #9aac00;
          }

          .about-story h2 {
            margin: 0;
            font-size: clamp(60px, 7vw, 105px);
            font-weight: 600;
            line-height: 0.88;
            letter-spacing: -0.07em;
          }

          .about-story-text {
            display: grid;
            max-width: 850px;
            margin-top: 45px;
            grid-template-columns: 1fr 1fr;
            gap: 45px;
          }

          .about-story-text p {
            margin: 0;
            color: #68615b;
            font-size: 14px;
            line-height: 1.75;
          }

          /* =====================================================
             FEATURE
          ===================================================== */

          .about-feature {
            padding: 0 28px 64px;
          }

          .about-feature-inner {
            display: grid;
            width: min(1350px, 100%);
            margin: 0 auto;
            grid-template-columns: 1fr 1fr;
            overflow: hidden;
            border: 1px solid #d5d2ca;
            border-radius: 32px;
            background: #ebe9e3;
          }

          .about-feature-media {
            position: relative;
            min-height: 680px;
            overflow: hidden;
          }

          .about-feature-media img {
            object-fit: cover;
            transition: transform 0.9s ease;
          }

          .about-feature-inner:hover .about-feature-media img {
            transform: scale(1.04);
          }

          .feature-media-overlay {
            position: absolute;
            inset: 0;
            z-index: 1;
            background: linear-gradient(
              180deg,
              transparent 50%,
              rgba(0, 0, 0, 0.18)
            );
            pointer-events: none;
          }

          .feature-media-tag {
            position: absolute;
            z-index: 2;
            bottom: 22px;
            left: 22px;
            display: flex;
            align-items: center;
            gap: 12px;
            border-radius: 999px;
            background: rgba(255, 255, 255, 0.88);
            padding: 10px 13px;
            font-family: ui-monospace, monospace;
            font-size: 8px;
            backdrop-filter: blur(15px);
          }

          .feature-media-tag span {
            display: grid;
            width: 29px;
            height: 29px;
            place-items: center;
            border-radius: 50%;
            background: #cefa74;
          }

          .about-feature-copy {
            display: flex;
            justify-content: center;
            padding: 70px;
            flex-direction: column;
          }

          .about-feature-copy h2 {
            margin: 35px 0 0;
            font-size: clamp(54px, 5.6vw, 88px);
            font-weight: 600;
            line-height: 0.9;
            letter-spacing: -0.065em;
          }

          .about-feature-copy h2 em {
            color: #79736d;
            font-family: serif;
            font-weight: 400;
          }

          .about-feature-copy p {
            max-width: 520px;
            margin: 25px 0 0;
            color: #69635d;
            font-size: 13px;
            line-height: 1.7;
          }

          .about-feature-copy > a {
            display: inline-flex;
            align-self: flex-start;
            align-items: center;
            gap: 28px;
            margin-top: 35px;
            border-radius: 999px;
            background: #111;
            padding: 14px 18px 14px 22px;
            color: white;
            font-size: 11px;
            text-decoration: none;
          }

          .about-feature-copy > a svg {
            color: #cefa74;
          }

          /* =====================================================
             CAPABILITIES
          ===================================================== */

          .about-capabilities {
            padding: 64px 28px;
          }

          .about-capabilities-inner {
            display: grid;
            width: min(1350px, 100%);
            margin: 0 auto;
            grid-template-columns: 0.7fr 1.3fr;
            gap: 90px;
          }

          .capabilities-heading h2 {
            margin: 35px 0 0;
            font-size: clamp(53px, 5.8vw, 90px);
            font-weight: 600;
            line-height: 0.9;
            letter-spacing: -0.065em;
          }

          .capabilities-list {
            border-top: 1px solid #d2cfc8;
          }

          .capability-row {
            display: grid;
            min-height: 90px;
            grid-template-columns: 80px 1fr auto;
            align-items: center;
            border-bottom: 1px solid #d2cfc8;
            color: inherit;
            text-decoration: none;
            cursor: pointer;
            transition: padding 0.3s ease;
          }

          .capability-row:hover {
            padding-right: 8px;
            padding-left: 8px;
          }

          .capability-action {
            display: grid;
            width: 38px;
            height: 38px;
            place-items: center;
            border: 1px solid transparent;
            border-radius: 50%;
            transition:
              transform 0.3s ease,
              background 0.3s ease,
              border-color 0.3s ease;
          }

          .capability-row:hover .capability-action {
            border-color: #d2cfc8;
            background: rgba(255, 255, 255, 0.6);
            transform: translate(2px, -2px);
          }

          .capability-row > span {
            color: #8a847e;
            font-family: ui-monospace, monospace;
            font-size: 9px;
          }

          .capability-row h3 {
            margin: 0;
            font-size: clamp(25px, 2.2vw, 35px);
            font-weight: 500;
            letter-spacing: -0.035em;
          }

          /* =====================================================
             TEAM
          ===================================================== */

          .about-team {
            padding: 48px 28px 72px;
          }

          .about-team-inner {
            width: min(1350px, 100%);
            margin: 0 auto;
          }

          .about-team-heading {
            display: grid;
            grid-template-columns: 0.9fr 1.1fr;
            gap: 70px;
            align-items: start;
            margin-bottom: 48px;
          }

          .about-team-heading-left {
            min-width: 0;
          }

          .about-team-heading-left h2 {
            max-width: 620px;
            margin: 28px 0 0;
            font-size: clamp(52px, 5vw, 78px);
            font-weight: 600;
            line-height: 0.92;
            letter-spacing: -0.06em;
          }

          .about-team-heading-right {
            display: flex;
            align-items: flex-start;
            padding-top: 62px;
          }

          .about-team-heading-right p {
            max-width: 560px;
            margin: 0;
            color: #6e6963;
            font-size: 15px;
            line-height: 1.7;
          }

          .about-team-grid {
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            align-items: start;
            gap: 18px;
          }

          .about-team-card {
            display: flex;
            min-width: 0;
            flex-direction: column;
          }

          .about-team-photo {
            position: relative;
            width: 100%;
            height: 390px;
            overflow: hidden;
            border: 1px solid #d7d3cb;
            border-radius: 24px;
            background: #e9e7e1;
          }

          .about-team-photo img {
            position: absolute;
            inset: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition:
              transform 0.7s cubic-bezier(0.22, 1, 0.36, 1),
              filter 0.35s ease;
          }

          .about-team-photo img.team-image-francis {
            object-position: center 35%;
          }

          .about-team-photo img.team-image-enoch {
            object-position: center 32%;
          }

          .about-team-photo img.team-image-bernard {
            object-position: center 42%;
            filter: saturate(0.86);
          }

          .about-team-card:hover .about-team-photo img {
            transform: scale(1.025);
          }

          .about-team-photo::after {
            content: "";
            position: absolute;
            inset: auto 0 0;
            height: 18%;
            background: linear-gradient(
              to top,
              rgba(0, 0, 0, 0.12),
              transparent
            );
            pointer-events: none;
          }

          .about-team-number {
            position: absolute;
            z-index: 2;
            top: 16px;
            right: 16px;
            display: grid;
            width: 34px;
            height: 34px;
            place-items: center;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.94);
            color: #111;
            font-family: ui-monospace, monospace;
            font-size: 8px;
            letter-spacing: 0.08em;
            backdrop-filter: blur(10px);
          }

          .about-team-info {
            display: flex;
            min-height: 150px;
            padding: 22px 4px 0;
            flex-direction: column;
          }

          .about-team-copy {
            min-width: 0;
          }

          .about-team-copy h3 {
            margin: 0;
            font-size: clamp(24px, 1.9vw, 30px);
            font-weight: 550;
            line-height: 1.08;
            letter-spacing: -0.04em;
          }

          .about-team-copy p {
            margin: 10px 0 0;
            color: #77716b;
            font-size: 13px;
            line-height: 1.5;
          }

          .about-team-actions {
            display: flex;
            min-height: 42px;
            align-items: flex-end;
            margin-top: 18px;
          }

          .about-team-action-space {
            display: block;
            min-height: 40px;
          }

          .about-team-linkedin {
            display: inline-flex;
            height: 40px;
            align-items: center;
            gap: 7px;
            border: 1px solid #d2cfc8;
            border-radius: 999px;
            background: rgba(255, 255, 255, 0.55);
            padding: 0 14px;
            color: #111;
            font-size: 11px;
            font-weight: 600;
            text-decoration: none;
            transition:
              transform 0.25s ease,
              background 0.25s ease,
              border-color 0.25s ease;
          }

          .about-team-linkedin:hover {
            border-color: #cefa74;
            background: #cefa74;
            transform: translateY(-2px);
          }

          /* =====================================================
             FINAL
          ===================================================== */

          .about-final {
            padding: 24px 28px 56px;
          }

          .about-final-inner {
            position: relative;
            display: flex;
            width: min(1350px, 100%);
            min-height: 520px;
            margin: 0 auto;
            align-items: flex-end;
            justify-content: space-between;
            gap: 50px;
            overflow: hidden;
            border-radius: 34px;
            background: #dedbd3;
            padding: 60px;
          }

          .about-final-glow {
            position: absolute;
            top: -130px;
            right: 4%;
            width: 490px;
            height: 490px;
            border-radius: 50%;
            background: rgba(206, 250, 116, 0.78);
            filter: blur(100px);
          }

          .about-final-copy {
            position: relative;
            z-index: 3;
          }

          .about-final-copy > span {
            font-family: ui-monospace, monospace;
            font-size: 8px;
            letter-spacing: 0.14em;
          }

          .about-final h2 {
            margin: 25px 0 0;
            font-size: clamp(65px, 7vw, 108px);
            font-weight: 600;
            line-height: 0.86;
            letter-spacing: -0.07em;
          }

          .about-final-inner > a {
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

          .about-final-inner > a > span {
            display: grid;
            width: 54px;
            height: 54px;
            place-items: center;
            border-radius: 50%;
            background: #cefa74;
            color: #111;
            transition: transform 0.3s ease;
          }

          .about-final-inner > a:hover > span {
            transform: rotate(45deg);
          }

          /* =====================================================
             TABLET
          ===================================================== */

          @media (max-width: 900px) {
            .about-hero {
              min-height: auto;
              padding-top: 125px;
            }

            .about-hero-bottom {
              align-items: flex-start;
              flex-direction: column;
            }

            .about-hero-visual {
              width: 100%;
            }

            .about-main-media {
              inset: 0 40px;
            }

            .about-story-inner {
              grid-template-columns: 1fr;
              gap: 30px;
            }

            .about-feature-inner {
              grid-template-columns: 1fr;
            }

            .about-feature-media {
              min-height: 550px;
            }

            .about-capabilities-inner {
              grid-template-columns: 1fr;
            }

            .about-team {
              padding: 48px 28px 72px;
            }

            .about-team-heading {
              grid-template-columns: 1fr;
              gap: 24px;
              margin-bottom: 48px;
            }

            .about-team-heading-left {
              max-width: 680px;
            }

            .about-team-heading-left h2 {
              max-width: 620px;
              margin-top: 25px;
              font-size: clamp(50px, 8vw, 72px);
              line-height: 0.92;
            }

            .about-team-heading-right {
              padding-top: 0;
              padding-bottom: 0;
            }

            .about-team-heading-right p {
              max-width: 600px;
              font-size: 14px;
              line-height: 1.7;
            }

            .about-team-grid {
              grid-template-columns: repeat(2, minmax(0, 1fr));
              gap: 40px 20px;
            }

            .about-team-photo {
              height: 390px;
              border-radius: 22px;
            }

            .about-team-photo img.team-image-francis {
              object-position: center 35%;
            }

            .about-team-photo img.team-image-enoch {
              object-position: center 32%;
            }

            .about-team-photo img.team-image-bernard {
              object-position: center 42%;
            }

            .about-team-info {
              min-height: 145px;
              padding-top: 18px;
            }

            .about-team-copy h3 {
              font-size: 27px;
            }

            .about-team-copy p {
              font-size: 13px;
            }

            .about-team-actions {
              margin-top: 15px;
            }

            .about-team-linkedin {
              height: 39px;
              padding: 0 13px;
            }

            .about-final-inner {
              align-items: flex-start;
              flex-direction: column;
              justify-content: flex-end;
            }
          }

          /* =====================================================
             MOBILE
          ===================================================== */

          @media (max-width: 600px) {
            .about-hero {
              padding: 100px 14px 70px;
            }

            .about-badge {
              padding: 6px 9px;
              font-size: 7px;
            }

            .about-hero h1 {
              margin-top: 30px;
              font-size: 42px;
              line-height: 1.04;
            }

            .about-hero-bottom {
              margin-top: 30px;
            }

            .about-hero-bottom p {
              font-size: 14px;
            }

            .about-hero-visual {
              height: 320px;
              margin-top: 55px;
            }

            .about-main-media {
              inset: 0;
              border-radius: 20px;
            }

            .about-floating-card {
              padding: 8px;
            }

            .about-floating-one {
              top: 25px;
              left: -5px;
            }

            .about-floating-two {
              top: 140px;
              right: -5px;
            }

            .about-floating-three {
              bottom: 8px;
              left: 10px;
            }

            .about-floating-card > div {
              min-width: 90px;
            }

            .about-floating-card strong {
              font-size: 8px;
            }

            .about-marquee-item {
              height: 62px;
              padding: 0 20px;
              font-size: 12px;
            }

            .about-story {
              padding: 85px 14px;
            }

            .about-story h2 {
              font-size: 51px;
            }

            .about-story-text {
              grid-template-columns: 1fr;
              gap: 25px;
            }

            .about-feature {
              padding: 0 12px 90px;
            }

            .about-feature-inner {
              border-radius: 22px;
            }

            .about-feature-media {
              min-height: 390px;
            }

            .about-feature-copy {
              padding: 45px 23px;
            }

            .about-feature-copy h2 {
              font-size: 47px;
            }

            .about-capabilities {
              padding: 90px 14px;
            }

            .capabilities-heading h2 {
              font-size: 49px;
            }

            .capability-row {
              grid-template-columns: 50px 1fr auto;
            }

            .capability-row h3 {
              font-size: 23px;
            }

            .about-team {
              padding: 60px 14px 90px;
            }

            .about-team-heading {
              grid-template-columns: 1fr;
              gap: 20px;
              margin-bottom: 36px;
            }

            .about-team-heading-left {
              max-width: 100%;
            }

            .about-team-heading-left h2 {
              max-width: 100%;
              margin-top: 22px;
              font-size: 48px;
              line-height: 0.94;
              letter-spacing: -0.055em;
            }

            .about-team-heading-right {
              padding: 0;
            }

            .about-team-heading-right p {
              max-width: 100%;
              margin: 0;
              font-size: 14px;
              line-height: 1.65;
            }

            .about-team-grid {
              grid-template-columns: 1fr;
              gap: 42px;
            }

            .about-team-card {
              width: 100%;
            }

            .about-team-photo {
              width: 100%;
              height: 380px;
              border-radius: 22px;
            }

            .about-team-photo img.team-image-francis {
              object-position: center 35%;
            }

            .about-team-photo img.team-image-enoch {
              object-position: center 32%;
            }

            .about-team-photo img.team-image-bernard {
              object-position: center 40%;
            }

            .about-team-number {
              top: 14px;
              right: 14px;
              width: 32px;
              height: 32px;
              font-size: 7px;
            }

            .about-team-info {
              min-height: auto;
              padding: 17px 2px 0;
            }

            .about-team-copy h3 {
              font-size: 27px;
              line-height: 1.05;
            }

            .about-team-copy p {
              margin-top: 8px;
              font-size: 13px;
            }

            .about-team-actions {
              min-height: auto;
              margin-top: 14px;
            }

            .about-team-linkedin {
              height: 38px;
              padding: 0 13px;
              font-size: 11px;
            }

            .about-final {
              padding: 20px 12px 50px;
            }

            .about-final-inner {
              min-height: 470px;
              border-radius: 22px;
              padding: 28px 22px;
            }

            .about-final h2 {
              font-size: 53px;
            }

            .about-final-inner > a {
              width: 100%;
              justify-content: space-between;
            }
          }

          @media (prefers-reduced-motion: reduce) {
            .about-glow,
            .about-floating-card,
            .about-marquee-track {
              animation: none !important;
            }

            [data-reveal] {
              opacity: 1;
              transform: none;
            }
          }
        `}</style>
      </main>

      <FooterSection />
    </>
  );
}
