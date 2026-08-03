"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-50 text-slate-600 border-t border-slate-200/80 font-sans">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        
        {/* Main Organized Sitemap Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12">
          
          {/* Brand & Overview Column */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-block">
              <span className="text-xl font-bold tracking-tight text-slate-900">
                AxioVital
              </span>
            </Link>
            
            <p className="text-slate-600 text-sm leading-relaxed max-w-sm font-normal">
              Comprehensive digital healthcare platform designed to simplify the healthcare journey for patients, doctors, hospitals, clinics, and laboratories.
            </p>

            <div className="pt-2 space-y-2">
              <label htmlFor="footer-email" className="text-xs font-bold uppercase tracking-wider text-slate-900 block">
                Subscribe to Health Updates
              </label>
              <form onSubmit={(e) => e.preventDefault()} className="flex items-center gap-2 max-w-sm">
                <input
                  id="footer-email"
                  type="email"
                  placeholder="Enter business email"
                  className="bg-white border border-slate-300 rounded-lg px-3.5 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 shadow-2xs w-full transition-all"
                />
                <button
                  type="submit"
                  className="bg-slate-900 hover:bg-slate-800 text-white font-medium text-sm px-4 py-2 rounded-lg transition-colors shrink-0 cursor-pointer shadow-2xs"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* Column 1: Solutions */}
          <div className="space-y-3.5">
            <h3 className="font-bold text-slate-900 text-xs uppercase tracking-wider">Care Solutions</h3>
            <ul className="space-y-2.5 text-sm font-normal">
              <li>
                <Link href="/hospitals" className="text-slate-600 hover:text-slate-900 transition-colors">
                  Hospitals & Medical Networks
                </Link>
              </li>
              <li>
                <Link href="/clinics" className="text-slate-600 hover:text-slate-900 transition-colors">
                  Outpatient Clinics
                </Link>
              </li>
              <li>
                <Link href="/providers" className="text-slate-600 hover:text-slate-900 transition-colors">
                  Physicians & Doctors
                </Link>
              </li>
              <li>
                <Link href="/laboratories" className="text-slate-600 hover:text-slate-900 transition-colors">
                  Diagnostic Laboratories
                </Link>
              </li>
              <li>
                <Link href="/patients" className="text-slate-600 hover:text-slate-900 transition-colors">
                  Patients & Family Portals
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Products */}
          <div className="space-y-3.5">
            <h3 className="font-bold text-slate-900 text-xs uppercase tracking-wider">Products</h3>
            <ul className="space-y-2.5 text-sm font-normal">
              <li>
                <Link href="/patients" className="text-slate-600 hover:text-slate-900 transition-colors">
                  Online Appointment Booking
                </Link>
              </li>
              <li>
                <Link href="/hospitals" className="text-slate-600 hover:text-slate-900 transition-colors">
                  Queue-Free Hospital Check-In
                </Link>
              </li>
              <li>
                <Link href="/platform" className="text-slate-600 hover:text-slate-900 transition-colors">
                  Electronic Health Records (EHR)
                </Link>
              </li>
              <li>
                <Link href="/providers" className="text-slate-600 hover:text-slate-900 transition-colors">
                  Digital Prescriptions
                </Link>
              </li>
              <li>
                <Link href="/products#axio-card" className="text-slate-600 hover:text-slate-900 transition-colors">
                  AXIO Smart NFC Card
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Company & Resources */}
          <div className="space-y-3.5">
            <h3 className="font-bold text-slate-900 text-xs uppercase tracking-wider">Company & Support</h3>
            <ul className="space-y-2.5 text-sm font-normal">
              <li>
                <Link href="/about" className="text-slate-600 hover:text-slate-900 transition-colors">
                  About AxioVital
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-slate-600 hover:text-slate-900 transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-slate-600 hover:text-slate-900 transition-colors">
                  Case Studies & Resources
                </Link>
              </li>
              <li>
                <Link href="/documentation" className="text-slate-600 hover:text-slate-900 transition-colors">
                  Developer Documentation
                </Link>
              </li>
              <li>
                <Link href="/support" className="text-slate-600 hover:text-slate-900 transition-colors">
                  Support
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="border-t border-slate-200/80 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-normal">
          <div>
            © {new Date().getFullYear()} AxioVital Digital Healthcare Technologies Inc. All rights reserved.
          </div>

          <div className="flex items-center gap-4 flex-wrap justify-center">
            <Link href="/documentation" className="hover:text-slate-900 transition-colors">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link href="/documentation" className="hover:text-slate-900 transition-colors">
              Terms of Service
            </Link>
            <span>•</span>
            <Link href="/documentation" className="hover:text-slate-900 transition-colors">
              Cookie Preferences
            </Link>
            <span>•</span>
            <Link href="/documentation" className="hover:text-slate-900 transition-colors">
              Security & HIPAA Disclosures
            </Link>
          </div>

          {/* Monochrome Social Icons */}
          <div className="flex items-center gap-4 text-slate-400">
            <a href="#" aria-label="LinkedIn" className="hover:text-slate-700 transition-colors">
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
              </svg>
            </a>
            <a href="#" aria-label="X (Twitter)" className="hover:text-slate-700 transition-colors">
              <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a href="#" aria-label="YouTube" className="hover:text-slate-700 transition-colors">
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
