import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a website project with Numo Digital. Based in Accra, Ghana and available for business website projects worldwide.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Numo Digital",
    description: "Tell us about your website project. We work with businesses worldwide.",
    url: "/contact",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
