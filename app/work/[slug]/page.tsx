import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { LazyVideo } from "@/components/media/lazy-video";
import { ActionLink, Container, Eyebrow, Section, SectionHeading } from "@/components/site/primitives";
import { ConsultationCta, PageShell } from "@/components/site/content-layout";
import { ProjectCard } from "@/components/work/project-card";
import { caseStudyProjects, getCaseStudyProject } from "@/lib/projects";
import { adjacentProjects, projectImageLabel, projectPoster } from "@/lib/portfolio";
import shared from "@/components/site/content.module.css";
import styles from "./case-study.module.css";

type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() { return caseStudyProjects.map(project => ({ slug: project.slug })); }
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getCaseStudyProject(slug);
  if (!project) return { title: "Project not found" };
  return { title: `${project.title} — Case Study`, description: project.summary, alternates: { canonical: `/work/${project.slug}` }, openGraph: { title: `${project.title} | MadeBySebi`, description: project.summary, url: `/work/${project.slug}`, images: [{ url: projectPoster(project), alt: project.title }] } };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const project = getCaseStudyProject(slug);
  if (!project) notFound();
  const navigation = adjacentProjects(slug)!;
  return <PageShell>
    <header className={styles.hero}><Container>
      <Link className={styles.back} href="/work"><ArrowLeft size={16} aria-hidden="true" />All projects</Link>
      <Eyebrow>{project.industry} / {project.type}</Eyebrow><h1>{project.title}</h1><p className={styles.headline}>{project.headline}</p>
      <div className={styles.facts}><span>{project.type}</span>{project.location ? <span>{project.location}</span> : null}{project.year ? <span>{project.year}</span> : null}</div>
      <div className={shared.actions}>{project.liveUrl ? <ActionLink href={project.liveUrl} target="_blank" rel="noreferrer">Visit website</ActionLink> : null}{project.sourceUrl ? <ActionLink href={project.sourceUrl} variant="secondary" target="_blank" rel="noreferrer">Explore project link</ActionLink> : null}<ActionLink href="/contact" variant="secondary">Discuss a similar project</ActionLink></div>
      <div className={styles.heroImage}><Image src={projectPoster(project)} alt={`${project.title} project preview`} fill sizes="(max-width: 1280px) calc(100vw - 48px), 1170px" loading="eager" fetchPriority="high" /></div>
    </Container></header>
    <Section aria-labelledby="overview-title"><Container><div className={shared.split}><SectionHeading id="overview-title" eyebrow="THE PROJECT" title="The business behind the build." /><div className={shared.copy}><p>{project.intro}</p><ul className={styles.tags} aria-label="Project services">{project.services.map(service => <li key={service}>{service}</li>)}</ul></div></div></Container></Section>
    <Section className={styles.story} aria-labelledby="challenge-title"><Container><div className={shared.split}><div><Eyebrow>THE CHALLENGE</Eyebrow><h2 id="challenge-title">{project.challengeTitle}</h2></div><div>{project.challenge.map(paragraph => <p key={paragraph}>{paragraph}</p>)}</div></div></Container></Section>
    <Section aria-labelledby="solution-title"><Container><div className={shared.split}><SectionHeading id="solution-title" eyebrow="THE APPROACH" title={project.solutionTitle} /><div className={shared.copy}>{project.solution.map(paragraph => <p key={paragraph}>{paragraph}</p>)}</div></div>
      <div className={styles.features} aria-label="Project functionality">{project.proof.map(item => <article key={item.label}><strong>{item.value}</strong><p>{item.label}</p>{item.note ? <small>{item.note}</small> : null}</article>)}</div>
    </Container></Section>
    <Section aria-labelledby="gallery-title"><Container><SectionHeading id="gallery-title" eyebrow="A CLOSER LOOK" title="Explore the experience." description="Selected screens from the project. Open any image to see the full original view." />
      <div className={styles.gallery}>{project.gallery.map((src, index) => <figure key={src}><a href={src} target="_blank" rel="noreferrer" className={styles.galleryImage} aria-label={`Open full ${project.title} image: ${projectImageLabel(src)}`}><Image src={src} alt={`${project.title}: ${projectImageLabel(src)}`} fill sizes="(max-width: 760px) calc(100vw - 48px), 560px" /></a><figcaption><span>{String(index + 1).padStart(2, "0")} / {projectImageLabel(src)}</span><a href={src} target="_blank" rel="noreferrer">Full image <ArrowUpRight size={14} aria-hidden="true" /></a></figcaption></figure>)}</div>
    </Container></Section>
    {project.operationsImage ? <Section aria-labelledby="operations-title"><Container><div className={shared.split}><SectionHeading id="operations-title" eyebrow="BEHIND THE SCENES" title={project.operationsTitle ?? "The operational view."} description={project.operationsCopy} /><a href={project.operationsImage} target="_blank" rel="noreferrer" className={styles.galleryImage} aria-label={`Open ${project.title} operations view`}><Image src={project.operationsImage} alt={project.operationsTitle ?? "Project operations view"} fill sizes="(max-width: 1023px) calc(100vw - 48px), 560px" /></a></div></Container></Section> : null}
    {project.video ? <Section aria-labelledby="walkthrough-title"><Container><details className={styles.walkthrough}><summary id="walkthrough-title">Watch the project walkthrough <ArrowRight size={18} aria-hidden="true" /></summary><p>Optional video. Playback respects reduced-motion and data-saving preferences; use the video controls when you choose to watch.</p><div className={styles.video}><LazyVideo src={project.video} poster={projectPoster(project)} ariaLabel={`${project.title} walkthrough`} /></div></details></Container></Section> : null}
    {project.socialChannels?.length ? <Section aria-labelledby="connect-title"><Container><SectionHeading id="connect-title" eyebrow={project.connectLabel ?? "PROJECT CONNECTIONS"} title={project.connectHeading ?? "Find the project online."} description={project.connectCopy} /><div className={styles.channels}>{project.socialChannels.map(channel => <article key={channel.platform}><span>{channel.platform}</span><h3>{channel.url ? <a href={channel.url} target="_blank" rel="noreferrer">{channel.handle} <ArrowUpRight size={16} aria-hidden="true" /></a> : channel.handle}</h3><p>{channel.note}</p></article>)}</div></Container></Section> : null}
    <Section aria-labelledby="outcome-title"><Container><div className={shared.split}><SectionHeading id="outcome-title" eyebrow="THE RESULT" title={project.outcomeTitle} /><div className={shared.copy}><p>{project.outcome}</p></div></div></Container></Section>
    <Section aria-labelledby="more-title"><Container><nav className={styles.projectNav} aria-label="Case study navigation"><Link href={`/work/${navigation.previous.slug}`}><span><ArrowLeft size={15} aria-hidden="true" />Previous project</span><strong>{navigation.previous.title}</strong></Link><Link href={`/work/${navigation.next.slug}`}><span>Next project<ArrowRight size={15} aria-hidden="true" /></span><strong>{navigation.next.title}</strong></Link></nav><SectionHeading id="more-title" eyebrow="KEEP EXPLORING" title="More from the portfolio." /><div className={shared.workGrid}>{navigation.related.map(item => <ProjectCard key={item.slug} project={item} />)}</div></Container></Section>
    <ConsultationCta />
  </PageShell>;
}
