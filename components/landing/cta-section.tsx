"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowUpRight, Sparkles } from "lucide-react";
import { AnimatedTetrahedron } from "./animated-tetrahedron";

export function CtaSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();

    setMousePosition({
      x: ((event.clientX - rect.left) / rect.width) * 100,
      y: ((event.clientY - rect.top) / rect.height) * 100,
    });
  };

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#f4f4f1] px-3 py-4 sm:px-[18px] lg:px-7 lg:py-6"
    >
      <style jsx>{`
        .cta-orb-one {
          animation: ctaOrbOne 8s ease-in-out infinite;
        }

        .cta-orb-two {
          animation: ctaOrbTwo 9s ease-in-out infinite;
        }

        .cta-floating-badge {
          animation: ctaFloat 4.5s ease-in-out infinite;
        }

        .cta-dot {
          animation: ctaDotPulse 2.7s ease-in-out infinite;
        }

        @keyframes ctaOrbOne {
          0%,
          100% {
            transform: translate3d(0, 0, 0) scale(1);
          }

          50% {
            transform: translate3d(30px, -25px, 0) scale(1.08);
          }
        }

        @keyframes ctaOrbTwo {
          0%,
          100% {
            transform: translate3d(0, 0, 0) scale(1);
          }

          50% {
            transform: translate3d(-25px, 22px, 0) scale(1.08);
          }
        }

        @keyframes ctaFloat {
          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-12px);
          }
        }

        @keyframes ctaDotPulse {
          0%,
          100% {
            opacity: 0.15;
            transform: scale(1);
          }

          50% {
            opacity: 0.7;
            transform: scale(1.4);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .cta-orb-one,
          .cta-orb-two,
          .cta-floating-badge,
          .cta-dot {
            animation: none;
          }
        }
      `}</style>

      <div className="mx-auto max-w-[1400px]">
        <div
          className={`relative overflow-hidden rounded-[26px] border border-black/[0.07] bg-[#eeece6] transition-all duration-1000 lg:rounded-[32px] ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-7 opacity-0"
          }`}
          onMouseMove={handleMouseMove}
        >
          {/* =====================================================
              BACKGROUND GLOWS
          ===================================================== */}

          <div className="cta-orb-one pointer-events-none absolute -left-24 top-0 h-[320px] w-[320px] rounded-full bg-[#cefa74]/25 blur-[110px]" />

          <div className="cta-orb-two pointer-events-none absolute -right-20 top-10 h-[340px] w-[340px] rounded-full bg-[#9b8aff]/15 blur-[120px]" />

          <div className="pointer-events-none absolute bottom-[-130px] left-[42%] h-[270px] w-[270px] rounded-full bg-[#ff9d6d]/10 blur-[100px]" />

          {/* =====================================================
              SPOTLIGHT
          ===================================================== */}

          <div
            className="pointer-events-none absolute inset-0 opacity-40 transition-opacity duration-300"
            style={{
              background: `radial-gradient(
                500px circle at ${mousePosition.x}% ${mousePosition.y}%,
                rgba(255,255,255,0.75),
                transparent 45%
              )`,
            }}
          />

          {/* =====================================================
              DOT GRID
          ===================================================== */}

          <div className="pointer-events-none absolute right-[5%] top-[8%] hidden grid-cols-5 gap-3 opacity-35 lg:grid">
            {Array.from({ length: 25 }).map((_, index) => (
              <span
                key={index}
                className="cta-dot h-[3px] w-[3px] rounded-full bg-black"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              />
            ))}
          </div>

          {/* =====================================================
              CONTENT
          ===================================================== */}

          <div className="relative z-10 px-6 py-10 sm:px-8 sm:py-12 lg:px-12 lg:py-14 xl:px-14">
            <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
              {/* =================================================
                  LEFT
              ================================================= */}

              <div>
                <span className="mb-4 inline-flex items-center gap-3 rounded-full border border-black/10 bg-white/45 px-3 py-2 font-mono text-[9px] uppercase tracking-[0.16em] text-black/50 backdrop-blur-sm sm:text-[10px]">
                  <span className="h-[7px] w-[7px] rounded-[2px] bg-[#cefa74]" />
                  About MadeBySebi
                </span>

                <h2 className="max-w-[620px] font-display text-[clamp(2.8rem,4.6vw,4.8rem)] font-medium leading-[1.02] tracking-[-0.035em]">
                  Ready for a website
                  <br />
                  <span className="text-black/45">built for growth?</span>
                </h2>

                <p className="mt-5 max-w-[570px] text-sm leading-[1.7] text-black/60 sm:text-base lg:text-[17px]">
                  MadeBySebi creates websites and digital experiences that help ambitious businesses look sharper, communicate with confidence and turn attention into action.
                </p>

                {/* =================================================
                    BUTTONS
                ================================================= */}

                <div className="mt-7 flex flex-wrap items-center gap-3">
                  <Button
                    asChild
                    className="group h-12 rounded-full bg-black px-6 text-sm text-white hover:bg-black/85"
                  >
                    <Link href="/contact">
                      Start a project
                      <ArrowRight className="ml-3 h-4 w-4 text-[#cefa74] transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </Button>

                  <Button
                    asChild
                    variant="outline"
                    className="h-12 rounded-full border-black/15 bg-white/40 px-6 text-sm hover:bg-white/80"
                  >
                    <Link href="/work">
                      View our work
                      <ArrowUpRight className="ml-3 h-4 w-4" />
                    </Link>
                  </Button>
                </div>

                {/* =================================================
                    PRICE
                ================================================= */}

                <div className="mt-7 flex flex-wrap items-center gap-3">
                  <div className="flex items-center gap-2 rounded-full border border-black/10 bg-white/45 px-3 py-2">
                    <span className="h-[7px] w-[7px] rounded-full bg-[#cefa74]" />

                    <span className="font-mono text-[9px] text-black/50">
                      Projects from GH₵3,000
                    </span>
                  </div>

                  <div className="rounded-full border border-black/10 bg-white/45 px-3 py-2 font-mono text-[9px] text-black/50">
                    50% deposit
                  </div>
                </div>
              </div>

              {/* =================================================
                  RIGHT ANIMATION
              ================================================= */}

              <div className="relative flex min-h-[300px] items-center justify-center sm:min-h-[350px] lg:min-h-[390px]">
                {/* soft visual platform */}
                <div className="absolute left-1/2 top-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-black/[0.06] sm:h-[330px] sm:w-[330px]" />

                <div className="absolute left-1/2 top-1/2 h-[210px] w-[210px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-black/10 sm:h-[250px] sm:w-[250px]" />

                <div className="relative z-10 flex h-[300px] w-full max-w-[430px] items-center justify-center sm:h-[350px] lg:h-[390px]">
                  <AnimatedTetrahedron />
                </div>

                {/* =================================================
                    FLOATING LABEL
                ================================================= */}

                <div className="cta-floating-badge absolute bottom-3 right-3 hidden items-center gap-3 rounded-[15px] border border-black/10 bg-white/85 px-4 py-3 shadow-[0_18px_45px_rgba(0,0,0,0.08)] backdrop-blur-xl sm:flex">
                  <div className="flex h-9 w-9 items-center justify-center rounded-[11px] bg-[#cefa74]">
                    <Sparkles className="h-4 w-4" />
                  </div>

                  <div>
                    <span className="block font-mono text-[7px] uppercase tracking-[0.12em] text-black/40">
                      MadeBySebi
                    </span>

                    <strong className="mt-1 block text-[10px] font-semibold">
                      Built for business.
                    </strong>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* =====================================================
              DECORATIVE CORNERS
          ===================================================== */}

          <div className="pointer-events-none absolute right-0 top-0 h-24 w-24 border-b border-l border-black/[0.05]" />

          <div className="pointer-events-none absolute bottom-0 left-0 h-24 w-24 border-r border-t border-black/[0.05]" />
        </div>
      </div>
    </section>
  );
}
