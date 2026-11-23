import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ActionLink, Container, Eyebrow } from "./primitives";
import styles from "./legal-page.module.css";

type LegalSection = { title: string; body: string };

export function LegalPage({ eyebrow, title, description, sections, ctaLabel, ctaTitle, ctaAction }: {
  eyebrow: string;
  title: ReactNode;
  description: string;
  sections: readonly LegalSection[];
  ctaLabel: string;
  ctaTitle: string;
  ctaAction: string;
}) {
  return <main id="main-content" tabIndex={-1} className={styles.page}>
    <Container>
      <header className={styles.hero}>
        <Link href="/" className={styles.back}><ArrowLeft size={16} aria-hidden="true" /> Back home</Link>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1>{title}</h1>
        <p className={styles.lead}>{description}</p>
        <p className={styles.updated}>Last updated · 21 September 2026</p>
      </header>
      <div className={styles.grid}>
        {sections.map((section, index) => <section key={section.title} className={styles.card} aria-labelledby={`legal-section-${index}`}>
          <span className={styles.number}>{String(index + 1).padStart(2, "0")}</span>
          <h2 id={`legal-section-${index}`}>{section.title}</h2>
          <p>{section.body}</p>
        </section>)}
      </div>
      <section className={styles.cta} aria-labelledby="legal-cta-title">
        <div><Eyebrow>{ctaLabel}</Eyebrow><h2 id="legal-cta-title">{ctaTitle}</h2></div>
        <ActionLink href="/contact">{ctaAction}</ActionLink>
      </section>
    </Container>
  </main>;
}
