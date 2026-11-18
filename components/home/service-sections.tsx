import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Blocks, CalendarDays, Check, Globe2, Layers3, Megaphone, RefreshCw, Rocket, ShoppingBag, Smartphone, Wrench, Workflow } from "lucide-react";
import { ActionLink, Container, Eyebrow, Section } from "@/components/site/primitives";
import { serviceGroups } from "@/lib/services";
import styles from "./home.module.css";

const serviceIcons = [
  [Globe2, ShoppingBag, CalendarDays, Rocket],
  [Blocks, Workflow, Smartphone],
  [Megaphone, Wrench, Layers3],
];

export function HomeServiceSections() {
  return serviceGroups.map((group, index) => (
    <Section key={group.id} id={group.id} tabIndex={-1}
      aria-labelledby={`${group.id}-title`}
      className={`${styles.serviceSection} ${index === 1 ? styles.solutionSection : ""} ${index === 2 ? styles.growthSection : ""}`}>
      <Container className={styles.serviceLayout}>
        <div className={styles.serviceIntro}>
          <div className={styles.introHeading}>
            <Eyebrow>{`${group.number} / ${group.shortName}`}</Eyebrow>
            <h2 id={`${group.id}-title`} className={styles.sectionTitle}>{group.title}</h2>
          </div>
          <div className={styles.introDetails}>
            <p className={styles.serviceDescription}>{group.description}</p>
            <ActionLink href={index === 0 ? "/pricing" : "/contact"}
              variant={index === 1 ? "primary" : "secondary"}>{group.cta}</ActionLink>
            {index === 0 && (
            <Link href="/work/pengtresses" className={styles.caseNote}>
              <div className={styles.caseImage}>
                <Image src="/media/posters/3.webp" fill loading="lazy"
                  sizes="(max-width: 767px) 90vw, 38vw"
                  alt="A real online booking website: Forever Peng Hair" />
              </div>
              <span>See it in practice: Forever Peng Hair <ArrowUpRight size={16} aria-hidden="true" /></span>
            </Link>
            )}
            {index === 1 && (
            <div className={styles.solutionVisual} aria-label="Custom software connects your customers, team and tools">
              <div className={styles.solutionCore}><Layers3 size={27} aria-hidden="true" /><strong>Your business</strong></div>
              <div className={styles.connections}><span>Customers</span><span>Your team</span><span>Your tools</span></div>
              <p>Built around the way you work.</p>
            </div>
            )}
            {index === 2 && (
            <div className={styles.growthVisual}>
              <RefreshCw size={26} aria-hidden="true" />
              <strong>A launch is just the beginning.</strong>
              <ul>{["Keep your website running well", "Connect with your customers", "Improve as your business evolves"].map(item =>
                <li key={item}><Check size={16} aria-hidden="true" />{item}</li>)}</ul>
            </div>
            )}
          </div>
        </div>
        <div className={`${styles.serviceCards} ${group.services.length === 3 ? styles.threeCards : ""}`}>
          {group.services.map((service, serviceIndex) => {
            const Icon = serviceIcons[index][serviceIndex];
            return (
              <Link key={service.title} href={`/pricing?category=${service.category}`} className={styles.serviceCard}
                aria-label={`${service.title} — explore pricing and scope`}>
                <div className={styles.cardTop}>
                  <span className={styles.serviceIcon}><Icon size={24} strokeWidth={1.7} aria-hidden="true" /></span>
                  <span className={styles.serviceNumber}>{group.number}.{serviceIndex + 1}</span>
                </div>
                <div className={styles.cardCopy}><h3>{service.title}</h3><p>{service.description}</p></div>
                <span className={styles.cardArrow} aria-hidden="true"><ArrowUpRight size={18} /></span>
              </Link>
            );
          })}
        </div>
      </Container>
    </Section>
  ));
}
