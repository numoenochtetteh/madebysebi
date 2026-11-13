import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { CaseStudyProject } from "@/lib/projects";
import { projectPoster } from "@/lib/portfolio";
import styles from "@/components/site/content.module.css";

export function ProjectCard({ project }: { project: CaseStudyProject }) {
  return <article className={styles.projectCard} data-project={project.slug}>
    <Link href={`/work/${project.slug}`} className={styles.projectImage} tabIndex={-1} aria-hidden="true"><Image src={projectPoster(project)} alt="" fill sizes="(max-width: 760px) calc(100vw - 48px), (max-width: 1280px) 46vw, 580px" /></Link>
    <div className={styles.projectCopy}><small>{project.industry} · {project.type}</small><h3><Link href={`/work/${project.slug}`}>{project.title}</Link></h3><p>{project.summary}</p><Link href={`/work/${project.slug}`}>Explore the project <ArrowUpRight size={17} aria-hidden="true" /></Link></div>
  </article>;
}
