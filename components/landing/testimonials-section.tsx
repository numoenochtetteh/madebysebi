const testimonials = [
  {
    quote:
      "Numo Digital made the whole website process feel clear and organised. The final direction looked professional and gave the business a much stronger online presence.",
    name: "Client name",
    role: "Founder / Business owner",
    company: "Replace with real client",
  },
  {
    quote:
      "What stood out was the attention to detail. The website felt modern, responsive and much easier for customers to understand and use.",
    name: "Client name",
    role: "Company representative",
    company: "Replace with real client",
  },
  {
    quote:
      "The project moved from idea to launch with a clear process, good communication and a final result that matched the business much better.",
    name: "Client name",
    role: "Business owner",
    company: "Replace with real client",
  },
];

export function TestimonialsSection() {
  return (
    <section className="bg-[#f4f4f1] px-4 py-20 text-black sm:px-6 sm:py-24 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-12 grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-end lg:gap-16">
          <div>
            <div className="inline-flex items-center gap-2 rounded-md border border-black/10 bg-white/50 px-3 py-2 font-mono text-[9px] uppercase tracking-[0.16em] text-black/45">
              <span className="h-2 w-2 rounded-[2px] bg-[#d9ff25]" />
              Testimonials
            </div>
          </div>

          <div>
            <h2 className="max-w-[900px] text-[clamp(3.1rem,6vw,6.5rem)] font-semibold leading-[0.9] tracking-[-0.07em]">
              What clients say
              <br />
              about the work.
            </h2>
            <p className="mt-5 max-w-[620px] text-sm leading-7 text-black/55">
              These three cards are sample copy for layout only. Replace them
              with genuine client feedback before promoting the testimonials publicly.
            </p>
          </div>
        </div>

        <div className="grid gap-3 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <article
              key={index}
              className="flex min-h-[360px] flex-col justify-between rounded-[26px] border border-black/10 bg-[#eeece6] p-6 sm:p-7"
            >
              <div>
                <div className="flex items-center justify-between gap-4">
                  <span className="font-mono text-[9px] text-black/35">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="rounded-full bg-[#d9ff25] px-3 py-1.5 font-mono text-[8px] uppercase tracking-[0.11em] text-black">
                    Sample · replace
                  </span>
                </div>

                <blockquote className="mt-8 text-[clamp(1.6rem,2.2vw,2.2rem)] font-medium leading-[1.12] tracking-[-0.045em]">
                  “{testimonial.quote}”
                </blockquote>
              </div>

              <div className="mt-10 border-t border-black/10 pt-5">
                <p className="font-semibold">{testimonial.name}</p>
                <p className="mt-1 text-xs text-black/45">
                  {testimonial.role} · {testimonial.company}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
