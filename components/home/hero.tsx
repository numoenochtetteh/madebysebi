import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { BookCallLink } from "@/components/site/contact-actions";

const clientMarks = ["FEMMORA", "Forever Peng Hair", "Gas Safety & Plumbing", "Lucenex Corp", "Power Electrode Ltd"];

const previews = [
  { src: "/project-mockups/femmora.webp", name: "FEMMORA" },
  { src: "/project-mockups/forever-peng-hair.webp", name: "Forever Peng Hair" },
  { src: "/project-mockups/gas-safety-plumbing.webp", name: "Gas Safety & Plumbing Engineering Ltd" },
  { src: "/project-mockups/lucenex-services.png", name: "Lucenex Corp" },
];

export function HomeHero() {
  return <>
    <section className="ms-homehero" aria-labelledby="home-title">
      <div className="mbs-container ms-homehero-inner">
        <p className="ms-pill ms-agency-label"><span className="ms-dot" aria-hidden="true" />MadeBySebi · Web Design Agency</p>
        <h1 id="home-title">
          <span>Websites that win customers</span>{" "}
          <span>and grow revenue.</span>
        </h1>
        <p className="ms-homehero-copy">We design and build websites that make it easier for people to enquire, book or buy.</p>
        <div className="ms-hero-actions">
          <BookCallLink />
          <Link className="ms-soft-button" href="/work"><span className="ms-explore-icon" aria-hidden="true">💻</span>Explore our work <ArrowUpRight size={17} aria-hidden="true" /></Link>
        </div>
        <div className="ms-client-strip" role="group" aria-label="Selected MadeBySebi projects">
          <div className="ms-client-track">
            {[0, 1].map(copy => <div className="ms-client-set" key={copy} aria-hidden={copy === 1}>
              {clientMarks.map((name, index) => <span className={`ms-client-mark ms-client-mark-${index}`} key={name}>{name}</span>)}
            </div>)}
          </div>
        </div>
      </div>
    </section>
    <div className="ms-preview-strip" aria-hidden="true">
      <div className="ms-preview-track">
        {[...previews, ...previews].map((preview, index) =>
          <div className="ms-preview-card" key={preview.name + index}>
            <Image src={preview.src} alt="" fill sizes="(max-width: 700px) 330px, (max-width: 1200px) 42vw, 560px" priority={index < 2} />
          </div>)}
      </div>
    </div>
  </>;
}
