import type { Metadata, Viewport } from "next";
import { SITE, SOCIAL_LINKS } from "@/lib/site-config";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} | ${SITE.tagline}`,
    template: `%s | ${SITE.shortName}`,
  },
  description: SITE.description,
  keywords: [
    "web design agency Nigeria",
    "custom software development",
    "e-commerce development Nigeria",
    "mobile app development",
    "AI and business automation",
    "software company Ilorin",
  ],
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: SITE.url,
    siteName: SITE.name,
    title: `${SITE.name} | ${SITE.tagline}`,
    description: SITE.description,
    images: [{ url: "/images/logo.png", width: 512, height: 512, alt: SITE.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} | ${SITE.tagline}`,
    description: SITE.description,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.name,
    alternateName: SITE.shortName,
    url: SITE.url,
    logo: `${SITE.url}/images/logo.png`,
    foundingDate: SITE.founded,
    taxID: SITE.registration,
    founder: {
      "@type": "Person",
      name: SITE.founder,
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address,
      addressCountry: "NG",
    },
    email: SITE.email,
    telephone: SITE.phone,
    sameAs: [
      SOCIAL_LINKS.linkedin,
      SOCIAL_LINKS.twitter,
      SOCIAL_LINKS.facebook,
      SOCIAL_LINKS.instagram,
    ],
  };

  return (
    <html lang="en" className="scroll-smooth">
      <body className="flex min-h-screen flex-col bg-white font-sans antialiased">
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
