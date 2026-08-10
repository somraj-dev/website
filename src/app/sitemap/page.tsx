"use client";

import Link from "next/link";
import { ArrowRight, Compass, ShieldAlert, LifeBuoy, FileText } from "lucide-react";

export default function SitemapPage() {
  const sections = [
    {
      title: "Care Solutions",
      links: [
        { name: "Hospitals & Medical Networks", href: "/hospitals" },
        { name: "Outpatient Clinics", href: "/clinics" },
        { name: "Physicians & Doctors", href: "/providers" },
        { name: "Diagnostic Laboratories", href: "/laboratories" },
        { name: "Patients & Family Portals", href: "/patients" }
      ]
    },
    {
      title: "Products & Tech",
      links: [
        { name: "Platform Overview", href: "/platform" },
        { name: "Products Overview", href: "/products" },
        { name: "Solutions Home", href: "/solutions" },
        { name: "AXIO Smart NFC Card", href: "/products#axio-card" },
        { name: "AI Features (AxioAI)", href: "/ai-features" },
        { name: "Pricing Plans", href: "/pricing" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About AxioVital", href: "/about" },
        { name: "Careers & Openings", href: "/careers" },
        { name: "Customer Stories", href: "/customer-stories" }
      ]
    }
  ];

  const secondarySections = [
    {
      title: "Support & Docs",
      links: [
        { name: "Support Center", href: "/support" },
        { name: "Developer Documentation", href: "/documentation" },
        { name: "Contact Team", href: "/contact" },
        { name: "Case Studies & Resources", href: "/resources" }
      ]
    },
    {
      title: "Legal & Compliance",
      links: [
        { name: "Privacy Policy", href: "/documentation" },
        { name: "Terms of Service", href: "/documentation" },
        { name: "Cookie Preferences", href: "/documentation" },
        { name: "Security & HIPAA Disclosures", href: "/documentation" }
      ]
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-16 sm:py-24 font-sans">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Page Header */}
        <div className="border-b border-slate-200 pb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full inline-flex items-center gap-1.5 mb-4">
            <Compass className="h-3 w-3" /> Navigation Directory
          </span>
          <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight sm:text-5xl">
            Sitemap
          </h1>
          <p className="mt-3 text-lg text-slate-650 max-w-3xl">
            Navigate through the AxioVital ecosystem. Find solutions, products, documentation, and resource links.
          </p>
        </div>

        {/* Explore Section */}
        <div className="space-y-8">
          <div className="flex items-center gap-2">
            <h2 className="text-2xl font-bold text-slate-900">Explore AxioVital</h2>
            <div className="h-px bg-slate-200 flex-grow ml-4"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sections.map((sect, index) => (
              <div key={index} className="bg-white border border-slate-200/80 rounded-2xl p-8 shadow-xs hover:shadow-sm transition-all duration-300">
                <h3 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-3 mb-4 flex items-center justify-between">
                  {sect.title}
                  <span className="h-2 w-2 rounded-full bg-blue-500"></span>
                </h3>
                <ul className="space-y-3.5">
                  {sect.links.map((link, idx) => (
                    <li key={idx}>
                      <Link 
                        href={link.href} 
                        className="group flex items-center justify-between text-slate-600 hover:text-blue-600 transition-colors text-sm font-medium"
                      >
                        {link.name}
                        <ArrowRight className="h-4 w-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 text-blue-500" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Resources Section */}
        <div className="space-y-8 pt-6">
          <div className="flex items-center gap-2">
            <h2 className="text-2xl font-bold text-slate-900">Additional Resources</h2>
            <div className="h-px bg-slate-200 flex-grow ml-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {secondarySections.map((sect, index) => (
              <div key={index} className="bg-white border border-slate-200/80 rounded-2xl p-8 shadow-xs hover:shadow-sm transition-all duration-300">
                <h3 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-3 mb-4 flex items-center gap-2">
                  {index === 0 ? <LifeBuoy className="h-5 w-5 text-blue-500" /> : <FileText className="h-5 w-5 text-indigo-500" />}
                  {sect.title}
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {sect.links.map((link, idx) => (
                    <li key={idx}>
                      <Link 
                        href={link.href} 
                        className="group flex items-center gap-1.5 text-slate-600 hover:text-blue-600 transition-colors text-sm font-medium"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-slate-300 group-hover:bg-blue-500 transition-colors"></span>
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
