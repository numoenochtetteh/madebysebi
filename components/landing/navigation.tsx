"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";

const links = [
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
];

export function Navigation() {
  const pathname = usePathname();
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [open, setOpen] = useState(false);

  const closeMenu = () => {
    dialogRef.current?.close();
    setOpen(false);
  };

  const openMenu = () => {
    const dialog = dialogRef.current;
    if (!dialog || dialog.open) return;
    dialog.showModal();
    setOpen(true);
  };

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const query = window.matchMedia("(min-width: 900px)");
    const onDesktop = () => {
      if (query.matches) {
        dialogRef.current?.close();
        setOpen(false);
      }
    };
    query.addEventListener("change", onDesktop);
    return () => {
      query.removeEventListener("change", onDesktop);
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  return <><header className="ms-header">
    <nav className="ms-nav mbs-container" aria-label="Main navigation">
      <Link href="/" className="ms-brand" aria-label="MadeBySebi home">
        <Image src="/brand/madebysebi-wordmark.png" alt="MadeBySebi" width={155} height={30} priority />
      </Link>
      <div className="ms-navlinks">
        {links.map(link => <Link href={link.href} key={link.href}
          aria-current={pathname === link.href || pathname.startsWith(link.href + "/") ? "page" : undefined}>{link.label}</Link>)}
      </div>
      <Link className="ms-nav-cta" href="/consultation" aria-current={pathname === "/consultation" ? "page" : undefined}>Book a consultation <ArrowUpRight size={16} aria-hidden="true" /></Link>
      <button className="ms-menu-trigger" type="button" aria-label="Open navigation menu"
        aria-expanded={open} aria-controls="mobile-navigation" onClick={openMenu}><Menu size={21} /></button>
    </nav>
  </header>
    <dialog ref={dialogRef} id="mobile-navigation" className="ms-menu" aria-label="Navigation menu"
      onClose={() => setOpen(false)} onClick={event => { if (event.target === dialogRef.current) closeMenu(); }}>
      <div className="ms-menu-inner">
        <div className="ms-menu-top">
          <Image src="/brand/madebysebi-wordmark.png" alt="MadeBySebi" width={145} height={27} />
          <button type="button" aria-label="Close navigation menu" onClick={closeMenu}><X size={22} /></button>
        </div>
        <nav aria-label="Mobile navigation">
          {links.map(link => <Link key={link.href} href={link.href} onClick={closeMenu}
            aria-current={pathname === link.href || pathname.startsWith(link.href + "/") ? "page" : undefined}>{link.label}<ArrowUpRight size={22} /></Link>)}
        </nav>
        <Link className="ms-menu-cta" href="/consultation" onClick={closeMenu}>Book a consultation <ArrowUpRight size={17} aria-hidden="true" /></Link>
        <p>MadeBySebi · Accra, Ghana<br />Working worldwide</p>
      </div>
    </dialog></>;
}
