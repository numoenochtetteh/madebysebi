import type { Metadata } from "next";
import { SectionHeading } from "@/components/site/primitives";
import Link from "next/link";
import { websitePackages } from "@/lib/pricing";
import { ArrowUpRight, Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Website Pricing & Packages",
  description: "Explore MadeBySebi's starting prices for landing pages, business websites and online stores in Ghana. Custom projects are quoted individually.",
  alternates: { canonical: "/pricing" },
};



export default function PricingPage() {
  return <main id="main-content" tabIndex={-1} className="min-h-screen bg-[#f7f7f3] text-[#111]">
    <section className="mx-auto max-w-[1250px] px-6 pb-16 pt-40 sm:px-10 lg:pb-24">
      <SectionHeading level={1} eyebrow="Clear starting points"
        title={<>Good design. <span className="text-[#637a3d]">Real value.</span></>}
        description="Every business is different. These packages give you a starting point, and we tailor the final scope to your goals." />
    </section>
    <section className="mx-auto grid max-w-[1250px] grid-cols-1 items-stretch gap-5 px-6 pb-24 sm:px-10 lg:grid-cols-3" aria-label="Website packages">
      {websitePackages.map((plan) => (
        <article
          key={plan.name}
          className={`group flex h-full flex-col rounded-[26px] border px-7 py-8 transition-[border-color,box-shadow,transform] duration-200 motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-[0_18px_45px_-28px_rgba(0,0,0,0.28)] sm:px-8 sm:py-9 ${
            ("featured" in plan && plan.featured)
              ? "border-[#b0df54] bg-[#cefa74] text-[#111]"
              : "border-black/10 bg-white text-[#111] hover:border-black/20"
          }`}
        >
          <div className="mb-8">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-black/60">{plan.name}</p>
            <h2 className="mt-4 whitespace-nowrap text-[clamp(2rem,3vw,3.15rem)] font-semibold leading-none tracking-[-0.06em] text-[#111]">{plan.price}</h2>
            <p className="mt-3 text-xs font-medium text-black/55">Starting price</p>
          </div>
          <p className="mb-8 min-h-0 text-sm leading-[1.65] text-black/70 lg:min-h-[4.6rem]">{plan.description}</p>
          <ul className="mb-10 flex-1 space-y-3.5">
            {plan.features.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-black/85">
                <Check aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0" strokeWidth={2} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <Link
            href="/contact"
            className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-black px-5 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[#282828] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black"
          >
            Discuss your project <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </article>
      ))}
    </section>
    <section className="mx-auto max-w-[1250px] px-6 pb-28 sm:px-10"><div className="rounded-[28px] bg-[#cefa74] p-8 sm:p-12"><h2 className="font-display text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">Need something custom?</h2><p className="mt-4 max-w-[620px] text-black/70">Web apps, dashboards, integrations and larger experiences are quoted separately based on scope. Hosting, third-party services and ongoing support can also affect the total.</p><Link className="mt-8 inline-flex items-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-semibold text-white" href="/contact">Request a quote <ArrowUpRight className="h-4 w-4" /></Link></div></section>
  </main>;
}
