import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container, SectionHeading } from "@/components/site/primitives";
import { ProjectCard } from "@/components/work/project-card";
import { caseStudyProjects } from "@/lib/projects";

const selectedSlugs = ["femmora", "pengtresses", "gas-safety-plumbing", "lucenex"];
const projects = selectedSlugs.map(slug => caseStudyProjects.find(project => project.slug === slug)!);

export function HomeSelectedWork() {
  return <section id="selected-work" className="ms-featured ms-section" aria-labelledby="selected-work-title">
    <Container>
      <div className="ms-center-heading">
        <SectionHeading id="selected-work-title" eyebrow="Selected work" title="See what we’ve built." />
      </div>
      <div className="ms-project-grid">{projects.map(project => <ProjectCard project={project} key={project.slug} />)}</div>
      <div className="ms-section-end"><Link className="ms-soft-button" href="/work">See all our work <ArrowUpRight size={17} aria-hidden="true" /></Link></div>
    </Container>
  </section>;
}
