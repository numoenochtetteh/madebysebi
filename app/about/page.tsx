import Image from "next/image";
import { Linkedin } from "lucide-react";
import { ActionLink, Card, Container, Section, SectionHeading } from "@/components/site/primitives";
import { ConsultationCta, PageHero, PageShell } from "@/components/site/content-layout";
import { company, projectApproach, teamMembers } from "@/lib/company";
import { serviceGroups } from "@/lib/services";
import styles from "@/components/site/content.module.css";

export default function AboutPage() {
  return <PageShell>
    <PageHero eyebrow="ABOUT MADEBYSEBI" title={<>Useful digital work.<br />A practical approach.</>} description="We’re a digital solutions company in Accra, Ghana. We build websites, mobile applications and custom business software for people who want their digital tools to do a useful job." aside={<><strong>From a first website to a better workflow.</strong><p>We help businesses establish an online presence, build a solution and keep improving as their needs change.</p><p>{company.location} · Working worldwide</p></>}>
      <ActionLink href="/work">Explore our work</ActionLink><ActionLink href="/contact" variant="secondary">Meet us through a conversation</ActionLink>
    </PageHero>
    <Section aria-labelledby="purpose-title"><Container><div className={styles.split}>
      <SectionHeading id="purpose-title" eyebrow="WHO WE HELP" title="For businesses with something to build." />
      <div className={styles.copy}><p>Some businesses need a clear place to present their services. Others need customers to book appointments, browse products or use a new application. Teams may need an internal system that brings their day-to-day work together.</p><p>We work with those practical needs. Our role is to understand the business, make the requirements clearer and build a digital solution that fits the people using it.</p><p>We’re based in Accra and work with businesses in Ghana and internationally. Conversations, progress reviews and handover can be handled remotely.</p></div>
    </div></Container></Section>
    <Section aria-labelledby="build-title"><Container><SectionHeading id="build-title" eyebrow="WHAT WE BUILD" title="Three ways to move your business forward." />
      <div className={styles.pillarCards}>{serviceGroups.map(group => <Card key={group.id}><span className={styles.serviceIndex}>{group.number}</span><h3>{group.title}</h3><p>{group.description}</p><ActionLink variant="secondary" href={`/services#${group.id}`}>Explore services</ActionLink></Card>)}</div>
    </Container></Section>
    <Section aria-labelledby="approach-title"><Container><SectionHeading id="approach-title" eyebrow="OUR APPROACH" title="Clarity before code. Care beyond launch." description="Good project work needs shared expectations, useful feedback and decisions that make sense for your business." />
      <div className={styles.steps}>{projectApproach.map(step => <article className={styles.step} key={step.title}><h3>{step.title}</h3><p>{step.description}</p></article>)}</div>
    </Container></Section>
    <Section aria-labelledby="team-title"><Container><SectionHeading id="team-title" eyebrow="THE PEOPLE BEHIND THE WORK" title="Meet the MadeBySebi team." description="The people who bring our design and development work together." />
      <div className={styles.teamGrid}>{teamMembers.map(member => <article key={member.name}><div className={styles.teamPhoto}><Image src={member.image} alt={member.name} fill sizes="(max-width: 760px) calc(100vw - 48px), 380px" style={{ objectPosition: member.position }} /></div><h3>{member.name}</h3><p>{member.role}</p><a href={member.linkedin} target="_blank" rel="noreferrer" aria-label={`${member.name} on LinkedIn`}><Linkedin size={16} aria-hidden="true" />LinkedIn</a></article>)}</div>
    </Container></Section>
    <Section aria-labelledby="care-title"><Container><div className={styles.split}><SectionHeading id="care-title" eyebrow="BUILT TO BE USEFUL" title="A solution you can understand and keep using." /><div className={styles.copy}><p>We aim for clear interfaces, understandable project decisions and maintainable foundations. The right tool should fit your workflow and leave room for sensible improvements.</p><p>Before starting, we discuss scope, responsibilities, support and the next steps. You can see our existing work, ask how we would approach your project and decide whether we’re the right fit.</p></div></div></Container></Section>
    <ConsultationCta title="Let’s talk about what you need." />
  </PageShell>;
}
