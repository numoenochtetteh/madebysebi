"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const showcaseImages = [
  {
    src: "/showcase/creative-workspace.jpg",
    alt: "Creative digital workspace with a laptop and tablet",
  },
  {
    src: "/showcase/coding-workspace.jpg",
    alt: "Frontend development workspace with code displayed on a laptop",
  },
  {
    src: "/showcase/product-design.jpg",
    alt: "Digital product website displayed on a laptop",
  },
  {
    src: "/showcase/web-design.jpg",
    alt: "Web design project displayed on a laptop",
  },
];

export function StudioShowcase() {
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveImage((current) => (current + 1) % showcaseImages.length);
    }, 3000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section className="studio-showcase-section">
      <div className="studio-showcase">
        {/* Left content */}
        <div className="showcase-content">
          <div>
            <span className="showcase-label">MadeBySebi</span>

            <h2>
              A creative partner
              <br />
              for your digital growth.
            </h2>

            <p>
              We design and develop professional websites that help businesses
              build trust, attract customers and create meaningful digital
              experiences.
            </p>
          </div>

          <a href="/contact" className="showcase-button">
            <span>Start a project</span>
            <span aria-hidden="true">↗</span>
          </a>
        </div>

        {/* Image carousel */}
        <div className="showcase-carousel">
          <div className="showcase-images">
            {showcaseImages.map((image, index) => (
              <div
                key={image.src}
                className={`showcase-image ${
                  activeImage === index ? "showcase-image-active" : ""
                }`}
                aria-hidden={activeImage !== index}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 800px) 100vw, 50vw"
                  priority={index === 0}
                />
              </div>
            ))}
          </div>

          <div className="showcase-controls">
            <div className="showcase-dots">
              {showcaseImages.map((image, index) => (
                <button
                  key={image.src}
                  type="button"
                  onClick={() => setActiveImage(index)}
                  className={activeImage === index ? "showcase-dot-active" : ""}
                  aria-label={`Show image ${index + 1}`}
                  aria-current={activeImage === index ? "true" : undefined}
                />
              ))}
            </div>

            <span className="showcase-count">
              {String(activeImage + 1).padStart(2, "0")} /{" "}
              {String(showcaseImages.length).padStart(2, "0")}
            </span>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .studio-showcase-section {
          background: #ffffff;
          padding: 110px 24px;
          color: #111111;
        }

        .studio-showcase {
          display: grid;
          width: min(1180px, 100%);
          min-height: 650px;
          margin: 0 auto;
          grid-template-columns: 1fr 1fr;
          overflow: hidden;
          border-radius: 28px;
          background: #f2f2f0;
        }

        .showcase-content {
          display: flex;
          padding: 58px;
          flex-direction: column;
          justify-content: space-between;
        }

        .showcase-label {
          display: block;
          margin-bottom: 26px;
          font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
        }

        .showcase-content h2 {
          max-width: 520px;
          margin: 0;
          font-size: clamp(44px, 5vw, 72px);
          font-weight: 700;
          line-height: 0.98;
          letter-spacing: -0.06em;
        }

        .showcase-content p {
          max-width: 450px;
          margin: 28px 0 0;
          color: #5e5e5e;
          font-size: 16px;
          line-height: 1.55;
        }

        .showcase-button {
          display: flex;
          width: 100%;
          align-items: center;
          justify-content: space-between;
          border-radius: 999px;
          background: #111111;
          padding: 17px 24px;
          color: #ffffff;
          font-size: 13px;
          font-weight: 600;
          text-decoration: none;
          transition:
            background 0.3s ease,
            transform 0.3s ease;
        }

        .showcase-button:hover {
          background: #333333;
          transform: translateY(-2px);
        }

        .showcase-carousel {
          position: relative;
          min-height: 650px;
          overflow: hidden;
          background: #d9d9d6;
        }

        .showcase-images {
          position: absolute;
          inset: 0;
        }

        .showcase-image {
          position: absolute;
          inset: 0;
          visibility: hidden;
          opacity: 0;
          transform: scale(1.06);
          transition:
            opacity 0.8s ease,
            transform 1.2s cubic-bezier(0.22, 1, 0.36, 1),
            visibility 0.8s;
        }

        .showcase-image-active {
          visibility: visible;
          opacity: 1;
          transform: scale(1);
        }

        .showcase-image img {
          object-fit: cover;
          object-position: center;
        }

        .showcase-controls {
          position: absolute;
          right: 25px;
          bottom: 24px;
          left: 25px;
          z-index: 5;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .showcase-dots {
          display: flex;
          align-items: center;
          gap: 7px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.88);
          padding: 9px 12px;
          backdrop-filter: blur(12px);
        }

        .showcase-dots button {
          width: 7px;
          height: 7px;
          padding: 0;
          border: 0;
          border-radius: 999px;
          background: rgba(17, 17, 17, 0.3);
          cursor: pointer;
          transition:
            width 0.3s ease,
            background 0.3s ease;
        }

        .showcase-dots button.showcase-dot-active {
          width: 24px;
          background: #111111;
        }

        .showcase-count {
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.88);
          padding: 9px 12px;
          font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
          font-size: 9px;
          font-weight: 700;
          backdrop-filter: blur(12px);
        }

        @media (max-width: 850px) {
          .studio-showcase-section {
            padding: 80px 16px;
          }

          .studio-showcase {
            grid-template-columns: 1fr;
          }

          .showcase-content {
            min-height: 530px;
            padding: 38px 30px;
          }

          .showcase-carousel {
            min-height: 620px;
          }
        }

        @media (max-width: 520px) {
          .studio-showcase-section {
            padding: 60px 12px;
          }

          .studio-showcase {
            border-radius: 20px;
          }

          .showcase-content {
            min-height: 480px;
            padding: 30px 22px;
          }

          .showcase-content h2 {
            font-size: 45px;
          }

          .showcase-content h2 br {
            display: none;
          }

          .showcase-content p {
            font-size: 14px;
          }

          .showcase-carousel {
            min-height: 520px;
          }

          .showcase-controls {
            right: 16px;
            bottom: 16px;
            left: 16px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .showcase-image,
          .showcase-button,
          .showcase-dots button {
            transition: none;
          }
        }
      `}</style>
    </section>
  );
}
