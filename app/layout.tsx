import type { Metadata } from "next";
import "./globals.css";
import { WhatsAppButton } from "@/components/landing/whatsapp-button";

export const metadata: Metadata = {
  title: "Numo Digital — Websites Built for Business Growth",
  description:
    "Numo Digital designs and develops professional websites for growing businesses in Ghana and the UK.",
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
              "Arial, Helvetica, system-ui, -apple-system, sans-serif",
            "--font-instrument-serif": "Georgia, 'Times New Roman', serif",
            "--font-jetbrains": "Consolas, Monaco, 'Courier New', monospace",
          } as React.CSSProperties
        }
      >
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
