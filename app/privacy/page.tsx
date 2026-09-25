import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How MadeBySebi handles information shared through this website.",
  alternates: { canonical: "/privacy" },
};

const sections = [
  {
    title: "Information you give us",
    body: "When you contact MadeBySebi or submit a project enquiry, you may provide information such as your name, email address, company name, website, project budget, timeline and project details.",
  },
  {
    title: "How we use your information",
    body: "We use the information you provide to respond to enquiries, understand project requirements, prepare proposals, communicate about potential or active work, improve our services and protect the website from misuse.",
  },
  {
    title: "Website and technical data",
    body: "Our hosting and website infrastructure may process basic technical information such as IP address, browser type, device information, pages visited and security logs. This information is generally used for website delivery, reliability, security and performance.",
  },
  {
    title: "Sharing and service providers",
    body: "We do not sell personal information. We may use trusted service providers for website hosting, analytics, email, forms or other business operations. Those providers may process information only as needed to provide their services to us.",
  },
  {
    title: "How long we keep information",
    body: "We keep enquiry and project information only for as long as it is reasonably needed for communication, project administration, legal or accounting requirements, and legitimate business records.",
  },
  {
    title: "Your choices and rights",
    body: "You can ask us to correct or delete personal information we hold about you, subject to any legal or legitimate record-keeping requirements. MadeBySebi is based in Ghana and aims to handle personal information in line with applicable data-protection requirements, including Ghana's Data Protection Act, 2012 (Act 843), where applicable.",
  },
  {
    title: "International enquiries",
    body: "We work with clients in different countries. If you contact us from outside Ghana, your information may be processed in Ghana or by service providers in other countries as part of delivering the website and responding to your enquiry.",
  },
  {
    title: "Updates to this policy",
    body: "We may update this Privacy Policy when our services, website or legal requirements change. The latest version will always be published on this page.",
  },
];

export default function PrivacyPage() {
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
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-black/45">LEGAL · PRIVACY</span>
              <h1 className="mt-5 text-[clamp(3.2rem,7vw,7rem)] font-semibold leading-[0.88] tracking-[-0.07em]">Privacy<br />Policy.</h1>
              <p className="mt-7 max-w-[430px] text-[15px] leading-7 text-black/60">
                A clear summary of what information this website may collect and how MadeBySebi uses it.
              </p>
              <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.12em] text-black/35">Last updated · 21 September 2026</p>
            </div>

            <div className="space-y-3">
              {sections.map((section, index) => (
                <section key={section.title} className="rounded-[24px] border border-black/10 bg-white/55 p-6 sm:p-8">
                  <div className="mb-5 flex items-center justify-between gap-5">
                    <span className="font-mono text-[9px] text-black/35">{String(index + 1).padStart(2, "0")}</span>
                    <span className="h-2.5 w-2.5 rounded-[3px] bg-[#cefa74]" />
                  </div>
                  <h2 className="text-2xl font-semibold tracking-[-0.04em] sm:text-3xl">{section.title}</h2>
                  <p className="mt-4 max-w-[760px] text-[14px] leading-7 text-black/60">{section.body}</p>
                </section>
              ))}

              <section className="rounded-[24px] bg-[#cefa74] p-6 sm:p-8">
                <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-black/55">Questions about privacy?</span>
                <div className="mt-4 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
                  <h2 className="max-w-[650px] text-3xl font-semibold leading-[1] tracking-[-0.05em] sm:text-4xl">Contact us and we&apos;ll help with your request.</h2>
                  <Link href="/contact" className="inline-flex items-center gap-2 font-semibold">Contact MadeBySebi <ArrowUpRight size={16} /></Link>
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
