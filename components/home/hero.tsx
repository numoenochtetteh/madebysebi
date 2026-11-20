import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { BookCallLink } from "@/components/site/contact-actions";

const clientMarks = ["FEMMORA", "Forever Peng Hair", "Gas Safety & Plumbing", "Lucenex Corp", "Power Electrode Ltd"];

const previews = [
  { src: "/project-mockups/femmora.webp", name: "FEMMORA" },
  { src: "/project-mockups/forever-peng-hair.webp", name: "Forever Peng Hair" },
  { src: "/project-mockups/gas-safety-plumbing.webp", name: "Gas Safety & Plumbing Engineering Ltd" },
  { src: "/project-mockups/lucenex-corp.webp", name: "Lucenex Corp" },
];

export function HomeHero() {
  return <>
    <section className="ms-homehero" aria-labelledby="home-title">
      <div className="mbs-container ms-homehero-inner">
        <p className="ms-pill ms-agency-label"><span className="ms-dot" aria-hidden="true" />MadeBySebi · Web Design Agency</p>
        <h1 id="home-title">
          <span>Websites that drive results,</span>
          <span>digital retainers that deliver growth.</span>
        </h1>
        <p className="ms-homehero-copy">Helping companies and businesses grow revenue and stand out in crowded markets through brand and product design.</p>
        <div className="ms-hero-actions">
          <BookCallLink />
          <Link className="ms-soft-button" href="/work">Explore our work <ArrowUpRight size={17} aria-hidden="true" /></Link>
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
            <Image src={preview.src} alt="" fill sizes="420px" priority={index < 2} />
          </div>)}
      </div>
    </div>
  </>;
}
