import { ActionLink, Container, Section, SectionHeading } from "@/components/site/primitives";
import { ConsultationCta, PageHero, PageShell } from "@/components/site/content-layout";
import { ProjectCard } from "@/components/work/project-card";
import { caseStudyProjects } from "@/lib/projects";
import styles from "@/components/site/content.module.css";

export default function WorkPage() {
  return <PageShell>
    <PageHero eyebrow="SELECTED WORK" title={<>Different businesses.<br />Purposeful digital work.</>} description="Explore the websites, booking experiences, business tools and storefront interfaces in our portfolio. Each case study explains the problem, the approach and the functionality behind the design." aside={<><strong>A closer look at what we build.</strong><p>Our portfolio includes live business websites, application work and storefront concepts. Read each case study for its scope and available project links.</p></>}>
      <ActionLink href="/contact">Discuss a similar project</ActionLink><ActionLink href="/services" variant="secondary">Explore our services</ActionLink>
    </PageHero>
    <Section aria-labelledby="projects-title"><Container><SectionHeading id="projects-title" eyebrow="THE PORTFOLIO" title="Built for people to use." description="Eight projects, with their original case-study routes, project media and business context." /><div className={styles.workGrid}>{caseStudyProjects.map(project => <ProjectCard project={project} key={project.slug} />)}</div></Container></Section>
    <ConsultationCta title="What does your business need next?" />
  </PageShell>;
}
