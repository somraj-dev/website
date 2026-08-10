import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "./Header";
import Footer from "./Footer";

export const metadata: Metadata = {
  title: {
    default: "AxioVital - Enterprise Healthcare Operating System",
    template: "%s | AxioVital"
  },
  description: "AxioVital is the next-generation, AI-powered healthcare operating system offering security, interoperability, patient access cards, and electronic health record integration.",
  keywords: ["Healthcare Platform", "Enterprise EHR", "Digital Identity", "AxioVital", "Axio Vital", "AxioVital HealthTech", "AxioVital QuantaForze", "AxioAI"],
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "AxioVital",
    "legalName": "AxioVital Health Platform",
    "alternateName": ["Axio Vital", "AxioVital HealthTech", "AxioVital Healthcare Software", "AxioVital QuantaForze"],
    "url": "https://axiovital.quantaforze.com",
    "logo": "https://axiovital.quantaforze.com/oracle_hero_doctor.jpg",
    "description": "AxioVital is an integrated healthcare technology platform developed and operated by QuantaForze, connecting patients, care providers, clinics, hospitals, and laboratories.",
    "parentOrganization": {
      "@type": "Organization",
      "name": "QuantaForze",
      "url": "https://quantaforze.com"
    },
    "sameAs": [
      "https://quantaforze.com",
      "https://www.linkedin.com/company/axiovital",
      "https://twitter.com/axiovital",
      "https://github.com/axiovital"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "sales",
      "email": "sales@axiovital.com"
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "AxioVital",
    "alternateName": "Axio Vital",
    "url": "https://axiovital.quantaforze.com",
    "publisher": {
      "@type": "Organization",
      "name": "QuantaForze",
      "url": "https://quantaforze.com"
    }
  };

  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-slate-50 text-slate-900">
        {/* Google Tag (gtag.js) via Next.js Script */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-0TL3DMNEG6"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-0TL3DMNEG6');
          `}
        </Script>

        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
