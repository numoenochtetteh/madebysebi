import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Discuss your website, mobile application, custom business software or ongoing support needs with MadeBySebi. Based in Accra and working worldwide.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact | MadeBySebi",
    description: "Discuss your website, mobile application, custom business software or ongoing support needs with MadeBySebi. Based in Accra and working worldwide.",
    url: "/contact",
    images: [{ url: "/brand/madebysebi-og.png", width: 1200, height: 630, alt: "MadeBySebi — websites, mobile apps and business software" }],
  },
};
export default function ContactLayout({ children }: { children: React.ReactNode }) { return children; }
