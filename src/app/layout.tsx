import type { Metadata } from "next";
import "./globals.css";
import Header from "./Header";
import Footer from "./Footer";

export const metadata: Metadata = {
  title: {
    default: "AxioVital - Enterprise Healthcare Operating System",
    template: "%s | AxioVital"
  },
  description: "AxioVital is the next-generation, AI-powered healthcare operating system offering security, interoperability, patient access cards, and electronic health record integration.",
  keywords: ["Healthcare Platform", "Enterprise EHR", "Digital Identity", "AxioVital", "AxioAI", "Health Tech"],
  verification: {
    google: "0zpf3LZ_dPAh6JRz42ML5kPHJ-SPYmK7roquL8olCHo",
  },
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
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col font-sans bg-slate-50 text-slate-900">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
