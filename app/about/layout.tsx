import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet the MadeBySebi team and learn how our Accra-based web design studio works with businesses worldwide.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About MadeBySebi",
    description:
      "A small web design and development team in Accra, Ghana, working with businesses worldwide.",
    url: "/about",
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
