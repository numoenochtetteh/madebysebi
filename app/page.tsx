import type { Metadata } from "next";
import { HomeHero } from "@/components/home/hero";
import { HomeServiceSections } from "@/components/home/service-sections";
import { HomeProjectCta, HomeSelectedWork } from "@/components/home/selected-work";

const title = "Websites, Mobile Apps & Custom Business Software";
const description = "MadeBySebi helps businesses get online, build custom websites, mobile apps and business tools, and grow through digital marketing and ongoing support. Based in Accra, working worldwide.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/" },
  openGraph: {
    title: `${title} | MadeBySebi`, description, url: "/",
    images: [{ url: "/brand/madebysebi-og.png", width: 1200, height: 630, alt: "MadeBySebi" }],
  },
  twitter: { title: `${title} | MadeBySebi`, description, images: ["/brand/madebysebi-og.png"] },
};

export default function Home() {
  return (
    <main id="main-content" tabIndex={-1}>
      <HomeHero />
      <HomeServiceSections />
      <HomeSelectedWork />
      <HomeProjectCta />
    </main>
  );
}
