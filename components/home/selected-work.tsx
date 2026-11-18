import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ActionLink, Container, Eyebrow, Section, SectionHeading } from "@/components/site/primitives";
import { caseStudyProjects } from "@/lib/projects";
import posters from "@/lib/video-posters.json";
import styles from "./home.module.css";

const selectedSlugs = ["pengtresses", "power-electrode-ltd", "numo-sebi"];
const projects = selectedSlugs.map(slug => caseStudyProjects.find(project => project.slug === slug)!);

export function HomeSelectedWork() {
  return (
    <Section className={styles.workSection} aria-labelledby="selected-work-title">
      <Container>
        <div className={styles.workHeading}>
          <SectionHeading id="selected-work-title" eyebrow="A few things we’ve built"
            title={<>Real businesses.<br />Real work.</>} description="Different businesses, different needs. Explore the thinking and practical details behind our work." />
          <Link className={styles.textLink} href="/work">Explore all our work <ArrowUpRight size={18} aria-hidden="true" /></Link>
        </div>
        <div className={styles.projectGrid}>
          {projects.map((project, index) => (
            <article key={project.slug} className={styles.projectCard}>
              <Link href={`/work/${project.slug}`} aria-label={`Read the ${project.title} case study`} className={styles.projectImage}>
                <Image src={(posters as Record<string, string>)[project.image] ?? project.image}
                  alt={`${project.title} project preview`} fill loading="lazy"
                  sizes="(max-width: 620px) 90vw, (max-width: 1023px) 44vw, 44vw" />
                <span className={styles.projectNumber} aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                <span className={styles.projectArrow} aria-hidden="true"><ArrowUpRight size={20} /></span>
              </Link>
              <div className={styles.projectBody}>
                <p className={styles.projectType}>{project.industry} / {project.type}</p>
                <h3><Link href={`/work/${project.slug}`}>{project.title}</Link></h3>
                <p>{project.summary}</p>
                <Link className={styles.caseStudyLink} href={`/work/${project.slug}`}>View case study <ArrowUpRight size={16} aria-hidden="true" /></Link>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}

export function HomeProjectCta() {
  return (
    <Section className={styles.ctaSection} aria-labelledby="next-move-title">
      <Container>
        <div className={styles.ctaPanel}>
          <div><Eyebrow>Your next move starts here</Eyebrow><h2 id="next-move-title">What could work<br />better for your business?</h2></div>
          <div><p>A first website, a custom tool or a better way to reach your customers. Let’s work out the right next step together.</p>
            <ActionLink href="/contact">Tell us what you have in mind</ActionLink></div>
        </div>
      </Container>
    </Section>
  );
}
