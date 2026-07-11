"use client";

import { useState } from "react";
import Link from "next/link";
import { Activity, Mail, CheckCircle } from "lucide-react";

export default function Footer() {
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="border-t border-slate-200 bg-slate-900 text-slate-400">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2 text-white font-bold text-xl">
              <Activity className="h-6 w-6 stroke-[2.5] text-blue-500" />
              <span className="tracking-tight text-white font-extrabold">Axio<span className="text-blue-500">Vital</span></span>
            </Link>
            <p className="text-sm text-slate-400 max-w-md">
              AxioVital is the premier enterprise-grade Healthcare Operating System. Interoperable, secure, and powered by artificial intelligence.
            </p>
            <div className="flex gap-4 text-xs text-slate-500">
              <span>SOC 2 Type II Certified</span>
              <span>•</span>
              <span>HIPAA Compliant</span>
              <span>•</span>
              <span>GDPR Ready</span>
            </div>
          </div>
          
          <div className="mt-12 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Platform & Services</h3>
                <ul className="mt-4 space-y-2 text-sm">
                  <li><Link href="/platform" className="hover:text-white transition-colors">AxioOS</Link></li>
                  <li><Link href="/ai-features" className="hover:text-white transition-colors">AxioAI</Link></li>
                  <li><Link href="/products#axio-id" className="hover:text-white transition-colors">AXIO-ID</Link></li>
                  <li><Link href="/products#axio-card" className="hover:text-white transition-colors">AXIO Card</Link></li>
                  <li><Link href="/pricing" className="hover:text-white transition-colors">Pricing Matrix</Link></li>
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Ecosystem</h3>
                <ul className="mt-4 space-y-2 text-sm">
                  <li><Link href="/providers" className="hover:text-white transition-colors">Providers</Link></li>
                  <li><Link href="/hospitals" className="hover:text-white transition-colors">Hospitals</Link></li>
                  <li><Link href="/clinics" className="hover:text-white transition-colors">Clinics</Link></li>
                  <li><Link href="/laboratories" className="hover:text-white transition-colors">Labs</Link></li>
                  <li><Link href="/patients" className="hover:text-white transition-colors">Patients Portal</Link></li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-1 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Stay Updated</h3>
                <p className="mt-4 text-sm text-slate-400">
                  Receive the latest updates on healthcare technology, compliance, and product updates.
                </p>
                {subscribed ? (
                  <div className="mt-4 flex items-center gap-2 text-emerald-400 text-sm font-semibold bg-emerald-950/30 border border-emerald-900/50 p-3 rounded-xl">
                    <CheckCircle className="h-4 w-4" /> Thank you for subscribing!
                  </div>
                ) : (
                  <form onSubmit={handleSubscribe} className="mt-4 flex max-w-md gap-2">
                    <input
                      type="email"
                      required
                      placeholder="Enter corporate email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full min-w-0 rounded-full border border-slate-700 bg-slate-800 px-4 py-2 text-sm text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none"
                    />
                    <button
                      type="submit"
                      className="flex items-center justify-center rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700 transition-all"
                    >
                      Subscribe
                    </button>
                  </form>
                )}
                <div className="mt-6 flex gap-4 text-xs">
                  <Link href="/about" className="hover:text-white transition-colors">About Us</Link>
                  <Link href="/careers" className="hover:text-white transition-colors">Careers</Link>
                  <Link href="/customer-stories" className="hover:text-white transition-colors">Customer Stories</Link>
                  <Link href="/documentation" className="hover:text-white transition-colors">API Docs</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} AxioVital Inc. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Security Disclosure</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
