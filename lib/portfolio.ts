import { caseStudyProjects, type CaseStudyProject } from "./projects";
import posters from "./video-posters.json";

export function projectPoster(project: CaseStudyProject) {
  return (posters as Record<string, string>)[project.image] ?? project.image;
}

export function adjacentProjects(slug: string) {
  const index = caseStudyProjects.findIndex(project => project.slug === slug);
  if (index < 0) return undefined;
  const count = caseStudyProjects.length;
  return {
    previous: caseStudyProjects[(index + count - 1) % count],
    next: caseStudyProjects[(index + 1) % count],
    related: [caseStudyProjects[(index + 1) % count], caseStudyProjects[(index + 2) % count]],
  };
}

export function projectImageLabel(src: string) {
  return src.split("/").at(-1)?.replace(/^\d+-/, "").replace(/\.[^.]+$/, "").replaceAll("-", " ") ?? "Project view";
}
