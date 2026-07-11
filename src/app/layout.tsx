import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./Header";
import Footer from "./Footer";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "AxioVital - Enterprise Healthcare Operating System",
    template: "%s | AxioVital"
  },
  description: "AxioVital is the next-generation, AI-powered healthcare operating system offering security, interoperability, patient access cards, and electronic health record integration.",
  keywords: ["Healthcare Platform", "Enterprise EHR", "Digital Identity", "AxioVital", "AxioAI", "Health Tech"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans bg-slate-50 text-slate-900">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
