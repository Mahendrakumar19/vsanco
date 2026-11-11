import type { Metadata } from "next";
import "@/styles/globals.css";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { QuickContactPill } from "@/components/ui/QuickContactPill";

export const metadata: Metadata = {
  metadataBase: new URL("https://vsanco.com"),
  title: {
    default: "Vsanco Technologies | Authorised Partner Of TATA Tele Business Services",
    template: "%s | Vsanco Technologies (TTBS Authorised Partner)",
  },
  description:
    "Vsanco Technologies is an authorised partner of Tata Tele Business Services (TTBS) based in Noida. We deliver Internet Leased Lines, Smartflo Cloud Telephony, IVR solutions, and enterprise connectivity across India.",
  keywords: [
    "Vsanco Technologies",
    "Tata Tele Business Services Noida",
    "TTBS authorised partner",
    "Internet Leased Line Noida",
    "Smartflo cloud telephony",
    "IVR solutions Noida",
    "business internet leased line",
    "MPLS VPN India",
    "WhatsApp Business Platform",
    "SIP trunking",
    "managed SD-WAN",
  ],
  authors: [{ name: "Vsanco Technologies" }],
  creator: "Vsanco Technologies",
  publisher: "Vsanco Technologies",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Vsanco Technologies | Authorised Partner Of TATA Tele Business Services",
    description:
      "Enterprise connectivity and cloud communications powered by Tata Tele Business Services. Visit our advisory desk at Regus, Logix City Centre, Sector 32, Noida or request a free site feasibility survey today.",
    url: "https://vsanco.com",
    siteName: "Vsanco Technologies — TTBS Partner Solutions",
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Vsanco Technologies",
    alternateName: "Vsanco Technologies — Authorised Partner Of TATA Tele Business Services",
    url: "https://vsanco.com",
    description:
      "Authorised partner for Tata Tele Business Services (TTBS) providing enterprise connectivity, internet leased lines, Smartflo cloud telephony, and digital solutions.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Regus, Logix City Centre, Sector 32, Near Noida City Centre Metro Station",
      addressLocality: "Noida",
      addressRegion: "Uttar Pradesh",
      postalCode: "201301",
      addressCountry: "IN",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-18002661800",
      contactType: "sales",
      areaServed: "IN",
      availableLanguage: ["en", "hi"],
    },
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-white text-ink antialiased font-sans">
        <SiteHeader />
        <main id="main-content" className="flex-grow">
          {children}
        </main>
        <SiteFooter />
        <QuickContactPill />
      </body>
    </html>
  );
}
