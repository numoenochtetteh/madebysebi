import { ActionLink, Card, Container, Section, SectionHeading } from "@/components/site/primitives";
import { ConsultationCta, PageHero, PageShell } from "@/components/site/content-layout";
import { legacyServiceAnchors, projectApproach, serviceExamples } from "@/lib/company";
import { serviceGroups } from "@/lib/services";
import styles from "@/components/site/content.module.css";

export default function ServicesPage() {
  return <PageShell>
    <PageHero eyebrow="WHAT WE DO" title={<>Digital solutions.<br />Built around your business.</>} description="Get online, turn an idea into useful software, or improve what you already have. We connect design, development and ongoing support around the way your business works.">
      <ActionLink href="/contact">Discuss your project</ActionLink><ActionLink href="/work" variant="secondary">See our work</ActionLink>
      <nav className={styles.pillarNav} aria-label="Service pillars">{serviceGroups.map(group => <a href={`#${group.id}`} key={group.id}><span>{group.number}</span>{group.title}</a>)}</nav>
    </PageHero>
    {serviceGroups.map(group => <Section className={styles.serviceSection} id={group.id} key={group.id} aria-labelledby={`${group.id}-title`}>
      {legacyServiceAnchors[group.id].map(id => <span className={styles.alias} id={id} key={id} aria-hidden="true" />)}
      <Container><SectionHeading id={`${group.id}-title`} eyebrow={`${group.number} / ${group.shortName}`} title={group.title} description={group.description} />
        <div className={styles.serviceGrid}>{group.services.map((service, index) => <Card key={service.title}>
          <span className={styles.serviceIndex}>{group.number}.{index + 1}</span><h3>{service.title}</h3><p>{service.description}</p>
          <ul>{serviceExamples[service.category].map(example => <li key={example}>{example}</li>)}</ul>
          <ActionLink href={`/pricing?category=${service.category}`} variant="secondary">Explore scope options</ActionLink>
        </Card>)}</div>
      </Container>
    </Section>)}
    <Section id="approach" className={styles.serviceSection} aria-labelledby="approach-title"><span className={styles.alias} id="consultation-audits" aria-hidden="true" /><Container>
      <SectionHeading id="approach-title" eyebrow="HOW WE WORK" title="Start with the problem. Shape the right solution." description="You do not need to arrive with a finished brief. We’ll work through the requirements with you and agree the scope before work begins." />
      <div className={styles.steps}>{projectApproach.map(step => <article className={styles.step} key={step.title}><h3>{step.title}</h3><p>{step.description}</p></article>)}</div>
    </Container></Section>
    <ConsultationCta />
  </PageShell>;
}
