import type { Metadata } from "next";
import { HomeHero } from "@/components/home/hero";
import { HomeSelectedWork } from "@/components/home/selected-work";
import { HomeServiceSections } from "@/components/home/service-sections";

const title = "Websites that win customers and grow revenue";
const description = "MadeBySebi designs and builds websites that help businesses turn visits into enquiries, bookings and sales.";

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
