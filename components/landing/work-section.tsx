"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

const selectedProjects = [
  {
    number: "02",
    title: "Power Electrode Ltd",
    industry: "Manufacturing",
    year: "2026",
    description:
      "A professional digital presence for a growing welding electrode manufacturer.",
    image: "/showcase/01.jpg",
    href: "/work/power-electrode-ltd",
  },
  {
    number: "03",
    title: "Total Logistics",
    industry: "Logistics",
    year: "2026",
    description:
      "A modern logistics website focused on credibility, services and customer confidence.",
    image: "/showcase/7.png",
    video: "/expertise/6.mp4",
    href: "/work/total-logistics",
  },
];

const wideProject = {
  number: "04",
  title: "NUMO & SEBI",
  industry: "E-commerce",
  year: "2026",
  description:
    "A polished jewellery shopping experience built around strong imagery and clean product presentation.",
  image: "/showcase/03.jpg",
  href: "/work/numo-sebi",
};

export function WorkSection() {
  return (
    <section id="work" className="home-selected-work">
      <div className="home-selected-inner">
        <header className="home-selected-header">
          <span className="home-selected-badge">
            <i /> SELECTED WORK
          </span>

          <h2>Proof in the work.</h2>

          <div className="home-selected-intro">
            <p>
              A selection of websites and digital products built around real
              business needs — from credibility and discovery to booking,
              operations and growth.
            </p>

            <Link href="/work">
              View all work
              <ArrowRight size={16} />
            </Link>
          </div>
        </header>

        <div className="home-selected-grid">
          {selectedProjects.map((project) => (
            <Link
              href={project.href}
              key={project.title}
              className="home-case-card"
            >
              <div className="home-case-media">
                {project.video ? (
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    poster={project.image}
                  >
                    <source src={project.video} type="video/mp4" />
                  </video>
                ) : (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 760px) 100vw, 50vw"
                  />
                )}

                <span className="home-case-number">{project.number}</span>
                <span className="home-case-arrow">
                  <ArrowUpRight size={19} />
                </span>
              </div>

              <div className="home-case-copy">
                <div className="home-case-meta">
                  <span>{project.industry}</span>
                  <span>{project.year}</span>
                </div>

                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <span className="home-case-study-link">
                  View case study
                  <ArrowUpRight size={14} />
                </span>
              </div>
            </Link>
          ))}
        </div>

        <Link href={wideProject.href} className="home-wide-case">
          <div className="home-wide-copy">
            <div className="home-wide-top">
              <span>{wideProject.number}</span>
              <span>
                {wideProject.industry} · {wideProject.year}
              </span>
            </div>

            <div>
              <h3>
                NUMO &amp;
                <br />
                SEBI
              </h3>
              <p>{wideProject.description}</p>
            </div>

            <span className="home-wide-arrow">
              <ArrowUpRight size={23} />
            </span>
          </div>

          <div className="home-wide-media">
            <Image
              src={wideProject.image}
              alt={wideProject.title}
              fill
              sizes="(max-width: 760px) 100vw, 65vw"
            />
          </div>
        </Link>
      </div>

      <style jsx global>{`
        .home-selected-work {
          position: relative;
          overflow: hidden;
          background: #f4f4f1;
          padding: 110px 28px 120px;
          color: #0b0b0b;
        }

        .home-selected-inner {
          width: min(1400px, 100%);
          margin: 0 auto;
        }

        .home-selected-header {
          display: flex;
          max-width: 760px;
          margin: 0 auto 62px;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .home-selected-badge {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          border: 1px solid #d6d2c9;
          border-radius: 6px;
          background: rgba(255, 255, 255, 0.42);
          padding: 9px 12px;
          color: #5e5a53;
          font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
          font-size: 8px;
          font-weight: 800;
          letter-spacing: 0.16em;
        }

        .home-selected-badge i {
          width: 8px;
          height: 8px;
          border-radius: 2px;
          background: #d9ff25;
        }

        .home-selected-header h2 {
          margin: 25px 0 0;
          font-size: clamp(48px, 5.4vw, 76px);
          font-weight: 700;
          line-height: 0.94;
          letter-spacing: -0.06em;
        }

        .home-selected-intro {
          max-width: 560px;
          margin: 24px auto 0;
        }

        .home-selected-intro p {
          margin: 0;
          color: #68665f;
          font-size: 14px;
          line-height: 1.65;
        }

        .home-selected-intro a {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 14px;
          margin-top: 22px;
          color: #111;
          font-size: 12px;
          font-weight: 700;
          text-decoration: none;
        }

        .home-selected-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 18px;
        }

        .home-case-card {
          overflow: hidden;
          border: 1px solid #d8d5cd;
          border-radius: 28px;
          background: rgba(255, 255, 255, 0.52);
          color: inherit;
          text-decoration: none;
          box-shadow: 0 10px 28px rgba(35, 31, 26, 0.025);
          transition:
            transform 0.35s cubic-bezier(0.22, 1, 0.36, 1),
            box-shadow 0.35s ease,
            border-color 0.35s ease;
        }

        .home-case-card:hover {
          border-color: #c9c5bc;
          transform: translateY(-4px);
          box-shadow: 0 18px 42px rgba(35, 31, 26, 0.07);
        }

        .home-case-media {
          position: relative;
          height: 520px;
          margin: 10px 10px 0;
          overflow: hidden;
          border-radius: 20px;
          background: #dddcd6;
        }

        .home-case-media img,
        .home-case-media video {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.8s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .home-case-card:hover .home-case-media img,
        .home-case-card:hover .home-case-media video {
          transform: scale(1.025);
        }

        .home-case-number,
        .home-case-arrow {
          position: absolute;
          z-index: 3;
          top: 18px;
          display: grid;
          place-items: center;
          background: rgba(255, 255, 255, 0.96);
          color: #111;
        }

        .home-case-number {
          left: 18px;
          min-width: 50px;
          height: 40px;
          border-radius: 999px;
          font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
          font-size: 8px;
          font-weight: 800;
        }

        .home-case-arrow {
          right: 18px;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          transition: transform 0.35s ease;
        }

        .home-case-card:hover .home-case-arrow {
          transform: rotate(8deg) scale(1.04);
        }

        .home-case-copy {
          padding: 22px 24px 30px;
        }

        .home-case-meta {
          display: flex;
          gap: 7px;
          margin-bottom: 18px;
        }

        .home-case-meta span {
          border: 1px solid #d6d3cc;
          border-radius: 999px;
          padding: 7px 10px;
          color: #67645e;
          font-size: 8px;
        }

        .home-case-copy h3 {
          margin: 0;
          font-size: clamp(34px, 3.3vw, 52px);
          font-weight: 680;
          line-height: 0.97;
          letter-spacing: -0.055em;
        }

        .home-case-copy p {
          max-width: 520px;
          margin: 15px 0 0;
          color: #6d6a64;
          font-size: 12px;
          line-height: 1.55;
        }

        .home-case-study-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-top: 18px;
          font-size: 10px;
          font-weight: 750;
        }

        .home-wide-case {
          display: grid;
          min-height: 590px;
          grid-template-columns: 35% 65%;
          margin-top: 24px;
          overflow: hidden;
          border: 1px solid #c8c3d8;
          border-radius: 30px;
          background: #c8bbff;
          color: #101010;
          text-decoration: none;
        }

        .home-wide-copy {
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 42px 46px;
        }

        .home-wide-top {
          display: flex;
          justify-content: space-between;
          gap: 20px;
          font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
          font-size: 8px;
          font-weight: 700;
          letter-spacing: 0.08em;
        }

        .home-wide-copy h3 {
          margin: 0 0 24px;
          font-size: clamp(56px, 6vw, 92px);
          font-weight: 760;
          line-height: 0.85;
          letter-spacing: -0.07em;
        }

        .home-wide-copy p {
          max-width: 390px;
          margin: 0;
          font-size: 12px;
          line-height: 1.55;
        }

        .home-wide-arrow {
          position: absolute;
          right: 30px;
          bottom: 30px;
          display: grid;
          width: 60px;
          height: 60px;
          place-items: center;
          border-radius: 50%;
          background: #111;
          color: white;
          transition: transform 0.35s ease;
        }

        .home-wide-case:hover .home-wide-arrow {
          transform: rotate(8deg) scale(1.05);
        }

        .home-wide-media {
          position: relative;
          min-height: 590px;
          overflow: hidden;
        }

        .home-wide-media img {
          object-fit: cover;
          object-position: center 28%;
          transition: transform 0.8s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .home-wide-case:hover .home-wide-media img {
          transform: scale(1.025);
        }

        @media (max-width: 900px) {
          .home-selected-header {
            max-width: 680px;
          }

          .home-case-media {
            height: 430px;
          }

          .home-wide-case {
            grid-template-columns: 42% 58%;
            min-height: 500px;
          }

          .home-wide-media {
            min-height: 500px;
          }
        }

        @media (max-width: 620px) {
          .home-selected-work {
            padding: 82px 12px 90px;
          }

          .home-selected-header {
            max-width: 100%;
            margin-bottom: 42px;
          }

          .home-selected-header h2 {
            margin-top: 20px;
            font-size: 42px;
            line-height: 0.98;
          }

          .home-selected-intro {
            max-width: 340px;
            margin-top: 20px;
          }

          .home-selected-intro p {
            font-size: 13px;
            line-height: 1.5;
          }

          .home-selected-grid {
            grid-template-columns: 1fr;
            gap: 6px;
          }

          .home-case-card {
            border-radius: 22px;
          }

          .home-case-media {
            height: 330px;
            margin: 7px 7px 0;
            border-radius: 16px;
          }

          .home-case-copy {
            padding: 18px 18px 24px;
          }

          .home-case-copy h3 {
            font-size: 36px;
          }

          .home-wide-case {
            grid-template-columns: 1fr;
            min-height: 0;
            border-radius: 22px;
          }

          .home-wide-copy {
            min-height: 360px;
            padding: 28px 24px;
          }

          .home-wide-copy h3 {
            font-size: 62px;
          }

          .home-wide-copy p {
            max-width: 280px;
            padding-right: 55px;
          }

          .home-wide-arrow {
            right: 22px;
            bottom: 22px;
            width: 52px;
            height: 52px;
          }

          .home-wide-media {
            min-height: 430px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .home-case-media img,
          .home-case-media video,
          .home-case-arrow,
          .home-wide-arrow,
          .home-wide-media img {
            transition: none !important;
          }
        }
      `}</style>
    </section>
  );
}
