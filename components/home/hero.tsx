import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { ActionLink, Container, Eyebrow } from "@/components/site/primitives";
import { caseStudyProjects } from "@/lib/projects";
import { serviceGroups } from "@/lib/services";
import posters from "@/lib/video-posters.json";
import { FeaturedCarousel } from "./featured-carousel";
import styles from "./home.module.css";

const summaries = [
  "Websites, stores & booking",
  "Custom software & mobile apps",
  "Marketing, improvements & support",
];

const featuredSlugs = [
  "pengtresses",
  "power-electrode-ltd",
  "numo-sebi",
  "total-logistics",
  "lucenex",
];

const featuredProjects = featuredSlugs.map((slug) => {
  const project = caseStudyProjects.find((item) => item.slug === slug)!;
  return {
    slug: project.slug,
    title: project.title,
    industry: project.industry,
    type: project.type,
    image: (posters as Record<string, string>)[project.image] ?? project.image,
    video: project.video,
  };
});

export function HomeHero() {
  return (
    <section className={`${styles.hero} ${styles.projectsInspiredHero}`} aria-labelledby="home-title">
      <Container className={styles.projectsHeroInner}>
        <div className={styles.projectsHeroIntro}>
          <Eyebrow>MadeBySebi · Digital solutions</Eyebrow>
          <h1 id="home-title" className={styles.heroTitle}>
            <span>Full Services</span>
            <span><em>Agency</em> For</span>
            <span className={styles.headlineWords} aria-hidden="true">
              <span>Startups.</span><span>Apps.</span><span>Brands.</span>
            </span>
            <span className={styles.screenReaderOnly}>Startups, Apps and Brands.</span>
          </h1>
          <p className={styles.heroDescription}>
            Websites, mobile apps and custom software that help you reach customers,
            simplify everyday work and move your business forward.
          </p>
          <div className={styles.actions}>
            <ActionLink href="/contact">Let’s build your next move</ActionLink>
            <Link className={styles.textLink} href="/work">
              Explore our projects <ArrowUpRight size={17} aria-hidden="true" />
            </Link>
          </div>
        </div>

        <FeaturedCarousel projects={featuredProjects} />

        <nav className={styles.serviceNav} aria-label="Choose how we can help">
          {serviceGroups.map((group, index) => (
            <a key={group.id} href={`#${group.id}`} className={styles.servicePath}>
              <span className={styles.pathNumber}>{group.number}</span>
              <div><strong>{group.title}</strong><span>{summaries[index]}</span></div>
              <ArrowDown size={19} aria-hidden="true" />
            </a>
          ))}
        </nav>
      </Container>
    </section>
  );
}
