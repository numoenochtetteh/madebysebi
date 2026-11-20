import type { ReactNode } from "react";
import { Plus } from "lucide-react";
import { ActionLink, Container, Eyebrow, Section } from "./primitives";
import styles from "./content.module.css";

export function PageShell({ children }: { children: ReactNode }) {
  return <main id="main-content" tabIndex={-1} className={styles.page}>{children}</main>;
}

export function PageHero({ eyebrow, title, description, children, aside }: {
  eyebrow: string; title: ReactNode; description: string; children?: ReactNode; aside?: ReactNode;
}) {
  return <header className={styles.hero}><Container><div className={aside ? styles.heroGrid : undefined}>
    <div><Eyebrow>{eyebrow}</Eyebrow><h1 id="page-title">{title}</h1><p className={styles.lead}>{description}</p>{children ? <div className={styles.actions}>{children}</div> : null}</div>
    {aside ? <aside className={styles.heroNote}>{aside}</aside> : null}
  </div></Container></header>;
}

export function ConsultationCta({ title = "Let’s build something useful.", description = "Tell us what your business needs. We’ll help you shape a practical next step.", href = "/contact", label = "Discuss your project" }: {
  title?: string; description?: string; href?: string; label?: string;
}) {
  return <Section aria-labelledby="consultation-title"><Container><div className={styles.cta}><div><Eyebrow>YOUR NEXT STEP</Eyebrow><h2 id="consultation-title">{title}</h2><p>{description}</p></div><ActionLink href={href}>{label}</ActionLink></div></Container></Section>;
}

export function FaqList({ items }: { items: readonly { question: string; answer: string }[] }) {
  return <div className={styles.faqs}>{items.map(item => <details key={item.question}><summary>{item.question}<Plus size={20} aria-hidden="true" /></summary><p>{item.answer}</p></details>)}</div>;
}
