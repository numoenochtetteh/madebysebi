import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work & Case Studies",
  description: "Explore MadeBySebi’s eight portfolio case studies: websites, booking platforms, storefront interfaces and business-focused digital experiences.",
  alternates: { canonical: "/work" },
  openGraph: {
    title: "Work & Case Studies | MadeBySebi",
    description: "Explore MadeBySebi’s eight portfolio case studies: websites, booking platforms, storefront interfaces and business-focused digital experiences.",
    url: "/work",
    images: [{ url: "/brand/madebysebi-og.png", width: 1200, height: 630, alt: "MadeBySebi — websites, mobile apps and business software" }],
  },
};
export default function WorkLayout({ children }: { children: React.ReactNode }) { return children; }
