import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  ExternalLink,
  Globe2,
  Sparkles,
} from "lucide-react";

import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";
import {
  caseStudyProjects,
  getCaseStudyProject,
} from "@/lib/projects";

import styles from "./case-study.module.css";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return caseStudyProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getCaseStudyProject(slug);

  if (!project) {
    return { title: "Case study | DevNumo" };
  }

  return {
    title: `${project.title} case study | DevNumo`,
    description: project.summary,
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getCaseStudyProject(slug);

  if (!project) notFound();

  const currentIndex = caseStudyProjects.findIndex(
    (item) => item.slug === project.slug,
  );
  const otherProjects = [1, 2].map(
    (offset) =>
      caseStudyProjects[(currentIndex + offset) % caseStudyProjects.length],
  );

  return (
    <>
      <Navigation />

      <main
        className={styles.page}
        style={{ "--case-accent": project.accent } as React.CSSProperties}
      >
        <section className={styles.hero}>
          <div className={styles.heroInner}>
            <Link href="/work" className={styles.backLink}>
              <ArrowLeft size={16} />
              All work
            </Link>

            <div className={styles.heroGrid}>
              <div>
                <div className={styles.kicker}>
                  <span>{project.number}</span>
                  <span>{project.industry}</span>
                  <span>{project.year}</span>
                </div>

                <h1>{project.title}</h1>
                <p className={styles.heroHeadline}>{project.headline}</p>
              </div>

              <div className={styles.heroMeta}>
                <div>
                  <span>Project</span>
                  <strong>{project.type}</strong>
                </div>
                <div>
                  <span>Location</span>
                  <strong>{project.location}</strong>
                </div>
                <div>
                  <span>Delivered by</span>
                  <strong>DevNumo</strong>
                </div>
              </div>
            </div>

            <div className={styles.heroActions}>
              {project.liveUrl ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.primaryButton}
                >
                  Visit live project
                  <ArrowUpRight size={17} />
                </a>
              ) : null}

              <a href="#overview" className={styles.secondaryButton}>
                Read the case study
                <ArrowRight size={17} />
              </a>
            </div>
          </div>
        </section>

        <section className={styles.heroMediaWrap}>
          <div className={styles.heroMedia}>
            {project.video ? (
              <video autoPlay muted loop playsInline poster={project.image}>
                <source src={project.video} type="video/mp4" />
              </video>
            ) : (
              <Image
                src={project.image}
                alt={`${project.title} project preview`}
                fill
                priority
                sizes="100vw"
              />
            )}

            <div className={styles.mediaBadge}>
              <Sparkles size={14} />
              CASE STUDY
            </div>
          </div>
        </section>

        <section id="overview" className={styles.overview}>
          <div className={styles.sectionLabel}>OVERVIEW</div>

          <div className={styles.overviewMain}>
            <div>
              <h2>Built around the business problem, not a template.</h2>
              <p>{project.intro}</p>
            </div>

            <aside className={styles.servicesCard}>
              <span>What DevNumo delivered</span>
              <ul>
                {project.services.map((service) => (
                  <li key={service}>
                    <Check size={14} />
                    {service}
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </section>

        <section className={styles.darkStory}>
          <div className={styles.storyBlock}>
            <div className={styles.storyNumber}>01</div>
            <div>
              <span className={styles.storyEyebrow}>THE CHALLENGE</span>
              <h2>{project.challengeTitle}</h2>
              <div className={styles.storyParagraphs}>
                {project.challenge.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>

          <div className={styles.storyDivider} />

          <div className={styles.storyBlock}>
            <div className={styles.storyNumber}>02</div>
            <div>
              <span className={styles.storyEyebrow}>THE SOLUTION</span>
              <h2>{project.solutionTitle}</h2>
              <div className={styles.storyParagraphs}>
                {project.solution.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className={styles.proofSection}>
          <div className={styles.proofHeader}>
            <div className={styles.sectionLabel}>PROOF, NOT PROMISES</div>
            <h2>What the project actually puts in place.</h2>
            <p>
              These are implementation facts and live product capabilities — not
              invented performance numbers. Analytics can be added as verified
              data becomes available.
            </p>
          </div>

          <div className={styles.proofGrid}>
            {project.proof.map((item) => (
              <article key={`${item.value}-${item.label}`}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
                {item.note ? <small>{item.note}</small> : null}
              </article>
            ))}
          </div>
        </section>

        <section className={styles.gallerySection}>
          <div className={styles.galleryHeading}>
            <div className={styles.sectionLabel}>GALLERY</div>
            <h2>Designed as a system, experienced as one product.</h2>
          </div>

          <div className={styles.galleryGrid}>
            {project.gallery.map((image, index) => (
              <figure
                key={`${image}-${index}`}
                className={index === 0 ? styles.galleryWide : styles.galleryItem}
              >
                <Image
                  src={image}
                  alt={`${project.title} project detail ${index + 1}`}
                  fill
                  sizes={index === 0 ? "100vw" : "(max-width: 760px) 100vw, 50vw"}
                />
              </figure>
            ))}
          </div>
        </section>

        {project.operationsTitle ? (
          <section className={styles.operationsSection}>
            <div className={styles.operationsCopy}>
              <div className={styles.sectionLabel}>OPERATIONS</div>
              <h2>{project.operationsTitle}</h2>
              <p>{project.operationsCopy}</p>
            </div>

            {project.operationsImage ? (
              <div className={styles.operationsMedia}>
                <Image
                  src={project.operationsImage}
                  alt={`${project.title} operations interface with private client data redacted`}
                  fill
                  sizes="100vw"
                />
              </div>
            ) : (
              <div className={styles.operationsDiagram}>
                <div>Discover</div>
                <span>→</span>
                <div>Understand</div>
                <span>→</span>
                <div>Act</div>
                <span>→</span>
                <div>Measure</div>
              </div>
            )}
          </section>
        ) : null}

        {project.socialChannels?.length ? (
          <section className={styles.socialSection}>
            <div className={styles.socialHeading}>
              <div className={styles.sectionLabel}>ONLINE PRESENCE</div>
              <h2>Website, search and social should tell the same story.</h2>
              <p>
                The website becomes the destination while social channels create
                repeated reasons for customers to discover, remember and return to
                the brand.
              </p>
            </div>

            <div className={styles.socialGrid}>
              {project.socialChannels.map((channel, index) => (
                <article key={channel.platform}>
                  <div className={styles.socialTop}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <Globe2 size={18} />
                  </div>
                  <h3>{channel.platform}</h3>
                  <strong>{channel.handle}</strong>
                  <p>{channel.note}</p>
                </article>
              ))}
            </div>
          </section>
        ) : null}

        <section className={styles.resultSection}>
          <div className={styles.sectionLabel}>RESULT</div>
          <div className={styles.resultGrid}>
            <h2>{project.outcomeTitle}</h2>
            <div>
              <p>{project.outcome}</p>
              {project.liveUrl ? (
                <a href={project.liveUrl} target="_blank" rel="noreferrer">
                  See the live experience
                  <ExternalLink size={16} />
                </a>
              ) : null}
            </div>
          </div>
        </section>

        <section className={styles.otherWorkSection}>
          <div className={styles.otherWorkHeader}>
            <div>
              <span className={styles.otherWorkEyebrow}>RELATED CASE STUDIES</span>
              <h2>More work. Different problems.</h2>
            </div>

            <Link href="/work" className={styles.otherWorkAll}>
              View all work
              <ArrowRight size={15} />
            </Link>
          </div>

          <div className={styles.otherWorkGrid}>
            {otherProjects.map((item) => (
              <article key={item.slug} className={styles.otherWorkCard}>
                <Link
                  href={`/work/${item.slug}`}
                  className={styles.otherWorkMedia}
                  aria-label={`View ${item.title} case study`}
                >
                  <Image
                    src={item.image}
                    alt={`${item.title} project preview`}
                    fill
                    sizes="(max-width: 760px) 100vw, 50vw"
                  />

                  <span className={styles.otherWorkNumber}>{item.number}</span>

                  <span className={styles.otherWorkArrow}>
                    <ArrowUpRight size={20} />
                  </span>
                </Link>

                <div className={styles.otherWorkMeta}>
                  <span>{item.industry}</span>
                  <span>{item.year}</span>
                </div>

                <h3>
                  <Link href={`/work/${item.slug}`}>{item.title}</Link>
                </h3>

                <p>{item.summary}</p>

                <Link
                  href={`/work/${item.slug}`}
                  className={styles.otherWorkCaseLink}
                >
                  View case study
                  <ArrowUpRight size={14} />
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.caseCta}>
          <div>
            <span>HAVE A SIMILAR CHALLENGE?</span>
            <h2>Let&apos;s build the business case and the product together.</h2>
          </div>
          <Link href="/contact">
            Start a project
            <ArrowUpRight size={18} />
          </Link>
        </section>
      </main>

      <FooterSection />
    </>
  );
}
