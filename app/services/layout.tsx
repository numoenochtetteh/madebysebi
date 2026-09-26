import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web Design & Development Services",
  description:
    "Web design, web development, UX/UI, SEO, branding and digital support for businesses and companies in Ghana and worldwide.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Web Design & Development Services",
    description: "Professional website services built around business goals, trust and growth.",
    url: "/services",
    images: [{ url: "/brand/madebysebi-og.png", width: 1200, height: 630, alt: "MadeBySebi web design studio" }],
  },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
