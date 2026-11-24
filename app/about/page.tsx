import Image from "next/image";
import { Circle, Github, Handshake, Lightbulb, PenTool, Search, Target, TestTube2, Wrench } from "lucide-react";
import { PageShell } from "@/components/site/content-layout";
import { company, projectApproach, teamMembers } from "@/lib/company";
import styles from "./about.module.css";

const processIcons = [Search, Target, PenTool, Wrench];

const toolRows = [
  [
    { name: "Figma", mark: "", tone: "figma" },
    { name: "Next.js", mark: "N", tone: "next" },
    { name: "React", mark: "", tone: "react" },
    { name: "TypeScript", mark: "TS", tone: "typescript" },
    { name: "Tailwind CSS", mark: "", tone: "tailwind" },
    { name: "WordPress", mark: "W", tone: "wordpress" },
  ],
  [
    { name: "Supabase", mark: "", tone: "supabase" },
    { name: "Vercel", mark: "", tone: "vercel" },
    { name: "GitHub", mark: "", tone: "github" },
    { name: "Playwright", mark: "", tone: "playwright" },
    { name: "Stripe", mark: "S", tone: "stripe" },
    { name: "Resend", mark: "R", tone: "resend" },
  ],
] as const;

type Tool = (typeof toolRows)[number][number];

function ToolLogo({ tool }: { tool: Tool }) {
  switch (tool.name) {
    case "Figma":
      return <svg className={styles.brandSvg} viewBox="0 0 32 32" aria-hidden="true">
        <path d="M10 2h6v10h-6a5 5 0 0 1 0-10Z" fill="#f24e1e" /><path d="M16 2h6a5 5 0 0 1 0 10h-6Z" fill="#ff7262" />
        <path d="M10 12h6v10h-6a5 5 0 0 1 0-10Z" fill="#a259ff" /><circle cx="21" cy="17" r="5" fill="#1abcfe" />
        <path d="M10 22h6v5a5 5 0 1 1-6-5Z" fill="#0acf83" />
      </svg>;
    case "React":
      return <svg className={styles.brandSvg} viewBox="0 0 36 36" fill="none" stroke="#59c4da" strokeWidth="1.8" aria-hidden="true">
        <ellipse cx="18" cy="18" rx="15" ry="5.8" /><ellipse cx="18" cy="18" rx="15" ry="5.8" transform="rotate(60 18 18)" />
        <ellipse cx="18" cy="18" rx="15" ry="5.8" transform="rotate(120 18 18)" /><circle cx="18" cy="18" r="2.6" fill="#59c4da" stroke="none" />
      </svg>;
    case "Tailwind CSS":
      return <svg className={styles.brandSvg} viewBox="0 0 32 32" fill="#38bdf8" aria-hidden="true">
        <path d="M16 7c-5.3 0-8.7 2.7-10 8 2-2.7 4.3-3.7 7-3 1.5.4 2.5 1.5 3.7 2.8 1.8 1.9 3.7 4 8.3 4 5.3 0 8.7-2.7 10-8-2 2.7-4.3 3.7-7 3-1.5-.4-2.5-1.5-3.7-2.8C22.5 9.1 20.6 7 16 7ZM10 17c-5.3 0-8.7 2.7-10 8 2-2.7 4.3-3.7 7-3 1.5.4 2.5 1.5 3.7 2.8 1.8 1.9 3.7 4 8.3 4 5.3 0 8.7-2.7 10-8-2 2.7-4.3 3.7-7 3-1.5-.4-2.5-1.5-3.7-2.8C16.5 19.1 14.6 17 10 17Z" />
      </svg>;
    case "Supabase":
      return <svg className={styles.brandSvg} viewBox="0 0 32 32" fill="#3ecf8e" aria-hidden="true">
        <path d="M19 2 4 19h12l-3 11 15-17H16l3-11Z" />
      </svg>;
    case "Vercel":
      return <svg className={styles.brandSvg} viewBox="0 0 32 32" aria-hidden="true"><path d="M16 4 30 28H2L16 4Z" fill="#111" /></svg>;
    case "GitHub":
      return <Github className={styles.brandSvg} strokeWidth={2} aria-hidden="true" />;
    case "Playwright":
      return <TestTube2 className={styles.brandSvg + " " + styles.testIcon} strokeWidth={2} aria-hidden="true" />;
    default:
      return <span className={styles.toolMark + " " + styles[tool.tone]} aria-hidden="true">{tool.mark}</span>;
  }
}

const principles = [
  { title: "Clarity over complexity", icon: Circle },
  { title: "Strategy over trends", icon: Lightbulb },
  { title: "Partnerships that last", icon: Handshake },
] as const;

export default function AboutPage() {
  return <PageShell>
    <section className={styles.about} aria-labelledby="about-title">
      <div className={styles.container}>
        <header className={styles.intro}>
          <p className={styles.eyebrow}><span className={styles.dot} aria-hidden="true" />About us</p>
          <h1 id="about-title">The team<br />behind the work.</h1>
          <p>{company.description}</p>
        </header>

        <div className={styles.grid}>
          <article className={styles.card + " " + styles.teamCard} aria-labelledby="team-heading">
            <div className={styles.portraits} aria-label="The MadeBySebi team">
              {teamMembers.map(member => <a className={styles.portrait} href={member.linkedin} target="_blank" rel="noreferrer"
                key={member.name} aria-label={member.name + " on LinkedIn"} title={member.name}>
                <Image src={member.image} alt="" fill sizes="(max-width: 700px) 78px, 92px" style={{ objectPosition: member.position }} />
              </a>)}
            </div>
            <div className={styles.teamCopy}>
              <div className={styles.chips}><span>Accra, Ghana</span><span>Design &amp; development</span></div>
              <h2 id="team-heading">We turn business ideas into websites, digital products and useful systems people trust and enjoy using.</h2>
              <p>Francis · Enoch · Bernard</p>
            </div>
          </article>

          <article className={styles.card + " " + styles.processCard} aria-labelledby="process-heading">
            <ul className={styles.pillList}>{projectApproach.map((step, index) => {
              const Icon = processIcons[index];
              return <li key={step.title}><Icon size={18} strokeWidth={1.8} aria-hidden="true" /><span>{step.title}</span></li>;
            })}</ul>
            <div className={styles.cardCopy}><h2 id="process-heading">How we work</h2>
              <p>We understand your business, agree the scope, then build and refine together.</p>
            </div>
          </article>

          <article className={styles.card + " " + styles.toolsCard} aria-labelledby="tools-heading">
            <div className={styles.toolCarousel}>
              {toolRows.map((row, rowIndex) => <div className={styles.toolWindow} key={rowIndex}>
                <div className={styles.toolTrack + (rowIndex === 1 ? " " + styles.toolTrackReverse : "")}>
                  {[0, 1].map(copy => <div className={styles.toolSet} key={copy} aria-hidden={copy === 1}>
                    {row.map(tool => <span className={styles.toolTile} role={copy === 0 ? "img" : undefined}
                      aria-label={copy === 0 ? tool.name : undefined} title={tool.name} key={tool.name}>
                      <ToolLogo tool={tool} />
                    </span>)}
                  </div>)}
                </div>
              </div>)}
            </div>
            <div className={styles.cardCopy}><h2 id="tools-heading">Tools we use daily</h2>
              <p>The tools we use to bring your ideas to life.</p>
            </div>
          </article>

          <article className={styles.card + " " + styles.valuesCard} aria-labelledby="values-heading">
            <ul className={styles.pillList}>{principles.map(principle => {
              const Icon = principle.icon;
              return <li key={principle.title}><Icon size={18} strokeWidth={1.8} aria-hidden="true" /><span>{principle.title}</span></li>;
            })}</ul>
            <div className={styles.cardCopy}><h2 id="values-heading">What we stand for</h2>
              <p>Good design solves a real problem first and makes the result feel effortless.</p>
            </div>
          </article>

          <div className={styles.imageCard}>
            <Image src="/showcase/work-laptop.jpg" alt="Laptop displaying a portfolio of creative work" fill
              sizes="(max-width: 760px) calc(100vw - 40px), (max-width: 1100px) 45vw, 400px" />
          </div>
        </div>
      </div>
    </section>
  </PageShell>;
}
