"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";

import {
  ArrowRight,
  ArrowUpRight,
  Code2,
  Compass,
  Globe2,
  Layers3,
  Palette,
  Rocket,
  Sparkles,
  Target,
} from "lucide-react";

const values = [
  {
    number: "01",
    title: "Clarity first",
    description:
      "Good digital experiences should make businesses easier to understand, not more complicated.",
    icon: Compass,
    color: "#d9ff25",
  },
  {
    number: "02",
    title: "Design with purpose",
    description:
      "We care about how things look, but every visual decision should support a real business goal.",
    icon: Palette,
    color: "#b8a7ff",
  },
  {
    number: "03",
    title: "Build properly",
    description:
      "Fast, responsive and thoughtful development matters just as much as the visual design.",
    icon: Code2,
    color: "#78a8ff",
  },
  {
    number: "04",
    title: "Think beyond launch",
    description:
      "A website should continue supporting the business long after the first version goes live.",
    icon: Rocket,
    color: "#ff815c",
  },
];

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
              ABOUT NUMO DIGITAL
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
                Numo Digital is a web design and development studio focused on
                helping growing businesses look credible, communicate clearly
                and create better digital experiences.
              </p>

              <Link href="/contact">
                Start a project
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>

          {/* =================================================
              HERO VISUAL
          ================================================= */}

          <div className="about-hero-visual" data-reveal>
            <div className="about-main-media">
              <video
                autoPlay
                muted
                loop
                playsInline
                poster="/showcase/creative-workspace.jpg"
              >
                <source src="/expertise/0001.mp4" type="video/mp4" />
              </video>

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
                <strong>Ghana · Working globally</strong>
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
                <small>NUMO DIGITAL</small>
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
              <div className="about-marquee-item" key={`${item.title}-${index}`}>
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
                Small studio.
                <br />
                Serious work.
              </h2>

              <div className="about-story-text" data-reveal>
                <p>
                  We started Numo Digital with a simple idea: businesses should
                  not need a huge agency to get a website that looks
                  professional and actually works.
                </p>

                <p>
                  We bring strategy, design and development together so each
                  project feels consistent from the first conversation to the
                  final launch.
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
                alt="Numo Digital workspace"
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
                Before thinking about colours, animations or layouts, we first
                understand what the business is trying to achieve and what
                customers need to understand.
              </p>

              <p>
                That gives us a stronger foundation for everything that comes
                next — structure, messaging, design, development and launch.
              </p>

              <Link href="/services">
                Explore our services
                <ArrowUpRight size={17} />
              </Link>
            </div>
          </div>
        </section>

        {/* =====================================================
            VALUES
        ===================================================== */}

        <section className="about-values">
          <div className="about-values-inner">
            <div className="values-heading" data-reveal>
              <span className="about-section-label">
                <span>03</span>
                WHAT MATTERS
              </span>

              <h2>
                The principles behind
                <br />
                everything we build.
              </h2>
            </div>

            <div className="values-grid">
              {values.map((value) => {
                const Icon = value.icon;

                return (
                  <article
                    className="value-card"
                    key={value.number}
                    data-reveal
                    style={
                      {
                        "--value-color": value.color,
                      } as React.CSSProperties
                    }
                  >
                    <div className="value-top">
                      <span>{value.number}</span>

                      <div className="value-icon">
                        <Icon size={21} strokeWidth={1.7} />
                      </div>
                    </div>

                    <div>
                      <h3>{value.title}</h3>
                      <p>{value.description}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* =====================================================
            DARK PHILOSOPHY
        ===================================================== */}

        <section className="about-philosophy">
          <div className="about-philosophy-inner" data-reveal>
            <div className="philosophy-copy">
              <span className="dark-about-label">
                <span />
                OUR PHILOSOPHY
              </span>

              <h2>
                Make it clear.
                <br />
                Make it useful.
                <br />
                <span>Make it memorable.</span>
              </h2>

              <p>
                The best websites are not the ones with the most effects. They
                are the ones that make people understand the business, trust it
                and know what to do next.
              </p>
            </div>

            <div className="philosophy-system">
              <div className="philosophy-ring philosophy-ring-one" />
              <div className="philosophy-ring philosophy-ring-two" />
              <div className="philosophy-ring philosophy-ring-three" />

              <div className="philosophy-center">
                <strong>numo</strong>
                <small>DIGITAL</small>
              </div>

              <div className="philosophy-node node-strategy">
                <Compass size={17} />
                STRATEGY
              </div>

              <div className="philosophy-node node-design">
                <Palette size={17} />
                DESIGN
              </div>

              <div className="philosophy-node node-build">
                <Code2 size={17} />
                BUILD
              </div>

              <div className="philosophy-node node-growth">
                <Globe2 size={17} />
                GROWTH
              </div>
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
                <span>04</span>
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
            VISUAL COLLAGE
        ===================================================== */}

        <section className="about-collage">
          <div className="about-collage-inner">
            <div className="collage-card collage-large" data-reveal>
              <Image
                src="/showcase/creative-workspace.jpg"
                alt="Creative digital work"
                fill
                sizes="(max-width: 900px) 100vw, 60vw"
              />

              <div className="collage-overlay" />

              <span>Design with purpose.</span>
            </div>

            <div className="collage-right">
              <div className="collage-card collage-small" data-reveal>
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  poster="/expertise/tech-websites.png"
                >
                  <source src="/expertise/tech-websites.mp4" type="video/mp4" />
                </video>

                <div className="collage-overlay" />

                <span>Built to perform.</span>
              </div>

              <div className="collage-message" data-reveal>
                <div className="collage-message-top">
                  <span>NUMO DIGITAL</span>
                  <span>2026</span>
                </div>

                <h3>
                  Good digital
                  <br />
                  work should make
                  <br />
                  business easier.
                </h3>

                <Link href="/work">
                  View our work
                  <ArrowUpRight size={17} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            FINAL STATEMENT
        ===================================================== */}

        <section className="about-statement">
          <div className="about-statement-inner">
            <span data-reveal>WHY NUMO DIGITAL</span>

            <h2 data-reveal>
              We care about the
              <br />
              details because your
              <br />
              <em>customers notice them.</em>
            </h2>

            <div className="statement-bottom" data-reveal>
              <p>
                From the first headline to mobile performance, every part of the
                experience contributes to how people perceive your business.
              </p>

              <Link href="/contact">
                Let&apos;s work together
                <ArrowUpRight size={17} />
              </Link>
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

        {/* =====================================================
            STYLES
        ===================================================== */}

        <style jsx global>{`
          /* =====================================================
             GLOBAL
          ===================================================== */

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
            background: #d9ff25;
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
            color: #d9ff25;
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
            background: rgba(217, 255, 37, 0.2);
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
            background: #d9ff25;
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
            background: #d9ff25;
            font-family: ui-monospace, monospace;
            font-size: 9px;
          }

          .about-floating-card > svg {
            width: 38px;
            height: 38px;
            border-radius: 11px;
            background: #d9ff25;
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
            background: #d9ff25;
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
            padding: 140px 28px;
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
            padding: 0 28px 130px;
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
            background: linear-gradient(
              180deg,
              transparent 50%,
              rgba(0, 0, 0, 0.18)
            );
          }

          .feature-media-tag {
            position: absolute;
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
            background: #d9ff25;
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
            color: #d9ff25;
          }

          /* =====================================================
             VALUES
          ===================================================== */

          .about-values {
            padding: 120px 28px 140px;
          }

          .about-values-inner {
            width: min(1350px, 100%);
            margin: 0 auto;
          }

          .values-heading {
            margin-bottom: 70px;
          }

          .values-heading h2 {
            margin: 30px 0 0;
            font-size: clamp(53px, 6vw, 90px);
            font-weight: 600;
            line-height: 0.91;
            letter-spacing: -0.065em;
          }

          .values-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 12px;
          }

          .value-card {
            display: flex;
            min-height: 390px;
            padding: 25px;
            flex-direction: column;
            justify-content: space-between;
            border: 1px solid #d5d2cb;
            border-radius: 25px;
            background: #eeece7;
            transition:
              transform 0.35s ease,
              background 0.35s ease;
          }

          .value-card:hover {
            background: #f8f7f4;
            transform: translateY(-6px);
          }

          .value-top {
            display: flex;
            align-items: center;
            justify-content: space-between;
          }

          .value-top > span {
            font-family: ui-monospace, monospace;
            font-size: 9px;
          }

          .value-icon {
            display: grid;
            width: 48px;
            height: 48px;
            place-items: center;
            border-radius: 14px;
            background: var(--value-color);
          }

          .value-card h3 {
            margin: 0;
            font-size: 29px;
            letter-spacing: -0.04em;
          }

          .value-card p {
            margin: 15px 0 0;
            color: #6c665f;
            font-size: 12px;
            line-height: 1.6;
          }

          /* =====================================================
             PHILOSOPHY
          ===================================================== */

          .about-philosophy {
            padding: 28px;
          }

          .about-philosophy-inner {
            display: grid;
            width: min(1350px, 100%);
            min-height: 700px;
            margin: 0 auto;
            grid-template-columns: 1fr 1fr;
            overflow: hidden;
            border-radius: 34px;
            background: #111;
            color: white;
          }

          .philosophy-copy {
            display: flex;
            justify-content: center;
            padding: 70px;
            flex-direction: column;
          }

          .dark-about-label {
            display: inline-flex;
            align-self: flex-start;
            align-items: center;
            gap: 9px;
            border: 1px solid rgba(255, 255, 255, 0.17);
            border-radius: 6px;
            padding: 8px 11px;
            color: rgba(255, 255, 255, 0.6);
            font-family: ui-monospace, monospace;
            font-size: 8px;
            letter-spacing: 0.12em;
          }

          .dark-about-label > span {
            width: 8px;
            height: 8px;
            border-radius: 2px;
            background: #d9ff25;
          }

          .philosophy-copy h2 {
            margin: 35px 0 0;
            font-size: clamp(54px, 5.7vw, 90px);
            font-weight: 600;
            line-height: 0.9;
            letter-spacing: -0.065em;
          }

          .philosophy-copy h2 span {
            color: #d9ff25;
          }

          .philosophy-copy p {
            max-width: 500px;
            margin: 30px 0 0;
            color: rgba(255, 255, 255, 0.55);
            font-size: 14px;
            line-height: 1.65;
          }

          .philosophy-system {
            position: relative;
            overflow: hidden;
          }

          .philosophy-ring {
            position: absolute;
            top: 50%;
            left: 50%;
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 50%;
            transform: translate(-50%, -50%);
          }

          .philosophy-ring-one {
            width: 230px;
            height: 230px;
          }

          .philosophy-ring-two {
            width: 420px;
            height: 420px;
          }

          .philosophy-ring-three {
            width: 620px;
            height: 620px;
          }

          .philosophy-center {
            position: absolute;
            top: 50%;
            left: 50%;
            display: flex;
            width: 125px;
            height: 125px;
            align-items: center;
            justify-content: center;
            border-radius: 30px;
            background: #d9ff25;
            color: #111;
            flex-direction: column;
            transform: translate(-50%, -50%);
            animation: aboutPulse 4s ease-in-out infinite;
          }

          .philosophy-center strong {
            font-size: 25px;
          }

          .philosophy-center small {
            font-family: ui-monospace, monospace;
            font-size: 6px;
            letter-spacing: 0.13em;
          }

          @keyframes aboutPulse {
            50% {
              transform: translate(-50%, -50%) scale(1.07);
            }
          }

          .philosophy-node {
            position: absolute;
            display: flex;
            align-items: center;
            gap: 8px;
            border: 1px solid rgba(255, 255, 255, 0.14);
            border-radius: 999px;
            background: rgba(255, 255, 255, 0.08);
            padding: 11px 14px;
            font-family: ui-monospace, monospace;
            font-size: 8px;
            backdrop-filter: blur(10px);
            animation: aboutNodeFloat 5s ease-in-out infinite;
          }

          .node-strategy {
            top: 20%;
            left: 14%;
          }

          .node-design {
            top: 24%;
            right: 14%;
            animation-delay: -1.3s;
          }

          .node-build {
            bottom: 20%;
            left: 19%;
            animation-delay: -2.5s;
          }

          .node-growth {
            right: 16%;
            bottom: 22%;
            animation-delay: -3.7s;
          }

          @keyframes aboutNodeFloat {
            50% {
              transform: translateY(-13px);
            }
          }

          /* =====================================================
             CAPABILITIES
          ===================================================== */

          .about-capabilities {
            padding: 150px 28px;
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
            color: inherit;
            text-decoration: none;
            cursor: pointer;
            min-height: 90px;
            grid-template-columns: 80px 1fr auto;
            align-items: center;
            border-bottom: 1px solid #d2cfc8;
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
             COLLAGE
          ===================================================== */

          .about-collage {
            padding: 0 28px 140px;
          }

          .about-collage-inner {
            display: grid;
            width: min(1350px, 100%);
            margin: 0 auto;
            grid-template-columns: 1.3fr 0.7fr;
            gap: 15px;
          }

          .collage-card {
            position: relative;
            overflow: hidden;
            border-radius: 28px;
          }

          .collage-large {
            min-height: 720px;
          }

          .collage-small {
            min-height: 350px;
          }

          .collage-card img,
          .collage-card video {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }

          .collage-card img {
            object-fit: cover;
          }

          .collage-overlay {
            position: absolute;
            inset: 0;
            background: linear-gradient(
              180deg,
              transparent 60%,
              rgba(0, 0, 0, 0.35)
            );
          }

          .collage-card > span {
            position: absolute;
            bottom: 25px;
            left: 25px;
            z-index: 3;
            color: white;
            font-size: 19px;
            font-weight: 600;
          }

          .collage-right {
            display: grid;
            grid-template-rows: 1fr 1fr;
            gap: 15px;
          }

          .collage-message {
            display: flex;
            min-height: 355px;
            padding: 28px;
            flex-direction: column;
            justify-content: space-between;
            border-radius: 28px;
            background: #d9ff25;
          }

          .collage-message-top {
            display: flex;
            justify-content: space-between;
            font-family: ui-monospace, monospace;
            font-size: 8px;
          }

          .collage-message h3 {
            margin: auto 0 0;
            font-size: clamp(35px, 3.4vw, 51px);
            font-weight: 600;
            line-height: 0.94;
            letter-spacing: -0.055em;
          }

          .collage-message a {
            display: inline-flex;
            align-self: flex-start;
            align-items: center;
            gap: 25px;
            margin-top: 25px;
            border-radius: 999px;
            background: #111;
            padding: 13px 17px;
            color: white;
            font-size: 10px;
            text-decoration: none;
          }

          /* =====================================================
             STATEMENT
          ===================================================== */

          .about-statement {
            padding: 130px 28px 160px;
          }

          .about-statement-inner {
            width: min(1350px, 100%);
            margin: 0 auto;
          }

          .about-statement-inner > span {
            font-family: ui-monospace, monospace;
            font-size: 9px;
            letter-spacing: 0.15em;
          }

          .about-statement h2 {
            margin: 35px 0 0;
            font-size: clamp(65px, 8vw, 125px);
            font-weight: 600;
            line-height: 0.85;
            letter-spacing: -0.075em;
          }

          .about-statement h2 em {
            color: #827b74;
            font-family: serif;
            font-weight: 400;
          }

          .statement-bottom {
            display: flex;
            align-items: flex-end;
            justify-content: space-between;
            gap: 50px;
            margin-top: 60px;
          }

          .statement-bottom p {
            max-width: 600px;
            margin: 0;
            color: #68615b;
            font-size: 15px;
            line-height: 1.65;
          }

          .statement-bottom a {
            display: inline-flex;
            align-items: center;
            gap: 25px;
            border-radius: 999px;
            background: #111;
            padding: 15px 20px 15px 25px;
            color: white;
            font-size: 12px;
            text-decoration: none;
          }

          .statement-bottom a svg {
            color: #d9ff25;
          }

          /* =====================================================
             FINAL
          ===================================================== */

          .about-final {
            padding: 30px 28px 70px;
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
            background: rgba(217, 255, 37, 0.78);
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
            background: #d9ff25;
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

            .values-grid {
              grid-template-columns: 1fr 1fr;
            }

            .about-philosophy-inner {
              grid-template-columns: 1fr;
            }

            .philosophy-system {
              min-height: 540px;
            }

            .about-capabilities-inner {
              grid-template-columns: 1fr;
            }

            .about-collage-inner {
              grid-template-columns: 1fr;
            }

            .collage-large {
              min-height: 550px;
            }

            .statement-bottom {
              align-items: flex-start;
              flex-direction: column;
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
              font-size: 50px;
              line-height: 0.9;
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

            .about-values {
              padding: 80px 12px 90px;
            }

            .values-heading h2 {
              font-size: 47px;
            }

            .values-grid {
              grid-template-columns: 1fr;
            }

            .value-card {
              min-height: 300px;
              border-radius: 20px;
            }

            .about-philosophy {
              padding: 12px;
            }

            .about-philosophy-inner {
              border-radius: 22px;
            }

            .philosophy-copy {
              padding: 50px 24px;
            }

            .philosophy-copy h2 {
              font-size: 48px;
            }

            .philosophy-system {
              min-height: 420px;
            }

            .philosophy-ring-one {
              width: 170px;
              height: 170px;
            }

            .philosophy-ring-two {
              width: 280px;
              height: 280px;
            }

            .philosophy-ring-three {
              width: 390px;
              height: 390px;
            }

            .philosophy-center {
              width: 95px;
              height: 95px;
            }

            .philosophy-node {
              padding: 8px 10px;
              font-size: 7px;
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

            .about-collage {
              padding: 0 12px 90px;
            }

            .collage-large {
              min-height: 430px;
            }

            .collage-small {
              min-height: 300px;
            }

            .collage-message {
              min-height: 330px;
              border-radius: 20px;
              padding: 22px;
            }

            .collage-message h3 {
              font-size: 38px;
            }

            .about-statement {
              padding: 90px 14px;
            }

            .about-statement h2 {
              font-size: 54px;
            }

            .statement-bottom {
              margin-top: 40px;
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
            .about-marquee-track,
            .philosophy-center,
            .philosophy-node {
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
