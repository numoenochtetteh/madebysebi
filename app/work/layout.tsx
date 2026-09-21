import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work & Case Studies",
  description:
    "Explore Numo Digital website projects for beauty, logistics, manufacturing, e-commerce, architecture and data businesses.",
  alternates: { canonical: "/work" },
  openGraph: {
    title: "Website Work & Case Studies | Numo Digital",
    description: "Business websites designed and developed around real company needs.",
    url: "/work",
  },
};

export default function WorkLayout({ children }: { children: React.ReactNode }) {
  return children;
}
