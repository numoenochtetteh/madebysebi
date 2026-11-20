import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Websites, Apps & Business Software Services",
  description: "Establish your online presence, build a custom solution or grow your business with MadeBySebi’s websites, mobile apps, business systems and ongoing support.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Websites, Apps & Business Software Services | MadeBySebi",
    description: "Establish your online presence, build a custom solution or grow your business with MadeBySebi’s websites, mobile apps, business systems and ongoing support.",
    url: "/services",
    images: [{ url: "/brand/madebysebi-og.png", width: 1200, height: 630, alt: "MadeBySebi — websites, mobile apps and business software" }],
  },
};
export default function ServicesLayout({ children }: { children: React.ReactNode }) { return children; }
