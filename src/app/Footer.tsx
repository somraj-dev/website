"use client";

import Link from "next/link";
import {
  Mail,
  ArrowRight,
  UserCheck,
  FlaskConical,
  Users,
  Calendar,
  FileText,
  CreditCard,
  BookOpen,
  Info,
  Briefcase,
  Headphones
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#f5f8ff] text-slate-700 border-t border-blue-100/60 pt-10 pb-8 px-4 sm:px-6 lg:px-8 font-sans relative overflow-hidden z-10">
      
      {/* Main Sitemap Section */}
      <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-10">
        
        {/* Brand & Newsletter Column */}
        <div className="lg:col-span-4 space-y-4">
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-md shadow-blue-500/25">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" fill="#2563eb" stroke="#2563eb" />
                <path d="M12 8v8M8 12h8" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
            </div>
            <span className="text-2xl font-extrabold text-blue-600 tracking-tight">
              AxioVital
            </span>
          </Link>
          
          <p className="text-slate-600 text-xs leading-relaxed max-w-sm font-medium">
            Comprehensive digital healthcare platform designed to simplify the healthcare journey for patients, doctors, hospitals, clinics, laboratories, and healthcare administrators.
          </p>

          <div className="pt-2">
            <span className="text-xs font-bold text-slate-900 block mb-2">
              Subscribe to AxioVital Digital Health Updates
            </span>
            <form onSubmit={(e) => e.preventDefault()} className="flex items-center gap-2 max-w-sm">
              <div className="relative flex-grow">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="w-full bg-white border border-slate-200 rounded-xl pl-9 pr-3 py-2.5 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 shadow-sm transition-all"
                />
              </div>
              <button 
                type="submit" 
                className="rounded-xl bg-blue-600 hover:bg-blue-700 p-2.5 text-white transition-colors shadow-md shadow-blue-500/25 shrink-0"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </div>

          <div className="flex items-center gap-3 pt-2">
            <a href="#" className="w-8 h-8 rounded-full bg-white border border-slate-200/80 shadow-sm text-blue-600 hover:bg-blue-50 hover:border-blue-300 flex items-center justify-center transition-all">
              <svg className="h-4 w-4 fill-current text-blue-600" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
              </svg>
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-white border border-slate-200/80 shadow-sm text-blue-600 hover:bg-blue-50 hover:border-blue-300 flex items-center justify-center transition-all">
              <svg className="h-3.5 w-3.5 fill-current text-blue-600" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-white border border-slate-200/80 shadow-sm text-blue-600 hover:bg-blue-50 hover:border-blue-300 flex items-center justify-center transition-all">
              <svg className="h-4 w-4 fill-current text-blue-600" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-white border border-slate-200/80 shadow-sm text-blue-600 hover:bg-blue-50 hover:border-blue-300 flex items-center justify-center transition-all">
              <svg className="h-4 w-4 fill-current text-blue-600" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Care Solutions Column */}
        <div className="lg:col-span-2 space-y-3">
          <div>
            <h4 className="text-[11px] font-bold uppercase tracking-wider text-blue-600">
              Care Solutions
            </h4>
            <div className="w-6 h-[2px] bg-blue-600 mt-1.5 rounded-full"></div>
          </div>
          <ul className="space-y-2.5 text-xs">
            <li>
              <Link href="/hospitals" className="flex items-center gap-2.5 text-slate-700 hover:text-blue-600 font-medium transition-colors">
                <svg className="h-4 w-4 text-blue-600 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M19 21V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5m0 0v-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5m-4 0h4M9 7h1m-1 4h1m4-4h1m-1 4h1" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>Hospitals & Medical Networks</span>
              </Link>
            </li>
            <li>
              <Link href="/clinics" className="flex items-center gap-2.5 text-slate-700 hover:text-blue-600 font-medium transition-colors">
                <svg className="h-4 w-4 text-blue-600 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 21h18M5 21V7l8-4v18M13 21V11l6 3v7M9 9h.01M9 13h.01M9 17h.01" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>Outpatient Clinics</span>
              </Link>
            </li>
            <li>
              <Link href="/providers" className="flex items-center gap-2.5 text-slate-700 hover:text-blue-600 font-medium transition-colors">
                <UserCheck className="h-4 w-4 text-blue-600 shrink-0" />
                <span>Physicians & Doctors</span>
              </Link>
            </li>
            <li>
              <Link href="/laboratories" className="flex items-center gap-2.5 text-slate-700 hover:text-blue-600 font-medium transition-colors">
                <FlaskConical className="h-4 w-4 text-blue-600 shrink-0" />
                <span>Laboratories & Diagnostics</span>
              </Link>
            </li>
            <li>
              <Link href="/patients" className="flex items-center gap-2.5 text-slate-700 hover:text-blue-600 font-medium transition-colors">
                <Users className="h-4 w-4 text-blue-600 shrink-0" />
                <span>Patients & Family Portals</span>
              </Link>
            </li>
          </ul>
        </div>

        {/* Features & Products Column */}
        <div className="lg:col-span-3 space-y-3">
          <div>
            <h4 className="text-[11px] font-bold uppercase tracking-wider text-blue-600">
              Features & Products
            </h4>
            <div className="w-6 h-[2px] bg-blue-600 mt-1.5 rounded-full"></div>
          </div>
          <ul className="space-y-2.5 text-xs">
            <li>
              <Link href="/patients" className="flex items-center gap-2.5 text-slate-700 hover:text-blue-600 font-medium transition-colors">
                <Calendar className="h-4 w-4 text-blue-600 shrink-0" />
                <span>Online Appointment Booking</span>
              </Link>
            </li>
            <li>
              <Link href="/hospitals" className="flex items-center gap-2.5 text-slate-700 hover:text-blue-600 font-medium transition-colors">
                <UserCheck className="h-4 w-4 text-blue-600 shrink-0" />
                <span>Queue-Free Hospital Check-In</span>
              </Link>
            </li>
            <li>
              <Link href="/platform" className="flex items-center gap-2.5 text-slate-700 hover:text-blue-600 font-medium transition-colors">
                <svg className="h-4 w-4 text-blue-600 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 11v6M9 14h6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>Electronic Health Records (EHR)</span>
              </Link>
            </li>
            <li>
              <Link href="/providers" className="flex items-center gap-2.5 text-slate-700 hover:text-blue-600 font-medium transition-colors">
                <FileText className="h-4 w-4 text-blue-600 shrink-0" />
                <span>Digital Prescriptions</span>
              </Link>
            </li>
            <li>
              <Link href="/products#axio-card" className="flex items-center gap-2.5 text-slate-700 hover:text-blue-600 font-medium transition-colors">
                <CreditCard className="h-4 w-4 text-blue-600 shrink-0" />
                <span>AXIO Smart NFC Card</span>
              </Link>
            </li>
          </ul>
        </div>

        {/* Company & Support Column */}
        <div className="lg:col-span-3 space-y-3">
          <div>
            <h4 className="text-[11px] font-bold uppercase tracking-wider text-blue-600">
              Company & Support
            </h4>
            <div className="w-6 h-[2px] bg-blue-600 mt-1.5 rounded-full"></div>
          </div>
          <ul className="space-y-2.5 text-xs">
            <li>
              <Link href="/documentation" className="flex items-center gap-2.5 text-slate-700 hover:text-blue-600 font-medium transition-colors">
                <FileText className="h-4 w-4 text-blue-600 shrink-0" />
                <span>Developer Documentation</span>
              </Link>
            </li>
            <li>
              <Link href="/resources" className="flex items-center gap-2.5 text-slate-700 hover:text-blue-600 font-medium transition-colors">
                <BookOpen className="h-4 w-4 text-blue-600 shrink-0" />
                <span>Case Studies & Resources</span>
              </Link>
            </li>
            <li>
              <Link href="/about" className="flex items-center gap-2.5 text-slate-700 hover:text-blue-600 font-medium transition-colors">
                <Info className="h-4 w-4 text-blue-600 shrink-0" />
                <span>About AxioVital</span>
              </Link>
            </li>
            <li>
              <Link href="/careers" className="flex items-center gap-2.5 text-slate-700 hover:text-blue-600 font-medium transition-colors">
                <Briefcase className="h-4 w-4 text-blue-600 shrink-0" />
                <span>Careers</span>
              </Link>
            </li>
            <li>
              <Link href="/contact" className="flex items-center gap-2.5 text-slate-700 hover:text-blue-600 font-medium transition-colors">
                <Headphones className="h-4 w-4 text-blue-600 shrink-0" />
                <span>Contact Support</span>
              </Link>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom Bar & Glowing 3D Shield */}
      <div className="mx-auto max-w-7xl border-t border-slate-200/80 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-medium relative">
        <p>© {new Date().getFullYear()} AxioVital Digital Healthcare Technologies Inc. All rights reserved.</p>
        
        <div className="flex items-center gap-3 sm:gap-4 text-slate-500 z-10 pr-0 md:pr-24">
          <Link href="/documentation" className="hover:text-blue-600 transition-colors">Privacy Policy</Link>
          <span>•</span>
          <Link href="/documentation" className="hover:text-blue-600 transition-colors">Terms of Service</Link>
          <span>•</span>
          <Link href="/documentation" className="hover:text-blue-600 transition-colors">Security & HIPAA Disclosures</Link>
        </div>

        {/* Glowing 3D Shield Graphic on Far Bottom Right */}
        <div className="absolute right-0 -bottom-3 pointer-events-none hidden sm:block">
          <div className="relative w-20 h-20 flex items-center justify-center">
            {/* Glowing backdrop halo */}
            <div className="absolute inset-0 rounded-full bg-blue-400/20 blur-xl"></div>
            {/* 3D Shield graphic matching Image 1 */}
            <div className="relative z-10 w-11 h-13 bg-gradient-to-br from-blue-400 via-blue-600 to-indigo-700 rounded-b-2xl rounded-t-lg p-0.5 shadow-lg shadow-blue-500/30 transform rotate-[-6deg]">
              <div className="w-full h-full border border-white/50 rounded-b-[14px] rounded-t-[6px] flex items-center justify-center bg-gradient-to-b from-white/25 to-transparent">
                <svg className="w-5 h-5 text-white drop-shadow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6L9 17l-5-5"/>
                </svg>
              </div>
            </div>
          </div>
        </div>

      </div>

    </footer>
  );
}

