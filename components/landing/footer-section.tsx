import Link from "next/link";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { Container } from "@/components/site/primitives";
import { company } from "@/lib/company";
import { serviceGroups, socialLinks, whatsappUrl } from "@/lib/services";
import styles from "./footer.module.css";

const exploreLinks = [{ name: "Home", href: "/" }, { name: "Services", href: "/services" }, { name: "Pricing", href: "/pricing" }, { name: "Work", href: "/work" }, { name: "About", href: "/about" }, { name: "Contact", href: "/contact" }];

export function FooterSection() {
  return <footer id="site-footer" className={styles.footer}><Container><div className={styles.shell}>
    <div className={styles.top}><div><p className={styles.eyebrow}>HAVE SOMETHING IN MIND?</p><h2>Let’s make your<br />next move useful.</h2><Link className={styles.cta} href="/contact">Discuss your project<ArrowUpRight size={18} aria-hidden="true" /></Link></div><p className={styles.description}>{company.description}</p></div>
    <div className={styles.columns}>
      <nav aria-label="Footer navigation"><h3>Explore</h3>{exploreLinks.map(link => <Link href={link.href} key={link.href}>{link.name}</Link>)}</nav>
      <nav aria-label="Footer service pillars"><h3>What we do</h3>{serviceGroups.map(group => <Link href={`/services#${group.id}`} key={group.id}>{group.title}</Link>)}</nav>
      <div><h3>Get in touch</h3><a href={`mailto:${company.email}`}>{company.email}</a><a href={whatsappUrl} target="_blank" rel="noreferrer"><MessageCircle size={16} aria-hidden="true" />{company.phone}</a><p>{company.location}<br />Working worldwide</p></div>
      <nav aria-label="MadeBySebi social media"><h3>Follow along</h3>{socialLinks.map(link => <a href={link.href} key={link.name} target="_blank" rel="noreferrer">{link.name}<ArrowUpRight size={13} aria-hidden="true" /></a>)}</nav>
    </div>
    <div className={styles.bottom}><Link href="/" aria-label="MadeBySebi home" className={styles.wordmark}>madebysebi.</Link><span>© 2026 MadeBySebi</span><nav aria-label="Legal navigation"><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link><a href="#top">Back to top ↑</a></nav></div>
  </div></Container></footer>;
}
