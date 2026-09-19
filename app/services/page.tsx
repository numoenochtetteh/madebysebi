"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";

import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Code2,
  Compass,
  Megaphone,
  Palette,
  Search,
  Sparkles,
  Globe2,
  Layers3,
  MousePointer2,
} from "lucide-react";

const services = [
  {
    number: "01",
    slug: "web-design-development",
    title: "Web Design",
    subtitle: "& Development",
    description:
      "Fast, responsive websites built to communicate your value clearly, build trust and turn attention into enquiries.",
    image: "/services/web-design.webp",
    color: "#d9ff25",
    dark: false,
    icon: Code2,
    items: [
      "Business websites",
      "Landing pages",
      "Website redesign",
      "Responsive development",
    ],
  },
  {
    number: "02",
    slug: "ux-ui-product-design",
    title: "UX/UI",
    subtitle: "& Product Design",
    description:
      "Thoughtful digital interfaces that make products simpler to understand, easier to use and more enjoyable to interact with.",
    image: "/services/ui-ux.jpg",
    color: "#b8a7ff",
    dark: false,
    icon: Compass,
    items: [
      "UX strategy",
      "Interface design",
      "SaaS dashboards",
      "Design systems",
    ],
  },
  {
    number: "03",
    slug: "branding-visual-design",
    title: "Branding",
    subtitle: "& Visual Design",
    description:
      "Distinctive visual identities that make your business feel consistent, professional and easy to remember.",
    image: "/services/branding.jpg",
    color: "#ff815c",
    dark: true,
    icon: Palette,
    items: [
      "Visual identity",
      "Digital direction",
      "Typography",
      "Creative assets",
    ],
  },
  {
    number: "04",
    slug: "seo-geo-visibility",
    title: "SEO & GEO",
    subtitle: "& Visibility",
    description:
      "Better structure, content and performance so people can discover your business through search engines and AI platforms.",
    image: "/services/seo.webp",
    color: "#7bdcb5",
    dark: false,
    icon: Search,
    items: [
      "Technical SEO",
      "On-page SEO",
      "Performance",
      "AI search readiness",
    ],
  },
  {
    number: "05",
    slug: "digital-marketing-growth",
    title: "Digital Marketing",
    subtitle: "& Growth",
    description:
      "Focused campaigns, stronger messaging and conversion-led experiences that help your business reach the right audience.",
    image: "/services/marketing.webp",
    color: "#78a8ff",
    dark: true,
    icon: Megaphone,
    items: [
      "Digital strategy",
      "Campaign direction",
      "Conversion strategy",
      "Content planning",
    ],
  },
  {
    number: "06",
    slug: "consultation-audits",
    title: "Consultation",
    subtitle: "& Audits",
    description:
      "A practical review of your current digital presence with clear recommendations for what to improve next.",
    image: "/services/consultation.webp",
    color: "#ffd66b",
    dark: false,
    icon: BarChart3,
    items: [
      "Website audits",
      "UX review",
      "Performance review",
      "Digital roadmap",
    ],
  },
];

export default function ServicesPage() {
  useEffect(() => {
    const elements = document.querySelectorAll("[data-reveal]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.12 },
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navigation />

      <main className="services-page">
        {/* =====================================================
            HERO
        ===================================================== */}

        <section className="services-hero">
          <div className="hero-orb hero-orb-lime" />
          <div className="hero-orb hero-orb-blue" />
          <div className="hero-orb hero-orb-orange" />

          <div className="services-hero-inner">
            <span className="services-badge">
              <span />
              SERVICES
            </span>

            <h1>
              Build what your
              <br />
              business deserves.
            </h1>

            <p className="services-hero-copy">
              Strategy, design and development working together to create
              digital experiences that look professional, communicate clearly
              and support real business growth.
            </p>

            <div className="hero-actions">
              <Link href="/contact" className="hero-primary">
                Start a project
                <ArrowRight size={17} />
              </Link>

              <Link href="/work" className="hero-secondary">
                View our work
              </Link>
            </div>

            {/* ===============================================
                ANIMATED HERO VISUAL
            ================================================ */}

            <div className="hero-visual" data-reveal>
              <div className="hero-browser">
                <div className="hero-browser-top">
                  <div>
                    <span />
                    <span />
                    <span />
                  </div>

                  <p>numodigital.com</p>

                  <ArrowUpRight size={15} />
                </div>

                <div className="hero-browser-content">
                  <div className="browser-sidebar">
                    <span>01</span>
                    <span>02</span>
                    <span>03</span>
                    <span>04</span>
                  </div>

                  <div className="browser-preview">
                    <video
                      autoPlay
                      muted
                      loop
                      playsInline
                      poster="/expertise/product-experience.png"
                    >
                      <source src="/expertise/1080.mp4" type="video/mp4" />
                    </video>
                  </div>
                </div>
              </div>

              {/* floating mini cards */}

              <div className="floating-card floating-card-one">
                <div className="floating-icon lime">
                  <Code2 size={19} />
                </div>

                <div>
                  <small>DEVELOPMENT</small>
                  <strong>Fast. Responsive.</strong>
                </div>
              </div>

              <div className="floating-card floating-card-two">
                <div className="floating-icon purple">
                  <Palette size={19} />
                </div>

                <div>
                  <small>DESIGN</small>
                  <strong>Clear. Distinctive.</strong>
                </div>
              </div>

              <div className="floating-card floating-card-three">
                <div className="floating-icon orange">
                  <Sparkles size={19} />
                </div>

                <div>
                  <small>GROWTH</small>
                  <strong>Built to convert.</strong>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            MOVING SERVICE STRIP
        ===================================================== */}

        <section className="service-marquee">
          <div className="service-marquee-track">
            {[...services, ...services].map((service, index) => (
              <div className="marquee-item" key={`${service.title}-${index}`}>
                <span
                  className="marquee-dot"
                  style={{ background: service.color }}
                />
                {service.title}
                <span className="marquee-star">✦</span>
              </div>
            ))}
          </div>
        </section>

        {/* =====================================================
            INTRO
        ===================================================== */}

        <section className="services-intro" data-reveal>
          <div className="services-intro-inner">
            <span className="section-label">WHAT WE DO</span>

            <div>
              <h2>
                Not just a website.
                <br />A complete digital presence.
              </h2>

              <p>
                Every business needs something different. We combine the right
                services for your project instead of forcing every client into
                the same package.
              </p>
            </div>
          </div>
        </section>

        {/* =====================================================
            SERVICE CARDS
        ===================================================== */}

        <section className="services-grid-section">
          <div className="services-grid">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <article
                  id={service.slug}
                  key={service.number}
                  className={`service-card ${
                    index === 0 || index === 3 ? "service-card-wide" : ""
                  }`}
                  data-reveal
                  style={
                    {
                      "--accent": service.color,
                    } as React.CSSProperties
                  }
                >
                  <div
                    className={`service-card-media ${
                      service.dark ? "service-media-dark" : ""
                    }`}
                  >
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 800px) 100vw, 50vw"
                    />

                    <div className="media-overlay" />

                    <div className="service-number">{service.number}</div>

                    <div className="service-icon">
                      <Icon size={21} strokeWidth={1.6} />
                    </div>
                  </div>

                  <div className="service-card-body">
                    <div>
                      <h3>
                        {service.title}
                        <span>{service.subtitle}</span>
                      </h3>

                      <p>{service.description}</p>
                    </div>

                    <div className="service-card-bottom">
                      <div className="service-tags">
                        {service.items.map((item) => (
                          <span key={item}>{item}</span>
                        ))}
                      </div>

                      <Link href="/contact">
                        <span>Start a project</span>

                        <span className="round-arrow">
                          <ArrowUpRight size={17} />
                        </span>
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* =====================================================
            VISUAL BREAK
        ===================================================== */}

        <section className="services-visual-break">
          <div className="visual-break-inner" data-reveal>
            <div className="visual-break-copy">
              <span className="services-badge dark-badge">
                <span />
                BUILT TOGETHER
              </span>

              <h2>
                Strategy meets
                <br />
                design meets code.
              </h2>

              <p>
                The strongest digital experiences are not made in separate
                silos. We connect business thinking, visual design and
                development from the beginning.
              </p>
            </div>

            <div className="visual-system">
              <div className="visual-ring ring-a" />
              <div className="visual-ring ring-b" />
              <div className="visual-ring ring-c" />

              <div className="visual-center">
                <strong>numo</strong>
                <small>DIGITAL</small>
              </div>

              <div className="system-node node-one">
                <Compass size={20} />
                <span>Strategy</span>
              </div>

              <div className="system-node node-two">
                <Palette size={20} />
                <span>Design</span>
              </div>

              <div className="system-node node-three">
                <Code2 size={20} />
                <span>Code</span>
              </div>

              <div className="system-node node-four">
                <Globe2 size={20} />
                <span>Growth</span>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            PROCESS
        ===================================================== */}

        <section className="services-process">
          <div className="services-process-inner">
            <div className="process-heading" data-reveal>
              <span className="section-label">HOW WE WORK</span>

              <h2>
                From idea
                <br />
                to launch.
              </h2>

              <p>
                A straightforward process designed to keep projects moving
                without unnecessary complexity.
              </p>
            </div>

            <div className="process-cards">
              <article data-reveal>
                <span>01</span>

                <div className="process-card-icon">
                  <Search size={22} />
                </div>

                <h3>Discover</h3>

                <p>
                  We understand the business, audience, goals and what needs to
                  change.
                </p>
              </article>

              <article data-reveal>
                <span>02</span>

                <div className="process-card-icon">
                  <Layers3 size={22} />
                </div>

                <h3>Shape</h3>

                <p>
                  We establish the structure, visual direction and experience.
                </p>
              </article>

              <article data-reveal>
                <span>03</span>

                <div className="process-card-icon">
                  <Code2 size={22} />
                </div>

                <h3>Build</h3>

                <p>
                  We develop the approved direction into a polished, responsive
                  product.
                </p>
              </article>

              <article data-reveal>
                <span>04</span>

                <div className="process-card-icon">
                  <MousePointer2 size={22} />
                </div>

                <h3>Launch</h3>

                <p>
                  We test, refine and launch so the experience is ready for real
                  customers.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* =====================================================
            FINAL CTA
        ===================================================== */}

        <section className="services-final">
          <div className="services-final-inner" data-reveal>
            <div>
              <span>READY WHEN YOU ARE</span>

              <h2>
                Have something
                <br />
                worth building?
              </h2>
            </div>

            <Link href="/contact">
              Start a project
              <span>
                <ArrowUpRight size={21} />
              </span>
            </Link>
          </div>
        </section>

        <style jsx global>{`
          .services-page {
            overflow: hidden;
            background: #f4f4f1;
            color: #111;
          }

          [data-reveal] {
            opacity: 0;
            transform: translateY(35px);
            transition:
              opacity 0.9s cubic-bezier(0.22, 1, 0.36, 1),
              transform 0.9s cubic-bezier(0.22, 1, 0.36, 1);
          }

          [data-reveal].is-visible {
            opacity: 1;
            transform: translateY(0);
          }

          .services-hero {
            position: relative;
            min-height: 980px;
            overflow: hidden;
            padding: 140px 24px 90px;
          }

          .services-hero-inner {
            position: relative;
            z-index: 2;
            width: min(1350px, 100%);
            margin: 0 auto;
            text-align: center;
          }

          .services-badge {
            display: inline-flex;
            align-items: center;
            gap: 9px;
            border: 1px solid #d4cec1;
            border-radius: 6px;
            padding: 8px 12px;
            color: #5f574f;
            font-family:
              ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
            font-size: 9px;
            font-weight: 700;
            letter-spacing: 0.16em;
          }

          .services-badge > span {
            width: 8px;
            height: 8px;
            border-radius: 2px;
            background: #d9ff25;
          }

          .services-hero h1 {
            max-width: 1050px;
            margin: 35px auto 0;
            font-size: clamp(60px, 7.1vw, 105px);
            font-weight: 700;
            line-height: 0.88;
            letter-spacing: -0.07em;
          }

          .services-hero-copy {
            max-width: 690px;
            margin: 33px auto 0;
            color: #68615a;
            font-size: 17px;
            line-height: 1.55;
          }

          .hero-actions {
            display: flex;
            justify-content: center;
            gap: 10px;
            margin-top: 30px;
          }

          .hero-primary,
          .hero-secondary {
            display: inline-flex;
            height: 52px;
            align-items: center;
            justify-content: center;
            border-radius: 999px;
            padding: 0 25px;
            font-size: 13px;
            font-weight: 600;
            text-decoration: none;
          }

          .hero-primary {
            gap: 24px;
            background: #111;
            color: white;
          }

          .hero-primary svg {
            color: #d9ff25;
            transition: transform 0.3s ease;
          }

          .hero-primary:hover svg {
            transform: translateX(4px);
          }

          .hero-secondary {
            border: 1px solid #cbc9c3;
            color: #111;
            background: rgba(255, 255, 255, 0.35);
          }

          .hero-orb {
            position: absolute;
            border-radius: 50%;
            filter: blur(100px);
            pointer-events: none;
            animation: heroOrbMove 8s ease-in-out infinite;
          }

          .hero-orb-lime {
            top: 120px;
            left: 5%;
            width: 380px;
            height: 380px;
            background: rgba(217, 255, 37, 0.24);
          }

          .hero-orb-blue {
            top: 240px;
            right: 4%;
            width: 430px;
            height: 430px;
            background: rgba(78, 115, 255, 0.18);
            animation-delay: -2.5s;
          }

          .hero-orb-orange {
            bottom: 0;
            left: 42%;
            width: 340px;
            height: 340px;
            background: rgba(255, 112, 72, 0.13);
            animation-delay: -5s;
          }

          @keyframes heroOrbMove {
            0%,
            100% {
              transform: translate3d(0, 0, 0) scale(1);
            }

            50% {
              transform: translate3d(30px, -20px, 0) scale(1.08);
            }
          }

          .hero-visual {
            position: relative;
            width: min(1060px, 88%);
            height: 430px;
            margin: 70px auto 0;
          }

          .hero-browser {
            position: absolute;
            inset: 0 90px;
            overflow: hidden;
            border: 1px solid rgba(17, 17, 17, 0.12);
            border-radius: 28px;
            background: white;
            box-shadow: 0 30px 80px rgba(0, 0, 0, 0.11);
            transform: perspective(1200px) rotateX(4deg);
          }

          .hero-browser-top {
            display: grid;
            height: 52px;
            grid-template-columns: 1fr auto 1fr;
            align-items: center;
            padding: 0 18px;
            border-bottom: 1px solid #ecebe6;
          }

          .hero-browser-top > div {
            display: flex;
            gap: 5px;
          }

          .hero-browser-top > div span {
            width: 7px;
            height: 7px;
            border-radius: 50%;
            background: #d8d7d2;
          }

          .hero-browser-top p {
            margin: 0;
            color: #777;
            font-size: 9px;
          }

          .hero-browser-top > svg {
            justify-self: end;
          }

          .hero-browser-content {
            display: grid;
            height: calc(100% - 52px);
            grid-template-columns: 70px 1fr;
          }

          .browser-sidebar {
            display: flex;
            flex-direction: column;
            gap: 15px;
            padding: 22px;
            border-right: 1px solid #ecebe6;
          }

          .browser-sidebar span {
            font-family: ui-monospace, monospace;
            font-size: 8px;
            color: #999;
          }

          .browser-preview {
            position: relative;
            overflow: hidden;
            background: #e7e7e2;
          }

          .browser-preview video {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }

          .floating-card {
            position: absolute;
            z-index: 5;
            display: flex;
            align-items: center;
            gap: 11px;
            min-width: 210px;
            border: 1px solid rgba(17, 17, 17, 0.1);
            border-radius: 15px;
            background: rgba(255, 255, 255, 0.86);
            padding: 11px 14px;
            box-shadow: 0 18px 45px rgba(0, 0, 0, 0.11);
            backdrop-filter: blur(14px);
            animation: floatCard 4s ease-in-out infinite;
          }

          .floating-card-one {
            top: 40px;
            left: 0;
          }

          .floating-card-two {
            top: 160px;
            right: 0;
            animation-delay: -1.4s;
          }

          .floating-card-three {
            bottom: 25px;
            left: 60px;
            animation-delay: -2.8s;
          }

          @keyframes floatCard {
            0%,
            100% {
              transform: translateY(0) rotate(-1deg);
            }

            50% {
              transform: translateY(-14px) rotate(1deg);
            }
          }

          .floating-icon {
            display: grid;
            width: 40px;
            height: 40px;
            flex-shrink: 0;
            place-items: center;
            border-radius: 11px;
          }

          .floating-icon.lime {
            background: #d9ff25;
          }

          .floating-icon.purple {
            background: #c9bfff;
          }

          .floating-icon.orange {
            background: #ff8b67;
          }

          .floating-card > div:last-child {
            display: flex;
            flex-direction: column;
          }

          .floating-card small {
            color: #89847e;
            font-family: ui-monospace, monospace;
            font-size: 7px;
            letter-spacing: 0.1em;
          }

          .floating-card strong {
            margin-top: 3px;
            font-size: 11px;
          }

          .service-marquee {
            overflow: hidden;
            border-top: 1px solid #d4d2cc;
            border-bottom: 1px solid #d4d2cc;
            background: #e8e6df;
            color: #111;
          }

          .service-marquee-track {
            display: flex;
            width: max-content;
            animation: serviceMarquee 25s linear infinite;
          }

          .marquee-item {
            display: flex;
            height: 68px;
            align-items: center;
            gap: 18px;
            padding: 0 25px;
            white-space: nowrap;
            font-size: 15px;
          }

          .marquee-dot {
            width: 9px;
            height: 9px;
            border-radius: 2px;
          }

          .marquee-star {
            color: #9a948c;
          }

          @keyframes serviceMarquee {
            to {
              transform: translateX(-50%);
            }
          }

          .services-intro {
            padding: 120px 28px;
          }

          .services-intro-inner {
            display: grid;
            width: min(1350px, 100%);
            margin: 0 auto;
            grid-template-columns: 0.35fr 1fr;
            gap: 70px;
          }

          .section-label {
            padding-top: 10px;
            color: #807a73;
            font-family: ui-monospace, monospace;
            font-size: 9px;
            letter-spacing: 0.14em;
          }

          .services-intro h2 {
            max-width: 980px;
            margin: 0;
            font-size: clamp(53px, 6vw, 90px);
            font-weight: 600;
            line-height: 0.91;
            letter-spacing: -0.065em;
          }

          .services-intro p {
            max-width: 590px;
            margin: 30px 0 0;
            color: #6f6861;
            font-size: 15px;
            line-height: 1.65;
          }

          .services-grid-section {
            padding: 0 28px 120px;
          }

          .services-grid {
            display: grid;
            width: min(1350px, 100%);
            margin: 0 auto;
            grid-template-columns: 1fr 1fr;
            gap: 16px;
          }

          .service-card {
            scroll-margin-top: 110px;
            position: relative;
            overflow: hidden;
            border: 1px solid #d6d4ce;
            border-radius: 28px;
            background: #fbfaf7;
          }

          .service-card-wide {
            grid-column: span 2;
            display: grid;
            grid-template-columns: 1.1fr 0.9fr;
          }

          .service-card-media {
            position: relative;
            min-height: 350px;
            overflow: hidden;
            background: var(--accent);
          }

          .service-card-wide .service-card-media {
            min-height: 470px;
          }

          .service-card-media img {
            object-fit: cover;
            transition: transform 0.8s cubic-bezier(0.22, 1, 0.36, 1);
          }

          .service-card:hover .service-card-media img {
            transform: scale(1.045);
          }

          .media-overlay {
            position: absolute;
            inset: 0;
            background: linear-gradient(
              180deg,
              rgba(0, 0, 0, 0.08),
              transparent 45%,
              rgba(0, 0, 0, 0.08)
            );
          }

          .service-number {
            position: absolute;
            top: 18px;
            left: 18px;
            z-index: 3;
            display: grid;
            min-width: 38px;
            height: 30px;
            place-items: center;
            border-radius: 999px;
            background: white;
            font-family: ui-monospace, monospace;
            font-size: 9px;
          }

          .service-icon {
            position: absolute;
            top: 16px;
            right: 16px;
            z-index: 3;
            display: grid;
            width: 44px;
            height: 44px;
            place-items: center;
            border-radius: 50%;
            background: var(--accent);
            color: #111;
          }

          .service-card-body {
            display: flex;
            min-height: 330px;
            padding: 28px;
            flex-direction: column;
            justify-content: space-between;
          }

          .service-card-wide .service-card-body {
            min-height: auto;
            padding: 42px;
          }

          .service-card h3 {
            margin: 0;
            font-size: clamp(34px, 3vw, 55px);
            font-weight: 600;
            line-height: 0.93;
            letter-spacing: -0.055em;
          }

          .service-card h3 span {
            display: block;
            margin-top: 5px;
            color: #817a73;
            font-weight: 400;
          }

          .service-card-body > div:first-child > p {
            max-width: 500px;
            margin: 20px 0 0;
            color: #6c655e;
            font-size: 13px;
            line-height: 1.6;
          }

          .service-card-bottom {
            margin-top: 30px;
          }

          .service-tags {
            display: flex;
            gap: 6px;
            flex-wrap: wrap;
          }

          .service-tags span {
            border: 1px solid #d0cdc5;
            border-radius: 999px;
            padding: 7px 10px;
            font-size: 9px;
          }

          .service-card-bottom > a {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-top: 28px;
            border-top: 1px solid #dedbd4;
            padding-top: 18px;
            color: #111;
            font-size: 12px;
            font-weight: 600;
            text-decoration: none;
          }

          .round-arrow {
            display: grid;
            width: 38px;
            height: 38px;
            place-items: center;
            border-radius: 50%;
            background: var(--accent);
            transition: transform 0.3s ease;
          }

          .service-card:hover .round-arrow {
            transform: rotate(45deg);
          }

          .services-visual-break {
            padding: 28px;
            background: #f4f4f1;
          }

          .visual-break-inner {
            display: grid;
            width: min(1350px, 100%);
            min-height: 650px;
            margin: 0 auto;
            grid-template-columns: 1fr 1fr;
            overflow: hidden;
            border-radius: 34px;
            background: #111;
            color: white;
          }

          .visual-break-copy {
            display: flex;
            justify-content: center;
            padding: 70px;
            flex-direction: column;
          }

          .dark-badge {
            align-self: flex-start;
            border-color: rgba(255, 255, 255, 0.2);
            color: rgba(255, 255, 255, 0.65);
          }

          .visual-break-copy h2 {
            margin: 35px 0 0;
            font-size: clamp(55px, 5.7vw, 90px);
            font-weight: 600;
            line-height: 0.9;
            letter-spacing: -0.065em;
          }

          .visual-break-copy p {
            max-width: 520px;
            margin: 30px 0 0;
            color: rgba(255, 255, 255, 0.57);
            font-size: 14px;
            line-height: 1.65;
          }

          .visual-system {
            position: relative;
            overflow: hidden;
          }

          .visual-ring {
            position: absolute;
            top: 50%;
            left: 50%;
            border: 1px solid rgba(255, 255, 255, 0.12);
            border-radius: 50%;
            transform: translate(-50%, -50%);
          }

          .ring-a {
            width: 240px;
            height: 240px;
          }

          .ring-b {
            width: 420px;
            height: 420px;
          }

          .ring-c {
            width: 600px;
            height: 600px;
          }

          .visual-center {
            position: absolute;
            top: 50%;
            left: 50%;
            display: flex;
            width: 120px;
            height: 120px;
            align-items: center;
            justify-content: center;
            border-radius: 30px;
            background: #d9ff25;
            color: #111;
            flex-direction: column;
            transform: translate(-50%, -50%);
            animation: visualPulse 4s ease-in-out infinite;
          }

          .visual-center strong {
            font-size: 24px;
          }

          .visual-center small {
            margin-top: 2px;
            font-family: ui-monospace, monospace;
            font-size: 6px;
            letter-spacing: 0.12em;
          }

          @keyframes visualPulse {
            50% {
              transform: translate(-50%, -50%) scale(1.06);
            }
          }

          .system-node {
            position: absolute;
            display: flex;
            align-items: center;
            gap: 8px;
            border: 1px solid rgba(255, 255, 255, 0.13);
            border-radius: 999px;
            background: rgba(255, 255, 255, 0.08);
            padding: 12px 15px;
            backdrop-filter: blur(12px);
            font-size: 11px;
            animation: nodeFloat 5s ease-in-out infinite;
          }

          .node-one {
            top: 20%;
            left: 16%;
          }

          .node-two {
            top: 23%;
            right: 13%;
            animation-delay: -1s;
          }

          .node-three {
            bottom: 20%;
            left: 20%;
            animation-delay: -2s;
          }

          .node-four {
            right: 15%;
            bottom: 22%;
            animation-delay: -3s;
          }

          @keyframes nodeFloat {
            50% {
              transform: translateY(-13px);
            }
          }

          .services-process {
            padding: 120px 28px;
          }

          .services-process-inner {
            width: min(1350px, 100%);
            margin: 0 auto;
          }

          .process-heading {
            display: grid;
            grid-template-columns: 0.3fr 1fr 0.6fr;
            gap: 50px;
            align-items: end;
          }

          .process-heading h2 {
            margin: 0;
            font-size: clamp(60px, 6.5vw, 100px);
            font-weight: 600;
            line-height: 0.9;
            letter-spacing: -0.065em;
          }

          .process-heading p {
            margin: 0;
            color: #6d665f;
            font-size: 14px;
            line-height: 1.6;
          }

          .process-cards {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            margin-top: 75px;
            border-top: 1px solid #d3d0c8;
          }

          .process-cards article {
            min-height: 320px;
            padding: 25px;
            border-right: 1px solid #d3d0c8;
          }

          .process-cards article:last-child {
            border-right: 0;
          }

          .process-cards article > span {
            color: #8b847d;
            font-family: ui-monospace, monospace;
            font-size: 9px;
          }

          .process-card-icon {
            display: grid;
            width: 48px;
            height: 48px;
            margin-top: 70px;
            place-items: center;
            border-radius: 14px;
            background: #d9ff25;
          }

          .process-cards h3 {
            margin: 20px 0 8px;
            font-size: 25px;
          }

          .process-cards p {
            max-width: 230px;
            margin: 0;
            color: #706a63;
            font-size: 12px;
            line-height: 1.55;
          }

          .services-final {
            padding: 28px 28px 60px;
          }

          .services-final-inner {
            display: flex;
            width: min(1350px, 100%);
            min-height: 500px;
            margin: 0 auto;
            align-items: flex-end;
            justify-content: space-between;
            gap: 50px;
            overflow: hidden;
            border-radius: 34px;
            background:
              radial-gradient(
                circle at 75% 40%,
                rgba(217, 255, 37, 0.9),
                transparent 28%
              ),
              #dedbd2;
            padding: 60px;
          }

          .services-final-inner > div > span {
            font-family: ui-monospace, monospace;
            font-size: 9px;
            letter-spacing: 0.14em;
          }

          .services-final h2 {
            margin: 25px 0 0;
            font-size: clamp(65px, 7vw, 110px);
            font-weight: 600;
            line-height: 0.86;
            letter-spacing: -0.07em;
          }

          .services-final-inner > a {
            display: flex;
            flex-shrink: 0;
            align-items: center;
            gap: 25px;
            border-radius: 999px;
            background: #111;
            padding: 8px 8px 8px 25px;
            color: white;
            font-size: 13px;
            font-weight: 600;
            text-decoration: none;
          }

          .services-final-inner > a > span {
            display: grid;
            width: 50px;
            height: 50px;
            place-items: center;
            border-radius: 50%;
            background: #d9ff25;
            color: #111;
            transition: transform 0.3s ease;
          }

          .services-final-inner > a:hover > span {
            transform: rotate(45deg);
          }

          @media (max-width: 900px) {
            .services-hero {
              min-height: auto;
              padding-top: 120px;
            }

            .hero-visual {
              width: 100%;
            }

            .hero-browser {
              inset: 0 40px;
            }

            .services-intro-inner {
              grid-template-columns: 1fr;
              gap: 25px;
            }

            .services-grid {
              grid-template-columns: 1fr;
            }

            .service-card-wide {
              grid-column: auto;
              display: block;
            }

            .service-card-wide .service-card-media {
              min-height: 350px;
            }

            .visual-break-inner {
              grid-template-columns: 1fr;
            }

            .visual-system {
              min-height: 550px;
            }

            .process-heading {
              grid-template-columns: 1fr;
            }

            .process-cards {
              grid-template-columns: 1fr 1fr;
            }

            .process-cards article:nth-child(2) {
              border-right: 0;
            }

            .services-final-inner {
              align-items: flex-start;
              flex-direction: column;
            }
          }

          @media (max-width: 600px) {
            .services-hero {
              padding: 100px 14px 65px;
            }

            .services-badge {
              padding: 6px 9px;
              font-size: 7px;
            }

            .services-hero h1 {
              font-size: 48px;
              line-height: 0.92;
            }

            .services-hero-copy {
              font-size: 14px;
            }

            .hero-actions {
              flex-direction: column;
            }

            .hero-visual {
              height: 300px;
              margin-top: 55px;
            }

            .hero-browser {
              inset: 0;
              border-radius: 20px;
            }

            .hero-browser-content {
              grid-template-columns: 42px 1fr;
            }

            .browser-sidebar {
              padding: 14px;
            }

            .floating-card {
              min-width: 150px;
              padding: 8px;
            }

            .floating-card-one {
              top: 25px;
              left: -8px;
            }

            .floating-card-two {
              top: 120px;
              right: -8px;
            }

            .floating-card-three {
              bottom: 5px;
              left: 12px;
            }

            .floating-icon {
              width: 32px;
              height: 32px;
            }

            .floating-card strong {
              font-size: 9px;
            }

            .services-intro,
            .services-grid-section,
            .services-process,
            .services-visual-break,
            .services-final {
              padding-right: 12px;
              padding-left: 12px;
            }

            .services-intro {
              padding-top: 80px;
              padding-bottom: 80px;
            }

            .services-intro h2 {
              font-size: 46px;
            }

            .service-card,
            .service-card-media,
            .service-card-wide .service-card-media {
              border-radius: 20px;
            }

            .service-card-media,
            .service-card-wide .service-card-media {
              min-height: 290px;
            }

            .service-card-body,
            .service-card-wide .service-card-body {
              min-height: 300px;
              padding: 22px;
            }

            .service-card h3 {
              font-size: 36px;
            }

            .visual-break-inner {
              min-height: auto;
              border-radius: 22px;
            }

            .visual-break-copy {
              padding: 50px 24px;
            }

            .visual-break-copy h2 {
              font-size: 48px;
            }

            .visual-system {
              min-height: 420px;
            }

            .ring-a {
              width: 170px;
              height: 170px;
            }

            .ring-b {
              width: 280px;
              height: 280px;
            }

            .ring-c {
              width: 390px;
              height: 390px;
            }

            .visual-center {
              width: 95px;
              height: 95px;
            }

            .system-node {
              padding: 9px 11px;
              font-size: 9px;
            }

            .services-process {
              padding-top: 90px;
              padding-bottom: 90px;
            }

            .process-heading h2 {
              font-size: 50px;
            }

            .process-cards {
              grid-template-columns: 1fr;
              margin-top: 50px;
            }

            .process-cards article {
              min-height: 230px;
              border-right: 0;
              border-bottom: 1px solid #d3d0c8;
            }

            .process-card-icon {
              margin-top: 45px;
            }

            .services-final {
              padding-bottom: 35px;
            }

            .services-final-inner {
              min-height: 430px;
              border-radius: 22px;
              padding: 28px;
            }

            .services-final h2 {
              font-size: 52px;
            }
          }

          @media (prefers-reduced-motion: reduce) {
            *,
            *::before,
            *::after {
              scroll-behavior: auto !important;
            }

            .hero-orb,
            .floating-card,
            .service-marquee-track,
            .visual-center,
            .system-node {
              animation: none !important;
            }

            [data-reveal] {
              opacity: 1;
              transform: none;
            }
          }
        `}</style>
      </main>

      <FooterSection />
    </>
  );
}
