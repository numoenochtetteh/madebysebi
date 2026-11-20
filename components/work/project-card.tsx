import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { CaseStudyProject } from "@/lib/projects";
import { projectPoster } from "@/lib/portfolio";

export function ProjectCard({ project }: { project: CaseStudyProject }) {
  const featuredMockup = project.image.startsWith("/project-mockups/");
  return <article className="ms-project-card" data-project={project.slug}>
    <Link href={"/work/" + project.slug} className={"ms-project-media" + (featuredMockup ? " ms-project-mockup" : "")}
      aria-label={"View " + project.title + " case study"}>
      <Image src={projectPoster(project)} alt={project.title + " project preview"} fill
        sizes="(max-width: 700px) calc(100vw - 40px), (max-width: 1100px) 46vw, 505px" />
      <span className="ms-project-arrow" aria-hidden="true"><ArrowUpRight size={19} /></span>
    </Link>
    <div className="ms-project-caption"><div><h3><Link href={"/work/" + project.slug}>{project.title}</Link></h3><p>{project.industry} · {project.type}</p></div><span aria-hidden="true">↗</span></div>
  </article>;
}
