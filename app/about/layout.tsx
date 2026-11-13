import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Meet MadeBySebi, an Accra-based digital solutions company building useful websites, mobile applications and custom business software for businesses worldwide.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About | MadeBySebi",
    description: "Meet MadeBySebi, an Accra-based digital solutions company building useful websites, mobile applications and custom business software for businesses worldwide.",
    url: "/about",
    images: [{ url: "/brand/madebysebi-og.png", width: 1200, height: 630, alt: "MadeBySebi — websites, mobile apps and business software" }],
  },
};
export default function AboutLayout({ children }: { children: React.ReactNode }) { return children; }
