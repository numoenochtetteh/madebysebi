import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check, CirclePlus, Layers3, RefreshCw } from "lucide-react";
import { ActionLink, Card, Container, Eyebrow, Section } from "@/components/site/primitives";
import { serviceGroups } from "@/lib/services";
import styles from "./home.module.css";

export function HomeServiceSections() {
  return serviceGroups.map((group, index) => (
    <Section key={group.id} id={group.id} tabIndex={-1}
      aria-labelledby={`${group.id}-title`}
      className={`${styles.serviceSection} ${index === 1 ? styles.solutionSection : ""}`}>
      <Container className={styles.serviceLayout}>
        <div className={styles.serviceIntro}>
          <Eyebrow>{`${group.number} / ${group.shortName}`}</Eyebrow>
          <h2 id={`${group.id}-title`} className={styles.sectionTitle}>{group.title}</h2>
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
        <div className={`${styles.serviceCards} ${group.services.length === 3 ? styles.threeCards : ""}`}>
          {group.services.map((service, serviceIndex) => (
            <Card key={service.title} className={styles.serviceCard}>
              <div className={styles.cardTop}><span>{group.number}.{serviceIndex + 1}</span><CirclePlus size={21} strokeWidth={1.5} aria-hidden="true" /></div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  ));
}
