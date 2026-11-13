import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { ActionLink, Container, Eyebrow } from "@/components/site/primitives";
import { serviceGroups } from "@/lib/services";
import styles from "./home.module.css";

const summaries = [
  "Websites, stores & booking",
  "Custom software & mobile apps",
  "Marketing, improvements & support",
];

export function HomeHero() {
  return (
    <section className={styles.hero} aria-labelledby="home-title">
      <Container className={styles.heroGrid}>
        <div className={styles.heroCopy}>
          <Eyebrow>Made for your next move</Eyebrow>
          <h1 id="home-title" className={styles.heroTitle}>
            Get online.<br />
            Build smarter.<br />
            <span>Keep growing.</span>
          </h1>
          <p className={styles.heroDescription}>
            Websites, mobile apps and custom software that help you reach
            customers, simplify everyday work and move your business forward.
          </p>
          <div className={styles.actions}>
            <ActionLink href="/contact">Let’s build your next move</ActionLink>
            <Link className={styles.textLink} href="/work">
              See our work <ArrowUpRight size={17} aria-hidden="true" />
            </Link>
          </div>
        </div>

        <nav className={styles.serviceNav} aria-label="Choose how we can help">
          {serviceGroups.map((group, index) => (
            <a key={group.id} href={`#${group.id}`} className={styles.servicePath}>
              <span className={styles.pathNumber}>{group.number}</span>
              <div><strong>{group.title}</strong><span>{summaries[index]}</span></div>
              <ArrowDown size={19} aria-hidden="true" />
            </a>
          ))}
        </nav>

        <div className={styles.heroVisual}>
          <div className={styles.visualTopline}>
            <span>From first impression to everyday action</span>
            <ArrowUpRight size={22} aria-hidden="true" />
          </div>
          <Link href="/work/pengtresses" className={styles.browser}
            aria-label="foreverpenghair.com — explore the Forever Peng Hair booking platform case study">
            <div className={styles.browserBar} aria-hidden="true">
              <span /><span /><span /><small>foreverpenghair.com</small>
            </div>
            <div className={styles.heroImage}>
              <Image src="/media/posters/3.webp" fill
                alt="Forever Peng Hair website and booking platform built by MadeBySebi"
                sizes="(max-width: 767px) 90vw, (max-width: 1023px) 80vw, 44vw"
                loading="eager" fetchPriority="high" />
            </div>
          </Link>
          <div className={styles.heroCaption}>
            <div><span>Selected work / Beauty & booking</span><strong>Forever Peng Hair</strong></div>
            <Link href="/work/pengtresses" className={styles.roundLink}
              aria-label="Read the Forever Peng Hair case study">
              <ArrowUpRight size={22} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
