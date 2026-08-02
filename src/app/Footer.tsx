"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-50 text-slate-600 border-t border-slate-200/70 text-xs font-sans">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Main Sitemap & Enterprise Header */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-10">
          
          {/* Brand & Corporate Overview Column */}
          <div className="lg:col-span-4 space-y-4 pr-0 lg:pr-6">
            <Link href="/" className="inline-block group">
              <span className="text-xl font-extrabold tracking-tight text-slate-900">
                AxioVital
              </span>
            </Link>
            
            <p className="text-slate-600 text-xs leading-relaxed max-w-sm">
              Comprehensive enterprise digital healthcare platform delivering secure, interoperable care management solutions for health systems, clinics, laboratories, and providers worldwide.
            </p>

            <div className="pt-2">
              <label htmlFor="footer-email" className="text-xs font-semibold text-slate-900 block mb-1.5">
                Subscribe to AxioVital Enterprise Updates
              </label>
              <form onSubmit={(e) => e.preventDefault()} className="flex items-center gap-2 max-w-sm">
                <input
                  id="footer-email"
                  type="email"
                  placeholder="Enter business email"
                  className="bg-white border border-slate-300 rounded px-3 py-1.5 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-600 w-full"
                />
                <button
                  type="submit"
                  className="bg-slate-900 hover:bg-slate-800 text-white font-medium text-xs px-3.5 py-1.5 rounded transition-colors shrink-0"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* Solutions Column */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="font-semibold text-slate-900 text-xs tracking-normal">Solutions</h3>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/hospitals" className="text-slate-600 hover:text-blue-700 hover:underline transition-colors">
                  Hospitals & Health Networks
                </Link>
              </li>
              <li>
                <Link href="/clinics" className="text-slate-600 hover:text-blue-700 hover:underline transition-colors">
                  Outpatient Clinics
                </Link>
              </li>
              <li>
                <Link href="/providers" className="text-slate-600 hover:text-blue-700 hover:underline transition-colors">
                  Physicians & Doctors
                </Link>
              </li>
              <li>
                <Link href="/laboratories" className="text-slate-600 hover:text-blue-700 hover:underline transition-colors">
                  Diagnostic Laboratories
                </Link>
              </li>
              <li>
                <Link href="/patients" className="text-slate-600 hover:text-blue-700 hover:underline transition-colors">
                  Patient & Family Portals
                </Link>
              </li>
            </ul>
          </div>

          {/* Products Column */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="font-semibold text-slate-900 text-xs tracking-normal">Products</h3>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/patients" className="text-slate-600 hover:text-blue-700 hover:underline transition-colors">
                  Appointment Booking
                </Link>
              </li>
              <li>
                <Link href="/hospitals" className="text-slate-600 hover:text-blue-700 hover:underline transition-colors">
                  Hospital Check-In
                </Link>
              </li>
              <li>
                <Link href="/platform" className="text-slate-600 hover:text-blue-700 hover:underline transition-colors">
                  Electronic Health Records (EHR)
                </Link>
              </li>
              <li>
                <Link href="/providers" className="text-slate-600 hover:text-blue-700 hover:underline transition-colors">
                  Digital Prescriptions
                </Link>
              </li>
              <li>
                <Link href="/products#axio-card" className="text-slate-600 hover:text-blue-700 hover:underline transition-colors">
                  AXIO Smart NFC Card
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources Column */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="font-semibold text-slate-900 text-xs tracking-normal">Resources</h3>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/documentation" className="text-slate-600 hover:text-blue-700 hover:underline transition-colors">
                  Developer Documentation
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-slate-600 hover:text-blue-700 hover:underline transition-colors">
                  Case Studies & Whitepapers
                </Link>
              </li>
              <li>
                <Link href="/platform" className="text-slate-600 hover:text-blue-700 hover:underline transition-colors">
                  API Reference & FHIR R4
                </Link>
              </li>
              <li>
                <Link href="/ai-features" className="text-slate-600 hover:text-blue-700 hover:underline transition-colors">
                  Security & Compliance
                </Link>
              </li>
              <li>
                <Link href="/solutions" className="text-slate-600 hover:text-blue-700 hover:underline transition-colors">
                  System Status
                </Link>
              </li>
            </ul>
          </div>

        {/* Company Column */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="font-semibold text-slate-900 text-xs tracking-normal">Company</h3>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/about" className="text-slate-600 hover:text-blue-700 hover:underline transition-colors">
                  About AxioVital
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-slate-600 hover:text-blue-700 hover:underline transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/customer-stories" className="text-slate-600 hover:text-blue-700 hover:underline transition-colors">
                  Customer Stories
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-600 hover:text-blue-700 hover:underline transition-colors">
                  Contact Sales
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-600 hover:text-blue-700 hover:underline transition-colors">
                  Support Center
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Legal & Compliance Row */}
        <div className="border-t border-slate-200 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} AxioVital Digital Healthcare Technologies Inc. All rights reserved.
          </div>

          <div className="flex items-center gap-4 flex-wrap justify-center">
            <Link href="/documentation" className="hover:text-slate-900 hover:underline transition-colors">
              Privacy Policy
            </Link>
            <span className="text-slate-300">•</span>
            <Link href="/documentation" className="hover:text-slate-900 hover:underline transition-colors">
              Terms of Service
            </Link>
            <span className="text-slate-300">•</span>
            <Link href="/documentation" className="hover:text-slate-900 hover:underline transition-colors">
              Cookie Preferences
            </Link>
            <span className="text-slate-300">•</span>
            <Link href="/documentation" className="hover:text-slate-900 hover:underline transition-colors">
              Accessibility
            </Link>
            <span className="text-slate-300">•</span>
            <Link href="/documentation" className="hover:text-slate-900 hover:underline transition-colors">
              Security & HIPAA Disclosures
            </Link>
          </div>

          {/* Monochrome Social Links */}
          <div className="flex items-center gap-3">
            <a href="#" aria-label="LinkedIn" className="text-slate-400 hover:text-slate-700 transition-colors">
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
              </svg>
            </a>
            <a href="#" aria-label="X (Twitter)" className="text-slate-400 hover:text-slate-700 transition-colors">
              <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a href="#" aria-label="YouTube" className="text-slate-400 hover:text-slate-700 transition-colors">
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
            <a href="#" aria-label="GitHub" className="text-slate-400 hover:text-slate-700 transition-colors">
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
              </svg>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
