import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { WhatsAppButton } from "@/components/landing/whatsapp-button";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { getSiteUrl } from "@/lib/site-url";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist-mono",
});

const siteUrl = getSiteUrl();

const socialProfiles = [
  "https://www.linkedin.com/company/madebysebi/",
  "https://www.instagram.com/madebysebi_/",
  "https://x.com/MadeBySebi",
  "https://web.facebook.com/profile.php?id=61594479852181",
];

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "MadeBySebi — Web Design, Development & Digital Experiences",
    template: "%s | MadeBySebi",
  },
  description:
    "MadeBySebi is an Accra-based web design and development studio creating premium websites, web apps and digital experiences for businesses in Ghana and worldwide.",
  keywords: [
    "web design Ghana",
    "web development Ghana",
    "web design Accra",
    "business websites Ghana",
    "website design agency Ghana",
    "web apps Ghana",
    "UI UX design Ghana",
    "SEO Ghana",
    "MadeBySebi",
  ],
  applicationName: "MadeBySebi",
  authors: [{ name: "MadeBySebi" }],
  creator: "MadeBySebi",
  publisher: "MadeBySebi",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "MadeBySebi",
    title: "MadeBySebi — Web Design, Development & Digital Experiences",
    description:
      "Premium websites, web apps and digital experiences built for businesses in Ghana and worldwide.",
    images: [
      {
        url: "/brand/madebysebi-og.png",
        width: 1200,
        height: 630,
        alt: "MadeBySebi — Web Design, Development & Digital Experiences",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MadeBySebi — Web Design, Development & Digital Experiences",
    description:
      "Premium websites, web apps and digital experiences built for businesses in Ghana and worldwide.",
    images: ["/brand/madebysebi-og.png"],
    site: "@MadeBySebi",
    creator: "@MadeBySebi",
  },
  icons: {
    icon: [
      { url: "/brand/icon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/brand/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: "/brand/apple-icon.png",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "MadeBySebi",
  url: siteUrl,
  logo: `${siteUrl}/brand/icon-512.png`,
  image: `${siteUrl}/brand/madebysebi-og.png`,
  description:
    "Web design and development studio creating websites, web apps and digital experiences for businesses in Ghana and worldwide.",
  email: "hello.madebysebi@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Accra",
    addressCountry: "GH",
  },
  areaServed: "Worldwide",
  sameAs: socialProfiles,
  serviceType: [
    "Web Design",
    "Web Development",
    "Web Applications",
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
        id="top"
        className={`${inter.variable} ${geistMono.variable} font-sans antialiased`}
      >
        {children}
        <WhatsAppButton />
        <Analytics />
        <SpeedInsights />
        <Script
          id="madebysebi-organization-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </body>
    </html>
  );
}
