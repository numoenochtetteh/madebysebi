import { ArrowUpRight, Check } from "lucide-react";
import { ContactForm } from "@/components/contact/contact-form";
import { ActionLink, Container, Section, SectionHeading } from "@/components/site/primitives";
import { FaqList, PageHero, PageShell } from "@/components/site/content-layout";
import { company } from "@/lib/company";
import { websitePackages } from "@/lib/pricing";
import { socialLinks, whatsappUrl } from "@/lib/services";
import styles from "./contact.module.css";

const faqs = [
  { question: "What can MadeBySebi help us build?", answer: "We build business websites, online stores, booking experiences, mobile applications and custom business software. We also help with maintenance, technical support, marketing and improvements to existing websites and applications." },
  { question: "Do we need a finished brief?", answer: "No. Tell us about your business, the people using the solution and the problem you want to solve. We can work through the requirements and priorities with you." },
  { question: "How much does a project cost?", answer: `Our published website starting prices are ${websitePackages.map(item => `${item.name}: ${item.price}`).join("; ")}. Custom software, mobile apps and other services are quoted after discussing the scope. The final cost depends on the agreed requirements.` },
  { question: "What happens to the package I selected on Pricing?", answer: "Your service and valid package selection are shown above the form and included in your enquiry. We’ll confirm the scope and quote with you. Changing the service clears the package selection." },
  { question: "What are your payment terms?", answer: "We normally require a 50% deposit before starting a project, with the remaining balance paid according to the agreed project milestones or before final delivery. Larger projects can be structured into additional milestones." },
  { question: "Can you work with businesses outside Ghana?", answer: "Yes. We’re based in Accra and work with businesses internationally. Conversations, updates, reviews and delivery can be handled remotely. International projects can be quoted in USD or GBP where appropriate." },
  { question: "How do we agree timing and support?", answer: "We discuss the scope, dependencies, content and feedback needed before agreeing a schedule. Maintenance, technical support and future enhancements can be discussed alongside the project." },
  { question: "Can we arrange a call before starting?", answer: "Yes. We can arrange a conversation to understand your business and decide whether MadeBySebi is a good fit before you commit to a project." },
] as const;

export default function ContactPage() {
  return <PageShell>
    <PageHero eyebrow="LET’S TALK" title={<>Your next step<br />starts with a conversation.</>} description="Tell us what you’re building, what feels stuck or where your business needs to go next. We’ll help you turn that into a clear, useful project."><ActionLink href="#contact-form">Start an enquiry</ActionLink><ActionLink href={whatsappUrl} variant="secondary" target="_blank" rel="noreferrer">Chat on WhatsApp</ActionLink></PageHero>
    <Section aria-label="Project enquiry"><Container><div className={styles.layout}>
      <aside className={styles.details}><SectionHeading eyebrow="START A PROJECT" title="A little context goes a long way." description="Share the business goal, the people you’re building for and anything you already have in place. We can shape the next step together." />
        <ul className={styles.points}><li><Check size={17} aria-hidden="true" />Website projects start from {websitePackages[0].price}</li><li><Check size={17} aria-hidden="true" />50% deposit to begin a project</li><li><Check size={17} aria-hidden="true" />Scope, responsibilities and milestones agreed together</li><li><Check size={17} aria-hidden="true" />{company.location} · Working worldwide</li></ul>
        <div className={styles.direct}><h3>Prefer a direct conversation?</h3><a href={`mailto:${company.email}`}>{company.email}<ArrowUpRight size={16} aria-hidden="true" /></a><a href={whatsappUrl} target="_blank" rel="noreferrer">{company.phone} · WhatsApp<ArrowUpRight size={16} aria-hidden="true" /></a><p>International projects are welcome. Location is not a barrier; projects can be quoted in USD or GBP where appropriate.</p></div>
        <nav className={styles.socials} aria-label="MadeBySebi social media">{socialLinks.map(link => <a href={link.href} key={link.name} target="_blank" rel="noreferrer">{link.name}<ArrowUpRight size={14} aria-hidden="true" /></a>)}</nav>
      </aside>
      <ContactForm />
    </div></Container></Section>
    <Section aria-labelledby="faqs-title"><Container><div className={styles.faqLayout}><SectionHeading id="faqs-title" eyebrow="BEFORE WE BEGIN" title="A few useful answers." description="Have another question? Include it in your enquiry or send us an email." /><FaqList items={faqs} /></div></Container></Section>
  </PageShell>;
}
