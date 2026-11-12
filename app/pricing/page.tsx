import type { Metadata } from "next";
import { ArrowDownRight, Check, Plus } from "lucide-react";
import { ActionLink, Container, Eyebrow, Section, SectionHeading } from "@/components/site/primitives";
import { PricingExplorer } from "@/components/pricing/pricing-explorer";
import styles from "@/components/pricing/pricing.module.css";

export const metadata: Metadata = {
  title: "Services, Pricing & Packages",
  description: "Compare MadeBySebi services across eight categories: business websites, online stores, booking, business launches, custom software, mobile apps and ongoing growth. Published website prices and custom quotes in Ghana.",
  alternates: { canonical: "/pricing" },
  openGraph: { title: "Services, Pricing & Packages | MadeBySebi", description: "Find the right scope for your website, application or next business improvement.", url: "/pricing" },
};

const faqs = [
  { question: "Are all of these fixed-price packages?", answer: "No. Landing Page (GH₵3,000), Business Website (GH₵6,500) and Online Store (GH₵12,000) retain their published starting prices and inclusions. Every other option is an illustrative scope level for consultation, with a custom quote. Starter, Professional and Premium help compare the direction of a project; they do not promise a fixed set of deliverables." },
  { question: "What determines my final quote?", answer: "We discuss your goals, content, functionality, integrations and existing tools, then agree a written scope and price. Proposed scope items are conversation starters. They become deliverables only when included in the agreed proposal." },
  { question: "Are hosting, domains and third-party fees included?", answer: "Do not assume these are included. Domain registration, hosting, payment-provider charges, paid tools and ongoing support requirements are discussed and confirmed in your proposal. Recurring costs and renewals should be clear before you proceed." },
  { question: "Can I combine services or start with a smaller scope?", answer: "Yes. Tell us your priorities and we can discuss a suitable starting point, or combine a website, bookings, custom software and growth support in one proposal. A combined scope is quoted individually." },
  { question: "What does Maintenance & Growth cover?", answer: "We discuss website maintenance, technical support, social media marketing and improvements to existing websites or applications. The work, support arrangement and any ongoing fees depend on your needs and are agreed in a quote; no response-time or marketing-result guarantee is implied." },
  { question: "How are timing and payments agreed?", answer: "We agree a schedule based on the actual scope, content and dependencies. No delivery deadline is guaranteed by these comparisons. Our usual starting payment is a 50% deposit, with the balance handled according to the agreed milestones or before final delivery." },
  { question: "What happens when I choose Get Started?", answer: "Your selected service and package are carried into the Contact form. You can review the selection, choose a different service, add your project details and send an enquiry when you are ready. Selecting a package does not place an order or take a payment." },
];

export default async function PricingPage({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
  // Resolve the request before rendering: useSearchParams is available during
  // the explorer's initial server render. No duplicate card fallback is needed.
  await searchParams;

  return <main id="main-content" tabIndex={-1} className={styles.page}>
    <section className={styles.hero} aria-labelledby="pricing-title">
      <Container className={styles.heroInner}>
        <div>
          <Eyebrow>Services & pricing</Eyebrow>
          <h1 id="pricing-title">The right scope.<br /><span>A clear starting point.</span></h1>
          <p className={styles.heroCopy}>Get online, build something useful or keep your business growing. Choose a service and compare three ways to move forward.</p>
          <a href="#pricing-explorer" className={styles.textLink}>Explore your options <ArrowDownRight size={19} aria-hidden="true" /></a>
        </div>
        <aside className={styles.heroNote} aria-label="How our pricing works">
          <span className={styles.smallLabel}>Built around your business</span>
          <p>Clear choices.<br />Room for your idea.</p>
          <ul>
            <li><Check size={17} aria-hidden="true" /> Eight service categories</li>
            <li><Check size={17} aria-hidden="true" /> Three options for each service</li>
            <li><Check size={17} aria-hidden="true" /> Scope agreed before work begins</li>
          </ul>
        </aside>
      </Container>
    </section>
    <section id="pricing-explorer" className={styles.explorerSection} aria-label="Find and compare service packages">
      <Container><PricingExplorer /></Container>
    </section>
    <Section aria-labelledby="pricing-scope-title">
      <Container><div className={styles.scopePanel}>
        <div><p className={styles.smallLabel}>A shared understanding, first</p><h2 id="pricing-scope-title">Know what you’re<br />building towards.</h2><p>Choose a starting point. We’ll work through the details together and put the agreed scope in writing.</p></div>
        <ol>
          <li><span>01</span><div><h3>Published prices are starting prices</h3><p>The three existing website packages keep their published inclusions. Your final quote reflects the scope you agree with us.</p></div></li>
          <li><span>02</span><div><h3>Custom work needs a conversation</h3><p>Illustrative scope levels help you explain what you need. Their proposed features are discussion points, rather than fixed package commitments.</p></div></li>
          <li><span>03</span><div><h3>Plan for the ongoing costs</h3><p>Hosting, domains, third-party tools, payment charges and support arrangements are confirmed separately in your proposal where relevant.</p></div></li>
        </ol>
      </div></Container>
    </Section>
    <Section className={styles.faqSection} aria-labelledby="pricing-faq-title">
      <Container className={styles.faqLayout}>
        <div><SectionHeading id="pricing-faq-title" eyebrow="Before you decide" title={<>A little more<br />clarity.</>} description="Good projects begin with the right questions. Here are a few to get you started." /><ActionLink href="/contact" variant="secondary">Ask us a question</ActionLink></div>
        <div className={styles.faqList}>{faqs.map(faq => <details key={faq.question}><summary>{faq.question}<Plus size={19} aria-hidden="true" /></summary><p>{faq.answer}</p></details>)}</div>
      </Container>
    </Section>
    <Section aria-labelledby="pricing-cta-title"><Container><div className={styles.finalCta}><div><span className={styles.smallLabel}>Let’s find your next step</span><h2 id="pricing-cta-title">You bring the idea.<br />We’ll help shape the scope.</h2><p>You don’t need a finished brief to start a useful conversation.</p></div><ActionLink href="/contact">Plan your project</ActionLink></div></Container></Section>
  </main>;
}
