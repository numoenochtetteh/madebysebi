"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Code2,
  Compass,
  Megaphone,
  Palette,
  Search,
} from "lucide-react";

const CHANGE_INTERVAL = 5500;
const TRANSITION_DURATION = 700;

const services = [
  {
    name: "Consultation & Audits",
    mobileName: "Consultation",
    image: "/services/consultation.webp",
    icon: BarChart3,
    title: "Consultation",
    secondTitle: "& Website Audits",
    description:
      "We review your website, identify design and performance problems, and provide a clear plan for improving your digital presence.",
    accent: "#2563eb",
  },
  {
    name: "Digital Marketing",
    mobileName: "Marketing",
    image: "/services/marketing.webp",
    icon: Megaphone,
    title: "Digital Marketing",
    secondTitle: "& Growth",
    description:
      "We help your business reach the right audience through focused campaigns, clear messaging and conversion-driven digital experiences.",
    accent: "#2563eb",
  },
  {
    name: "UX/UI",
    mobileName: "UX/UI",
    image: "/services/ui-ux.jpg",
    icon: Compass,
    title: "UX/UI",
    secondTitle: "& Product Design",
    description:
      "We create clear and intuitive digital experiences that make websites and applications easier for your customers to understand and use.",
    accent: "#ef476f",
  },
  {
    name: "SEO & GEO",
    mobileName: "SEO & GEO",
    image: "/services/seo-custom.png",
    icon: Search,
    title: "SEO & GEO",
    secondTitle: "& Search Visibility",
    description:
      "We improve your website structure, content and performance so customers can discover your business through search engines and AI platforms.",
    accent: "#ff5a2a",
  },
  {
    name: "Web Design & Development",
    mobileName: "Web Design",
    image: "/services/web-design-custom.png",
    icon: Code2,
    title: "Web Design",
    secondTitle: "& Development",
    description:
      "We design and develop fast, responsive websites that build trust, communicate your value and turn visitors into enquiries.",
    accent: "#ff5a2a",
  },
  {
    name: "Branding & Visual Design",
    mobileName: "Branding",
    image: "/services/branding-custom.png",
    icon: Palette,
    title: "Branding",
    secondTitle: "& Visual Design",
    description:
      "We create distinctive visual identities that help your business look professional, communicate clearly and remain memorable.",
    accent: "#ff5a2a",
  },
];

export function ServicesShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isChanging, setIsChanging] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const transitionTimeoutRef = useRef<number | null>(null);

  const activeService = services[activeIndex];
  const ActiveIcon = activeService.icon;

  const changeService = useCallback(
    (nextIndex: number) => {
      if (nextIndex === activeIndex || isChanging) return;

      setIsChanging(true);

      if (transitionTimeoutRef.current !== null) {
        window.clearTimeout(transitionTimeoutRef.current);
      }

      transitionTimeoutRef.current = window.setTimeout(() => {
        setActiveIndex(nextIndex);
        setIsChanging(false);
        transitionTimeoutRef.current = null;
      }, TRANSITION_DURATION / 2);
    },
    [activeIndex, isChanging],
  );

  useEffect(() => {
    if (isPaused || isChanging) return;

    const interval = window.setInterval(() => {
      const nextIndex = (activeIndex + 1) % services.length;

      changeService(nextIndex);
    }, CHANGE_INTERVAL);

    return () => window.clearInterval(interval);
  }, [activeIndex, changeService, isChanging, isPaused]);

  useEffect(() => {
    return () => {
      if (transitionTimeoutRef.current !== null) {
        window.clearTimeout(transitionTimeoutRef.current);
      }
    };
  }, []);

  return (
    <section
      id="services"
      className="overflow-hidden bg-[#f4f4f1] py-20 text-black sm:py-24 lg:py-28"
    >
      <style jsx>{`
        /* ======================================================
           CONTENT ENTRANCE
        ====================================================== */

        .service-content-enter {
          animation: serviceContentEnter 700ms cubic-bezier(0.22, 1, 0.36, 1)
            both;
        }

        @keyframes serviceContentEnter {
          from {
            opacity: 0;
            transform: translateY(22px);
            filter: blur(5px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
            filter: blur(0);
          }
        }

        /* ======================================================
           PROGRESS
        ====================================================== */

        .service-progress {
          animation: serviceProgress ${CHANGE_INTERVAL}ms linear forwards;
          transform-origin: left;
        }

        @keyframes serviceProgress {
          from {
            transform: scaleX(0);
          }

          to {
            transform: scaleX(1);
          }
        }

        /* ======================================================
           HEADER BADGE
        ====================================================== */

        .services-eyebrow {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 9px;

          border: 1px solid #d4cec1;
          border-radius: 5px;

          padding: 8px 12px;

          color: #5f574f;

          font-family:
            ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;

          font-size: 9px;
          font-weight: 700;

          letter-spacing: 0.16em;
          text-transform: uppercase;
        }

        .services-eyebrow-dot {
          display: block;

          width: 8px;
          height: 8px;

          flex-shrink: 0;

          border-radius: 2px;

          background: #cefa74;
        }

        @media (max-width: 600px) {
          .services-eyebrow {
            gap: 7px;

            padding: 6px 9px;

            font-size: 7px;
          }

          .services-eyebrow-dot {
            width: 7px;
            height: 7px;
          }
        }

        /* ======================================================
           REDUCED MOTION
        ====================================================== */

        @media (prefers-reduced-motion: reduce) {
          .service-content-enter,
          .service-progress {
            animation: none;
          }
        }
      `}</style>

      <div className="mx-auto w-full max-w-[1400px] px-3 sm:px-[18px] lg:px-7">
        {/* ======================================================
            SECTION HEADING
        ====================================================== */}

        <div className="mx-auto mb-14 max-w-[1250px] text-center lg:mb-16">
          <div className="mb-7">
            <span className="services-eyebrow">
              <span className="services-eyebrow-dot" />
              OUR SERVICES
            </span>
          </div>

          <h2 className="font-display text-[clamp(2.7rem,5vw,5.25rem)] font-medium leading-[1.02] tracking-[-0.035em]">
            How we help businesses grow online.
          </h2>

          <p className="mx-auto mt-8 max-w-[680px] text-base leading-relaxed text-black/65 sm:text-lg">
            Strategy, design, development and visibility — brought together to make your digital presence more useful, memorable and effective.
          </p>

          <Link
            href="#service-showcase"
            className="group mt-8 inline-flex h-12 items-center justify-center gap-3 rounded-full border border-black/15 px-7 text-sm font-medium transition-all duration-300 hover:border-black hover:bg-black hover:text-white"
          >
            Explore all services
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* ======================================================
            MAIN SERVICE SHOWCASE
        ====================================================== */}

        <div
          id="service-showcase"
          className="relative min-h-[610px] overflow-hidden rounded-[28px] sm:min-h-[650px] lg:min-h-[690px] lg:rounded-[36px]"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* ====================================================
              BACKGROUND IMAGES
          ==================================================== */}

          <div className="absolute inset-0">
            {services.map((service, index) => (
              <div
                key={service.image}
                className={`absolute inset-0 transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  index === activeIndex
                    ? "scale-100 opacity-100"
                    : "scale-[1.035] opacity-0"
                }`}
              >
                <Image
                  src={service.image}
                  alt={`${service.name} service`}
                  fill
                  priority={index === 0}
                  sizes="(max-width: 1024px) 100vw, 1600px"
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          {/* ====================================================
              IMAGE OVERLAYS
          ==================================================== */}

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/5" />

          {/* ====================================================
              ACTIVE SERVICE CONTENT
          ==================================================== */}

          <div className="absolute inset-x-0 top-0 z-20 flex min-h-[510px] items-start px-7 pb-28 pt-8 text-white sm:min-h-[550px] sm:px-10 sm:pt-10 lg:min-h-[590px] lg:items-center lg:px-14 lg:pb-32 lg:pt-10">
            <div
              key={`service-content-${activeIndex}`}
              className={`service-content-enter max-w-[570px] transition-all duration-300 ${
                isChanging
                  ? "translate-y-3 opacity-0"
                  : "translate-y-0 opacity-100"
              }`}
            >
              {/* ICON */}

              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/25 bg-white/15 backdrop-blur-md sm:h-16 sm:w-16">
                <ActiveIcon
                  className="h-6 w-6 sm:h-7 sm:w-7"
                  strokeWidth={1.5}
                />
              </div>

              {/* TITLE */}

              <h3 className="font-display text-[clamp(2.9rem,4.8vw,5.5rem)] font-medium leading-[0.98] tracking-[-0.035em]">
                <span className="block">{activeService.title}</span>

                <span className="mt-2 block font-serif font-normal italic">
                  {activeService.secondTitle}
                </span>
              </h3>

              {/* DESCRIPTION */}

              <p className="mt-7 max-w-[530px] text-base leading-[1.6] text-white/85 sm:text-lg">
                {activeService.description}
              </p>

              {/* BUTTONS */}

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="group inline-flex h-12 items-center justify-center gap-3 rounded-full px-6 text-sm font-semibold text-white transition-transform duration-300 hover:scale-[1.03]"
                  style={{
                    backgroundColor: activeService.accent,
                  }}
                >
                  Explore service
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>

                <Link
                  href="/work"
                  className="inline-flex h-12 items-center justify-center rounded-full border border-white/30 bg-white/5 px-6 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:border-white hover:bg-white hover:text-black"
                >
                  View our work
                </Link>
              </div>
            </div>
          </div>

          {/* ====================================================
              DESKTOP NAVIGATION
          ==================================================== */}

          <div className="absolute bottom-5 left-1/2 z-30 hidden w-[calc(100%-40px)] max-w-[1360px] -translate-x-1/2 rounded-full border border-white/15 bg-black/55 p-1 shadow-[0_18px_55px_rgba(0,0,0,0.22)] backdrop-blur-xl md:block lg:bottom-6">
            <div className="grid grid-cols-6">
              {services.map((service, index) => (
                <button
                  key={service.name}
                  type="button"
                  onClick={() => changeService(index)}
                  aria-label={`View ${service.name}`}
                  aria-current={activeIndex === index ? "true" : undefined}
                  className={`relative flex h-[54px] items-center justify-center overflow-hidden rounded-full px-3 text-center font-display text-[11px] font-semibold leading-tight transition-all duration-500 lg:px-4 lg:text-[13px] xl:text-sm ${
                    activeIndex === index
                      ? "bg-white text-black shadow-[0_6px_20px_rgba(0,0,0,0.15)]"
                      : "text-white/85 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  <span className="relative z-10 whitespace-nowrap">
                    {service.name}
                  </span>

                  {activeIndex === index && !isPaused && (
                    <span
                      key={`desktop-progress-${activeIndex}`}
                      className="service-progress absolute inset-x-6 bottom-1 h-[2px] rounded-full bg-black/20"
                    />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* ====================================================
              MOBILE NAVIGATION
          ==================================================== */}

          <div className="absolute inset-x-4 bottom-4 z-30 md:hidden">
            <div className="overflow-x-auto rounded-[22px] border border-white/15 bg-black/60 p-1.5 backdrop-blur-xl">
              <div className="flex min-w-max items-center gap-1">
                {services.map((service, index) => (
                  <button
                    key={service.name}
                    type="button"
                    onClick={() => changeService(index)}
                    aria-label={`View ${service.name}`}
                    aria-current={activeIndex === index ? "true" : undefined}
                    className={`relative h-11 overflow-hidden rounded-[17px] px-5 font-display text-xs font-semibold transition-all duration-500 ${
                      activeIndex === index
                        ? "bg-white text-black"
                        : "text-white/80 hover:bg-white/10"
                    }`}
                  >
                    {service.mobileName}

                    {activeIndex === index && !isPaused && (
                      <span
                        key={`mobile-progress-${activeIndex}`}
                        className="service-progress absolute inset-x-4 bottom-1 h-[2px] rounded-full bg-black/20"
                      />
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* ====================================================
              SERVICE NUMBER
          ==================================================== */}

          <div className="absolute right-7 top-7 z-20 rounded-full border border-white/20 bg-black/25 px-4 py-2 font-mono text-[10px] text-white backdrop-blur-md sm:right-10 sm:top-10">
            {String(activeIndex + 1).padStart(2, "0")} /{" "}
            {String(services.length).padStart(2, "0")}
          </div>
        </div>
      </div>
    </section>
  );
}
