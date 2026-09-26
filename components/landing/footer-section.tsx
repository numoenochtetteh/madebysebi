"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  Facebook,
  Instagram,
  Linkedin,
  MapPin,
  MessageCircle,
} from "lucide-react";

const socialLinks = [
  {
    name: "LinkedIn",
    handle: "MadeBySebi",
    href: "https://www.linkedin.com/company/madebysebi/",
    icon: "linkedin",
  },
  {
    name: "X",
    handle: "@MadeBySebi",
    href: "https://x.com/MadeBySebi",
    icon: "x",
  },
  {
    name: "Facebook",
    handle: "MadeBySebi",
    href: "https://web.facebook.com/profile.php?id=61594479852181",
    icon: "facebook",
  },
  {
    name: "Instagram",
    handle: "@madebysebi_",
    href: "https://www.instagram.com/madebysebi_/",
    icon: "instagram",
  },
] as const;

const exploreLinks = [
  { name: "Home", href: "/" },
  { name: "Work", href: "/work" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const serviceLinks = [
  { name: "Web Design", href: "/services" },
  { name: "Web Development", href: "/services" },
  { name: "UI / UX Design", href: "/services" },
  { name: "SEO & GEO", href: "/services" },
  { name: "Branding", href: "/services" },
];

function SocialIcon({ icon }: { icon: (typeof socialLinks)[number]["icon"] }) {
  if (icon === "linkedin") {
    return <Linkedin size={17} strokeWidth={2.2} />;
  }

  if (icon === "facebook") {
    return <Facebook size={17} strokeWidth={2.2} />;
  }

  if (icon === "instagram") {
    return <Instagram size={17} strokeWidth={2.2} />;
  }

  return <span className="mbs-x-icon">X</span>;
}

export function FooterSection() {
  return (
    <footer className="mbs-footer-wrap">
      <div className="mbs-footer-shell">
        {/* MOBILE SOCIAL ICONS */}
        <div
          className="mbs-footer-mobile-socials"
          aria-label="MadeBySebi social media"
        >
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              aria-label={`MadeBySebi on ${social.name}`}
            >
              <SocialIcon icon={social.icon} />
            </a>
          ))}
        </div>

        {/* DESKTOP SOCIAL RAIL */}
        <aside className="mbs-social-rail" aria-label="MadeBySebi social media">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              aria-label={`MadeBySebi on ${social.name}`}
            >
              <SocialIcon icon={social.icon} />
            </a>
          ))}
        </aside>

        <div className="mbs-footer-topline">
          <span>MadeBySebi</span>
          <span>Accra, Ghana · Working worldwide</span>
        </div>

        <div className="mbs-footer-top">
          <div className="mbs-footer-pitch">
            <p className="mbs-footer-kicker">HAVE A PROJECT IN MIND?</p>

            <h2>
              Do you like
              <br />
              what you see?
            </h2>

            <Link href="/contact" className="mbs-footer-cta">
              <span>Start a project</span>

              <span className="mbs-footer-cta-icon">
                <ArrowUpRight size={17} />
              </span>
            </Link>
          </div>

          <nav className="mbs-footer-nav" aria-label="Footer navigation">
            <div>
              <h3>Explore</h3>

              {exploreLinks.map((link) => (
                <Link key={link.name} href={link.href}>
                  {link.name}
                </Link>
              ))}
            </div>

            <div>
              <h3>Services</h3>

              {serviceLinks.map((link) => (
                <Link key={link.name} href={link.href}>
                  {link.name}
                </Link>
              ))}
            </div>
          </nav>

          <div className="mbs-footer-contact">
            <h3>Get in touch</h3>

            <a
              href="https://wa.me/233542470922?text=Hello%20MadeBySebi%2C%20I%27d%20like%20to%20discuss%20a%20project."
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle size={16} />
              <span>+233 54 247 0922</span>
            </a>

            <a href="mailto:hello@madebysebi.com">
              <span aria-hidden="true">@</span>
              <span>hello@madebysebi.com</span>
            </a>

            <p>
              <MapPin size={16} />

              <span>
                Accra, Ghana
                <br />
                Available worldwide
              </span>
            </p>
          </div>
        </div>

        {/* DESKTOP + TABLET ONLY */}
        <div className="mbs-footer-statement" aria-label="MadeBySebi">
          madebysebi
        </div>

        {/* DESKTOP + TABLET ONLY */}
        <div className="mbs-footer-bottom">
          <strong>madebysebi.</strong>
          <span>© 2026 MadeBySebi</span>
          <span>Accra · Ghana</span>

          <div>
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
            <a href="#top">Back to top ↑</a>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .mbs-footer-wrap {
          position: relative;
          overflow: hidden;
          background: #f4f4f1;
          padding: 20px 28px 28px;
          color: #fff;
          font-family: var(--font-inter), Inter, Arial, sans-serif;
        }

        .mbs-footer-shell {
          position: relative;
          width: min(1460px, 100%);
          margin: 0 auto;
          overflow: hidden;
          border-radius: 34px;
          background: #050505;
          padding: 54px 72px 28px 104px;
        }

        .mbs-footer-topline {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          margin-bottom: 44px;
          padding-bottom: 18px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.14);
          color: rgba(255, 255, 255, 0.48);
          font-size: 10px;
          letter-spacing: 0.02em;
        }

        .mbs-footer-topline span:first-child {
          color: #fff;
          font-weight: 750;
          letter-spacing: -0.02em;
        }

        .mbs-social-rail {
          position: absolute;
          top: 28px;
          left: 24px;
          z-index: 4;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .mbs-social-rail a,
        .mbs-footer-mobile-socials a {
          display: grid;
          width: 42px;
          height: 42px;
          place-items: center;
          border-radius: 50%;
          background: #cefa74;
          color: #050505;
          text-decoration: none;
          transition:
            transform 0.25s ease,
            background 0.25s ease;
        }

        .mbs-social-rail a:hover,
        .mbs-footer-mobile-socials a:hover {
          background: #fff;
          transform: translateY(-2px);
        }

        .mbs-x-icon {
          font-size: 14px;
          font-weight: 800;
          line-height: 1;
        }

        .mbs-footer-mobile-socials {
          display: none;
        }

        .mbs-footer-top {
          display: grid;
          grid-template-columns:
            minmax(300px, 1.15fr)
            minmax(300px, 0.9fr)
            minmax(240px, 0.72fr);
          gap: clamp(48px, 6vw, 96px);
          align-items: start;
        }

        .mbs-footer-kicker {
          margin: 0 0 18px;
          color: rgba(255, 255, 255, 0.4);
          font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
          font-size: 8px;
          font-weight: 700;
          letter-spacing: 0.16em;
        }

        .mbs-footer-pitch h2 {
          max-width: 470px;
          margin: 0;
          font-size: clamp(42px, 4vw, 66px);
          font-weight: 500;
          line-height: 0.96;
          letter-spacing: -0.055em;
        }

        .mbs-footer-cta {
          display: inline-flex;
          align-items: center;
          gap: 18px;
          margin-top: 28px;
          border-radius: 999px;
          background: #cefa74;
          padding: 8px 8px 8px 22px;
          color: #080808;
          font-size: 13px;
          font-weight: 700;
          text-decoration: none;
          transition:
            transform 0.25s ease,
            background 0.25s ease;
        }

        .mbs-footer-cta:hover {
          background: #fff;
          transform: translateY(-2px);
        }

        .mbs-footer-cta-icon {
          display: grid;
          width: 36px;
          height: 36px;
          place-items: center;
          border-radius: 50%;
          background: #050505;
          color: #fff;
        }

        .mbs-footer-nav {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          padding-top: 4px;
        }

        .mbs-footer-nav > div,
        .mbs-footer-contact {
          display: flex;
          align-items: flex-start;
          flex-direction: column;
        }

        .mbs-footer-nav h3,
        .mbs-footer-contact > h3 {
          margin: 0 0 18px;
          color: rgba(255, 255, 255, 0.44);
          font-size: 12px;
          font-weight: 450;
        }

        .mbs-footer-nav a {
          margin-bottom: 10px;
          color: #fff;
          font-size: 13px;
          font-weight: 600;
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .mbs-footer-nav a:hover {
          color: #cefa74;
        }

        .mbs-footer-contact {
          padding-top: 4px;
        }

        .mbs-footer-contact > a,
        .mbs-footer-contact > p {
          display: flex;
          align-items: flex-start;
          gap: 11px;
          margin: 0 0 18px;
          color: #fff;
          font-size: 13px;
          font-weight: 600;
          line-height: 1.55;
          text-decoration: none;
        }

        .mbs-footer-contact > a:hover {
          color: #cefa74;
        }

        .mbs-footer-statement {
          width: 100%;
          margin-top: 72px;
          color: #fff;
          font-size: clamp(90px, 11.2vw, 176px);
          font-weight: 520;
          line-height: 0.76;
          letter-spacing: -0.075em;
          white-space: nowrap;
        }

        .mbs-footer-bottom {
          display: grid;
          grid-template-columns: auto auto auto 1fr;
          align-items: center;
          gap: 22px;
          margin-top: 52px;
          padding-top: 20px;
          border-top: 1px solid rgba(255, 255, 255, 0.16);
          color: rgba(255, 255, 255, 0.48);
          font-size: 9px;
        }

        .mbs-footer-bottom strong {
          color: #fff;
          font-size: 15px;
          font-weight: 750;
          letter-spacing: -0.03em;
        }

        .mbs-footer-bottom > div {
          display: flex;
          justify-content: flex-end;
          gap: 18px;
        }

        .mbs-footer-bottom a {
          color: inherit;
          text-decoration: none;
        }

        .mbs-footer-bottom a:hover {
          color: #fff;
        }

        @media (max-width: 1080px) {
          .mbs-footer-shell {
            padding-right: 44px;
            padding-left: 82px;
          }

          .mbs-footer-top {
            grid-template-columns: 1fr 1fr;
          }

          .mbs-footer-contact {
            grid-column: 2;
          }

          .mbs-footer-statement {
            font-size: clamp(76px, 11vw, 118px);
          }
        }

        @media (max-width: 760px) {
          .mbs-footer-wrap {
            padding: 12px;
          }

          .mbs-footer-shell {
            border-radius: 26px;
            padding: 24px 20px 28px;
          }

          .mbs-social-rail {
            display: none;
          }

          .mbs-footer-mobile-socials {
            display: flex;
            align-items: center;
            gap: 9px;
            margin-bottom: 28px;
          }

          .mbs-footer-mobile-socials a {
            width: 40px;
            height: 40px;
          }

          .mbs-footer-topline {
            margin-bottom: 32px;
            padding-bottom: 14px;
            font-size: 9px;
          }

          .mbs-footer-top {
            grid-template-columns: 1fr;
            gap: 38px;
          }

          .mbs-footer-pitch h2 {
            max-width: 300px;
            font-size: 40px;
            line-height: 1;
          }

          .mbs-footer-nav {
            grid-template-columns: 1fr 1fr;
            gap: 24px;
            padding-top: 0;
          }

          .mbs-footer-nav a {
            margin-bottom: 9px;
            font-size: 12px;
          }

          .mbs-footer-contact {
            grid-column: auto;
            padding-top: 0;
          }

          /*
           * PHONE ONLY:
           * remove large madebysebi wordmark
           * remove copyright/location/bottom links
           */
          .mbs-footer-statement,
          .mbs-footer-bottom {
            display: none;
          }
        }

        @media (max-width: 430px) {
          .mbs-footer-shell {
            padding: 20px 16px 26px;
          }

          .mbs-footer-mobile-socials {
            gap: 7px;
            margin-bottom: 24px;
          }

          .mbs-footer-mobile-socials a {
            width: 38px;
            height: 38px;
          }

          .mbs-footer-topline {
            align-items: flex-start;
            flex-direction: column;
            gap: 5px;
          }

          .mbs-footer-topline span:last-child {
            text-align: left;
          }

          .mbs-footer-pitch h2 {
            font-size: 36px;
          }

          .mbs-footer-nav {
            gap: 18px;
          }
        }
      `}</style>
    </footer>
  );
}
