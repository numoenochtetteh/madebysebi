"use client";

import {
  ArrowUpRight,
  Code2,
  Compass,
  Figma,
  Globe2,
  Rocket,
  Search,
  Sparkles,
} from "lucide-react";

const processCards = [
  {
    number: "01",
    title: "Discover",
    description:
      "We understand your business, goals, audience and what the website needs to achieve.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "We shape the structure, visual direction and experience before development begins.",
  },
  {
    number: "03",
    title: "Develop",
    description:
      "We turn the approved direction into a fast, responsive and polished website.",
  },
  {
    number: "04",
    title: "Launch & grow",
    description:
      "We test, launch and support your website as your business continues to grow.",
  },
];

const yellowPixels = new Set([5, 18, 26, 39, 50, 63, 74, 82, 96, 107, 115]);

const hiddenPixels = new Set([
  0, 3, 8, 10, 14, 20, 22, 31, 33, 42, 46, 52, 54, 58, 60, 64, 68, 71, 76, 84,
  88, 92, 101, 109, 118, 121,
]);

const pixels = Array.from({ length: 132 }, (_, index) => ({
  id: index,
  hidden: hiddenPixels.has(index),
  yellow: yellowPixels.has(index),
}));

export function ProcessSystem() {
  return (
    <section className="numo-process-system">
      <div className="numo-process-container">
        {/* HEADER */}

        <header className="numo-process-header">
          <span className="numo-process-eyebrow">
            <span />
            OUR PROCESS
          </span>

          <h2>One process behind everything we build.</h2>

          <p>
            Strategy, design and development move as one system — from the first conversation to a confident launch.
          </p>
        </header>

        {/* BOARD */}

        <div className="process-board-wrapper">
          <div className="process-board">
            {/* CENTER */}

            <div className="process-center">
              <div className="connector connector-top-left" />
              <div className="connector connector-top-right" />
              <div className="connector connector-bottom-left" />
              <div className="connector connector-bottom-right" />

              <div className="process-pixel-grid">
                {pixels.map((pixel) => (
                  <span
                    key={pixel.id}
                    className={[
                      "process-pixel",
                      pixel.hidden ? "pixel-hidden" : "",
                      pixel.yellow ? "pixel-yellow" : "",
                    ].join(" ")}
                  />
                ))}
              </div>

              <div className="process-center-logo">
                <div className="process-logo-symbol">
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                </div>

                <div className="process-center-text">
                  <strong>madebysebi</strong>
                </div>
              </div>

              <span className="process-center-label">
                YOUR DIGITAL EXPERIENCE
              </span>
            </div>

            {/* DISCOVER */}

            <article className="process-card process-card-discover">
              <div className="process-card-top">
                <span>{processCards[0].number}</span>

                <span className="process-icon-bubble">
                  <Compass size={18} />
                </span>
              </div>

              <div className="process-card-copy">
                <h3>{processCards[0].title}</h3>
                <p>{processCards[0].description}</p>
              </div>

              <div className="process-card-preview discover-preview">
                <div className="mini-search">
                  <Search size={15} />
                  <span>Understand your business</span>
                </div>

                <div className="discover-tech">
                  <div className="discover-tech-item" title="Next.js">
                    <svg viewBox="0 0 128 128" aria-hidden="true">
                      <circle cx="64" cy="64" r="64" fill="#000" />
                      <path
                        d="M34 34h16l34 50V34h10v60H78L44 44v50H34V34z"
                        fill="#fff"
                      />
                    </svg>
                  </div>

                  <div className="discover-tech-item" title="Tailwind CSS">
                    <svg viewBox="0 0 54 33" aria-hidden="true">
                      <path
                        fill="#06B6D4"
                        d="M27 0C19.8 0 15.3 3.6 13.5 10.8c2.7-3.6 5.85-4.95 9.45-4.05
                        2.05.51 3.51 2 5.13 3.65 2.64 2.68 5.7 5.8 12.92 5.8
                        7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45
                        4.05-2.05-.51-3.51-2-5.13-3.65C37.28 3.12 34.22 0 27 0zM13.5
                        16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05
                        2.05.51 3.51 2 5.13 3.65 2.64 2.68 5.7 5.8 12.92 5.8
                        7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45
                        4.05-2.05-.51-3.51-2-5.13-3.65C23.78 19.32 20.72 16.2
                        13.5 16.2z"
                      />
                    </svg>
                  </div>

                  <div className="discover-tech-item" title="TypeScript">
                    <div className="typescript-logo">TS</div>
                  </div>

                  <div className="discover-tech-item" title="Supabase">
                    <svg viewBox="0 0 109 113" aria-hidden="true">
                      <path
                        fill="#3ECF8E"
                        d="M63.7 110.3c-2.9 3.7-8.9 1.7-9-3l-1-38.1h51.1c4.7 0 7.3 5.4 4.4 9.1l-45.5 32z"
                      />
                      <path
                        fill="#3ECF8E"
                        opacity=".8"
                        d="M45.3 2.7c2.9-3.7 8.9-1.7 9 3l.4 38.1H4.2c-4.7 0-7.3-5.4-4.4-9.1l45.5-32z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </article>

            {/* DESIGN */}

            <article className="process-card process-card-design">
              <div className="process-card-top">
                <span>{processCards[1].number}</span>

                <span className="process-icon-bubble">
                  <Figma size={18} />
                </span>
              </div>

              <div className="process-card-copy">
                <h3>{processCards[1].title}</h3>
                <p>{processCards[1].description}</p>
              </div>

              <div className="process-card-preview design-preview">
                <div className="design-window">
                  <div className="design-window-top">
                    <span />
                    <span />
                    <span />
                  </div>

                  <div className="design-screen">
                    <div className="design-sidebar" />

                    <div className="design-content">
                      <div className="design-heading" />
                      <div className="design-copy" />

                      <div className="design-boxes">
                        <span />
                        <span />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>

            {/* DEVELOP */}

            <article className="process-card process-card-develop">
              <div className="process-card-top">
                <span>{processCards[2].number}</span>

                <span className="process-icon-bubble">
                  <Code2 size={18} />
                </span>
              </div>

              <div className="process-card-copy">
                <h3>{processCards[2].title}</h3>
                <p>{processCards[2].description}</p>
              </div>

              <div className="process-card-preview develop-preview">
                <div className="code-window">
                  <div className="code-line">
                    <span className="code-number">01</span>
                    <span className="code-purple">&lt;section</span>
                    <span> className=</span>
                    <span className="code-green">&quot;hero&quot;</span>
                    <span className="code-purple">&gt;</span>
                  </div>

                  <div className="code-line">
                    <span className="code-number">02</span>
                    <span className="code-purple">&lt;Build</span>
                    <span> /&gt;</span>
                  </div>

                  <div className="code-line">
                    <span className="code-number">03</span>
                    <span className="code-purple">&lt;/section&gt;</span>
                  </div>
                </div>
              </div>
            </article>

            {/* LAUNCH */}

            <article className="process-card process-card-launch">
              <div className="process-card-top">
                <span>{processCards[3].number}</span>

                <span className="process-icon-bubble">
                  <Rocket size={18} />
                </span>
              </div>

              <div className="process-card-copy">
                <h3>{processCards[3].title}</h3>
                <p>{processCards[3].description}</p>
              </div>

              <div className="process-card-preview launch-preview">
                <div className="launch-browser">
                  <div className="launch-browser-bar">
                    <span />
                    <span />
                    <span />
                  </div>

                  <div className="launch-browser-content">
                    <div className="launch-globe">
                      <Globe2 size={28} />
                    </div>

                    <div>
                      <strong>Website live</strong>
                      <small>Ready for your customers</small>
                    </div>

                    <Sparkles size={16} />
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>

        {/* BOTTOM */}

        <div className="process-bottom">
          <p>
            Clear process. No guesswork. Just thoughtful digital experiences.
          </p>

          <a href="/contact">
            Start your project
            <ArrowUpRight size={15} />
          </a>
        </div>
      </div>

      <style jsx global>{`
        .numo-process-system {
          position: relative;
          overflow: hidden;
          background: #f4f4f1;
          padding: 72px 28px 48px;
          color: #28221d;
        }

        .numo-process-container {
          width: min(1400px, 100%);
          margin: 0 auto;
        }

        /* HEADER */

        .numo-process-header {
          max-width: 900px;
          margin: 0 auto 56px;
          text-align: center;
        }

        .numo-process-eyebrow {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          margin-bottom: 22px;
          border: 1px solid #d4cec1;
          border-radius: 5px;
          padding: 7px 11px;
          color: #685d52;
          font-family:
            ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 0.12em;
        }

        .numo-process-eyebrow > span {
          width: 8px;
          height: 8px;
          border-radius: 2px;
          background: #cefa74;
        }

        .numo-process-header h2 {
          max-width: 820px;
          margin: 0 auto;
          font-size: clamp(42px, 4.7vw, 64px);
          font-weight: 400;
          line-height: 1.02;
          letter-spacing: -0.035em;
          text-wrap: balance;
        }

        .numo-process-header p {
          max-width: 590px;
          margin: 24px auto 0;
          color: #736b63;
          font-size: 15px;
          line-height: 1.65;
        }

        /* BOARD */

        .process-board-wrapper {
          position: relative;
          width: 100%;
        }

        .process-board {
          position: relative;
          display: grid;
          min-height: 500px;
          grid-template-columns: 295px 1fr 295px;
          grid-template-rows: 1fr 1fr;
          gap: 12px;
          border: 12px solid #d9d6cc;
          border-radius: 26px;
          background: #d9d6cc;
        }

        /* CENTER */

        .process-center {
          position: absolute;
          inset: 0 307px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          background: #dfdcd2;
        }

        .process-pixel-grid {
          display: grid;
          width: 405px;
          grid-template-columns: repeat(12, 1fr);
          gap: 7px;
          opacity: 0.86;
        }

        .process-pixel {
          width: 22px;
          height: 22px;
          border-radius: 6px;
          background: #c4c0b1;
          transition:
            transform 0.25s ease,
            opacity 0.25s ease,
            background 0.25s ease;
        }

        .pixel-hidden {
          opacity: 0.12;
        }

        /*
          ONLY CHANGE:
          yellow pixel movement is slower
        */

        .pixel-yellow {
          background: #cefa74;
          opacity: 1;
          animation: yellowPixelFloat 4s ease-in-out infinite;
          box-shadow: 0 0 24px rgba(206, 250, 116, 0.28);
        }

        .pixel-yellow:nth-child(2n) {
          animation-delay: -0.6s;
        }

        .pixel-yellow:nth-child(3n) {
          animation-delay: -1.2s;
        }

        .pixel-yellow:nth-child(5n) {
          animation-delay: -1.8s;
        }

        .pixel-yellow:nth-child(7n) {
          animation-delay: -2.4s;
        }

        @keyframes yellowPixelFloat {
          0%,
          100% {
            transform: translate3d(0, 0, 0);
          }

          20% {
            transform: translate3d(17px, -9px, 0);
          }

          40% {
            transform: translate3d(-11px, -15px, 0);
          }

          60% {
            transform: translate3d(-16px, 12px, 0);
          }

          80% {
            transform: translate3d(13px, 15px, 0);
          }
        }

        /* CENTER LOGO */

        .process-center-logo {
          position: absolute;
          top: 50%;
          left: 50%;
          z-index: 5;
          display: flex;
          align-items: center;
          gap: 13px;
          border-radius: 19px;
          background: #1d1815;
          padding: 13px 18px;
          color: #ffffff;
          transform: translate(-50%, -50%);
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
        }

        .process-logo-symbol {
          position: relative;
          width: 36px;
          height: 36px;
        }

        .process-logo-symbol span {
          position: absolute;
          width: 13px;
          height: 13px;
          border-radius: 50%;
          background: #ffffff;
        }

        .process-logo-symbol span:nth-child(1) {
          top: 0;
          left: 11px;
        }

        .process-logo-symbol span:nth-child(2) {
          top: 10px;
          left: 0;
        }

        .process-logo-symbol span:nth-child(3) {
          top: 10px;
          right: 0;
        }

        .process-logo-symbol span:nth-child(4) {
          bottom: 0;
          left: 11px;
        }

        .process-logo-symbol span:nth-child(5) {
          top: 11px;
          left: 11px;
        }

        .process-center-text {
          display: flex;
          flex-direction: column;
        }

        .process-center-text strong {
          font-size: 15px;
          font-weight: 700;
          line-height: 1;
          letter-spacing: -0.035em;
        }

        .process-center-text small {
          margin-top: 4px;
          color: #cefa74;
          font-family:
            ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
          font-size: 6px;
          font-weight: 700;
          letter-spacing: 0.18em;
        }

        .process-center-label {
          position: absolute;
          bottom: 0;
          left: 50%;
          border-radius: 6px 6px 0 0;
          background: #f5f3ed;
          padding: 7px 15px;
          color: #877667;
          font-family:
            ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
          font-size: 8px;
          font-weight: 700;
          letter-spacing: 0.1em;
          transform: translateX(-50%);
        }

        /* CONNECTORS */

        .connector {
          position: absolute;
          z-index: 3;
          width: 62px;
          height: 100px;
          border: 1px dashed #8d867a;
        }

        .connector-top-left {
          top: 90px;
          left: -1px;
          border-top: 0;
          border-left: 0;
          border-radius: 0 0 30px 0;
        }

        .connector-top-right {
          top: 90px;
          right: -1px;
          border-top: 0;
          border-right: 0;
          border-radius: 0 0 0 30px;
        }

        .connector-bottom-left {
          bottom: 90px;
          left: -1px;
          border-bottom: 0;
          border-left: 0;
          border-radius: 0 30px 0 0;
        }

        .connector-bottom-right {
          right: -1px;
          bottom: 90px;
          border-right: 0;
          border-bottom: 0;
          border-radius: 30px 0 0 0;
        }

        /* CARDS */

        .process-card {
          position: relative;
          z-index: 5;
          display: flex;
          min-height: 238px;
          overflow: hidden;
          padding: 20px 22px;
          flex-direction: column;
          border: 1px solid #cbc6ba;
          border-radius: 17px;
          background: #f4f2ed;
          box-shadow: 0 10px 30px rgba(50, 42, 34, 0.035);
          transition:
            transform 0.4s cubic-bezier(0.22, 1, 0.36, 1),
            background 0.3s ease,
            box-shadow 0.3s ease;
        }

        .process-card:hover {
          z-index: 10;
          background: #fbfaf7;
          transform: translateY(-5px);
          box-shadow: 0 18px 40px rgba(50, 42, 34, 0.08);
        }

        .process-card-discover {
          grid-column: 1;
          grid-row: 1;
        }

        .process-card-design {
          grid-column: 3;
          grid-row: 1;
        }

        .process-card-develop {
          grid-column: 1;
          grid-row: 2;
        }

        .process-card-launch {
          grid-column: 3;
          grid-row: 2;
        }

        .process-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 14px;
          color: #8a7b6a;
        }

        .process-card-top > span:first-child {
          color: #b9d900;
          font-family:
            ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
          font-size: 10px;
          font-weight: 800;
        }

        .process-icon-bubble {
          display: grid;
          width: 36px;
          height: 36px;
          place-items: center;
          border-radius: 50%;
          background: #cefa74;
          color: #29231d;
        }

        .process-card-copy h3 {
          margin: 0 0 7px;
          color: #28231f;
          font-size: 19px;
          font-weight: 650;
          letter-spacing: -0.04em;
        }

        .process-card-copy p {
          max-width: 250px;
          margin: 0;
          color: #776e66;
          font-size: 11.5px;
          line-height: 1.5;
        }

        .process-card-preview {
          margin-top: auto;
        }

        /* DISCOVER */

        .discover-preview {
          padding-top: 14px;
        }

        .mini-search {
          display: flex;
          align-items: center;
          gap: 9px;
          border: 1px solid #d9d4c8;
          border-radius: 9px;
          background: #ffffff;
          padding: 10px 11px;
          color: #5f5852;
          font-size: 9px;
        }

        .discover-tech {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-top: 9px;
        }

        .discover-tech-item {
          display: flex;
          width: 40px;
          height: 40px;
          align-items: center;
          justify-content: center;
          border: 1px solid #ded9ce;
          border-radius: 11px;
          background: #ffffff;
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.035);
          transition:
            transform 0.3s ease,
            box-shadow 0.3s ease;
        }

        .discover-tech-item:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 22px rgba(0, 0, 0, 0.08);
        }

        .discover-tech-item svg {
          width: 22px;
          height: 22px;
        }

        .typescript-logo {
          display: flex;
          width: 22px;
          height: 22px;
          align-items: flex-end;
          justify-content: flex-end;
          border-radius: 3px;
          background: #3178c6;
          padding: 2px;
          color: #ffffff;
          font-size: 9px;
          font-weight: 800;
          line-height: 1;
        }

        /* DESIGN */

        .design-preview {
          padding-top: 12px;
        }

        .design-window {
          overflow: hidden;
          border: 1px solid #d5d1c5;
          border-radius: 10px;
          background: white;
        }

        .design-window-top {
          display: flex;
          gap: 4px;
          padding: 6px;
          border-bottom: 1px solid #ece8df;
        }

        .design-window-top span {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #cec9bc;
        }

        .design-screen {
          display: flex;
          min-height: 76px;
        }

        .design-sidebar {
          width: 28px;
          border-right: 1px solid #ece8df;
          background: #f6f5f1;
        }

        .design-content {
          flex: 1;
          padding: 10px;
        }

        .design-heading {
          width: 60%;
          height: 7px;
          border-radius: 3px;
          background: #bdb8ac;
        }

        .design-copy {
          width: 80%;
          height: 4px;
          margin-top: 6px;
          border-radius: 2px;
          background: #dedbd3;
        }

        .design-boxes {
          display: flex;
          gap: 7px;
          margin-top: 11px;
        }

        .design-boxes span {
          width: 45%;
          height: 30px;
          border-radius: 5px;
          background: #e7e4dc;
        }

        /* DEVELOP */

        .develop-preview {
          padding-top: 12px;
        }

        .code-window {
          border-radius: 9px;
          background: #1c1917;
          padding: 11px;
          color: #d2cec6;
          font-family:
            ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
          font-size: 7px;
          line-height: 1.8;
        }

        .code-line {
          white-space: nowrap;
        }

        .code-number {
          display: inline-block;
          width: 24px;
          color: #615c57;
        }

        .code-purple {
          color: #c4afff;
        }

        .code-green {
          color: #cefa74;
        }

        /* LAUNCH */

        .launch-preview {
          padding-top: 12px;
        }

        .launch-browser {
          overflow: hidden;
          border: 1px solid #d5d1c5;
          border-radius: 10px;
          background: #ffffff;
        }

        .launch-browser-bar {
          display: flex;
          gap: 4px;
          padding: 6px;
          border-bottom: 1px solid #ece8df;
        }

        .launch-browser-bar span {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #cec9bc;
        }

        .launch-browser-content {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 14px 11px;
        }

        .launch-globe {
          display: grid;
          width: 42px;
          height: 42px;
          flex-shrink: 0;
          place-items: center;
          border-radius: 10px;
          background: #cefa74;
          color: #171717;
        }

        .launch-browser-content > div:nth-child(2) {
          display: flex;
          min-width: 0;
          flex: 1;
          flex-direction: column;
        }

        .launch-browser-content strong {
          color: #2e2924;
          font-size: 10px;
        }

        .launch-browser-content small {
          margin-top: 3px;
          color: #8d857d;
          font-size: 7px;
        }

        /* BOTTOM */

        .process-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 30px;
          margin-top: 26px;
        }

        .process-bottom p {
          margin: 0;
          color: #766d64;
          font-size: 12px;
        }

        .process-bottom a {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          border-radius: 999px;
          background: #171717;
          padding: 13px 18px;
          color: #ffffff;
          font-size: 11px;
          font-weight: 600;
          text-decoration: none;
        }

        .process-bottom a svg {
          color: #cefa74;
          transition: transform 0.3s ease;
        }

        .process-bottom a:hover svg {
          transform: translate(3px, -3px);
        }

        /* TABLET */

        @media (max-width: 950px) and (min-width: 621px) {
          .numo-process-system {
            padding: 64px 18px 48px;
          }

          .process-board {
            grid-template-columns: 1fr 1fr;
            grid-template-rows: auto;
          }

          .process-center {
            position: relative;
            inset: auto;
            grid-column: 1 / -1;
            grid-row: 2;
            min-height: 370px;
            border-radius: 15px;
          }

          .process-card-discover {
            grid-column: 1;
            grid-row: 1;
          }

          .process-card-design {
            grid-column: 2;
            grid-row: 1;
          }

          .process-card-develop {
            grid-column: 1;
            grid-row: 3;
          }

          .process-card-launch {
            grid-column: 2;
            grid-row: 3;
          }

          .connector {
            display: none;
          }
        }

        /* MOBILE */

        @media (max-width: 620px) {
          .numo-process-system {
            padding: 80px 12px 90px;
          }

          .numo-process-container {
            width: 100%;
            max-width: 100%;
          }

          .numo-process-header {
            max-width: 100%;
            margin: 0 auto 50px;
            padding: 0;
            text-align: center;
          }

          .numo-process-eyebrow {
            gap: 10px;
            margin-bottom: 26px;
            border: 1px solid #d2cec5;
            border-radius: 6px;
            background: rgba(255, 255, 255, 0.34);
            padding: 10px 14px;
            color: #3f3b36;
            font-size: 9px;
            font-weight: 700;
            letter-spacing: 0.2em;
          }

          .numo-process-eyebrow > span {
            width: 9px;
            height: 9px;
          }

          .numo-process-header h2 {
            max-width: 350px;
            margin: 0 auto;
            font-size: 36px;
            font-weight: 400;
            line-height: 1.08;
            letter-spacing: -0.035em;
            text-wrap: balance;
          }

          .numo-process-header h2 br {
            display: none;
          }

          .numo-process-header p {
            max-width: 350px;
            margin: 28px auto 0;
            color: #555555;
            font-size: 14px;
            line-height: 1.35;
          }

          .process-board-wrapper {
            position: relative;
            width: 100%;
            height: 300px;
            margin: 0 auto;
            overflow: visible;
          }

          .process-board {
            position: relative;
            top: auto;
            left: auto;

            display: grid;

            width: 100%;
            height: 300px;
            min-height: 300px;

            grid-template-columns: 29% 42% 29%;
            grid-template-rows: repeat(2, minmax(0, 1fr));

            gap: 5px;

            border: 5px solid #d9d6cc;
            border-radius: 22px;

            background: #d9d6cc;

            transform: none;
          }

          .process-center {
            position: absolute;

            top: 5px;
            right: calc(29% + 5px);
            bottom: 5px;
            left: calc(29% + 5px);

            display: flex;

            min-height: 0;

            align-items: center;
            justify-content: center;

            overflow: hidden;

            border-radius: 7px;

            background: #dfdcd2;
          }

          .process-card-discover {
            grid-column: 1;
            grid-row: 1;
          }

          .process-card-design {
            grid-column: 3;
            grid-row: 1;
          }

          .process-card-develop {
            grid-column: 1;
            grid-row: 2;
          }

          .process-card-launch {
            grid-column: 3;
            grid-row: 2;
          }

          .process-card {
            min-width: 0;
            min-height: 0;
            height: auto;

            padding: 10px;

            border-radius: 10px;

            box-shadow: none;
          }

          .process-card:hover {
            transform: none;
            box-shadow: none;
          }

          .process-card-top {
            margin-bottom: 7px;
          }

          .process-card-top > span:first-child {
            font-size: 6px;
          }

          .process-icon-bubble {
            width: 21px;
            height: 21px;
          }

          .process-icon-bubble svg {
            width: 10px;
            height: 10px;
          }

          .process-card-copy h3 {
            margin-bottom: 4px;
            font-size: 10px;
            line-height: 1;
          }

          .process-card-copy p {
            max-width: 100%;
            font-size: 5.5px;
            line-height: 1.35;
          }

          .process-card-preview {
            margin-top: auto;
          }

          .discover-preview {
            padding-top: 6px;
          }

          .mini-search {
            gap: 4px;
            border-radius: 5px;
            padding: 5px;
            font-size: 4.5px;
          }

          .mini-search svg {
            width: 7px;
            height: 7px;
          }

          .discover-tech {
            gap: 3px;
            margin-top: 4px;
          }

          .discover-tech-item {
            width: 18px;
            height: 18px;

            border-radius: 5px;

            box-shadow: none;
          }

          .discover-tech-item svg {
            width: 10px;
            height: 10px;
          }

          .typescript-logo {
            width: 10px;
            height: 10px;

            padding: 1px;

            font-size: 4px;
          }

          .design-preview {
            padding-top: 5px;
          }

          .design-window {
            border-radius: 5px;
          }

          .design-window-top {
            gap: 2px;
            padding: 3px;
          }

          .design-window-top span {
            width: 3px;
            height: 3px;
          }

          .design-screen {
            min-height: 38px;
          }

          .design-sidebar {
            width: 14px;
          }

          .design-content {
            padding: 5px;
          }

          .design-heading {
            height: 4px;
          }

          .design-copy {
            height: 2px;
            margin-top: 3px;
          }

          .design-boxes {
            gap: 3px;
            margin-top: 5px;
          }

          .design-boxes span {
            height: 15px;
            border-radius: 3px;
          }

          .develop-preview {
            padding-top: 5px;
          }

          .code-window {
            border-radius: 5px;

            padding: 6px;

            font-size: 3.8px;
            line-height: 1.7;
          }

          .code-number {
            width: 12px;
          }

          .launch-preview {
            padding-top: 5px;
          }

          .launch-browser {
            border-radius: 5px;
          }

          .launch-browser-bar {
            gap: 2px;
            padding: 3px;
          }

          .launch-browser-bar span {
            width: 3px;
            height: 3px;
          }

          .launch-browser-content {
            gap: 5px;
            padding: 7px 5px;
          }

          .launch-globe {
            width: 20px;
            height: 20px;

            border-radius: 5px;
          }

          .launch-globe svg {
            width: 11px;
            height: 11px;
          }

          .launch-browser-content strong {
            font-size: 5px;
          }

          .launch-browser-content small {
            margin-top: 1px;
            font-size: 3.5px;
          }

          .launch-browser-content > svg {
            width: 7px;
            height: 7px;
          }

          .process-pixel-grid {
            width: 126px;

            grid-template-columns: repeat(12, 1fr);

            gap: 3px;

            opacity: 0.86;
          }

          .process-pixel {
            width: 7px;
            height: 7px;

            border-radius: 2px;
          }

          .pixel-yellow {
            box-shadow: 0 0 10px rgba(206, 250, 116, 0.25);
          }

          .process-center-logo {
            gap: 5px;

            border-radius: 8px;

            padding: 6px 8px;
          }

          .process-logo-symbol {
            width: 16px;
            height: 16px;
          }

          .process-logo-symbol span {
            width: 6px;
            height: 6px;
          }

          .process-logo-symbol span:nth-child(1) {
            top: 0;
            left: 5px;
          }

          .process-logo-symbol span:nth-child(2) {
            top: 5px;
            left: 0;
          }

          .process-logo-symbol span:nth-child(3) {
            top: 5px;
            right: 0;
          }

          .process-logo-symbol span:nth-child(4) {
            bottom: 0;
            left: 5px;
          }

          .process-logo-symbol span:nth-child(5) {
            top: 5px;
            left: 5px;
          }

          .process-center-text strong {
            font-size: 8px;
          }

          .process-center-text small {
            margin-top: 2px;
            font-size: 3px;
          }

          .process-center-label {
            bottom: 4px;

            border-radius: 3px;

            padding: 3px 6px;

            font-size: 3.5px;
          }

          .connector {
            display: none;
          }

          .process-bottom {
            display: none;
          }
        }

        /* SMALL PHONES */

        @media (max-width: 480px) {
          .process-board-wrapper {
            height: 300px;
          }

          .process-board {
            height: 300px;
            min-height: 300px;
          }
        }

        @media (max-width: 420px) {
          .numo-process-header h2 {
            font-size: 34px;
          }

          .process-board-wrapper {
            height: 295px;
          }

          .process-board {
            height: 295px;
            min-height: 295px;
          }

          .process-card {
            padding: 9px;
          }

          .process-pixel-grid {
            width: 118px;
          }

          .process-pixel {
            width: 6.5px;
            height: 6.5px;
          }
        }

        @media (max-width: 390px) {
          .numo-process-header h2 {
            font-size: 32px;
          }

          .numo-process-header p {
            max-width: 320px;
            font-size: 13px;
          }

          .process-board-wrapper {
            height: 285px;
          }

          .process-board {
            height: 285px;
            min-height: 285px;
          }

          .process-card {
            padding: 8px;
          }

          .process-card-copy h3 {
            font-size: 9px;
          }

          .process-card-copy p {
            font-size: 5px;
          }

          .process-pixel-grid {
            width: 110px;
          }

          .process-pixel {
            width: 6px;
            height: 6px;
          }
        }

        @media (max-width: 620px) {
          .pixel-yellow {
            animation: none;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .process-card,
          .process-pixel,
          .process-bottom a svg {
            animation: none;
            transition: none;
          }

          .pixel-yellow {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
