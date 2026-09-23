"use client";

import { useRef } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";

const testimonials = [
  {
    quote:
      "Numo Digital made the whole website process feel clear and organised. The final direction looked professional and gave the business a much stronger online presence.",
    name: "Client name",
    role: "Founder / Business owner",
    company: "Replace with real client",
    initial: "C",
  },
  {
    quote:
      "What stood out was the attention to detail. The website felt modern, responsive and much easier for customers to understand and use.",
    name: "Client name",
    role: "Company representative",
    company: "Replace with real client",
    initial: "C",
  },
  {
    quote:
      "The project moved from idea to launch with a clear process, good communication and a final result that matched the business much better.",
    name: "Client name",
    role: "Business owner",
    company: "Replace with real client",
    initial: "C",
  },
];

export function TestimonialsSection() {
  const trackRef = useRef<HTMLDivElement>(null);

  const move = (direction: "prev" | "next") => {
    const track = trackRef.current;
    if (!track) return;

    const amount = Math.min(track.clientWidth * 0.82, 560);

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
            CLIENT FEEDBACK
          </div>

          <h2>
            People love
            <br />
            the work, and
            <br />
            we love that.
          </h2>

          <p>
            A clearer, more editorial testimonial layout inspired by the
            reference you shared. Replace the sample copy with genuine client
            feedback before publishing it as real reviews.
          </p>

          <a href="/contact" className="shape-testimonials-cta">
            Start a project
            <ArrowUpRight size={17} />
          </a>

          <div className="shape-testimonials-controls">
            <button
              type="button"
              aria-label="Previous testimonials"
              onClick={() => move("prev")}
            >
              <ArrowLeft size={18} />
            </button>

            <button
              type="button"
              className="is-accent"
              aria-label="Next testimonials"
              onClick={() => move("next")}
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        <div className="shape-testimonials-stage">
          <div className="shape-testimonials-track" ref={trackRef}>
            {testimonials.map((testimonial, index) => (
              <article className="shape-testimonial-card" key={index}>
                <div>
                  <div className="shape-testimonial-topline">
                    <span className="shape-testimonial-stars" aria-hidden="true">
                      ★★★★★
                    </span>
                    <span className="shape-testimonial-sample">
                      SAMPLE · REPLACE
                    </span>
                  </div>

                  <blockquote>{testimonial.quote}</blockquote>
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
          background: #ffffff;
          padding: 112px 0 118px;
          color: #0d0d0d;
          font-family: var(--font-instrument);
        }

        .shape-testimonials-shell {
          display: grid;
          width: min(1460px, calc(100% - 48px));
          margin: 0 auto;
          grid-template-columns: 360px minmax(0, 1fr);
          gap: 44px;
          align-items: stretch;
        }

        .shape-testimonials-intro {
          display: flex;
          min-height: 560px;
          flex-direction: column;
          align-items: flex-start;
          padding: 12px 0 0;
        }

        .shape-testimonials-kicker {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          margin-bottom: 24px;
          color: #696969;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.12em;
        }

        .shape-testimonials-dot {
          width: 8px;
          height: 8px;
          border-radius: 2px;
          background: #d9ff25;
        }

        .shape-testimonials-intro h2 {
          margin: 0;
          max-width: 345px;
          font-size: clamp(52px, 4.35vw, 78px);
          font-weight: 500;
          line-height: 0.92;
          letter-spacing: -0.065em;
        }

        .shape-testimonials-intro p {
          max-width: 315px;
          margin: 27px 0 0;
          color: #696969;
          font-size: 13px;
          line-height: 1.65;
          letter-spacing: -0.015em;
        }

        .shape-testimonials-cta {
          display: inline-flex;
          align-items: center;
          gap: 18px;
          margin-top: 28px;
          border-radius: 999px;
          background: #d9ff25;
          padding: 14px 18px 14px 21px;
          color: #0d0d0d;
          font-size: 13px;
          font-weight: 650;
          text-decoration: none;
          transition:
            transform 0.25s ease,
            background 0.25s ease;
        }

        .shape-testimonials-cta:hover {
          background: #cfff00;
          transform: translateY(-2px);
        }

        .shape-testimonials-controls {
          display: flex;
          gap: 10px;
          margin-top: auto;
        }

        .shape-testimonials-controls button {
          display: grid;
          width: 52px;
          height: 52px;
          place-items: center;
          border: 0;
          border-radius: 50%;
          background: #f1f1ef;
          color: #111;
          cursor: pointer;
          transition:
            background 0.25s ease,
            transform 0.25s ease;
        }

        .shape-testimonials-controls button:hover {
          transform: translateY(-2px);
        }

        .shape-testimonials-controls button.is-accent {
          background: #d9ff25;
        }

        .shape-testimonials-stage {
          min-width: 0;
          overflow: hidden;
        }

        .shape-testimonials-track {
          display: flex;
          gap: 18px;
          overflow-x: auto;
          padding: 0 2px 8px;
          scroll-behavior: smooth;
          scroll-snap-type: x mandatory;
          scrollbar-width: none;
        }

        .shape-testimonials-track::-webkit-scrollbar {
          display: none;
        }

        .shape-testimonial-card {
          display: flex;
          min-width: min(510px, 72vw);
          min-height: 560px;
          flex: 0 0 min(510px, 72vw);
          flex-direction: column;
          justify-content: space-between;
          scroll-snap-align: start;
          border-radius: 26px;
          background: #f1f1ef;
          padding: 38px 38px 34px;
        }

        .shape-testimonial-topline {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 18px;
        }

        .shape-testimonial-stars {
          display: inline-block;
          color: #0d0d0d;
          font-size: 19px;
          letter-spacing: 0.12em;
        }

        .shape-testimonial-sample {
          border-radius: 999px;
          background: #d9ff25;
          padding: 7px 9px;
          font-size: 8px;
          font-weight: 750;
          letter-spacing: 0.1em;
          white-space: nowrap;
        }

        .shape-testimonial-card blockquote {
          max-width: 430px;
          margin: 50px 0 0;
          font-size: clamp(24px, 1.65vw, 32px);
          font-weight: 500;
          line-height: 1.34;
          letter-spacing: -0.04em;
        }

        .shape-testimonial-person {
          display: flex;
          align-items: center;
          gap: 15px;
          margin-top: 48px;
        }

        .shape-testimonial-avatar {
          display: grid;
          width: 58px;
          height: 58px;
          flex: 0 0 58px;
          place-items: center;
          border-radius: 9px;
          background: #d9ff25;
          font-size: 24px;
          font-weight: 500;
        }

        .shape-testimonial-person > div {
          display: flex;
          min-width: 0;
          flex-direction: column;
        }

        .shape-testimonial-person strong {
          font-size: 16px;
          font-weight: 650;
          letter-spacing: -0.025em;
        }

        .shape-testimonial-person span:not(.shape-testimonial-avatar) {
          margin-top: 4px;
          color: #555;
          font-size: 12px;
          line-height: 1.4;
        }

        @media (max-width: 1050px) {
          .shape-testimonials-shell {
            grid-template-columns: 300px minmax(0, 1fr);
            gap: 30px;
          }

          .shape-testimonials-intro h2 {
            font-size: 54px;
          }

          .shape-testimonial-card {
            min-width: min(470px, 76vw);
            flex-basis: min(470px, 76vw);
          }
        }

        @media (max-width: 780px) {
          .shape-testimonials {
            padding: 88px 0 92px;
          }

          .shape-testimonials-shell {
            width: 100%;
            grid-template-columns: 1fr;
            gap: 42px;
          }

          .shape-testimonials-intro {
            min-height: auto;
            padding: 0 18px;
          }

          .shape-testimonials-intro h2 {
            max-width: 520px;
            font-size: clamp(48px, 12vw, 68px);
          }

          .shape-testimonials-intro p {
            max-width: 480px;
          }

          .shape-testimonials-controls {
            margin-top: 30px;
          }

          .shape-testimonials-stage {
            overflow: visible;
          }

          .shape-testimonials-track {
            padding: 0 18px 8px;
          }

          .shape-testimonial-card {
            min-width: min(84vw, 470px);
            min-height: 500px;
            flex-basis: min(84vw, 470px);
            padding: 30px 26px 28px;
          }

          .shape-testimonial-card blockquote {
            margin-top: 40px;
            font-size: clamp(23px, 6.2vw, 30px);
          }
        }

        @media (max-width: 480px) {
          .shape-testimonials-intro h2 {
            font-size: 49px;
          }

          .shape-testimonial-card {
            min-height: 470px;
            border-radius: 22px;
          }

          .shape-testimonial-topline {
            align-items: flex-start;
            flex-direction: column-reverse;
          }

          .shape-testimonial-stars {
            font-size: 16px;
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
