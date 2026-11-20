import type { Metadata } from "next";
import { HomeHero } from "@/components/home/hero";
import { HomeSelectedWork } from "@/components/home/selected-work";
import { HomeServiceSections } from "@/components/home/service-sections";

const title = "Websites that drive results, digital retainers that deliver growth";
const description = "MadeBySebi helps companies and businesses grow revenue and stand out in crowded markets through brand and product design.";

export const metadata: Metadata = {
  title: { absolute: title + " | MadeBySebi" },
  description,
  alternates: { canonical: "/" },
  openGraph: {
    title: title + " | MadeBySebi", description, url: "/",
    images: [{ url: "/brand/madebysebi-og.png", width: 1200, height: 630, alt: "MadeBySebi" }],
  },
  twitter: { title: title + " | MadeBySebi", description, images: ["/brand/madebysebi-og.png"] },
};

export default function Home() {
  return <main id="main-content" tabIndex={-1} className="ms-home">
    <HomeHero />
    <HomeSelectedWork />
    <HomeServiceSections />
  </main>;
}
