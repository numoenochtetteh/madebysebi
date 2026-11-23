import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import { ArrowUpRight, ChartNoAxesCombined, Code2, Megaphone, MousePointer2, Palette, Search } from "lucide-react";
import { Container } from "@/components/site/primitives";
import styles from "./service-gallery.module.css";

const services = [
  {
    number: "01", title: "Web Design", subtitle: "& Development",
    image: "/services/web-design-custom.png", alt: "Hands working on a website at a laptop",
    description: "Fast, responsive websites built to communicate your value clearly, build trust and turn attention into enquiries.",
    tags: ["Business websites", "Landing pages", "Website redesign", "Responsive development"],
    contactService: "Web Design & Development", accent: "#c9f267", icon: Code2,
    groupId: "online-presence", legacyId: "web-design-development", wide: true,
  },
  {
    number: "02", title: "UX/UI", subtitle: "& Product Design",
    image: "/services/ui-ux.jpg", alt: "Mobile product interface shown on a phone",
    description: "Thoughtful digital interfaces that make products simpler to understand, easier to use and more enjoyable to interact with.",
    tags: ["UX strategy", "Interface design", "SaaS dashboards", "Design systems"],
    contactService: "UX/UI & Product Design", accent: "#bb95f6", icon: MousePointer2,
    groupId: "build-your-solution", legacyId: "ux-ui-product-design", wide: false,
  },
  {
    number: "03", title: "Branding", subtitle: "& Visual Design",
    image: "/services/branding-custom.png", alt: "Branding artwork outlining identity, logo, design and strategy",
    description: "Distinctive visual identities that make your business feel consistent, professional and easy to remember.",
    tags: ["Visual identity", "Digital direction", "Typography", "Creative assets"],
    contactService: "Branding & Visual Design", accent: "#ff865f", icon: Palette,
    legacyId: "branding-visual-design", wide: false,
  },
  {
    number: "04", title: "SEO & GEO", subtitle: "& Visibility",
    image: "/services/seo-custom.png", alt: "Workspace with a desktop computer and a search page",
    description: "Better structure, content and performance so people can discover your business through search engines and AI platforms.",
    tags: ["Technical SEO", "On-page SEO", "Performance", "AI search readiness"],
    contactService: "SEO & GEO", accent: "#69d7b7", icon: Search,
    groupId: "grow-your-business", legacyId: "seo-geo-visibility", wide: true,
  },
  {
    number: "05", title: "Digital Marketing", subtitle: "& Growth",
    image: "/services/marketing.webp", alt: "Person holding a printed creative publication",
    description: "Focused campaigns, stronger messaging and conversion-led experiences that help your business reach the right audience.",
    tags: ["Digital strategy", "Campaign direction", "Conversion strategy", "Content planning"],
    contactService: "Digital Marketing", accent: "#91b8fb", icon: Megaphone,
    legacyId: "digital-marketing-growth", wide: false,
  },
  {
    number: "06", title: "Consultation", subtitle: "& Audits",
    image: "/services/consultation.webp", alt: "Collaborative desk with design materials",
    description: "A practical review of your current digital presence with clear recommendations for what to improve next.",
    tags: ["Website audits", "UX review", "Performance review", "Digital roadmap"],
    contactService: "Website Consultation", accent: "#fbd56f", icon: ChartNoAxesCombined,
    legacyId: "consultation-audits", wide: false,
  },
] as const;

export function ServiceGallery() {
  return <section id="services-gallery" className={styles.section} aria-label="MadeBySebi services">
    <Container>
      <div className={styles.grid}>
        {services.map(service => {
          const Icon = service.icon;
          const href = `/contact?service=${encodeURIComponent(service.contactService)}#contact-form`;
          return <article id={"groupId" in service ? service.groupId : service.legacyId} key={service.number} className={`${styles.card} ${service.wide ? styles.wide : styles.stacked}`} style={{ "--card-accent": service.accent } as CSSProperties} aria-labelledby={`service-${service.number}`}>
            {"groupId" in service ? <span id={service.legacyId} className={styles.anchor} aria-hidden="true" /> : null}
            <div className={styles.media}>
              <Image src={service.image} alt={service.alt} fill sizes={service.wide ? "(max-width: 700px) 100vw, 50vw" : "(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 550px"} />
              <span className={styles.number}>{service.number}</span>
              <span className={styles.icon} aria-hidden="true"><Icon size={17} strokeWidth={1.8} /></span>
            </div>
            <div className={styles.content}>
              <div className={styles.copy}><h3 id={`service-${service.number}`}>{service.title}<span>{service.subtitle}</span></h3><p>{service.description}</p></div>
              <ul className={styles.tags} aria-label={`${service.title} capabilities`}>{service.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
              <Link className={styles.action} href={href} aria-label={`Start a ${service.title} project`}>Start a project <span aria-hidden="true"><ArrowUpRight size={17} /></span></Link>
            </div>
          </article>;
        })}
      </div>
    </Container>
  </section>;
}
