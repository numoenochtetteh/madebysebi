import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/site/primitives";
import { BookCallLink, ChatLink } from "@/components/site/contact-actions";
import { SocialIcon } from "@/components/site/social-icon";
import { company } from "@/lib/company";
import { serviceGroups, socialLinks } from "@/lib/services";
import styles from "./footer.module.css";

const pages = [
  { label: "Home", href: "/" }, { label: "Work", href: "/work" },
  { label: "About", href: "/about" }, { label: "Services", href: "/services" },
  { label: "Pricing", href: "/pricing" }, { label: "Contact", href: "/contact" },
];

export function FooterSection() {
  return <footer id="site-footer" className={styles.footer}>
    <Container>
      <div className={styles.invite}>
        <p className="ms-pill ms-available"><span className="ms-dot" aria-hidden="true" /> Available for projects</p>
        <h2>Have a project in mind?<br />Let&apos;s make it real.</h2>
        <p>Tell us what your business needs, from a new website to a custom tool. We&apos;ll help shape the next step.</p>
        <div className={styles.actions}><BookCallLink /><ChatLink /></div>
      </div>
      <div className={styles.columns}>
        <div className={styles.identity}>
          <Image src="/brand/madebysebi-wordmark.png" alt="MadeBySebi" width={160} height={30} />
          <p>{company.description}</p>
          <a href={"mailto:" + company.email}>{company.email}</a>
          <span>{company.location} · Working worldwide</span>
        </div>
        <nav aria-label="Footer pages"><h3>Pages</h3>{pages.map(page => <Link key={page.href} href={page.href}>{page.label}</Link>)}</nav>
        <nav aria-label="Footer services"><h3>What we do</h3>{serviceGroups.map(group => <Link key={group.id} href={"/services#" + group.id}>{group.title}</Link>)}</nav>
        <nav aria-label="Social profiles"><h3>Socials</h3>{socialLinks.map(link => <a key={link.name} href={link.href} target="_blank" rel="noreferrer"><SocialIcon name={link.name} onDark />{link.name} <ArrowUpRight size={13} aria-hidden="true" /></a>)}</nav>
      </div>
      <div className={styles.bottom}><span>© 2026 MadeBySebi. All rights reserved.</span><div><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link><a href="#top">Back to top ↑</a></div></div>
    </Container>
  </footer>;
}
