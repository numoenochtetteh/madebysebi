import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Website and project terms for working with Numo Digital.",
  alternates: { canonical: "/terms" },
};

const sections = [
  {
    title: "Website use",
    body: "The information on this website is provided for general information about Numo Digital, our services and our work. You may browse and share links to the website, but you may not copy, resell or misuse our website content, branding, project materials or code without permission.",
  },
  {
    title: "Project quotations",
    body: "Website prices, timelines and deliverables depend on the project scope. A project only becomes confirmed when both sides agree to a written proposal, scope or similar project document and any required initial payment has been received.",
  },
  {
    title: "Payments and deposits",
    body: "Unless a different arrangement is agreed in writing, project payments may be split into stages and an initial deposit may be required before work begins. Any project-specific payment schedule in an accepted proposal takes priority over general information shown on this website.",
  },
  {
    title: "Client content and approvals",
    body: "Clients are responsible for providing accurate text, images, logos, account access and other materials needed for the project, and for confirming they have the right to use those materials. Timelines may change when required content, feedback or approvals are delayed.",
  },
  {
    title: "Revisions and scope changes",
    body: "Revisions included in a project are defined by the agreed scope. New pages, features, integrations, content or major direction changes requested outside that scope may require a revised timeline and additional fee before the extra work begins.",
  },
  {
    title: "Third-party services",
    body: "Projects may use third-party services such as hosting, domains, payment providers, analytics, email platforms, booking systems or APIs. Those services have their own terms, pricing and availability, and Numo Digital cannot guarantee that a third-party service will always remain unchanged or available.",
  },
  {
    title: "Ownership and portfolio use",
    body: "Unless otherwise agreed in writing, final approved project deliverables are transferred or licensed to the client after the agreed project fees are paid. Numo Digital may show completed public-facing work in our portfolio and case studies unless the client has requested confidentiality in writing.",
  },
  {
    title: "Cancellations and project pauses",
    body: "If a project is cancelled or paused, payment may still be due for work already completed, committed costs and any non-refundable third-party expenses. Specific cancellation terms can be included in the project proposal where needed.",
  },
  {
    title: "Liability",
    body: "We take reasonable care when designing, developing and launching websites. However, websites and third-party services can be affected by outages, browser changes, security incidents or external platform changes. Any project-specific warranties or support commitments must be agreed in writing.",
  },
  {
    title: "Governing terms",
    body: "Numo Digital is based in Ghana. These website terms are intended to operate alongside any project-specific written agreement. If a signed proposal, contract or statement of work contains different terms, that project-specific document takes priority for that project.",
  },
];

export default function TermsPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-[#f4f4f1] px-5 pb-24 pt-32 text-[#0b0b0b] sm:px-8 lg:pt-40">
        <div className="mx-auto max-w-[1180px]">
          <Link href="/" className="mb-10 inline-flex items-center gap-2 text-sm text-black/55 transition hover:text-black">
            <ArrowLeft size={15} /> Back home
          </Link>

          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
            <div>
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-black/45">LEGAL · TERMS</span>
              <h1 className="mt-5 text-[clamp(3.2rem,7vw,7rem)] font-semibold leading-[0.88] tracking-[-0.07em]">Terms &amp;<br />Conditions.</h1>
              <p className="mt-7 max-w-[430px] text-[15px] leading-7 text-black/60">
                The general website and project terms that support clear expectations when working with Numo Digital.
              </p>
              <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.12em] text-black/35">Last updated · 21 September 2026</p>
            </div>

            <div className="space-y-3">
              {sections.map((section, index) => (
                <section key={section.title} className="rounded-[24px] border border-black/10 bg-white/55 p-6 sm:p-8">
                  <div className="mb-5 flex items-center justify-between gap-5">
                    <span className="font-mono text-[9px] text-black/35">{String(index + 1).padStart(2, "0")}</span>
                    <span className="h-2.5 w-2.5 rounded-[3px] bg-[#d9ff25]" />
                  </div>
                  <h2 className="text-2xl font-semibold tracking-[-0.04em] sm:text-3xl">{section.title}</h2>
                  <p className="mt-4 max-w-[760px] text-[14px] leading-7 text-black/60">{section.body}</p>
                </section>
              ))}

              <section className="rounded-[24px] bg-[#0b0b0b] p-6 text-white sm:p-8">
                <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-white/45">Project-specific terms</span>
                <div className="mt-4 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
                  <h2 className="max-w-[650px] text-3xl font-semibold leading-[1] tracking-[-0.05em] sm:text-4xl">Every project gets a clear scope before work begins.</h2>
                  <Link href="/contact" className="inline-flex items-center gap-2 font-semibold text-[#d9ff25]">Start a project <ArrowUpRight size={16} /></Link>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
      <FooterSection />
    </>
  );
}
