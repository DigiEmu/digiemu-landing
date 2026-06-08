import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://digiemu.ch"),
  title: {
    default: "DigiEmu – Verifiable AI Systems",
    template: "%s | DigiEmu",
  },
  description:
    "Deterministic knowledge infrastructure for reproducible and auditable AI decisions.",
  keywords: [
    "DigiEmu",
    "Verifiable AI",
    "AI Governance",
    "Deterministic Replay",
    "AI Auditability",
    "EU AI Act",
    "DigiEmu Core",
    "DigiEmu Proof",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
  title: "DigiEmu – Verifiable AI Systems",
  description:
    "Deterministic knowledge infrastructure for reproducible and auditable AI decisions.",
  url: "https://digiemu.ch",
  siteName: "DigiEmu",
  type: "website",
  locale: "en_US",
  images: [
    {
      url: "/og-core.png",
      width: 1200,
      height: 630,
      alt: "DigiEmu – Verifiable AI Systems",
    },
  ],
},

twitter: {
  card: "summary_large_image",
  title: "DigiEmu – Verifiable AI Systems",
  description:
    "Deterministic knowledge infrastructure for reproducible and auditable AI decisions.",
  images: ["/og-core.png"],
},
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
    <body className={inter.className}>
  <Script id="digiemu-console-brand" strategy="afterInteractive">
    {`
      console.log("%cDigiEmu", "font-size:48px;font-weight:800;color:#020617;");
      console.log("%cDeterministic Knowledge Infrastructure", "font-size:16px;color:#475569;");
      console.log("%cSame input → same reconstructed state → same hash.", "font-size:14px;color:#0f172a;");
      console.log("%cBuilt by Baumgartner Digital Infrastructure", "font-size:13px;color:#64748b;");
    `}
  </Script>
  {children}
</body>
    </html>
  );
}