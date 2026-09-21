"use client";

const companies = [
  "Total Logistics",
  "Global Wheels",
  "NUMO & SEBI",
  "Kent Architects",
  "Lucenex Corp",
  "Forever Peng Hair",
  "Power Electrode Ltd",
];

export function ExperienceMarquee() {
  return (
    <section className="overflow-hidden bg-[#fafaf9] px-6">
      <div className="mx-auto max-w-[1660px] border-t border-black/10 py-20 lg:py-24">
        {/* Section label */}
        <p className="mb-12 text-center font-mono text-[11px] uppercase tracking-[0.28em] text-black/55 sm:text-xs">
          Experience across businesses and industries
        </p>

        {/* Moving company names */}
        <div className="relative overflow-hidden">
          {/* Left and right fades */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-[#fafaf9] to-transparent sm:w-40" />

          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-[#fafaf9] to-transparent sm:w-40" />

          <div className="experience-marquee flex w-max items-center">
            {[0, 1].map((group) => (
              <div
                key={group}
                aria-hidden={group === 1}
                className="flex shrink-0 items-center gap-16 pr-16 sm:gap-24 sm:pr-24 lg:gap-32 lg:pr-32"
              >
                {companies.map((company) => (
                  <span
                    key={`${group}-${company}`}
                    className="whitespace-nowrap font-display text-2xl tracking-[-0.03em] text-black/25 transition-colors duration-300 hover:text-black sm:text-3xl"
                  >
                    {company}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .experience-marquee {
          animation: experienceScroll 28s linear infinite;
        }

        .experience-marquee:hover {
          animation-play-state: paused;
        }

        @keyframes experienceScroll {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .experience-marquee {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
