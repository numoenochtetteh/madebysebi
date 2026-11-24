import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { LazyVideo } from "@/components/media/lazy-video";
import { PageShell } from "@/components/site/content-layout";
import { ProjectCard } from "@/components/work/project-card";
import { caseStudyProjects, getCaseStudyProject } from "@/lib/projects";
import { projectStories } from "@/lib/project-story";
import { adjacentProjects, projectImageLabel, projectPoster } from "@/lib/portfolio";
import styles from "./case-study.module.css";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() { return caseStudyProjects.map(project => ({ slug: project.slug })); }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getCaseStudyProject(slug);
  if (!project) return { title: "Project not found" };
  return { title: `${project.title} — Case Study`, description: projectStories[slug]?.lead ?? project.summary, alternates: { canonical: `/work/${project.slug}` }, openGraph: { title: `${project.title} | MadeBySebi`, description: projectStories[slug]?.lead ?? project.summary, url: `/work/${project.slug}`, images: [{ url: project.detailHero ?? projectPoster(project), alt: project.title }] } };
}

function ProjectVisual({ src, title }: { src: string; title: string }) {
  const siteCapture = /\/case-studies\/(femmora|gas-safety-plumbing)\//.test(src);
  return <figure className={`${styles.visual}${siteCapture ? ` ${styles.siteCapture}` : ""}`}>
    <a href={src} target="_blank" rel="noreferrer" aria-label={`Open ${title} ${projectImageLabel(src)} image`}>
      <Image src={src} alt={`${title}: ${projectImageLabel(src)}`} fill sizes="(max-width: 920px) calc(100vw - 36px), 870px" />
      <span className={styles.openImage} aria-hidden="true"><ArrowUpRight size={18} /></span>
    </a>
  </figure>;
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const project = getCaseStudyProject(slug);
  if (!project) notFound();
  const story = projectStories[slug];
  const navigation = adjacentProjects(slug)!;
  const heroImage = project.detailHero ?? projectPoster(project);
  const gallery = project.gallery.filter((src, index, images) => src !== heroImage && src !== project.image && images.indexOf(src) === index);
  const [overviewImage, challengeImage, approachImage, ...moreImages] = gallery;
  const projectLinks = project.socialChannels?.filter(channel => channel.url) ?? [];
  const concept = project.slug === "femmora" || project.slug === "numo-sebi";
  const wideHero = Boolean(project.detailHero) || project.slug === "power-electrode-ltd";

  return <PageShell>
    <article className={styles.caseStudy}>
      <header className={styles.hero}>
        <div className={styles.column}>
          <Link className={styles.back} href="/work"><ArrowLeft size={16} aria-hidden="true" /> All projects</Link>
          <h1>{project.title}</h1>
          <p className={styles.lead}>{story?.lead ?? project.summary}</p>
          <div className={`${styles.heroImage}${wideHero ? ` ${styles.wideHeroImage}` : ""}`}><Image src={heroImage} alt={`${project.title} project preview`} fill sizes="(max-width: 920px) calc(100vw - 36px), 870px" loading="eager" fetchPriority="high" /></div>
          <dl className={styles.facts}>
            <div><dt>Project</dt><dd>{project.shortTitle}</dd></div>
            <div><dt>Sector</dt><dd>{project.industry}</dd></div>
            <div><dt>Work</dt><dd>{project.type}</dd></div>
            <div><dt>Scope</dt><dd>{project.services.slice(0, 2).join(", ")}</dd></div>
          </dl>
          {project.liveUrl || project.sourceUrl ? <div className={styles.links}>
            {project.liveUrl ? <a href={project.liveUrl} target="_blank" rel="noreferrer">Visit website <ArrowUpRight size={17} aria-hidden="true" /></a> : null}
            {project.sourceUrl ? <a href={project.sourceUrl} target="_blank" rel="noreferrer">View project <ArrowUpRight size={17} aria-hidden="true" /></a> : null}
          </div> : null}
        </div>
      </header>

      <div className={styles.column}>
        <section className={styles.storySection} aria-labelledby="overview-title"><h2 id="overview-title">Overview</h2><p>{story?.overview ?? project.intro}</p></section>
        {overviewImage ? <ProjectVisual src={overviewImage} title={project.title} /> : null}

        <section className={styles.storySection} aria-labelledby="challenge-title"><h2 id="challenge-title">The challenge</h2><p>{story?.challenge ?? project.challenge[0]}</p></section>
        {challengeImage ? <ProjectVisual src={challengeImage} title={project.title} /> : null}

        <section className={styles.storySection} aria-labelledby="approach-title"><h2 id="approach-title">The approach</h2><p>{story?.approach ?? project.solution[0]}</p></section>
        {approachImage ? <ProjectVisual src={approachImage} title={project.title} /> : null}

        <section className={styles.storySection} aria-labelledby="result-title"><h2 id="result-title">{concept ? "The concept" : "The result"}</h2><p>{story?.result ?? project.outcome}</p></section>

        {project.operationsImage ? <section className={styles.mediaSection} aria-labelledby="operations-title"><h2 id="operations-title">Inside the build</h2><ProjectVisual src={project.operationsImage} title={project.title} /></section> : null}
        {moreImages.length ? <section className={styles.mediaSection} aria-labelledby="more-screens-title"><h2 id="more-screens-title">More screens</h2><div className={styles.moreScreens}>{moreImages.map(src => <ProjectVisual key={src} src={src} title={project.title} />)}</div></section> : null}
        {project.video ? <details className={styles.walkthrough}><summary>Watch the walkthrough <span aria-hidden="true">+</span></summary><div className={styles.video}><LazyVideo src={project.video} poster={heroImage} ariaLabel={`${project.title} walkthrough`} /></div></details> : null}
        {projectLinks.length ? <div className={styles.links} aria-label="Project links">{projectLinks.map(channel => <a key={channel.platform} href={channel.url!} target="_blank" rel="noreferrer">{channel.platform} <ArrowUpRight size={17} aria-hidden="true" /></a>)}</div> : null}

        <section className={styles.related} aria-labelledby="related-title"><h2 id="related-title">See other projects</h2><nav className={styles.relatedGrid} aria-label="Case study navigation">{[navigation.previous, navigation.next].map(item => <ProjectCard key={item.slug} project={item} />)}</nav></section>
      </div>
    </article>
  </PageShell>;
}
