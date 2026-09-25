"use client";

import Link from "next/link";
import {
  ArrowDownRight,
  ArrowUpRight,
  Code2,
  Layers3,
  Sparkles,
} from "lucide-react";

export function AgencyHero() {
  return (
    <section className="agency-hero">
      {/* =====================================================
          BACKGROUND VIDEO
      ====================================================== */}

      <div className="agency-hero-media">
        <video autoPlay muted loop playsInline className="agency-hero-video">
          <source src="/expertise/h1.mp4" type="video/webm" />
        </video>
      </div>

      {/* =====================================================
          SOFT OVERLAYS
      ====================================================== */}

      <div className="agency-hero-overlay" />
      <div className="agency-hero-glow agency-hero-glow-one" />
      <div className="agency-hero-glow agency-hero-glow-two" />

      {/* =====================================================
          CONTENT
      ====================================================== */}

      <div className="agency-hero-inner">
        <div className="agency-hero-copy">
          {/* BADGE */}

          <div className="agency-hero-badge">
            <span className="agency-badge-dot" />

            <span>MADEBYSEBI</span>

            <span className="agency-badge-divider" />

            <span>WEB STUDIO</span>
          </div>

          {/* HEADLINE */}

          <h1>
            Digital experiences
            <br />
            built to <span>move</span>
            <br />
            businesses forward.
          </h1>

          {/* DESCRIPTION */}

          <p>
            We design and build modern websites that help businesses look
            credible, communicate clearly and grow online.
          </p>

          {/* BUTTONS */}

          <div className="agency-hero-actions">
            <Link href="/contact" className="agency-primary-button">
              <span>Start a project</span>

              <span className="agency-button-icon">
                <ArrowUpRight size={18} />
              </span>
            </Link>

            <Link href="/work" className="agency-secondary-button">
              View our work
              <ArrowDownRight size={17} />
            </Link>
          </div>

          {/* SMALL TRUST LINE */}

          <div className="agency-hero-note">
            <span />

            <p>
              Web design <i>•</i> Development <i>•</i> Digital experiences
            </p>
          </div>
        </div>

        {/* =====================================================
            FLOATING UI
        ====================================================== */}

        <div className="agency-floating-card agency-floating-card-one">
          <div className="agency-floating-icon">
            <Layers3 size={17} />
          </div>

          <div>
            <small>DESIGN</small>
            <strong>Clear experiences.</strong>
          </div>
        </div>

        <div className="agency-floating-card agency-floating-card-two">
          <div className="agency-floating-icon">
            <Code2 size={17} />
          </div>

          <div>
            <small>DEVELOPMENT</small>
            <strong>Built to perform.</strong>
          </div>
        </div>

        {/* =====================================================
            MINI LABEL
        ====================================================== */}

        <div className="agency-hero-corner">
          <Sparkles size={14} />

          <span>
            BUILT WITH
            <br />
            INTENTION
          </span>
        </div>
      </div>

      {/* =====================================================
          BOTTOM LINE
      ====================================================== */}

      <div className="agency-hero-bottom-line">
        <span>Ghana</span>

        <div />

        <span>United Kingdom</span>

        <span className="agency-bottom-year">2026</span>
      </div>

      <style jsx global>{`
        /* =====================================================
           HERO
        ====================================================== */

        .agency-hero {
          position: relative;

          display: flex;

          width: 100%;
          min-height: 850px;

          align-items: stretch;

          overflow: hidden;

          background: #f3f2ee;

          color: #171717;
        }

        /* =====================================================
           VIDEO
        ====================================================== */

        .agency-hero-media {
          position: absolute;

          top: 0;
          right: 0;
          bottom: 0;

          width: 67%;

          overflow: hidden;
        }

        .agency-hero-video {
          width: 100%;
          height: 100%;

          object-fit: cover;

          object-position: center;

          animation: agencyVideoScale 12s ease-in-out infinite alternate;
        }

        @keyframes agencyVideoScale {
          from {
            transform: scale(1);
          }

          to {
            transform: scale(1.035);
          }
        }

        /* =====================================================
           OVERLAY
        ====================================================== */

        .agency-hero-overlay {
          position: absolute;
          inset: 0;

          z-index: 1;

          background: linear-gradient(
            90deg,
            #f3f2ee 0%,
            #f3f2ee 31%,
            rgba(243, 242, 238, 0.96) 38%,
            rgba(243, 242, 238, 0.73) 49%,
            rgba(243, 242, 238, 0.28) 64%,
            rgba(243, 242, 238, 0.02) 100%
          );

          pointer-events: none;
        }

        /* =====================================================
           GLOWS
        ====================================================== */

        .agency-hero-glow {
          position: absolute;

          z-index: 1;

          border-radius: 50%;

          pointer-events: none;
        }

        .agency-hero-glow-one {
          top: -180px;
          left: 26%;

          width: 450px;
          height: 450px;

          background: rgba(206, 250, 116, 0.18);

          filter: blur(110px);

          animation: agencyGlowOne 8s ease-in-out infinite;
        }

        .agency-hero-glow-two {
          bottom: -250px;
          left: -120px;

          width: 450px;
          height: 450px;

          background: rgba(197, 191, 255, 0.18);

          filter: blur(110px);

          animation: agencyGlowTwo 10s ease-in-out infinite;
        }

        @keyframes agencyGlowOne {
          50% {
            transform: translate3d(50px, 40px, 0);
          }
        }

        @keyframes agencyGlowTwo {
          50% {
            transform: translate3d(40px, -30px, 0);
          }
        }

        /* =====================================================
           INNER
        ====================================================== */

        .agency-hero-inner {
          position: relative;

          z-index: 5;

          width: min(1450px, 100%);

          min-height: 850px;

          margin: 0 auto;

          padding: 175px 50px 115px;
        }

        /* =====================================================
           COPY
        ====================================================== */

        .agency-hero-copy {
          position: relative;

          z-index: 6;

          width: min(760px, 58%);
        }

        /* =====================================================
           BADGE
        ====================================================== */

        .agency-hero-badge {
          display: inline-flex;

          align-items: center;

          gap: 9px;

          border: 1px solid rgba(24, 24, 24, 0.14);

          border-radius: 7px;

          background: rgba(255, 255, 255, 0.42);

          padding: 9px 12px;

          color: #4e4944;

          font-family:
            ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;

          font-size: 8px;

          font-weight: 700;

          letter-spacing: 0.14em;

          backdrop-filter: blur(12px);

          animation: agencyReveal 0.9s cubic-bezier(0.22, 1, 0.36, 1) both;
        }

        .agency-badge-dot {
          width: 8px;
          height: 8px;

          border-radius: 2px;

          background: #cefa74;

          box-shadow: 0 0 12px rgba(206, 250, 116, 0.4);
        }

        .agency-badge-divider {
          width: 1px;
          height: 11px;

          background: rgba(0, 0, 0, 0.18);
        }

        /* =====================================================
           HEADING
        ====================================================== */

        .agency-hero h1 {
          max-width: 820px;

          margin: 35px 0 0;

          color: #181715;

          font-size: clamp(66px, 6.8vw, 108px);

          font-weight: 600;

          line-height: 0.88;

          letter-spacing: -0.07em;

          animation: agencyReveal 1s 0.08s cubic-bezier(0.22, 1, 0.36, 1) both;
        }

        .agency-hero h1 span {
          position: relative;

          display: inline-block;

          font-family: Georgia, "Times New Roman", serif;

          font-weight: 400;

          font-style: italic;

          letter-spacing: -0.055em;
        }

        .agency-hero h1 span::after {
          content: "";

          position: absolute;

          right: -12px;
          bottom: 1px;
          left: 1px;

          height: 8px;

          border-radius: 999px;

          background: #cefa74;

          z-index: -1;

          transform: rotate(-1deg);
        }

        /* =====================================================
           DESCRIPTION
        ====================================================== */

        .agency-hero-copy > p {
          max-width: 520px;

          margin: 31px 0 0;

          color: #66615b;

          font-size: 15px;

          line-height: 1.6;

          animation: agencyReveal 1s 0.17s cubic-bezier(0.22, 1, 0.36, 1) both;
        }

        /* =====================================================
           BUTTONS
        ====================================================== */

        .agency-hero-actions {
          display: flex;

          align-items: center;

          gap: 12px;

          margin-top: 34px;

          animation: agencyReveal 1s 0.26s cubic-bezier(0.22, 1, 0.36, 1) both;
        }

        .agency-hero-actions a {
          text-decoration: none;
        }

        .agency-primary-button {
          display: inline-flex;

          min-height: 58px;

          align-items: center;

          gap: 32px;

          border-radius: 999px;

          background: #171717;

          padding: 7px 8px 7px 25px;

          color: #ffffff;

          font-size: 12px;

          font-weight: 600;

          transition:
            transform 0.35s cubic-bezier(0.22, 1, 0.36, 1),
            box-shadow 0.35s ease;
        }

        .agency-primary-button:hover {
          transform: translateY(-3px);

          box-shadow: 0 18px 35px rgba(0, 0, 0, 0.14);
        }

        .agency-button-icon {
          display: grid;

          width: 44px;
          height: 44px;

          place-items: center;

          border-radius: 50%;

          background: #cefa74;

          color: #111;

          transition: transform 0.35s ease;
        }

        .agency-primary-button:hover .agency-button-icon {
          transform: rotate(45deg);
        }

        .agency-secondary-button {
          display: inline-flex;

          min-height: 58px;

          align-items: center;

          gap: 12px;

          border: 1px solid rgba(17, 17, 17, 0.17);

          border-radius: 999px;

          background: rgba(255, 255, 255, 0.42);

          padding: 0 25px;

          color: #171717;

          font-size: 12px;

          font-weight: 600;

          backdrop-filter: blur(12px);

          transition:
            background 0.3s ease,
            transform 0.3s ease;
        }

        .agency-secondary-button:hover {
          background: rgba(255, 255, 255, 0.76);

          transform: translateY(-3px);
        }

        /* =====================================================
           NOTE
        ====================================================== */

        .agency-hero-note {
          display: flex;

          align-items: center;

          gap: 10px;

          margin-top: 38px;

          animation: agencyReveal 1s 0.34s cubic-bezier(0.22, 1, 0.36, 1) both;
        }

        .agency-hero-note > span {
          width: 30px;
          height: 1px;

          background: #171717;
        }

        .agency-hero-note p {
          margin: 0;

          color: #69645e;

          font-family:
            ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;

          font-size: 7px;

          font-weight: 600;

          letter-spacing: 0.08em;

          text-transform: uppercase;
        }

        .agency-hero-note i {
          margin: 0 5px;

          color: #a8b900;

          font-style: normal;
        }

        /* =====================================================
           FLOATING CARDS
        ====================================================== */

        .agency-floating-card {
          position: absolute;

          z-index: 8;

          display: flex;

          align-items: center;

          gap: 10px;

          border: 1px solid rgba(255, 255, 255, 0.45);

          border-radius: 15px;

          background: rgba(250, 249, 246, 0.74);

          padding: 10px 13px;

          box-shadow: 0 18px 55px rgba(0, 0, 0, 0.1);

          backdrop-filter: blur(16px);

          pointer-events: none;
        }

        .agency-floating-card-one {
          top: 29%;

          right: 4%;

          animation: agencyFloatOne 5s ease-in-out infinite;
        }

        .agency-floating-card-two {
          right: 24%;

          bottom: 16%;

          animation: agencyFloatTwo 5.8s ease-in-out infinite;
        }

        .agency-floating-icon {
          display: grid;

          width: 38px;
          height: 38px;

          flex-shrink: 0;

          place-items: center;

          border-radius: 11px;

          background: #cefa74;

          color: #171717;
        }

        .agency-floating-card > div:last-child {
          display: flex;

          min-width: 120px;

          flex-direction: column;
        }

        .agency-floating-card small {
          color: #847d75;

          font-family:
            ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;

          font-size: 6px;

          font-weight: 700;

          letter-spacing: 0.1em;
        }

        .agency-floating-card strong {
          margin-top: 3px;

          color: #282420;

          font-size: 10px;

          font-weight: 650;
        }

        @keyframes agencyFloatOne {
          0%,
          100% {
            transform: translate3d(0, 0, 0) rotate(1deg);
          }

          50% {
            transform: translate3d(0, -13px, 0) rotate(-1deg);
          }
        }

        @keyframes agencyFloatTwo {
          0%,
          100% {
            transform: translate3d(0, 0, 0) rotate(-1deg);
          }

          50% {
            transform: translate3d(0, -11px, 0) rotate(1deg);
          }
        }

        /* =====================================================
           CORNER LABEL
        ====================================================== */

        .agency-hero-corner {
          position: absolute;

          top: 130px;
          right: 44px;

          z-index: 8;

          display: flex;

          align-items: center;

          gap: 8px;

          color: rgba(17, 17, 17, 0.65);

          font-family:
            ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;

          font-size: 7px;

          font-weight: 700;

          line-height: 1.35;

          letter-spacing: 0.12em;
        }

        .agency-hero-corner svg {
          color: #a4ba00;
        }

        /* =====================================================
           BOTTOM
        ====================================================== */

        .agency-hero-bottom-line {
          position: absolute;

          right: 42px;
          bottom: 26px;
          left: 42px;

          z-index: 10;

          display: flex;

          align-items: center;

          gap: 13px;

          color: rgba(17, 17, 17, 0.58);

          font-family:
            ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;

          font-size: 7px;

          font-weight: 700;

          letter-spacing: 0.11em;

          text-transform: uppercase;
        }

        .agency-hero-bottom-line > div {
          width: 40px;
          height: 1px;

          background: rgba(17, 17, 17, 0.28);
        }

        .agency-bottom-year {
          margin-left: auto;
        }

        /* =====================================================
           REVEAL
        ====================================================== */

        @keyframes agencyReveal {
          from {
            opacity: 0;

            transform: translateY(24px);
          }

          to {
            opacity: 1;

            transform: translateY(0);
          }
        }

        /* =====================================================
           TABLET
        ====================================================== */

        @media (max-width: 950px) {
          .agency-hero {
            min-height: 800px;
          }

          .agency-hero-media {
            width: 72%;
          }

          .agency-hero-overlay {
            background: linear-gradient(
              90deg,
              #f3f2ee 0%,
              rgba(243, 242, 238, 0.97) 36%,
              rgba(243, 242, 238, 0.7) 58%,
              rgba(243, 242, 238, 0.15) 100%
            );
          }

          .agency-hero-inner {
            min-height: 800px;

            padding: 150px 28px 100px;
          }

          .agency-hero-copy {
            width: 72%;
          }

          .agency-floating-card-one {
            right: 2%;
          }

          .agency-floating-card-two {
            right: 10%;
          }
        }

        /* =====================================================
           MOBILE
        ====================================================== */

        @media (max-width: 620px) {
          .agency-hero {
            min-height: 760px;

            background: #f3f2ee;
          }

          .agency-hero-media {
            top: auto;
            right: 0;
            bottom: 0;
            left: 0;

            width: 100%;
            height: 48%;
          }

          .agency-hero-video {
            object-position: center;

            animation-duration: 15s;
          }

          .agency-hero-overlay {
            background: linear-gradient(
              180deg,
              #f3f2ee 0%,
              #f3f2ee 49%,
              rgba(243, 242, 238, 0.94) 58%,
              rgba(243, 242, 238, 0.42) 75%,
              rgba(243, 242, 238, 0.04) 100%
            );
          }

          .agency-hero-inner {
            min-height: 760px;

            padding: 110px 14px 60px;
          }

          .agency-hero-copy {
            width: 100%;
          }

          .agency-hero-badge {
            padding: 8px 10px;

            font-size: 7px;
          }

          .agency-hero h1 {
            max-width: 430px;

            margin-top: 25px;

            font-size: 50px;

            line-height: 0.92;

            letter-spacing: -0.06em;
          }

          .agency-hero h1 span::after {
            right: -5px;

            height: 5px;
          }

          .agency-hero-copy > p {
            max-width: 360px;

            margin-top: 21px;

            font-size: 13px;

            line-height: 1.5;
          }

          .agency-hero-actions {
            gap: 9px;

            margin-top: 25px;
          }

          .agency-primary-button {
            min-height: 52px;

            gap: 20px;

            padding-left: 20px;
          }

          .agency-button-icon {
            width: 38px;
            height: 38px;
          }

          .agency-secondary-button {
            min-height: 52px;

            padding: 0 19px;
          }

          .agency-hero-note {
            display: none;
          }

          .agency-floating-card {
            display: none;
          }

          .agency-hero-corner {
            display: none;
          }

          .agency-hero-bottom-line {
            right: 14px;
            bottom: 15px;
            left: 14px;

            color: rgba(255, 255, 255, 0.8);

            font-size: 6px;

            text-shadow: 0 1px 4px rgba(0, 0, 0, 0.28);
          }

          .agency-hero-bottom-line > div {
            background: rgba(255, 255, 255, 0.55);
          }

          .agency-hero-glow-one {
            top: -130px;
            left: 45%;

            width: 300px;
            height: 300px;
          }
        }

        /* =====================================================
           VERY SMALL PHONES
        ====================================================== */

        @media (max-width: 390px) {
          .agency-hero {
            min-height: 735px;
          }

          .agency-hero-inner {
            min-height: 735px;

            padding-top: 105px;
          }

          .agency-hero h1 {
            font-size: 45px;
          }

          .agency-hero-copy > p {
            max-width: 320px;

            font-size: 12.5px;
          }

          .agency-hero-actions {
            align-items: flex-start;

            flex-direction: column;
          }

          .agency-secondary-button {
            min-height: 48px;
          }
        }

        /* =====================================================
           REDUCED MOTION
        ====================================================== */

        @media (prefers-reduced-motion: reduce) {
          .agency-hero-video,
          .agency-hero-glow,
          .agency-floating-card,
          .agency-hero-badge,
          .agency-hero h1,
          .agency-hero-copy > p,
          .agency-hero-actions,
          .agency-hero-note {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
}
