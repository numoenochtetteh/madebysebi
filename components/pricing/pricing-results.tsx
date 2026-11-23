import { ArrowUpRight, Check, Download } from "lucide-react";
import { ActionLink, Card } from "@/components/site/primitives";
import { pricingContactHref, pricingPillars, type PricingCategory } from "@/lib/pricing-catalog";
import styles from "./pricing.module.css";

export function PricingResults({ category }: { category?: PricingCategory }) {
  if (!category) return null;
  const pillar = pricingPillars.find(item => item.id === category.pillar);
  return <div id="pricing-packages" className={styles.results} data-pricing-category={category.id}>
    <div className={styles.categoryHeading}>
      <div><span className={styles.smallLabel}>{pillar?.title}</span><h2>{category.name}</h2><p>{category.description}</p></div>
      <a className={styles.textLink} href={pricingContactHref(category)}>Help me choose <ArrowUpRight size={18} aria-hidden="true" /></a>
      {category.brochure?.approved ? <a href={category.brochure.href} download className={styles.textLink}><Download size={17} aria-hidden="true" />{category.brochure.title}</a> : null}
    </div>
    <p className={styles.scopeNote}>Published packages show a starting price. Options labelled <strong>Illustrative scope</strong> are consultation-based directions: features are proposed for discussion and confirmed in your quote.</p>
    <div className={styles.packageGrid}>
      {category.packages.map(option => <Card key={option.id} className={`${styles.packageCard} ${option.featured ? `mbs-card-featured ${styles.featured}` : ""}`} data-package={option.id}>
        <div className={styles.cardLabels}><span>{option.tier}</span>{option.featured ? <strong>Recommended</strong> : null}</div>
        <div><h3>{option.name}</h3><p className={styles.price}>{option.price ?? "Custom Quote"}</p><p className={styles.priceBasis}>{option.basis === "published" ? "Published starting price" : "Illustrative scope · consultation required"}</p></div>
        <p className={styles.packageDescription}>{option.description}</p>
        <div className={styles.features}><h4>{option.basis === "published" ? "Published inclusions" : "Scope to discuss"}</h4><ul>{option.features.map(feature => <li key={feature}><Check size={16} aria-hidden="true" /><span>{feature}</span></li>)}</ul></div>
        <div className={styles.cardActions}><ActionLink href={pricingContactHref(category, option)} aria-label={`Get started with ${option.name} — ${category.name}`}>Get Started</ActionLink>{option.brochure?.approved ? <a href={option.brochure.href} download>Package brochure <Download size={15} aria-hidden="true" /></a> : null}</div>
      </Card>)}
    </div>
  </div>;
}
