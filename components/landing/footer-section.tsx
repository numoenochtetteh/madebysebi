// "use client";

// import { ArrowUpRight } from "lucide-react";
// import { AnimatedWave } from "./animated-wave";

// const footerLinks = {
//   Product: [
//     { name: "Features", href: "#features" },
//     { name: "How it works", href: "#how-it-works" },
//     { name: "Pricing", href: "#pricing" },
//     { name: "Integrations", href: "#integrations" },
//   ],
//   Developers: [
//     { name: "Documentation", href: "#developers" },
//     { name: "API Reference", href: "#" },
//     { name: "SDK", href: "#developers" },
//     { name: "Status", href: "#" },
//   ],
//   Company: [
//     { name: "About", href: "#" },
//     { name: "Blog", href: "#" },
//     { name: "Careers", href: "#", badge: "Hiring" },
//     { name: "Contact", href: "#" },
//   ],
//   Legal: [
//     { name: "Privacy", href: "#" },
//     { name: "Terms", href: "#" },
//     { name: "Security", href: "#security" },
//   ],
// };

// const socialLinks = [
//   { name: "Twitter", href: "#" },
//   { name: "GitHub", href: "#" },
//   { name: "LinkedIn", href: "#" },
// ];

// export function FooterSection() {
//   return (
//     <footer className="relative border-t border-foreground/10">
//       {/* Animated wave background */}
//       <div className="absolute inset-0 h-64 opacity-20 pointer-events-none overflow-hidden">
//         <AnimatedWave />
//       </div>

//       <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
//         {/* Main Footer */}
//         <div className="py-16 lg:py-24">
//           <div className="grid grid-cols-2 md:grid-cols-6 gap-12 lg:gap-8">
//             {/* Brand Column */}
//             <div className="col-span-2">
//               <a href="#" className="inline-flex items-center gap-2 mb-6">
//                 <span className="text-2xl font-display">Optimus</span>
//                 <span className="text-xs text-muted-foreground font-mono">TM</span>
//               </a>

//               <p className="text-muted-foreground leading-relaxed mb-8 max-w-xs">
//                 The platform for teams who ship. Build, deploy, and scale with unprecedented velocity.
//               </p>

//               {/* Social Links */}
//               <div className="flex gap-6">
//                 {socialLinks.map((link) => (
//                   <a
//                     key={link.name}
//                     href={link.href}
//                     className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1 group"
//                   >
//                     {link.name}
//                     <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
//                   </a>
//                 ))}
//               </div>
//             </div>

//             {/* Link Columns */}
//             {Object.entries(footerLinks).map(([title, links]) => (
//               <div key={title}>
//                 <h3 className="text-sm font-medium mb-6">{title}</h3>
//                 <ul className="space-y-4">
//                   {links.map((link) => (
//                     <li key={link.name}>
//                       <a
//                         href={link.href}
//                         className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-2"
//                       >
//                         {link.name}
//                         {"badge" in link && link.badge && (
//                           <span className="text-xs px-2 py-0.5 bg-foreground text-background rounded-full">
//                             {link.badge}
//                           </span>
//                         )}
//                       </a>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Bottom Bar */}
//         <div className="py-8 border-t border-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4">
//           <p className="text-sm text-muted-foreground">
//             2025 Optimus. All rights reserved.
//           </p>

//           <div className="flex items-center gap-4 text-sm text-muted-foreground">
//             <span className="flex items-center gap-2">
//               <span className="w-2 h-2 rounded-full bg-green-500" />
//               All systems operational
//             </span>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }
"use client";

import { ArrowUpRight } from "lucide-react";
import { AnimatedWave } from "./animated-wave";

const footerLinks = {
  Explore: [
    { name: "Work", href: "/work" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ],

  Services: [
    { name: "Web Design", href: "/services" },
    { name: "Web Development", href: "/services" },
    { name: "UI / UX Design", href: "/services" },
    { name: "SEO", href: "/services" },
    { name: "Branding", href: "/services" },
  ],

  Social: [
    { name: "Instagram", href: "#" },
    { name: "LinkedIn", href: "#" },
    { name: "GitHub", href: "#" },
  ],
};

export function FooterSection() {
  return (
    <footer className="numo-footer">
      {/* Animated background */}
      <div className="numo-footer-wave">
        <AnimatedWave />
      </div>

      <div className="numo-footer-container">
        {/* ==========================================
            TOP CTA
        =========================================== */}

        <div className="numo-footer-cta">
          <div>
            <span className="numo-footer-eyebrow">
              <span />
              Have a project in mind?
            </span>

            <h2>
              Let&apos;s build
              <br />
              something great.
            </h2>
          </div>

          <a href="/contact" className="numo-footer-project-button">
            <span>Start a project</span>

            <span className="numo-footer-project-icon">
              <ArrowUpRight size={22} />
            </span>
          </a>
        </div>

        {/* ==========================================
            MAIN FOOTER
        =========================================== */}

        <div className="numo-footer-main">
          {/* BRAND */}

          <div className="numo-footer-brand">
            <a href="#" className="numo-footer-logo">
              numo
              <span>DIGITAL</span>
            </a>

            <p>
              We design and develop professional websites for businesses and
              companies that want to look credible, communicate clearly and grow online.
            </p>

            <div className="numo-footer-location">
              <span className="numo-status-dot" />
              Accra, Ghana · Working worldwide
            </div>
          </div>

          {/* LINKS */}

          <div className="numo-footer-links">
            {Object.entries(footerLinks).map(([title, links]) => (
              <div className="numo-footer-column" key={title}>
                <h3>{title}</h3>

                <ul>
                  {links.map((link) => (
                    <li key={link.name}>
                      <a href={link.href}>
                        {link.name}

                        <ArrowUpRight className="footer-link-arrow" size={13} />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* ==========================================
            HUGE BRAND TEXT
        =========================================== */}

        <div className="numo-footer-wordmark">NUMO</div>

        {/* ==========================================
            BOTTOM
        =========================================== */}

        <div className="numo-footer-bottom">
          <p>© 2026 Numo Digital. All rights reserved.</p>

          <div>
            <a href="/privacy">Privacy</a>

            <span>•</span>

            <a href="/terms">Terms</a>
          </div>

          <a href="#" className="numo-footer-back-top">
            Back to top
            <ArrowUpRight size={14} />
          </a>
        </div>
      </div>

      <style jsx global>{`
        /* ========================================================
           FOOTER
        ======================================================== */

        .numo-footer {
          position: relative;
          overflow: hidden;
          background: #0a0a0a;
          color: #ffffff;
        }

        .numo-footer-container {
          position: relative;
          z-index: 2;
          width: min(1400px, 100%);
          margin: 0 auto;
          padding: 0 28px;
        }

        /* ========================================================
           WAVE
        ======================================================== */

        .numo-footer-wave {
          position: absolute;
          inset: 0 0 auto;
          height: 430px;
          overflow: hidden;
          opacity: 0.12;
          pointer-events: none;
        }

        /* ========================================================
           TOP CTA
        ======================================================== */

        .numo-footer-cta {
          display: flex;
          min-height: 420px;
          align-items: flex-end;
          justify-content: space-between;
          gap: 60px;
          padding: 100px 0 75px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.16);
        }

        .numo-footer-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 30px;
          color: rgba(255, 255, 255, 0.55);
          font-family:
            ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
          font-size: 11px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .numo-footer-eyebrow > span {
          width: 34px;
          height: 1px;
          background: rgba(255, 255, 255, 0.4);
        }

        .numo-footer-cta h2 {
          max-width: 900px;
          margin: 0;
          font-size: clamp(65px, 8vw, 125px);
          font-weight: 500;
          line-height: 0.84;
          letter-spacing: -0.07em;
        }

        .numo-footer-project-button {
          display: flex;
          flex-shrink: 0;
          align-items: center;
          gap: 28px;
          border-radius: 999px;
          background: #ffffff;
          padding: 8px 8px 8px 28px;
          color: #111111;
          font-size: 14px;
          font-weight: 600;
          text-decoration: none;
          transition:
            transform 0.3s ease,
            background 0.3s ease;
        }

        .numo-footer-project-button:hover {
          transform: translateY(-3px);
          background: #d9ff25;
        }

        .numo-footer-project-icon {
          display: flex;
          width: 52px;
          height: 52px;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: #111;
          color: #fff;
          transition: transform 0.35s ease;
        }

        .numo-footer-project-button:hover .numo-footer-project-icon {
          transform: rotate(45deg);
        }

        /* ========================================================
           MAIN
        ======================================================== */

        .numo-footer-main {
          display: grid;
          grid-template-columns: 1.25fr 1fr;
          gap: 100px;
          padding: 75px 0 90px;
        }

        /* ========================================================
           BRAND
        ======================================================== */

        .numo-footer-logo {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          color: #ffffff;
          font-size: 30px;
          font-weight: 700;
          letter-spacing: -0.04em;
          text-decoration: none;
        }

        .numo-footer-logo span {
          border-radius: 999px;
          background: #ffffff;
          padding: 5px 10px;
          color: #000000;
          font-family:
            ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
          font-size: 7px;
          font-weight: 700;
          letter-spacing: 0.08em;
        }

        .numo-footer-brand p {
          max-width: 440px;
          margin: 28px 0 30px;
          color: rgba(255, 255, 255, 0.53);
          font-size: 15px;
          line-height: 1.65;
        }

        .numo-footer-location {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          color: rgba(255, 255, 255, 0.65);
          font-size: 12px;
        }

        .numo-status-dot {
          position: relative;
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #d9ff25;
          box-shadow: 0 0 14px rgba(217, 255, 37, 0.5);
        }

        /* ========================================================
           LINKS
        ======================================================== */

        .numo-footer-links {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 40px;
        }

        .numo-footer-column h3 {
          margin: 0 0 25px;
          color: rgba(255, 255, 255, 0.35);
          font-family:
            ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }

        .numo-footer-column ul {
          margin: 0;
          padding: 0;
          list-style: none;
        }

        .numo-footer-column li + li {
          margin-top: 15px;
        }

        .numo-footer-column a {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          color: rgba(255, 255, 255, 0.68);
          font-size: 14px;
          text-decoration: none;
          transition: color 0.25s ease;
        }

        .numo-footer-column a:hover {
          color: #ffffff;
        }

        .footer-link-arrow {
          opacity: 0;
          transform: translate(-3px, 3px);
          transition:
            opacity 0.25s ease,
            transform 0.25s ease;
        }

        .numo-footer-column a:hover .footer-link-arrow {
          opacity: 1;
          transform: translate(0, 0);
        }

        /* ========================================================
           WORDMARK
        ======================================================== */

        .numo-footer-wordmark {
          overflow: hidden;
          margin-bottom: -3vw;
          color: #ffffff;
          font-size: clamp(150px, 25vw, 390px);
          font-weight: 700;
          line-height: 0.72;
          letter-spacing: -0.085em;
          white-space: nowrap;
          user-select: none;
        }

        /* ========================================================
           BOTTOM
        ======================================================== */

        .numo-footer-bottom {
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          align-items: center;
          gap: 30px;
          padding: 30px 0;
          border-top: 1px solid rgba(255, 255, 255, 0.15);
          color: rgba(255, 255, 255, 0.4);
          font-size: 10px;
        }

        .numo-footer-bottom p {
          margin: 0;
        }

        .numo-footer-bottom > div {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .numo-footer-bottom a {
          color: inherit;
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .numo-footer-bottom a:hover {
          color: #ffffff;
        }

        .numo-footer-back-top {
          display: inline-flex;
          justify-self: end;
          align-items: center;
          gap: 7px;
        }

        /* ========================================================
           TABLET
        ======================================================== */

        @media (max-width: 900px) {
          .numo-footer-container {
            padding: 0 20px;
          }

          .numo-footer-cta {
            min-height: auto;
            align-items: flex-start;
            gap: 50px;
            padding: 90px 0 65px;
            flex-direction: column;
          }

          .numo-footer-cta h2 {
            font-size: clamp(65px, 11vw, 95px);
          }

          .numo-footer-main {
            grid-template-columns: 1fr;
            gap: 65px;
          }

          .numo-footer-links {
            max-width: 650px;
          }

          .numo-footer-wordmark {
            margin-top: 30px;
          }
        }

        /* ========================================================
           MOBILE
        ======================================================== */

        @media (max-width: 600px) {
          .numo-footer-container {
            padding: 0 16px;
          }

          .numo-footer-wave {
            height: 350px;
            opacity: 0.1;
          }

          .numo-footer-cta {
            gap: 40px;
            padding: 75px 0 55px;
          }

          .numo-footer-eyebrow {
            margin-bottom: 22px;
            font-size: 9px;
          }

          .numo-footer-cta h2 {
            font-size: 58px;
            line-height: 0.88;
          }

          .numo-footer-project-button {
            gap: 20px;
            padding-left: 22px;
          }

          .numo-footer-project-icon {
            width: 46px;
            height: 46px;
          }

          .numo-footer-main {
            gap: 55px;
            padding: 55px 0 65px;
          }

          .numo-footer-brand p {
            font-size: 13px;
          }

          .numo-footer-links {
            grid-template-columns: 1fr 1fr;
            gap: 45px 25px;
          }

          .numo-footer-wordmark {
            margin-bottom: -9px;
            font-size: 37vw;
          }

          .numo-footer-bottom {
            grid-template-columns: 1fr;
            gap: 15px;
            padding: 25px 0;
          }

          .numo-footer-back-top {
            justify-self: start;
          }
        }
      `}</style>
    </footer>
  );
}
