"use client";

import { useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  Check,
  Copy,
  Code2,
  Rocket,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";

const TAB_DURATION = 3500;

const codeExamples = [
  {
    label: "Strategy",
    number: "01",
    code: `const project = {
  business: "Your company",
  goal: "Attract more customers",
  audience: "Your ideal clients",
  experience: "Clear and professional"
}

const direction = await madebysebi.plan(project)`,
  },
  {
    label: "Build",
    number: "02",
    code: `export default function Website() {
  return (
    <main>
      <Hero />
      <Services />
      <SelectedWork />
      <Contact />
    </main>
  )
}`,
  },
  {
    label: "Launch",
    number: "03",
    code: `const launchChecklist = {
  responsive: true,
  accessible: true,
  performance: "optimized",
  seo: "configured",
  analytics: "connected"
}

await madebysebi.launch(launchChecklist)`,
  },
];

const benefits = [
  {
    title: "Fast",
    text: "Performance",
    icon: Zap,
    color: "#cefa74",
  },
  {
    title: "Secure",
    text: "By default",
    icon: ShieldCheck,
    color: "#c8b8ff",
  },
  {
    title: "Scalable",
    text: "As you grow",
    icon: Rocket,
    color: "#9de8d1",
  },
  {
    title: "Built to convert",
    text: "For business",
    icon: Sparkles,
    color: "#ffbd82",
  },
];

const animationStyles = `
  .dev-code-line {
    opacity: 0;
    transform: translateY(7px);
    animation: devLineReveal 0.38s cubic-bezier(0.22, 1, 0.36, 1) forwards;
  }

  @keyframes devLineReveal {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .dev-code-char {
    opacity: 0;
    filter: blur(6px);
    animation: devCharReveal 0.25s ease forwards;
  }

  @keyframes devCharReveal {
    to {
      opacity: 1;
      filter: blur(0);
    }
  }

  .tab-progress {
    transform-origin: left;
    animation: tabProgress ${TAB_DURATION}ms linear forwards;
  }

  @keyframes tabProgress {
    from {
      transform: scaleX(0);
    }

    to {
      transform: scaleX(1);
    }
  }

  .dev-orb-one {
    animation: devOrbOne 7s ease-in-out infinite;
  }

  .dev-orb-two {
    animation: devOrbTwo 8s ease-in-out infinite;
  }

  .dev-orb-three {
    animation: devOrbThree 6s ease-in-out infinite;
  }

  @keyframes devOrbOne {
    0%,
    100% {
      transform: translate3d(0, 0, 0) scale(1);
    }

    50% {
      transform: translate3d(30px, -20px, 0) scale(1.08);
    }
  }

  @keyframes devOrbTwo {
    0%,
    100% {
      transform: translate3d(0, 0, 0) scale(1);
    }

    50% {
      transform: translate3d(-25px, 25px, 0) scale(1.1);
    }
  }

  @keyframes devOrbThree {
    0%,
    100% {
      transform: translateY(0px);
    }

    50% {
      transform: translateY(-16px);
    }
  }

  .dev-grid-dot {
    animation: gridDotPulse 2.8s ease-in-out infinite;
  }

  @keyframes gridDotPulse {
    0%,
    100% {
      opacity: 0.15;
      transform: scale(1);
    }

    50% {
      opacity: 0.65;
      transform: scale(1.4);
    }
  }

  .dev-float-icon {
    animation: devFloatIcon 4s ease-in-out infinite;
  }

  @keyframes devFloatIcon {
    0%,
    100% {
      transform: translateY(0) rotate(-4deg);
    }

    50% {
      transform: translateY(-12px) rotate(4deg);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .dev-code-line,
    .dev-code-char {
      opacity: 1;
      filter: none;
      transform: none;
      animation: none;
    }

    .tab-progress {
      animation: none;
      transform: scaleX(1);
    }

    .dev-orb-one,
    .dev-orb-two,
    .dev-orb-three,
    .dev-grid-dot,
    .dev-float-icon {
      animation: none;
    }
  }
`;

export function DevelopersSection() {
  const [activeTab, setActiveTab] = useState(0);
  const [copied, setCopied] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      setActiveTab((current) => (current + 1) % codeExamples.length);
      setCopied(false);
    }, TAB_DURATION);

    return () => window.clearTimeout(timeout);
  }, [activeTab]);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(codeExamples[activeTab].code);

      setCopied(true);

      window.setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="bg-[#f4f4f1] px-3 py-3 sm:px-[18px] lg:px-7">
      <section
        id="development"
        ref={sectionRef}
        className="relative overflow-hidden rounded-[26px] border border-black/[0.06] bg-[#f0eee8] py-10 text-black sm:py-12 lg:rounded-[32px] lg:py-14"
      >
        <style dangerouslySetInnerHTML={{ __html: animationStyles }} />

        {/* =====================================================
            BACKGROUND DECORATION
        ===================================================== */}

        <div className="dev-orb-one pointer-events-none absolute -left-28 top-10 h-[300px] w-[300px] rounded-full bg-[#cefa74]/25 blur-[100px]" />

        <div className="dev-orb-two pointer-events-none absolute -right-20 top-[-50px] h-[320px] w-[320px] rounded-full bg-[#9a84ff]/15 blur-[110px]" />

        <div className="pointer-events-none absolute bottom-[-100px] left-[45%] h-[260px] w-[260px] rounded-full bg-[#ff9d6c]/10 blur-[100px]" />

        {/* Small animated grid */}
        <div className="pointer-events-none absolute right-[7%] top-[7%] hidden grid-cols-5 gap-3 opacity-40 lg:grid">
          {Array.from({ length: 25 }).map((_, index) => (
            <span
              key={index}
              className="dev-grid-dot h-[3px] w-[3px] rounded-full bg-black"
              style={{
                animationDelay: `${index * 90}ms`,
              }}
            />
          ))}
        </div>

        {/* Decorative curve */}
        <div className="pointer-events-none absolute -bottom-16 -left-10 h-44 w-[55%] rounded-[50%] border border-dashed border-black/15" />

        {/* Floating code icon */}
        <div className="dev-float-icon pointer-events-none absolute bottom-8 right-6 hidden h-20 w-20 rotate-[-5deg] items-center justify-center rounded-[22px] border border-black/10 bg-white shadow-[0_20px_40px_rgba(0,0,0,0.08)] lg:flex">
          <Code2 className="h-9 w-9 text-black/70" />
        </div>

        {/* =====================================================
            CONTENT
        ===================================================== */}

        <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10 xl:px-12">
          <div className="grid items-center gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:gap-14">
            {/* =================================================
                LEFT
            ================================================= */}

            <div
              className={`transition-all duration-700 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-7 opacity-0"
              }`}
            >
              <span className="mb-4 inline-flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.18em] text-black/50 sm:text-xs">
                <span className="h-[7px] w-[7px] rounded-[2px] bg-[#cefa74]" />
                How we build
              </span>

              <h2 className="max-w-[570px] font-display text-[clamp(2.55rem,4vw,4.2rem)] font-medium leading-[1.02] tracking-[-0.035em]">
                Built by developers.
                <br />
                <span className="text-black/45">
                  Made for your
                  <br />
                  customers.
                </span>
              </h2>

              <p className="mt-5 max-w-[520px] text-sm leading-[1.65] text-black/60 sm:text-base lg:text-[17px]">
                We pair thoughtful frontend engineering with clear design decisions so every interaction feels fast, intentional and effortless for your customers.
              </p>

              {/* =================================================
                  BUTTONS
              ================================================= */}

              <div className="mt-7 flex flex-wrap items-center gap-3">
                <a
                  href="/work"
                  className="group inline-flex h-12 items-center gap-4 rounded-full bg-black px-6 text-sm font-medium text-white transition-all duration-300 hover:scale-[1.025]"
                >
                  View our work
                  <ArrowUpRight className="h-4 w-4 text-[#cefa74] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </a>

                <a
                  href="/contact"
                  className="inline-flex h-12 items-center rounded-full border border-black/15 bg-white/40 px-6 text-sm font-medium transition-all duration-300 hover:border-black/30 hover:bg-white"
                >
                  Start a project
                </a>
              </div>

              {/* =================================================
                  BENEFITS
              ================================================= */}

              <div className="mt-8 grid max-w-[590px] grid-cols-2 gap-x-4 gap-y-5 sm:grid-cols-4">
                {benefits.map((benefit) => {
                  const Icon = benefit.icon;

                  return (
                    <div
                      key={benefit.title}
                      className="group border-r border-black/10 last:border-r-0"
                    >
                      <div
                        className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl transition-transform duration-300 group-hover:-translate-y-1"
                        style={{
                          backgroundColor: benefit.color,
                        }}
                      >
                        <Icon className="h-[18px] w-[18px]" strokeWidth={1.8} />
                      </div>

                      <strong className="block text-[13px] font-semibold">
                        {benefit.title}
                      </strong>

                      <span className="mt-1 block text-[10px] text-black/45">
                        {benefit.text}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* =================================================
                RIGHT CODE PANEL
            ================================================= */}

            <div
              className={`relative transition-all delay-150 duration-700 ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "translate-x-7 opacity-0"
              }`}
            >
              <div className="overflow-hidden rounded-[22px] border border-black/[0.07] bg-white/90 shadow-[0_24px_65px_rgba(40,35,25,0.1)] backdrop-blur-xl">
                {/* Tabs */}
                <div className="flex items-center border-b border-black/[0.07] px-2 sm:px-4">
                  {codeExamples.map((example, index) => (
                    <button
                      key={example.label}
                      type="button"
                      onClick={() => {
                        setActiveTab(index);
                        setCopied(false);
                      }}
                      className={`relative flex items-center gap-2 px-3 py-4 font-mono text-[11px] transition-colors sm:px-5 sm:text-[13px] ${
                        activeTab === index
                          ? "text-black"
                          : "text-black/35 hover:text-black"
                      }`}
                    >
                      <span className="hidden text-[8px] text-black/25 sm:inline">
                        {example.number}
                      </span>

                      {example.label}

                      {activeTab === index && (
                        <span
                          key={`progress-${activeTab}`}
                          className="tab-progress absolute inset-x-0 bottom-0 h-[2px] bg-black"
                        />
                      )}
                    </button>
                  ))}

                  <div className="flex-1" />

                  <button
                    type="button"
                    onClick={handleCopy}
                    className="rounded-full p-2.5 text-black/35 transition-colors hover:bg-black/5 hover:text-black"
                    aria-label="Copy example"
                    title="Copy example"
                  >
                    {copied ? (
                      <Check className="h-4 w-4 text-green-600" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </button>
                </div>

                {/* =================================================
                    CURRENT PHASE
                ================================================= */}

                <div className="flex items-center justify-between border-b border-black/[0.05] bg-[#faf9f6] px-5 py-2.5 sm:px-6">
                  <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-black/35">
                    Current phase
                  </span>

                  <span className="rounded-full bg-[#cefa74]/70 px-3 py-1 text-[10px] font-semibold">
                    {codeExamples[activeTab].label}
                  </span>
                </div>

                {/* =================================================
                    CODE
                ================================================= */}

                <div className="h-[260px] overflow-x-auto px-4 py-4 font-mono text-[11px] sm:h-[260px] sm:px-6 sm:py-5 sm:text-[13px] lg:h-[270px]">
                  <div key={activeTab} className="min-w-max text-black/70">
                    {codeExamples[activeTab].code
                      .split("\n")
                      .map((line, lineIndex) => (
                        <div
                          key={`${activeTab}-${lineIndex}`}
                          className="dev-code-line leading-[1.75]"
                          style={{
                            animationDelay: `${lineIndex * 60}ms`,
                          }}
                        >
                          <span className="mr-4 inline-block w-4 select-none text-right text-[8px] text-black/20">
                            {String(lineIndex + 1).padStart(2, "0")}
                          </span>

                          <span className="inline-flex">
                            {(line || " ")
                              .split("")
                              .map((character, characterIndex) => (
                                <span
                                  key={`${activeTab}-${lineIndex}-${characterIndex}`}
                                  className="dev-code-char"
                                  style={{
                                    animationDelay: `${
                                      lineIndex * 60 + characterIndex * 10
                                    }ms`,
                                  }}
                                >
                                  {character === " " ? "\u00A0" : character}
                                </span>
                              ))}
                          </span>
                        </div>
                      ))}
                  </div>
                </div>

                {/* =================================================
                    STATUS BAR
                ================================================= */}

                <div className="flex items-center justify-between border-t border-black/[0.06] bg-[#faf9f6] px-5 py-3">
                  <div className="flex items-center gap-2 text-[9px] text-black/45 sm:text-[10px]">
                    <span className="h-[7px] w-[7px] rounded-full bg-[#cefa74]" />
                    All systems ready
                  </div>

                  <span className="font-mono text-[8px] text-black/30">
                    madebysebi
                  </span>
                </div>
              </div>

              {/* Small floating badge */}
              <div className="dev-orb-three absolute -bottom-5 right-8 hidden items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2 shadow-lg sm:flex">
                <span className="h-2 w-2 rounded-full bg-[#cefa74]" />

                <span className="font-mono text-[8px] uppercase tracking-[0.1em] text-black/50">
                  Ready to launch
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
