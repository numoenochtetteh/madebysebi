import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import Script from "next/script";
import "./globals.css";
import "./foundation.css";
import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";
import { WhatsAppButton } from "@/components/landing/whatsapp-button";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { getSiteUrl } from "@/lib/site-url";
import { company } from "@/lib/company";
import { contactServices } from "@/lib/services";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

// The cedi glyph otherwise downloads Inter's entire Latin Extended font.
// Keep the same variable Inter glyph, subset to U+20B5 and loaded only when used.
const currency = localFont({
  src: "../public/fonts/madebysebi-currency.woff2",
  variable: "--font-currency",
  weight: "100 900",
  display: "swap",
  preload: false,
  adjustFontFallback: false,
  declarations: [{ prop: "unicode-range", value: "U+20B5" }],
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
    default: "MadeBySebi — Websites, Mobile Apps & Business Software",
    template: "%s | MadeBySebi",
  },
  description:
    company.description,
  keywords: [
    "web design Ghana",
    "web development Ghana",
    "web design Accra",
    "business websites Ghana",
    "website design agency Ghana",
    "web apps Ghana",
    "mobile applications Ghana",
    "custom business software",
    "business management systems",
    "workflow automation",
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
    title: "MadeBySebi — Websites, Mobile Apps & Business Software",
    description:
      company.description,
    images: [
      {
        url: "/brand/madebysebi-og.png",
        width: 1200,
        height: 630,
        alt: "MadeBySebi — Websites, Mobile Apps & Business Software",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MadeBySebi — Websites, Mobile Apps & Business Software",
    description:
      company.description,
    images: ["/brand/madebysebi-og.png"],
    site: "@MadeBySebi",
    creator: "@MadeBySebi",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
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
    company.description,
  email: "hello@madebysebi.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Accra",
    addressCountry: "GH",
  },
  areaServed: "Worldwide",
  sameAs: socialProfiles,
  serviceType: contactServices.filter(service => service !== "Other"),
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
        className={`${currency.variable} ${inter.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <a className="mbs-skip-link" href="#main-content">Skip to content</a>
        <Navigation />
        {children}
        <FooterSection />
        <WhatsAppButton />
        <Analytics />
        <SpeedInsights />
        <Script
          id="madebysebi-organization-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </body>
    </html>
  );
}
