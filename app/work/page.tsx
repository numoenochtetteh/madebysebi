import { Container } from "@/components/site/primitives";
import { ConsultationCta, PageHero, PageShell } from "@/components/site/content-layout";
import { ProjectCard } from "@/components/work/project-card";
import { caseStudyProjects } from "@/lib/projects";

const featured = ["femmora", "pengtresses", "gas-safety-plumbing", "lucenex"];
const projects = [...featured.map(slug => caseStudyProjects.find(project => project.slug === slug)!), ...caseStudyProjects.filter(project => !featured.includes(project.slug))];

export default function WorkPage() {
  return <PageShell>
    <PageHero eyebrow="Selected work" title="Selected projects." description="Websites, booking experiences, storefront concepts and business tools." />
    <section className="ms-work-list ms-section" aria-labelledby="projects-title"><Container>
      <h2 id="projects-title" className="ms-visually-hidden">MadeBySebi projects</h2>
      <div className="ms-project-grid">{projects.map(project => <ProjectCard project={project} key={project.slug} />)}</div>
    </Container></section>
    <ConsultationCta title="Have a project in mind?" />
  </PageShell>;
}
