"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";

const navLinks = [
  { name: "Services", href: "/services" },
  { name: "Pricing", href: "/pricing" },
  { name: "Work", href: "/work" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export function Navigation() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const previousOverflow = useRef("");
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isMobileMenuOpen) return;
    const dialog = dialogRef.current;
    if (!dialog) return;
    previousOverflow.current = document.body.style.overflow;
    dialog.showModal();
    document.body.style.overflow = "hidden";
    const desktop = window.matchMedia("(min-width: 1024px)");
    const onResize = () => {
      if (desktop.matches) {
        dialog.close();
        setIsMobileMenuOpen(false);
      }
    };
    desktop.addEventListener("change", onResize);
    return () => {
      document.body.style.overflow = previousOverflow.current;
      desktop.removeEventListener("change", onResize);
      if (dialog.open) dialog.close();
    };
  }, [isMobileMenuOpen]);

  const closeMobileMenu = () => {
    if (dialogRef.current?.open) {
      dialogRef.current.close();
      document.body.style.overflow = previousOverflow.current;
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed inset-x-0 z-50 transition-all duration-500 ${
        isScrolled ? "top-4 px-4" : "top-0 px-0"
      }`}
    >
      <nav
        aria-label="Main navigation"
        className={`relative z-50 mx-auto transition-all duration-500 ${
          isScrolled || isMobileMenuOpen
            ? "max-w-[1300px] rounded-[22px] border border-black/10 bg-white/85 shadow-[0_18px_55px_rgba(0,0,0,0.10)] backdrop-blur-xl"
            : "max-w-[1500px] border-transparent bg-[#f7f7f3]/95"
        }`}
      >
        <div
          className={`flex items-center justify-between px-6 transition-all duration-500 lg:px-10 ${
            isScrolled ? "h-16" : "h-20"
          }`}
        >
          {/* Logo */}
          <Link
            href="/"
            onClick={closeMobileMenu}
            className="group flex items-center gap-2"
            aria-label="MadeBySebi home"
          >
            <Image
              src="/brand/madebysebi-wordmark.png"
              alt="MadeBySebi"
              width={160}
              height={30}
              loading="eager"
              className={`h-auto w-auto transition-all duration-500 ${
                isScrolled ? "max-w-[128px]" : "max-w-[148px]"
              }`}
            />

          </Link>

          {/* Desktop navigation */}
          <div className="hidden items-center gap-9 lg:flex lg:gap-12">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                aria-current={pathname.startsWith(link.href) ? "page" : undefined}
                className="group relative text-sm font-medium text-black/65 transition-colors duration-300 hover:text-black"
              >
                {link.name}

                <span className="absolute -bottom-1 left-0 h-px w-0 bg-black transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden items-center gap-4 lg:flex">
            <Link
              href="/work"
              className={`text-black/60 transition-all duration-300 hover:text-black ${
                isScrolled ? "text-xs" : "text-sm"
              }`}
            >
              View our work
            </Link>

            <Link
              href="/contact"
              className={`group inline-flex items-center justify-center gap-2 rounded-full bg-black font-medium text-white transition-all duration-300 hover:scale-[1.02] hover:bg-black/80 ${
                isScrolled ? "h-10 px-5 text-xs" : "h-12 px-6 text-sm"
              }`}
            >
              Start a project
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          {/* Mobile button */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((current) => !current)}
            className="relative z-[60] flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white text-black transition-colors hover:bg-black hover:text-white lg:hidden"
            aria-label={
              isMobileMenuOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation"
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </nav>

      <dialog
        id="mobile-navigation"
        ref={dialogRef}
        className="mbs-mobile-dialog"
        aria-label="Navigation menu"
        onClose={() => setIsMobileMenuOpen(false)}
      >
        <div className="mbs-mobile-inner">
          <div className="mbs-mobile-top">
            <span>MADEBYSEBI / MENU</span>
            <button type="button" onClick={closeMobileMenu} aria-label="Close navigation menu" className="mbs-mobile-close">
              <X size={22} aria-hidden="true" />
            </button>
          </div>
          <nav className="mbs-mobile-links" aria-label="Mobile navigation">
            {navLinks.map((link) => <Link key={link.href} href={link.href} onClick={closeMobileMenu}
              aria-current={pathname.startsWith(link.href) ? "page" : undefined}>{link.name}</Link>)}
          </nav>
          <div className="mbs-mobile-bottom">
            <p>Have a project in mind? Let’s create a website that supports your business growth.</p>
            <Link href="/work" onClick={closeMobileMenu} className="mbs-action mbs-action-secondary">View our work</Link>
            <Link href="/contact" onClick={closeMobileMenu} className="mbs-action mbs-action-primary">Start a project <ArrowUpRight size={18} aria-hidden="true" /></Link>
            <p>Accra, Ghana · Worldwide</p>
          </div>
        </div>
      </dialog>
    </header>
  );
}
