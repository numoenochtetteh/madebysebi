"use client";

import { useRef } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";

const testimonials = [
  {
    quote:
      "A premium booking experience that brings service discovery, availability, consultation and deposits into one clear customer journey.",
    name: "Forever Peng Hair",
    role: "Beauty",
    company: "Booking platform",
    initial: "F",
  },
  {
    quote:
      "A stronger digital presence for a Ghanaian manufacturer, shaped around product trust, manufacturing capability and easier buyer enquiries.",
    name: "Power Electrode Ltd",
    role: "Manufacturing",
    company: "Business website",
    initial: "P",
  },
  {
    quote:
      "A clearer logistics website that makes freight services easier to understand and gives customers a direct path to start an enquiry.",
    name: "Total Logistics",
    role: "Logistics",
    company: "Business website",
    initial: "T",
  },
  {
    quote:
      "A modern digital presence for a data and AI company, focused on authority, clear service communication and a more confident brand experience.",
    name: "Lucenex",
    role: "Data & AI",
    company: "Digital experience",
    initial: "L",
  },
];

export function TestimonialsSection() {
  const trackRef = useRef<HTMLDivElement>(null);

  const move = (direction: "prev" | "next") => {
    const track = trackRef.current;

    if (!track) return;

    const firstCard = track.querySelector<HTMLElement>(
      ".shape-testimonial-card",
    );

    const amount = firstCard
      ? firstCard.offsetWidth + 14
      : Math.min(track.clientWidth * 0.82, 500);

    track.scrollBy({
      left: direction === "next" ? amount : -amount,
      behavior: "smooth",
    });
  };

  return (
    <section className="shape-testimonials">
      <div className="shape-testimonials-shell">
        <div className="shape-testimonials-intro">
          <div className="shape-testimonials-kicker">
            <span className="shape-testimonials-dot" />
            SELECTED CLIENT WORK
          </div>

          <h2>
            Built with businesses.
            <br />
            Designed around what matters.
          </h2>

          <p>
            A selection of real projects across beauty, manufacturing, logistics
            and data — each shaped around a different business need.
          </p>

          <div className="shape-testimonials-actions">
            <a href="/contact" className="shape-testimonials-cta">
              <span>Start a project</span>
              <ArrowUpRight size={16} />
            </a>

            <div className="shape-testimonials-controls">
              <button
                type="button"
                aria-label="Previous project"
                onClick={() => move("prev")}
              >
                <ArrowLeft size={17} />
              </button>

              <button
                type="button"
                className="is-accent"
                aria-label="Next project"
                onClick={() => move("next")}
              >
                <ArrowRight size={17} />
              </button>
            </div>
          </div>
        </div>

        <div className="shape-testimonials-stage">
          <div className="shape-testimonials-track" ref={trackRef}>
            {testimonials.map((testimonial) => (
              <article
                className="shape-testimonial-card"
                key={testimonial.name}
              >
                <div className="shape-testimonial-content">
                  <div className="shape-testimonial-topline">
                    <div
                      className="shape-testimonial-stars"
                      aria-label="Five stars"
                    >
                      ★★★★★
                    </div>

                    <span className="shape-testimonial-live">LIVE WORK</span>
                  </div>

                  <p className="shape-testimonial-copy">{testimonial.quote}</p>
                </div>

                <div className="shape-testimonial-person">
                  <span className="shape-testimonial-avatar">
                    {testimonial.initial}
                  </span>

                  <div>
                    <strong>{testimonial.name}</strong>

                    <span>
                      {testimonial.role} · {testimonial.company}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        .shape-testimonials {
          position: relative;
          overflow: hidden;
          background: #f4f4f1;
          padding: 48px 0 64px;
          color: #0d0d0d;
          font-family: var(--font-inter), Inter, Arial, sans-serif;
        }

        .shape-testimonials-shell {
          display: grid;
          width: min(1460px, calc(100% - 48px));
          margin: 0 auto;
          grid-template-columns: 310px minmax(0, 1fr);
          gap: 42px;
          align-items: stretch;
        }

        .shape-testimonials-intro {
          display: flex;
          min-height: 380px;
          flex-direction: column;
          align-items: flex-start;
          padding-top: 8px;
        }

        .shape-testimonials-kicker {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          margin-bottom: 17px;
          color: #666;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.13em;
        }

        .shape-testimonials-dot {
          width: 8px;
          height: 8px;
          flex: 0 0 8px;
          border-radius: 2px;
          background: #cefa74;
        }

        .shape-testimonials-intro h2 {
          max-width: 320px;
          margin: 0;
          font-size: clamp(36px, 3vw, 48px);
          font-weight: 450;
          line-height: 1.03;
          letter-spacing: -0.05em;
        }

        .shape-testimonials-intro p {
          max-width: 295px;
          margin: 18px 0 0;
          color: #686868;
          font-size: 12px;
          line-height: 1.6;
        }

        .shape-testimonials-actions {
          display: flex;
          width: 100%;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          margin-top: auto;
        }

        .shape-testimonials-cta {
          display: inline-flex;
          align-items: center;
          gap: 14px;
          border-radius: 999px;
          background: #cefa74;
          padding: 13px 17px 13px 19px;
          color: #0d0d0d;
          font-size: 12px;
          font-weight: 650;
          text-decoration: none;
          white-space: nowrap;
          transition:
            transform 0.25s ease,
            background 0.25s ease;
        }

        .shape-testimonials-cta:hover {
          background: #c5f25f;
          transform: translateY(-2px);
        }

        .shape-testimonials-controls {
          display: flex;
          gap: 8px;
        }

        .shape-testimonials-controls button {
          display: grid;
          width: 43px;
          height: 43px;
          flex: 0 0 43px;
          place-items: center;
          border: 0;
          border-radius: 50%;
          background: #e8e8e4;
          color: #111;
          cursor: pointer;
          transition:
            transform 0.25s ease,
            background 0.25s ease;
        }

        .shape-testimonials-controls button:hover {
          transform: translateY(-2px);
        }

        .shape-testimonials-controls button.is-accent {
          background: #cefa74;
        }

        .shape-testimonials-stage {
          min-width: 0;
          overflow: hidden;
        }

        .shape-testimonials-track {
          display: flex;
          gap: 16px;
          overflow-x: auto;
          padding: 0 2px 6px;
          scroll-behavior: smooth;
          scroll-snap-type: x mandatory;
          scrollbar-width: none;
          overscroll-behavior-x: contain;
        }

        .shape-testimonials-track::-webkit-scrollbar {
          display: none;
        }

        .shape-testimonial-card {
          display: flex;
          min-width: min(430px, 64vw);
          min-height: 380px;
          flex: 0 0 min(430px, 64vw);
          flex-direction: column;
          justify-content: space-between;
          scroll-snap-align: start;
          border: 1px solid rgba(0, 0, 0, 0.025);
          border-radius: 24px;
          background: #eeeeeb;
          padding: 28px;
        }

        .shape-testimonial-content {
          display: flex;
          flex-direction: column;
        }

        .shape-testimonial-topline {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
        }

        /*
         * Replaces PROJECT 01 / PROJECT 02 / etc.
         */
        .shape-testimonial-stars {
          color: #050505;
          font-size: 17px;
          line-height: 1;
          letter-spacing: 2px;
          white-space: nowrap;
        }

        .shape-testimonial-live {
          border-radius: 999px;
          background: #cefa74;
          padding: 6px 9px;
          font-size: 8px;
          font-weight: 750;
          letter-spacing: 0.1em;
          white-space: nowrap;
        }

        .shape-testimonial-copy {
          max-width: 370px;
          margin: 30px 0 0;
          font-size: clamp(18px, 1.25vw, 22px);
          font-weight: 450;
          line-height: 1.42;
          letter-spacing: -0.03em;
        }

        .shape-testimonial-person {
          display: flex;
          align-items: center;
          gap: 13px;
          margin-top: 30px;
        }

        .shape-testimonial-avatar {
          display: grid;
          width: 46px;
          height: 46px;
          flex: 0 0 46px;
          place-items: center;
          border-radius: 9px;
          background: #cefa74;
          font-size: 18px;
          font-weight: 600;
        }

        .shape-testimonial-person > div {
          display: flex;
          min-width: 0;
          flex-direction: column;
        }

        .shape-testimonial-person strong {
          font-size: 13px;
          font-weight: 700;
          letter-spacing: -0.025em;
        }

        .shape-testimonial-person span:not(.shape-testimonial-avatar) {
          margin-top: 3px;
          color: #666;
          font-size: 11px;
          line-height: 1.4;
        }

        @media (max-width: 1050px) {
          .shape-testimonials-shell {
            grid-template-columns: 270px minmax(0, 1fr);
            gap: 28px;
          }

          .shape-testimonials-intro h2 {
            font-size: 42px;
          }

          .shape-testimonial-card {
            min-width: min(400px, 72vw);
            flex-basis: min(400px, 72vw);
          }
        }

        @media (max-width: 780px) {
          .shape-testimonials {
            padding: 54px 0 62px;
          }

          .shape-testimonials-shell {
            width: 100%;
            grid-template-columns: 1fr;
            gap: 24px;
          }

          .shape-testimonials-intro {
            min-height: auto;
            padding: 0 18px;
          }

          .shape-testimonials-kicker {
            margin-bottom: 13px;
            font-size: 9px;
          }

          .shape-testimonials-intro h2 {
            max-width: 380px;
            font-size: clamp(30px, 8.5vw, 38px);
            line-height: 1.04;
            letter-spacing: -0.05em;
          }

          .shape-testimonials-intro p {
            max-width: 390px;
            margin-top: 13px;
            font-size: 11.5px;
            line-height: 1.55;
          }

          /*
           * Button + arrows side by side on phone.
           */
          .shape-testimonials-actions {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
            margin-top: 20px;
          }

          .shape-testimonials-cta {
            gap: 10px;
            padding: 12px 15px 12px 17px;
            font-size: 11.5px;
          }

          .shape-testimonials-controls {
            flex: 0 0 auto;
            gap: 7px;
          }

          .shape-testimonials-controls button {
            width: 40px;
            height: 40px;
            flex-basis: 40px;
          }

          .shape-testimonials-stage {
            width: 100%;
            overflow: hidden;
          }

          .shape-testimonials-track {
            gap: 12px;
            padding: 0 18px 5px;
            scroll-padding-left: 18px;
          }

          /*
           * Leave part of the next card visible.
           */
          .shape-testimonial-card {
            min-width: 82vw;
            min-height: 340px;
            flex-basis: 82vw;
            border-radius: 20px;
            padding: 22px 20px;
          }

          .shape-testimonial-stars {
            font-size: 16px;
            letter-spacing: 1.5px;
          }

          .shape-testimonial-copy {
            max-width: 100%;
            margin-top: 24px;
            font-size: clamp(17px, 4.7vw, 20px);
            line-height: 1.42;
          }

          .shape-testimonial-person {
            gap: 11px;
            margin-top: 25px;
          }

          .shape-testimonial-avatar {
            width: 43px;
            height: 43px;
            flex-basis: 43px;
            font-size: 17px;
          }

          .shape-testimonial-person strong {
            font-size: 12.5px;
          }

          .shape-testimonial-person span:not(.shape-testimonial-avatar) {
            font-size: 10px;
          }
        }

        @media (max-width: 480px) {
          .shape-testimonials {
            padding: 50px 0 56px;
          }

          .shape-testimonials-intro {
            padding: 0 14px;
          }

          .shape-testimonials-intro h2 {
            max-width: 340px;
            font-size: 31px;
            line-height: 1.05;
          }

          .shape-testimonials-intro p {
            max-width: 330px;
          }

          .shape-testimonials-actions {
            width: 100%;
            gap: 8px;
          }

          .shape-testimonials-cta {
            padding: 11px 13px 11px 15px;
            font-size: 11px;
          }

          .shape-testimonials-controls button {
            width: 38px;
            height: 38px;
            flex-basis: 38px;
          }

          .shape-testimonials-track {
            gap: 10px;
            padding-right: 14px;
            padding-left: 14px;
            scroll-padding-left: 14px;
          }

          .shape-testimonial-card {
            min-width: 83vw;
            min-height: 325px;
            flex-basis: 83vw;
            border-radius: 18px;
            padding: 20px 18px;
          }

          .shape-testimonial-topline {
            align-items: center;
            flex-direction: row;
          }

          .shape-testimonial-stars {
            font-size: 15px;
            letter-spacing: 1px;
          }

          .shape-testimonial-live {
            padding: 5px 8px;
            font-size: 7px;
          }

          .shape-testimonial-copy {
            margin-top: 21px;
            font-size: 17px;
            line-height: 1.43;
          }

          .shape-testimonial-person {
            margin-top: 24px;
          }
        }

        @media (max-width: 365px) {
          .shape-testimonials-intro h2 {
            font-size: 28px;
          }

          .shape-testimonials-cta {
            padding-right: 12px;
            padding-left: 13px;
            font-size: 10.5px;
          }

          .shape-testimonials-controls button {
            width: 36px;
            height: 36px;
            flex-basis: 36px;
          }

          .shape-testimonial-card {
            min-width: 85vw;
            flex-basis: 85vw;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .shape-testimonials-track {
            scroll-behavior: auto;
          }

          .shape-testimonials-controls button,
          .shape-testimonials-cta {
            transition: none;
          }
        }
      `}</style>
    </section>
  );
}
