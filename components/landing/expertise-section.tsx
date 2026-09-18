"use client";

import { useState } from "react";

type ExpertiseCard = {
  title: string;
  video: string;
  poster?: string;
  description: string;
  services: string[];
};

const expertiseCards: ExpertiseCard[] = [
  {
    title: "Product experience",
    video: "/expertise/product-experience.mp4",
    poster: "/expertise/product-experience.png",
    description:
      "We design intuitive digital products and interfaces that make complex ideas feel simple, clear and enjoyable to use.",
    services: [
      "Product design",
      "SaaS interfaces",
      "Dashboards",
      "User experience",
    ],
  },
  {
    title: "Fintech & digital finance",
    video: "/expertise/fintech-solutions.mp4",
    poster: "/expertise/fintech-solutions.png",
    description:
      "We shape clear, trustworthy websites and product experiences for fintech, payments and modern financial platforms.",
    services: [
      "Fintech websites",
      "Platform design",
      "Responsive development",
      "Conversion strategy",
    ],
  },
  {
    title: "Websites for business",
    video: "/expertise/tech-websites.mp4",
    poster: "/expertise/tech-websites.png",
    description:
      "We build distinctive, responsive websites that help businesses explain what they do, earn trust and turn attention into action.",
    services: [
      "Technology websites",
      "Landing pages",
      "Website redesign",
      "Performance",
    ],
  },
  {
    title: "Brand & digital experience",
    video: "/expertise/brand-experience.mp4",
    description:
      "We turn brand direction into a consistent digital experience across websites, campaigns, content and customer touchpoints.",
    services: [
      "Digital direction",
      "Visual identity",
      "Website experience",
      "Creative development",
    ],
  },
];

export function ExpertiseSection() {
  const [openCard, setOpenCard] = useState<number | null>(null);

  const toggleCard = (index: number) => {
    setOpenCard((current) => (current === index ? null : index));
  };

  return (
    <section id="services" className="expertise-section">
      <div className="expertise-container">
        <div className="expertise-heading">
          <div className="expertise-badge">
            <span className="expertise-badge-dot" />
            <span>Our expertise</span>
          </div>

          <h2>
            We lead when your challenge
            <br />
            fits these expertise areas
          </h2>

          <p>
            Building from scratch or redesigning—we combine strategy, design and
            development to bring your vision to life.
          </p>
        </div>

        <div className="expertise-grid">
          {expertiseCards.map((card, index) => {
            const isOpen = openCard === index;

            return (
              <article
                className={`expertise-card ${
                  isOpen ? "expertise-card-open" : ""
                }`}
                key={card.title}
              >
                <div className="card-title-row">
                  <h3>{card.title}</h3>

                  <button
                    type="button"
                    onClick={() => toggleCard(index)}
                    aria-label={
                      isOpen
                        ? `Close ${card.title} details`
                        : `Open ${card.title} details`
                    }
                    aria-expanded={isOpen}
                  >
                    <span>{isOpen ? "×" : "+"}</span>
                  </button>
                </div>

                <div className="expertise-media">
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    poster={card.poster}
                    aria-label={`${card.title} animated preview`}
                    onCanPlay={(event) => {
                      event.currentTarget.play().catch(() => {
                        // Muted autoplay can occasionally be delayed by
                        // the browser. The loop remains enabled.
                      });
                    }}
                  >
                    <source src={card.video} type="video/mp4" />
                  </video>
                </div>

                <div
                  className={`card-details ${
                    isOpen ? "card-details-visible" : ""
                  }`}
                >
                  <div className="details-content">
                    <span className="details-number">0{index + 1} / 04</span>

                    <h4>{card.title}</h4>
                    <p>{card.description}</p>

                    <div className="service-list">
                      {card.services.map((service) => (
                        <span key={service}>{service}</span>
                      ))}
                    </div>

                    <a href="/contact">
                      Start a project
                      <span>↗</span>
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      <style jsx global>{`
        .expertise-section {
          background: #f4f4f1;
          padding: 96px 28px 110px;
          color: #111111;
        }

        .expertise-container {
          width: min(1400px, 100%);
          margin: 0 auto;
        }

        .expertise-heading {
          margin: 0 auto 70px;
          text-align: center;
        }

        .expertise-badge {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          margin-bottom: 26px;
          border: 1px solid #d2cec5;
          border-radius: 6px;
          background: rgba(255, 255, 255, 0.34);
          padding: 10px 14px;
          font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #3f3b36;
        }

        .expertise-badge-dot {
          width: 9px;
          height: 9px;
          flex-shrink: 0;
          border-radius: 2px;
          background: #d9ff25;
        }

        .expertise-heading h2 {
          margin: 0;
          font-size: clamp(43px, 5vw, 72px);
          font-weight: 700;
          line-height: 0.98;
          letter-spacing: -0.055em;
        }

        .expertise-heading p {
          max-width: 520px;
          margin: 28px auto 0;
          color: #555555;
          font-size: 16px;
          line-height: 1.35;
        }

        .expertise-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 14px;
        }

        .expertise-card {
          position: relative;
          height: 380px;
          overflow: hidden;
          border: 1px solid #d7d7d4;
          border-radius: 28px;
          background: #e9e9e7;
          isolation: isolate;
          transition:
            transform 0.4s cubic-bezier(0.22, 1, 0.36, 1),
            box-shadow 0.4s ease;
        }

        .expertise-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 22px 50px rgba(0, 0, 0, 0.1);
        }

        .card-title-row {
          position: absolute;
          top: 0;
          right: 0;
          left: 0;
          z-index: 5;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 22px;
          pointer-events: none;
        }

        .card-title-row h3 {
          margin: 0;
          font-size: clamp(21px, 2vw, 29px);
          font-weight: 700;
          letter-spacing: -0.035em;
        }

        .card-title-row button {
          display: grid;
          width: 46px;
          height: 46px;
          padding: 0;
          place-items: center;
          border: 0;
          border-radius: 14px;
          background: white;
          box-shadow: 0 6px 15px rgba(0, 0, 0, 0.12);
          color: #111111;
          cursor: pointer;
          pointer-events: auto;
          transition:
            transform 0.35s ease,
            background 0.35s ease,
            color 0.35s ease;
        }

        .card-title-row button:hover {
          transform: rotate(90deg);
          background: #111111;
          color: white;
        }

        .card-title-row button span {
          display: block;
          font-size: 26px;
          font-weight: 400;
          line-height: 1;
        }

        .expertise-media {
          position: absolute;
          inset: 75px 0 0;
          z-index: 1;
          display: flex;
          align-items: flex-end;
          justify-content: center;
          overflow: hidden;
        }

        .expertise-media video {
          width: 100%;
          height: 100%;
          object-fit: contain;
          object-position: center bottom;
          transition: transform 0.8s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .expertise-card:hover .expertise-media video {
          transform: scale(1.035);
        }

        .card-details {
          position: absolute;
          inset: 0;
          z-index: 4;
          visibility: hidden;
          background: #111111;
          color: white;
          opacity: 0;
          transform: translateY(100%);
          transition:
            opacity 0.45s ease,
            transform 0.55s cubic-bezier(0.22, 1, 0.36, 1),
            visibility 0.55s;
        }

        .card-details-visible {
          visibility: visible;
          opacity: 1;
          transform: translateY(0);
        }

        .details-content {
          display: flex;
          height: 100%;
          padding: 80px 26px 25px;
          flex-direction: column;
        }

        .details-number {
          color: #858585;
          font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
          font-size: 10px;
          letter-spacing: 0.12em;
        }

        .details-content h4 {
          margin: auto 0 12px;
          font-size: clamp(27px, 3vw, 42px);
          line-height: 1;
          letter-spacing: -0.05em;
        }

        .details-content p {
          max-width: 460px;
          margin: 0;
          color: #b5b5b5;
          font-size: 13px;
          line-height: 1.5;
        }

        .service-list {
          display: flex;
          flex-wrap: wrap;
          gap: 7px;
          margin-top: 20px;
        }

        .service-list > span {
          border: 1px solid #424242;
          border-radius: 999px;
          padding: 7px 10px;
          color: #d5d5d5;
          font-size: 9px;
        }

        .details-content a {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: 18px;
          border-top: 1px solid #3b3b3b;
          padding-top: 15px;
          color: white;
          font-size: 12px;
          font-weight: 600;
          text-decoration: none;
        }

        @media (max-width: 800px) {
          .expertise-section {
            padding: 80px 18px 90px;
          }

          .expertise-heading {
            margin-bottom: 50px;
          }

          .expertise-heading h2 br {
            display: none;
          }

          .expertise-grid {
            grid-template-columns: 1fr;
          }

          .expertise-card {
            height: 340px;
            border-radius: 22px;
          }

          .card-title-row {
            padding: 18px;
          }

          .card-title-row button {
            width: 42px;
            height: 42px;
          }
        }

        @media (max-width: 480px) {
          .expertise-section {
            padding-right: 12px;
            padding-left: 12px;
          }

          .expertise-heading h2 {
            font-size: 42px;
          }

          .expertise-heading p {
            font-size: 14px;
          }

          .expertise-card {
            height: 300px;
          }

          .card-title-row h3 {
            max-width: 75%;
            font-size: 20px;
          }

          .expertise-media {
            inset: 68px 0 0;
          }

          .details-content {
            padding: 72px 20px 20px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .expertise-card,
          .expertise-media video,
          .card-details,
          .card-title-row button {
            transition: none;
          }
        }
      `}</style>
    </section>
  );
}
