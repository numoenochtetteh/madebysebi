import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { WhatsAppButton } from "@/components/landing/whatsapp-button";

const siteUrl = "https://numo-digital.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Numo Digital — Websites Built for Business Growth",
    template: "%s | Numo Digital",
  },
  description:
    "Numo Digital is an Accra-based web design and development agency building professional websites for businesses and companies worldwide.",
  keywords: [
    "web design Ghana",
    "web development Ghana",
    "business websites",
    "company website design",
    "frontend development",
    "website agency Ghana",
    "Numo Digital",
  ],
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Numo Digital",
    title: "Numo Digital — Websites Built for Business Growth",
    description:
      "Professional websites for businesses and companies in Ghana and worldwide.",
    images: [
      {
        url: "/showcase/1.png",
        width: 1200,
        height: 630,
        alt: "Numo Digital web design and development work",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Numo Digital — Websites Built for Business Growth",
    description:
      "Professional websites for businesses and companies in Ghana and worldwide.",
    images: ["/showcase/1.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Numo Digital",
  url: siteUrl,
  description:
    "Web design and development agency building professional websites for businesses and companies worldwide.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Accra",
    addressCountry: "GH",
  },
  areaServed: "Worldwide",
  serviceType: [
    "Web Design",
    "Web Development",
    "UX/UI Design",
    "E-commerce Websites",
    "Booking Websites",
    "SEO",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="font-sans antialiased"
        style={
          {
            "--font-instrument":
              "\"Proxima Nova\", \"Helvetica Neue\", Helvetica, Arial, system-ui, -apple-system, sans-serif",
            "--font-instrument-serif":
              "\"Libre Baskerville\", Georgia, 'Times New Roman', serif",
            "--font-jetbrains": "Consolas, Monaco, 'Courier New', monospace",
          } as React.CSSProperties
        }
      >
        {children}
        <WhatsAppButton />
        <Script
          id="numo-digital-organization-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </body>
    </html>
  );
}
