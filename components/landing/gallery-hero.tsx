"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowUpRight, Sparkles } from "lucide-react";

const heroCards = [
  {
    src: "/showcase/header-set/03-house.jpg",
    className: "numo-arc-card numo-arc-card-1",
  },
  {
    src: "/showcase/header-set/02-yellow.jpg",
    className: "numo-arc-card numo-arc-card-2",
  },
  {
    src: "/showcase/header-set/04-portrait.jpg",
    className: "numo-arc-card numo-arc-card-3",
  },
  {
    src: "/showcase/header-set/05-construction.jpg",
    className: "numo-arc-card numo-arc-card-4",
  },
  {
    src: "/showcase/header-set/06-ship.jpg",
    className: "numo-arc-card numo-arc-card-5",
  },
  {
    src: "/showcase/header-set/10-reference.webp",
    className: "numo-arc-card numo-arc-card-6",
  },
  {
    src: "/showcase/header-set/11-water-portrait.png",
    className: "numo-arc-card numo-arc-card-7 numo-arc-card-featured",
  },
  {
    src: "/showcase/header-set/09-prestige.webp",
    className: "numo-arc-card numo-arc-card-8",
  },
  {
    src: "/showcase/header-set/08-laptop.jpg",
    className: "numo-arc-card numo-arc-card-9",
  },
  {
    src: "/showcase/header-set/07-hair.webp",
    className: "numo-arc-card numo-arc-card-10",
  },
];

const desktopTabs = ["Web Design", "Development", "UI/UX", "Digital Products"];

const mobileTabs = ["Web Design", "UI/UX", "Digital Products"];

export function GalleryHero() {
  const [activeTab, setActiveTab] = useState("Web Design");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 620px)");

    const updateDevice = () => {
      setIsMobile(media.matches);
    };

    updateDevice();

    media.addEventListener("change", updateDevice);

    return () => {
      media.removeEventListener("change", updateDevice);
    };
  }, []);

  useEffect(() => {
    const availableTabs = isMobile ? mobileTabs : desktopTabs;

    if (!availableTabs.includes(activeTab)) {
      setActiveTab(availableTabs[0]);
    }

    const interval = window.setInterval(() => {
      setActiveTab((current) => {
        const currentIndex = availableTabs.indexOf(current);

        if (currentIndex === -1) {
          return availableTabs[0];
        }

        return availableTabs[(currentIndex + 1) % availableTabs.length];
      });
    }, 3000);

    return () => window.clearInterval(interval);
  }, [isMobile, activeTab]);

  return (
    <section className="numo-arc-hero">
      {/* BACKGROUND GLOW */}

      <div className="numo-hero-glow numo-hero-glow-one" />
      <div className="numo-hero-glow numo-hero-glow-two" />

      <div className="numo-arc-inner">
        {/* =====================================================
            SERVICES BAR
        ====================================================== */}

        <div className="numo-company-bar">
          {desktopTabs.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setActiveTab(item)}
              className={`numo-company-pill ${
                activeTab === item ? "active" : ""
              }`}
            >
              <span className="numo-company-dot" />

              <span className="numo-company-label">{item}</span>
            </button>
          ))}
        </div>

        {/* =====================================================
            IMAGE ARC
        ====================================================== */}

        <div className="numo-arc-images">
          {heroCards.map((card, index) => (
            <div key={`${card.src}-${index}`} className={card.className}>
              <div className="numo-card-inner">
                <Image
                  src={card.src}
                  alt=""
                  width={320}
                  height={320}
                  sizes="(max-width: 620px) 140px, 240px"
                  quality={75}
                  loading={card.className.includes("featured") ? "eager" : "lazy"}
                  fetchPriority={card.className.includes("featured") ? "high" : undefined}
                />
              </div>
            </div>
          ))}
        </div>

        {/* =====================================================
            CONTENT
        ====================================================== */}

        <div className="numo-arc-content">
          <span className="numo-content-eyebrow">
            <Sparkles size={12} />
            MADEBYSEBI
          </span>

          <h1>Design that moves business.</h1>

          <p>
            We design and build websites, web apps and digital experiences that
            make ambitious businesses feel clear, credible and ready to grow.
          </p>

          <div className="numo-arc-actions">
            <Link href="/contact" className="numo-arc-primary">
              <span>Start a project</span>

              <span className="numo-primary-arrow">
                <ArrowUpRight size={16} />
              </span>
            </Link>

            <Link href="/work" className="numo-arc-secondary">
              View our work
            </Link>
          </div>
        </div>
      </div>

      <style jsx global>{`
        /* =====================================================
           HERO
        ====================================================== */

        .numo-arc-hero {
          position: relative;
          width: 100%;
          max-width: 100%;
          overflow: hidden;

          background: linear-gradient(180deg, #f7f6f2 0%, #f2f1ec 100%);

          color: #081126;
          font-family: var(--font-instrument);

          isolation: isolate;
          box-sizing: border-box;
        }

        .numo-arc-inner {
          position: relative;

          z-index: 4;

          width: min(1440px, 100%);
          max-width: 100%;

          height: 730px;

          margin: 0 auto;

          overflow: hidden;
        }

        /* =====================================================
           BACKGROUND GLOW
        ====================================================== */

        .numo-hero-glow {
          position: absolute;

          z-index: 0;

          border-radius: 50%;

          filter: blur(110px);

          pointer-events: none;
        }

        .numo-hero-glow-one {
          top: 90px;
          left: 22%;

          width: 340px;
          height: 340px;

          background: rgba(206, 250, 116, 0.08);

          animation: numoGlowOne 10s ease-in-out infinite;
        }

        .numo-hero-glow-two {
          right: 16%;
          bottom: 70px;

          width: 320px;
          height: 320px;

          background: rgba(129, 146, 255, 0.055);

          animation: numoGlowTwo 12s ease-in-out infinite;
        }

        @keyframes numoGlowOne {
          0%,
          100% {
            transform: translate3d(0, 0, 0) scale(1);
          }

          50% {
            transform: translate3d(45px, 20px, 0) scale(1.12);
          }
        }

        @keyframes numoGlowTwo {
          0%,
          100% {
            transform: translate3d(0, 0, 0) scale(1);
          }

          50% {
            transform: translate3d(-35px, -25px, 0) scale(1.1);
          }
        }

        /* =====================================================
           DESKTOP SERVICE BAR
        ====================================================== */

        .numo-company-bar {
          position: absolute;

          top: 22px;
          left: 50%;

          z-index: 300;

          display: flex;

          align-items: center;
          justify-content: center;

          gap: 5px;

          padding: 7px;

          border: 1px solid #171717;

          border-radius: 20px;

          background: #050505;

          box-shadow:
            0 16px 38px rgba(0, 0, 0, 0.2),
            inset 0 1px 0 rgba(255, 255, 255, 0.05);

          transform: translateX(-50%);

          box-sizing: border-box;
        }

        .numo-company-pill {
          display: inline-flex;

          min-height: 45px;

          align-items: center;
          justify-content: center;

          gap: 8px;

          border: 0;

          border-radius: 14px;

          background: transparent;

          padding: 0 18px;

          color: rgba(255, 255, 255, 0.72);

          font-family: inherit;

          font-size: 13px;

          font-weight: 600;

          white-space: nowrap;

          cursor: pointer;

          transition:
            color 0.4s ease,
            background 0.4s ease,
            transform 0.4s ease,
            box-shadow 0.4s ease;
        }

        .numo-company-pill:hover {
          background: #151515;

          color: #ffffff;
        }

        .numo-company-dot {
          width: 7px;
          height: 7px;

          flex-shrink: 0;

          border-radius: 50%;

          background: #777777;

          transition:
            background 0.4s ease,
            transform 0.4s ease,
            box-shadow 0.4s ease;
        }

        .numo-company-pill.active {
          background: #191919;

          color: #ffffff;

          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.06),
            0 8px 20px rgba(0, 0, 0, 0.18);

          transform: scale(1.015);
        }

        .numo-company-pill.active .numo-company-dot {
          background: #cefa74;

          transform: scale(1.25);

          box-shadow: 0 0 12px rgba(206, 250, 116, 0.5);
        }

        /* =====================================================
           IMAGE ARC
        ====================================================== */

        .numo-arc-images {
          position: absolute;

          top: 96px;
          left: 50%;

          width: 1080px;
          height: 360px;

          transform: translateX(-50%);

          transform-origin: top center;

          pointer-events: none;

          animation: numoArcFloat 8s ease-in-out infinite;
        }

        @keyframes numoArcFloat {
          0%,
          100% {
            transform: translateX(-50%) translate3d(0, 0, 0);
          }

          25% {
            transform: translateX(-50%) translate3d(-4px, -5px, 0);
          }

          50% {
            transform: translateX(-50%) translate3d(0, -9px, 0);
          }

          75% {
            transform: translateX(-50%) translate3d(4px, -4px, 0);
          }
        }

        .numo-arc-card {
          position: absolute;

          overflow: hidden;

          border-radius: 22px;

          background: #ffffff;

          box-shadow: 0 16px 34px rgba(10, 15, 25, 0.1);
        }

        .numo-card-inner {
          width: 100%;
          height: 100%;

          overflow: hidden;

          border-radius: inherit;
        }

        .numo-arc-card-featured {
          z-index: 8 !important;
          box-shadow: 0 22px 48px rgba(10, 15, 25, 0.17);
        }

        .numo-arc-card-featured img {
          object-position: center 38%;
        }

        .numo-arc-card img {
          display: block;

          width: 100%;
          height: 100%;

          object-fit: cover;

          pointer-events: none;

          user-select: none;

          animation: numoImageZoom 11s ease-in-out infinite alternate;
        }

        @keyframes numoImageZoom {
          from {
            transform: scale(1.02);
          }

          to {
            transform: scale(1.07);
          }
        }

        /* =====================================================
           DESKTOP ARC CARDS
        ====================================================== */

        .numo-arc-card-1 {
          top: 280px;
          left: 38px;

          width: 132px;
          height: 132px;

          z-index: 1;

          transform: rotate(-41deg);
        }

        .numo-arc-card-2 {
          top: 205px;
          left: 92px;

          width: 138px;
          height: 138px;

          z-index: 2;

          transform: rotate(-33deg);
        }

        .numo-arc-card-3 {
          top: 132px;
          left: 175px;

          width: 144px;
          height: 144px;

          z-index: 3;

          transform: rotate(-24deg);
        }

        .numo-arc-card-4 {
          top: 78px;
          left: 286px;

          width: 146px;
          height: 146px;

          z-index: 4;

          transform: rotate(-15deg);
        }

        .numo-arc-card-5 {
          top: 42px;
          left: 415px;

          width: 148px;
          height: 148px;

          z-index: 5;

          transform: rotate(-6deg);
        }

        .numo-arc-card-6 {
          top: 50px;
          left: 552px;

          width: 148px;
          height: 148px;

          z-index: 5;

          transform: rotate(7deg);
        }

        .numo-arc-card-7 {
          top: 84px;
          left: 678px;

          width: 146px;
          height: 146px;

          z-index: 4;

          transform: rotate(16deg);
        }

        .numo-arc-card-8 {
          top: 140px;
          left: 785px;

          width: 144px;
          height: 144px;

          z-index: 3;

          transform: rotate(24deg);
        }

        .numo-arc-card-9 {
          top: 212px;
          left: 868px;

          width: 138px;
          height: 138px;

          z-index: 2;

          transform: rotate(33deg);
        }

        .numo-arc-card-10 {
          top: 286px;
          left: 922px;

          width: 132px;
          height: 132px;

          z-index: 1;

          transform: rotate(40deg);
        }

        /* =====================================================
           CONTENT
        ====================================================== */

        .numo-arc-content {
          position: absolute;

          top: 390px;
          left: 50%;

          z-index: 30;

          width: min(640px, 90%);

          text-align: center;

          transform: translateX(-50%);
        }

        .numo-content-eyebrow {
          display: inline-flex;

          align-items: center;

          gap: 9px;

          margin-bottom: 18px;

          border: 1px solid rgba(8, 17, 38, 0.08);

          border-radius: 999px;

          background: #0c1530;

          padding: 10px 15px;

          color: #ffffff;

          font-family: ui-monospace, SFMono-Regular, Menlo, monospace;

          font-size: 8px;

          font-weight: 800;

          letter-spacing: 0.14em;

          box-shadow: 0 12px 28px rgba(10, 15, 25, 0.14);
        }

        .numo-content-eyebrow svg {
          color: #cefa74;
        }

        .numo-arc-content h1 {
          max-width: 590px;

          margin: 0 auto;

          color: #081126;

          font-size: clamp(40px, 3.8vw, 54px);

          font-weight: 700;

          line-height: 0.96;

          letter-spacing: -0.055em;
        }

        .numo-arc-content p {
          max-width: 500px;

          margin: 18px auto 0;

          color: #73819a;

          font-size: 13.5px;

          line-height: 1.5;
        }

        /* =====================================================
           BUTTONS
        ====================================================== */

        .numo-arc-actions {
          display: flex;

          align-items: center;
          justify-content: center;

          gap: 11px;

          margin-top: 24px;
        }

        .numo-arc-actions a {
          display: inline-flex;

          min-height: 52px;

          align-items: center;
          justify-content: center;

          border-radius: 999px;

          padding: 0 25px;

          font-size: 13px;

          font-weight: 600;

          text-decoration: none;

          transition:
            transform 0.35s cubic-bezier(0.22, 1, 0.36, 1),
            background 0.3s ease,
            box-shadow 0.3s ease;
        }

        .numo-arc-primary {
          gap: 18px;

          background: #0c1530;

          color: #ffffff;

          box-shadow: 0 10px 24px rgba(12, 21, 48, 0.14);
        }

        .numo-primary-arrow {
          display: grid;

          width: 30px;
          height: 30px;

          place-items: center;

          border-radius: 50%;

          background: #cefa74;

          color: #111827;

          transition: transform 0.35s ease;
        }

        .numo-arc-primary:hover {
          transform: translateY(-3px);

          box-shadow: 0 17px 32px rgba(12, 21, 48, 0.18);
        }

        .numo-arc-primary:hover .numo-primary-arrow {
          transform: rotate(45deg);
        }

        .numo-arc-secondary {
          border: 1px solid #d8deea;

          background: rgba(255, 255, 255, 0.78);

          color: #101827;
        }

        .numo-arc-secondary:hover {
          background: #ffffff;

          transform: translateY(-3px);
        }

        /* =====================================================
           TABLET
        ====================================================== */

        @media (max-width: 900px) and (min-width: 621px) {
          .numo-arc-inner {
            height: 660px;
          }

          .numo-arc-images {
            top: 88px;

            transform: translateX(-50%) scale(0.72);

            animation: none;
          }

          .numo-arc-content {
            top: 340px;
          }

          .numo-arc-content h1 {
            font-size: 44px;
          }
        }

        /* =====================================================
           PHONE
        ====================================================== */

        @media (max-width: 620px) {
          .numo-hero-glow {
            animation: none;
          }
          /*
             FULL WIDTH PHONE HERO.
             No more left/right outer gaps.
          */

          .numo-arc-hero {
            width: 100%;

            max-width: 100%;

            margin: 0;

            padding-top: 106px;

            overflow: hidden;

            border-top: 1px solid #deddd7;
            border-right: 0;
            border-bottom: 1px solid #deddd7;
            border-left: 0;

            border-radius: 0;

            background: #f7f6f2;

            box-shadow: none;
          }

          .numo-arc-inner {
            width: 100%;
            max-width: 100%;

            height: 650px;

            overflow: hidden;
          }

          /* =====================================================
             PHONE SERVICE BAR

             3 ITEMS ONLY.
             DEVELOPMENT REMOVED.
             COLORFUL / LIGHT.
          ====================================================== */

          .numo-company-bar {
            top: 12px;
            left: 50%;

            width: calc(100% - 28px);

            display: grid;

            grid-template-columns: repeat(3, minmax(0, 1fr));

            align-items: center;

            gap: 5px;

            padding: 6px;

            overflow: hidden;

            border: 1px solid rgba(77, 84, 72, 0.1);

            border-radius: 18px;

            background: linear-gradient(
              135deg,
              #f7f2e7 0%,
              #eef3e1 52%,
              #eeeefa 100%
            );

            box-shadow:
              0 13px 30px rgba(51, 57, 48, 0.08),
              inset 0 1px 0 rgba(255, 255, 255, 0.92);

            transform: translateX(-50%);

            box-sizing: border-box;
          }

          /* Keep the server-rendered tabs stable when the phone hydrates. */
          .numo-company-pill:nth-child(2) {
            display: none;
          }

          .numo-company-pill {
            width: 100%;

            min-width: 0;

            min-height: 42px;

            gap: 6px;

            padding: 0 7px;

            border-radius: 13px;

            background: transparent;

            color: #565e55;

            font-size: 9.5px;

            font-weight: 650;

            transform: none;
          }

          .numo-company-pill:hover {
            background: rgba(255, 255, 255, 0.48);

            color: #252a25;
          }

          .numo-company-label {
            min-width: 0;

            overflow: hidden;

            text-overflow: ellipsis;

            white-space: nowrap;
          }

          .numo-company-dot {
            width: 6px;
            height: 6px;

            background: #9aa39a;
          }

          .numo-company-pill.active {
            background: linear-gradient(135deg, #cefa74 0%, #e9ff86 100%);

            color: #172014;

            box-shadow:
              0 8px 18px rgba(178, 211, 35, 0.2),
              inset 0 1px 0 rgba(255, 255, 255, 0.55);

            transform: none;
          }

          .numo-company-pill.active .numo-company-dot {
            background: #172014;

            transform: scale(1.05);

            box-shadow: none;
          }

          /* =====================================================
             PHONE IMAGE ARC
          ====================================================== */

          .numo-arc-images {
            top: 88px;
            left: 50%;

            width: 520px;
            height: 215px;

            transform: translateX(-50%);

            animation: numoMobileArcMove 7.5s ease-in-out infinite;

            will-change: transform;
          }

          @keyframes numoMobileArcMove {
            0%,
            100% {
              transform: translateX(-50%) translate3d(0, 0, 0);
            }

            25% {
              transform: translateX(-50%) translate3d(-7px, -5px, 0);
            }

            50% {
              transform: translateX(-50%) translate3d(0, -12px, 0);
            }

            75% {
              transform: translateX(-50%) translate3d(7px, -6px, 0);
            }
          }

          .numo-arc-card-1,
          .numo-arc-card-2,
          .numo-arc-card-9,
          .numo-arc-card-10 {
            display: none;
          }

          .numo-arc-card {
            border-radius: 20px;

            box-shadow: 0 14px 30px rgba(10, 15, 25, 0.12);
          }

          .numo-arc-card img {
            animation: none;
            transform: scale(1.08);
          }

          .numo-arc-card-3 img {
            animation-delay: -1s;
          }

          .numo-arc-card-4 img {
            animation-delay: -3s;
          }

          .numo-arc-card-5 img {
            animation-delay: -5s;
          }

          .numo-arc-card-6 img {
            animation-delay: -2s;
          }

          .numo-arc-card-7 img {
            animation-delay: -4s;
          }

          .numo-arc-card-8 img {
            animation-delay: -6s;
          }

          @keyframes numoMobileImageMotion {
            0%,
            100% {
              transform: scale(1.06) translate3d(0, 0, 0);
            }

            50% {
              transform: scale(1.11) translate3d(2px, -2px, 0);
            }
          }

          .numo-arc-card-3 {
            top: 92px;
            left: 0;

            width: 112px;
            height: 112px;

            transform: rotate(-29deg);
          }

          .numo-arc-card-4 {
            top: 44px;
            left: 70px;

            width: 120px;
            height: 120px;

            transform: rotate(-18deg);
          }

          .numo-arc-card-5 {
            top: 12px;
            left: 158px;

            width: 128px;
            height: 128px;

            transform: rotate(-7deg);
          }

          .numo-arc-card-6 {
            top: 13px;
            right: 158px;
            left: auto;

            width: 128px;
            height: 128px;

            transform: rotate(7deg);
          }

          .numo-arc-card-7 {
            top: 44px;
            right: 70px;
            left: auto;

            width: 120px;
            height: 120px;

            transform: rotate(18deg);
          }

          .numo-arc-card-8 {
            top: 92px;
            right: 0;
            left: auto;

            width: 112px;
            height: 112px;

            transform: rotate(29deg);
          }

          /* =====================================================
             NO PIXELS ON PHONE
          ====================================================== */

          .numo-hero-pixel-field {
            display: none;
          }

          /* =====================================================
             PHONE CONTENT
          ====================================================== */

          .numo-arc-content {
            top: 296px;
            left: 50%;

            width: calc(100% - 30px);

            transform: translateX(-50%);
          }

          .numo-content-eyebrow {
            margin-bottom: 16px;

            padding: 7px 10px;

            font-size: 6px;
          }

          .numo-content-eyebrow svg {
            width: 11px;
            height: 11px;
          }

          .numo-arc-content h1 {
            max-width: 335px;

            margin: 0 auto;

            font-size: 34px;

            line-height: 1.04;

            letter-spacing: -0.035em;
            text-wrap: balance;
          }

          .numo-arc-content p {
            max-width: 305px;

            margin: 18px auto 0;

            font-size: 12px;

            line-height: 1.55;
          }

          /* =====================================================
             PHONE BUTTONS
          ====================================================== */

          .numo-arc-actions {
            flex-direction: column;

            gap: 11px;

            margin-top: 25px;
          }

          .numo-arc-actions a {
            width: min(255px, 82%);

            min-height: 54px;

            padding: 0 22px;

            font-size: 12px;

            flex-shrink: 0;
          }

          .numo-arc-primary {
            justify-content: space-between;

            padding-right: 9px;
            padding-left: 24px;
          }

          .numo-primary-arrow {
            width: 38px;
            height: 38px;
          }

          .numo-primary-arrow svg {
            width: 16px;
            height: 16px;
          }

          /*
             FIX:
             View our work now fully visible.
          */

          .numo-arc-secondary {
            display: inline-flex;

            background: rgba(255, 255, 255, 0.9);

            border: 1px solid #d8deea;

            color: #101827;

            opacity: 1;

            visibility: visible;
          }

          /* =====================================================
             PHONE GLOW
          ====================================================== */

          .numo-hero-glow-one {
            top: 180px;
            left: -50px;

            width: 210px;
            height: 210px;
          }

          .numo-hero-glow-two {
            right: -70px;
            bottom: 50px;

            width: 210px;
            height: 210px;
          }
        }

        /* =====================================================
           480 PHONE
        ====================================================== */

        @media (max-width: 480px) {
          .numo-arc-hero {
            padding-top: 106px;
          }

          .numo-arc-inner {
            height: 635px;
          }

          .numo-company-bar {
            top: 10px;

            width: calc(100% - 24px);
          }

          .numo-company-pill {
            min-height: 40px;

            padding: 0 5px;

            font-size: 9px;
          }

          .numo-arc-images {
            top: 84px;

            width: 485px;
          }

          .numo-arc-card-3 {
            left: 0;
          }

          .numo-arc-card-4 {
            left: 60px;
          }

          .numo-arc-card-5 {
            left: 142px;
          }

          .numo-arc-card-6 {
            right: 142px;
          }

          .numo-arc-card-7 {
            right: 60px;
          }

          .numo-arc-card-8 {
            right: 0;
          }

          .numo-arc-content {
            top: 282px;
          }

          .numo-arc-content h1 {
            max-width: 315px;

            font-size: 32px;
          }

          .numo-arc-content p {
            max-width: 290px;

            font-size: 11.5px;
          }

          .numo-arc-actions {
            margin-top: 23px;
          }
        }

        /* =====================================================
           390 PHONE
        ====================================================== */

        @media (max-width: 390px) {
          .numo-arc-hero {
            width: 100%;

            margin: 0;

            padding-top: 102px;

            border-radius: 0;
          }

          .numo-arc-inner {
            height: 620px;
          }

          .numo-company-bar {
            top: 9px;

            width: calc(100% - 20px);

            padding: 5px;
          }

          .numo-company-pill {
            min-height: 38px;

            gap: 4px;

            padding: 0 4px;

            font-size: 8.4px;
          }

          .numo-company-dot {
            width: 5px;
            height: 5px;
          }

          .numo-arc-images {
            top: 79px;

            width: 460px;
          }

          .numo-arc-card-3 {
            width: 105px;
            height: 105px;
          }

          .numo-arc-card-4 {
            left: 53px;

            width: 114px;
            height: 114px;
          }

          .numo-arc-card-5 {
            left: 128px;

            width: 122px;
            height: 122px;
          }

          .numo-arc-card-6 {
            right: 128px;

            width: 122px;
            height: 122px;
          }

          .numo-arc-card-7 {
            right: 53px;

            width: 114px;
            height: 114px;
          }

          .numo-arc-card-8 {
            width: 105px;
            height: 105px;
          }

          .numo-arc-content {
            top: 268px;
          }

          .numo-content-eyebrow {
            margin-bottom: 14px;
          }

          .numo-arc-content h1 {
            max-width: 295px;

            font-size: 29px;
          }

          .numo-arc-content p {
            max-width: 275px;

            margin-top: 17px;

            font-size: 11px;
          }

          .numo-arc-actions {
            margin-top: 21px;
          }

          .numo-arc-actions a {
            width: 240px;

            min-height: 51px;
          }
        }

        /* =====================================================
           VERY SMALL PHONE
        ====================================================== */

        @media (max-width: 350px) {
          .numo-arc-hero {
            padding-top: 98px;
          }

          .numo-arc-inner {
            height: 605px;
          }

          .numo-company-pill {
            font-size: 7.6px;
          }

          .numo-arc-images {
            top: 75px;

            width: 420px;
          }

          .numo-arc-content {
            top: 258px;
          }

          .numo-arc-content h1 {
            max-width: 270px;

            font-size: 27px;
          }

          .numo-arc-content p {
            max-width: 255px;

            font-size: 10.5px;
          }

          .numo-arc-actions a {
            width: 220px;
          }
        }

        /* =====================================================
           REDUCED MOTION
        ====================================================== */

        @media (prefers-reduced-motion: reduce) {
          .numo-hero-glow,
          .numo-hero-pixel-active,
          .numo-company-bar,
          .numo-arc-images,
          .numo-arc-card img,
          .numo-content-eyebrow,
          .numo-arc-content h1,
          .numo-arc-content p,
          .numo-arc-actions {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
}
