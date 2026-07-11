"use client";

import { useState } from "react";
import Link from "next/link";
import { siteConfig } from "./config";
import { Menu, X, ChevronDown, Activity, Sparkles, Shield, Database, Layout } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/95 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-2 text-blue-600 font-bold text-xl">
              <Activity className="h-6 w-6 stroke-[2.5]" />
              <span className="tracking-tight text-slate-900 font-extrabold">Axio<span className="text-blue-600">Vital</span></span>
            </Link>

            <nav className="hidden md:flex items-center gap-6">
              {/* Technology Dropdown */}
              <div className="relative group">
                <button className="flex items-center gap-1 text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors">
                  Technology & Cloud <ChevronDown className="h-4 w-4" />
                </button>
                <div className="absolute top-full -left-4 mt-2 w-80 rounded-2xl bg-white p-4 shadow-xl border border-slate-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="space-y-1">
                    <Link href="/platform" className="block rounded-lg p-2 hover:bg-slate-50">
                      <div className="font-semibold text-slate-900 text-sm">AxioOS Cloud</div>
                      <p className="text-xs text-slate-500 mt-0.5">Secure clinical cloud infrastructure hosting core databases.</p>
                    </Link>
                    <Link href="/ai-features" className="block rounded-lg p-2 hover:bg-slate-50">
                      <div className="font-semibold text-slate-900 text-sm">Clinical AI Agent</div>
                      <p className="text-xs text-slate-500 mt-0.5">Ambient notes and predictive diagnostics support.</p>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Solutions Dropdown */}
              <div className="relative group">
                <button className="flex items-center gap-1 text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors">
                  Solutions <ChevronDown className="h-4 w-4" />
                </button>
                <div className="absolute top-full -left-4 mt-2 w-80 rounded-2xl bg-white p-4 shadow-xl border border-slate-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="space-y-1">
                    {siteConfig.dropdowns.solutions.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block rounded-lg p-2 hover:bg-slate-50 transition-colors"
                      >
                        <div className="font-semibold text-slate-900 text-sm">{item.title}</div>
                        <p className="text-xs text-slate-500 mt-0.5">{item.description}</p>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Products Dropdown */}
              <div className="relative group">
                <button className="flex items-center gap-1 text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors">
                  Products <ChevronDown className="h-4 w-4" />
                </button>
                <div className="absolute top-full -left-20 mt-2 w-96 rounded-2xl bg-white p-4 shadow-xl border border-slate-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="grid grid-cols-1 gap-1">
                    {siteConfig.dropdowns.products.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block rounded-lg p-2 hover:bg-slate-50 transition-colors"
                      >
                        <div className="font-semibold text-slate-900 text-sm">{item.title}</div>
                        <p className="text-xs text-slate-500 mt-0.5">{item.description}</p>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              
              <Link href="/resources" className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors">
                Resources
              </Link>

              <Link href="/pricing" className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors">
                Pricing
              </Link>
            </nav>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Link href="/documentation" className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors">
              Docs
            </Link>
            <Link href="/contact" className="rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 transition-all">
              Request Demo
            </Link>
          </div>

          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-slate-600 hover:text-slate-900 focus:outline-none"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 bg-white px-4 py-4 space-y-4">
          <div className="space-y-2">
            <Link
              href="/platform"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-semibold text-slate-700 hover:text-blue-600"
            >
              Platform Cloud
            </Link>
            
            <div className="py-2">
              <button
                onClick={() => toggleDropdown("solutions")}
                className="flex w-full items-center justify-between text-base font-semibold text-slate-700 hover:text-blue-600"
              >
                Solutions <ChevronDown className={`h-4 w-4 transition-transform ${activeDropdown === "solutions" ? "rotate-180" : ""}`} />
              </button>
              {activeDropdown === "solutions" && (
                <div className="pl-4 mt-2 space-y-2">
                  {siteConfig.dropdowns.solutions.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-1 text-sm font-medium text-slate-600 hover:text-blue-600"
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div className="py-2">
              <button
                onClick={() => toggleDropdown("products")}
                className="flex w-full items-center justify-between text-base font-semibold text-slate-700 hover:text-blue-600"
              >
                Products <ChevronDown className={`h-4 w-4 transition-transform ${activeDropdown === "products" ? "rotate-180" : ""}`} />
              </button>
              {activeDropdown === "products" && (
                <div className="pl-4 mt-2 space-y-2">
                  {siteConfig.dropdowns.products.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-1 text-sm font-medium text-slate-600 hover:text-blue-600"
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/resources"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-semibold text-slate-700 hover:text-blue-600"
            >
              Resources
            </Link>

            <Link
              href="/pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-semibold text-slate-700 hover:text-blue-600"
            >
              Pricing
            </Link>
          </div>
          <div className="pt-4 border-t border-slate-100 flex flex-col gap-2">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center rounded-full bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-700"
            >
              Request Demo
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
