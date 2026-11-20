import Image from "next/image";
import Link from "next/link";
import { Boxes, CalendarDays, Globe2, PanelsTopLeft, Rocket, ShoppingBag, Smartphone, Wrench } from "lucide-react";
import { ActionLink, Container, SectionHeading } from "@/components/site/primitives";
import { FaqList } from "@/components/site/content-layout";
import { BookCallLink, ChatLink } from "@/components/site/contact-actions";
import { company, teamMembers } from "@/lib/company";
import { pricingCategories } from "@/lib/pricing-catalog";
import { pricingFaqs } from "@/lib/pricing-faqs";
import { serviceGroups } from "@/lib/services";

const serviceIcons = {
  "business-websites": Globe2,
  ecommerce: ShoppingBag,
  booking: CalendarDays,
  "business-launch": Rocket,
  "web-applications": PanelsTopLeft,
  "business-systems": Boxes,
  "mobile-applications": Smartphone,
  "maintenance-growth": Wrench,
} as const;
const serviceRows = [pricingCategories.slice(0, 4), pricingCategories.slice(4)];

export function HomeServiceSections() {
  return <>
    <section className="ms-section ms-about-preview" aria-labelledby="home-about-title">
      <Container>
        <div className="ms-about-preview-grid">
          <div>
            <SectionHeading id="home-about-title" eyebrow="About MadeBySebi" title={<>A small team for<br /> ambitious ideas.</>} />
            <p>We are a digital solutions agency in Accra, Ghana. We bring design and development together to make useful tools for businesses and the people they serve.</p>
            <ActionLink href="/about" variant="secondary">Meet the team</ActionLink>
          </div>
          <div className="ms-about-panel">
            <div className="ms-portraits">{teamMembers.map(member => <Image key={member.name} src={member.image} alt={member.name} width={78} height={78} style={{ objectPosition: member.position }} />)}</div>
            <p>From a first website to the software behind everyday operations, we look for the clearest way to make each business idea work.</p>
            <span>{company.location} · Working worldwide</span>
          </div>
        </div>
      </Container>
    </section>
    <section className="ms-section ms-services-preview" aria-labelledby="home-services-title">
      <Container>
        <div className="ms-center-heading"><SectionHeading id="home-services-title" eyebrow="What we do" title={<>Everything your business needs<br className="ms-desktop-break" /> to show up and work better.</>} /></div>
        <div className="ms-service-pills" role="group" aria-label="Explore MadeBySebi services">
          {serviceRows.map((row, rowIndex) => <div className="ms-service-pill-window" key={rowIndex}>
            <div className={`ms-service-pill-track ${rowIndex === 1 ? "ms-service-pill-reverse" : ""}`}>
              {[0, 1].map(copy => <div className="ms-service-pill-set" key={copy} aria-hidden={copy === 1}>
                {row.map(category => { const Icon = serviceIcons[category.id]; return <Link href={`/pricing?category=${category.id}`} key={category.id} tabIndex={copy === 1 ? -1 : undefined} className="ms-service-pill"><Icon size={20} strokeWidth={1.7} aria-hidden="true" />{category.name}</Link>; })}
              </div>)}
            </div>
          </div>)}
        </div>
        <div className="ms-service-cards">
          <svg className="ms-service-arrow ms-service-arrow-top" viewBox="0 0 84 50" aria-hidden="true"><path d="M3 43C9 6 43 6 75 28M57 12l18 16-21 2" /></svg>
          {serviceGroups.map(group => <article key={group.id} id={group.id} className="ms-service-card">
            <Link href={`/services#${group.id}`} aria-label={`Explore ${group.shortName} services`}>
              <span className="ms-index">{group.number}</span>
              <h3>{group.shortName}</h3>
              <p>{group.description}</p>
            </Link>
          </article>)}
          <svg className="ms-service-arrow ms-service-arrow-bottom" viewBox="0 0 84 50" aria-hidden="true"><path d="M3 7c6 37 40 37 72 15M57 38l18-16-21-2" /></svg>
        </div>
        <div className="ms-section-end"><ActionLink href="/services" variant="secondary">Explore all services</ActionLink></div>
      </Container>
    </section>
    <section className="ms-section ms-home-faq" aria-labelledby="home-faq-title">
      <Container>
        <div className="ms-home-faq-layout">
          <div className="ms-home-faq-intro"><p className="ms-pill ms-available"><span className="ms-dot" aria-hidden="true" /> Before you decide · Available for projects</p><SectionHeading id="home-faq-title" title={<>Have a project<br />in mind? Let&apos;s<br />make it real.</>} description="Good projects begin with the right questions. Here are a few useful answers before we talk." /><div className="ms-home-faq-actions"><BookCallLink /><ChatLink /></div></div>
          <FaqList items={pricingFaqs} />
        </div>
      </Container>
    </section>
  </>;
}
