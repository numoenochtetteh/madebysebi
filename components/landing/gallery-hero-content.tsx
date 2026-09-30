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

export function GalleryHeroContent() {
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

    setActiveTab((current) =>
      availableTabs.includes(current) ? current : availableTabs[0],
    );

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
  }, [isMobile]);

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
                  sizes="(max-width: 620px) 128px, 160px"
                  quality={75}
                  priority={card.className.includes("featured")}
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

    </section>
  );
}
