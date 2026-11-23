import type { Metadata } from "next";
import { ArrowDownRight, Check } from "lucide-react";
import { Container, Eyebrow, Section } from "@/components/site/primitives";
import { PricingExplorer } from "@/components/pricing/pricing-explorer";
import styles from "@/components/pricing/pricing.module.css";

export const metadata: Metadata = {
  title: "Services, Pricing & Packages",
  description: "Compare MadeBySebi services across eight categories: business websites, online stores, booking, business launches, custom software, mobile apps and ongoing growth. Published website prices and custom quotes in Ghana.",
  alternates: { canonical: "/pricing" },
  openGraph: { title: "Services, Pricing & Packages | MadeBySebi", description: "Find the right scope for your website, application or next business improvement.", url: "/pricing", images: [{ url: "/brand/madebysebi-og.png", width: 1200, height: 630, alt: "MadeBySebi — Services, Pricing & Packages" }] },
};

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
  </main>;
}
