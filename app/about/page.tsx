import Image from "next/image";
import { Linkedin } from "lucide-react";
import { ActionLink, Card, Container, Section, SectionHeading } from "@/components/site/primitives";
import { ConsultationCta, PageHero, PageShell } from "@/components/site/content-layout";
import { company, projectApproach, teamMembers } from "@/lib/company";
import { serviceGroups } from "@/lib/services";
import styles from "@/components/site/content.module.css";

const capabilities = [
  "Website design & development",
  "E-commerce & booking",
  "Web applications",
  "Mobile applications",
  "Internal business systems",
  "Maintenance & growth",
];

export default function AboutPage() {
  return <PageShell>
    <PageHero eyebrow="About MadeBySebi" title={<>The team behind<br /> the work.</>}
      description="A digital solutions agency in Accra building websites, applications and business tools for clients in Ghana and worldwide.">
      <ActionLink href="/contact">Start a conversation</ActionLink>
      <ActionLink href="/work" variant="secondary">Explore our work</ActionLink>
    </PageHero>
    <Section aria-labelledby="purpose-title"><Container><div className={styles.split}>
      <SectionHeading id="purpose-title" eyebrow="Who we are" title="A practical team for digital ideas." />
      <div className={styles.copy}><p>{company.description}</p><p>Some businesses need a clear place to present their services. Others need customers to book appointments, browse products or use an application. Teams may need an internal system that makes everyday work easier.</p><p>We listen to the business, clarify the requirements and build around the people who will use the result.</p></div>
    </div></Container></Section>
    <Section aria-labelledby="team-title"><Container>
      <SectionHeading id="team-title" eyebrow="The people" title="Meet MadeBySebi." description="The team bringing our design and development work together." />
      <div className={styles.teamGrid}>{teamMembers.map(member =>
        <article key={member.name}>
          <div className={styles.teamPhoto}><Image src={member.image} alt={member.name} fill sizes="(max-width:760px) calc(100vw - 40px), 340px" style={{ objectPosition: member.position }} /></div>
          <h3>{member.name}</h3><p>{member.role}</p>
          <a href={member.linkedin} target="_blank" rel="noreferrer" aria-label={member.name + " on LinkedIn"}><Linkedin size={16} aria-hidden="true" />LinkedIn</a>
        </article>)}</div>
    </Container></Section>
    <Section aria-labelledby="build-title"><Container>
      <SectionHeading id="build-title" eyebrow="What we do" title="From first presence to better systems." />
      <div className={styles.pillarCards}>{serviceGroups.map(group =>
        <Card key={group.id}><span className={styles.serviceIndex}>{group.number}</span><h3>{group.title}</h3><p>{group.description}</p><ActionLink variant="secondary" href={"/services#" + group.id}>Explore services</ActionLink></Card>)}</div>
    </Container></Section>
    <Section aria-labelledby="approach-title"><Container>
      <SectionHeading id="approach-title" eyebrow="Our approach" title="A clear way to build together." description="We agree the problem, scope and priorities before we move into delivery." />
      <div className={styles.steps}>{projectApproach.map(step =>
        <article className={styles.step} key={step.title}><h3>{step.title}</h3><p>{step.description}</p></article>)}</div>
    </Container></Section>
    <Section aria-labelledby="capabilities-title"><Container><div className={styles.split}>
      <SectionHeading id="capabilities-title" eyebrow="Technology & capabilities" title="The right tools for the job." />
      <div className={styles.copy}><p>Our work includes responsive websites, online stores, booking flows, customer-facing applications and internal dashboards. The source project uses Next.js, React and TypeScript, and the Forever Peng Hair case study includes a Stripe deposit flow.</p>
        <ul className="ms-capability-list">{capabilities.map(item => <li key={item}>{item}</li>)}</ul>
        <p>We make decisions around the business need and agree the technical scope for each project.</p></div>
    </div></Container></Section>
    <ConsultationCta title="Let’s talk about what you need." />
  </PageShell>;
}
