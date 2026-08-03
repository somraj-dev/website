"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  Menu, Search, User, MessageSquare, ChevronDown, X, Activity, ChevronRight
} from "lucide-react";

export default function Header() {
  const [activeTab, setActiveTab] = useState("overview");
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const [activeDrawerCategory, setActiveDrawerCategory] = useState("healthcare");

  const drawerData: Record<string, { title: string; items: Array<{ label: string; href: string }> }> = {
    healthcare: {
      title: "AxioVital Digital Healthcare Overview",
      items: [
        { label: "Platform Overview", href: "/platform" },
        { label: "Online Appointment Booking", href: "/patients" },
        { label: "Queue-Free Hospital Visits", href: "/hospitals" },
        { label: "Electronic Health Records (EHR)", href: "/platform" },
        { label: "Digital Prescriptions", href: "/providers" },
        { label: "Doctor & Practice Management", href: "/clinics" },
        { label: "Laboratory Integration & Reports", href: "/laboratories" },
        { label: "Patient Mobile Companion App", href: "/patients" },
        { label: "AXIO Smart NFC Kiosk Check-In", href: "/products#axio-card" },
        { label: "Developer APIs & Integration", href: "/documentation" },
        { label: "Enterprise Security & HIPAA", href: "/documentation" }
      ]
    },
    solutions: {
      title: "Solutions by Healthcare Segment",
      items: [
        { label: "Hospitals & Medical Networks", href: "/hospitals" },
        { label: "Outpatient Clinics & Practices", href: "/clinics" },
        { label: "Physicians & Care Providers", href: "/providers" },
        { label: "Diagnostics & Laboratories", href: "/laboratories" },
        { label: "Patients & Family Portals", href: "/patients" }
      ]
    },
    products: {
      title: "AxioVital Product Suite",
      items: [
        { label: "AXIO-ID Digital Identity", href: "/products#axio-id" },
        { label: "AXIO Smart NFC Card", href: "/products#axio-card" },
        { label: "AxioAI Clinical Assistant", href: "/products#axioai" },
        { label: "AxioInsights Analytics", href: "/products#axioinsights" },
        { label: "AxioConnect FHIR R4 Engine", href: "/products#axioconnect" },
        { label: "MyHealthcare Patient App", href: "/products#myhealthcare" }
      ]
    },
    company: {
      title: "Company & Resources",
      items: [
        { label: "About AxioVital Enterprise", href: "/about" },
        { label: "Customer Success Stories", href: "/customer-stories" },
        { label: "Careers & Leadership", href: "/careers" },
        { label: "Whitepapers & Resources", href: "/resources" },
        { label: "Contact Solution Architect", href: "/contact" }
      ]
    }
  };

  const dropdownData: Record<string, Array<{ label: string; href: string }>> = {
    segments: [
      { label: "Hospitals & Medical Networks", href: "/hospitals" },
      { label: "Outpatient Clinics & Practices", href: "/clinics" },
      { label: "Physicians & Care Providers", href: "/providers" },
      { label: "Diagnostics & Laboratories", href: "/laboratories" },
      { label: "Patients & Family Portals", href: "/patients" }
    ],
    solutions: [
      { label: "Online Appointment Booking", href: "/patients" },
      { label: "Queue-Free Hospital Visits", href: "/hospitals" },
      { label: "Electronic Health Records (EHR)", href: "/platform" },
      { label: "Digital Prescriptions", href: "/providers" },
      { label: "Laboratory Integration & Reports", href: "/laboratories" }
    ],
    products: [
      { label: "AXIO-ID Token", href: "/products#axio-id" },
      { label: "AXIO Smart NFC Card", href: "/products#axio-card" },
      { label: "AxioAI Assistant", href: "/products#axioai" },
      { label: "AxioInsights Analytics", href: "/products#axioinsights" },
      { label: "AxioConnect Engine", href: "/products#axioconnect" },
      { label: "MyHealthcare Patient App", href: "/products#myhealthcare" }
    ]
  };

  const subNavItems = [
    { id: "overview", label: "Overview", href: "/", hasDropdown: false },
    { id: "segments", label: "Segments", hasDropdown: true, menuKey: "segments" },
    { id: "solutions", label: "Solutions", hasDropdown: true, menuKey: "solutions" },
    { id: "products", label: "Healthcare Products", hasDropdown: true, menuKey: "products" },
  ];

  const handleTabClick = (item: typeof subNavItems[0]) => {
    setActiveTab(item.id);
    if (item.hasDropdown && item.menuKey) {
      setOpenDropdown((prev) => (prev === item.menuKey ? null : item.menuKey));
    } else {
      setOpenDropdown(null);
    }
  };

  return (
    <header className="w-full bg-white z-40 relative">
      
      {/* ROW 1: Top White Header Bar */}
      <div className="border-b border-slate-200 py-3 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-[1440px] flex items-center justify-between gap-4">
          
          {/* Left: Hamburger + Clean Brand Logo */}
          <div className="flex items-center gap-4 shrink-0">
            <button 
              onClick={() => setHamburgerOpen(true)}
              className="p-1.5 text-slate-700 hover:text-slate-900 focus:outline-none rounded-lg hover:bg-slate-100 transition-colors"
              aria-label="Open Global Navigation"
            >
              <Menu className="h-6 w-6 stroke-[2]" />
            </button>
            
            <Link href="/" className="flex items-center gap-2">
              <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-[#c74634]">
                AXIOVITAL
              </span>
            </Link>
          </div>

          {/* Center: Wide Search Bar */}
          <div className="flex-1 max-w-2xl hidden md:block">
            <div className="relative">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search AxioVital solutions, products, appointment booking..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onClick={() => setSearchOpen(true)}
                className="w-full pl-10 pr-4 py-2 bg-white border border-slate-300 rounded-lg text-sm text-slate-900 focus:outline-none focus:border-slate-500 shadow-xs"
              />
            </div>
          </div>

          {/* Right: Authentic Indian Flag SVG + User Icon + Chat Icon */}
          <div className="flex items-center gap-5 shrink-0 text-slate-700">
            {/* Search Icon for mobile */}
            <button onClick={() => setSearchOpen(true)} className="md:hidden p-1.5 text-slate-700">
              <Search className="h-5 w-5" />
            </button>

            {/* Authentic Indian Flag Graphic SVG */}
            <div className="flex items-center gap-1.5 cursor-pointer hover:opacity-90 transition-opacity" title="India Region (EN-IN)">
              <svg className="h-4 w-6 rounded-xs shadow-xs border border-slate-300 overflow-hidden" viewBox="0 0 900 600">
                <rect width="900" height="200" fill="#FF9933"/>
                <rect y="200" width="900" height="200" fill="#FFFFFF"/>
                <rect y="400" width="900" height="200" fill="#138808"/>
                <g transform="translate(450, 300)">
                  <circle r="80" fill="none" stroke="#000080" strokeWidth="12"/>
                  <circle r="15" fill="#000080"/>
                  {Array.from({ length: 24 }).map((_, i) => (
                    <line
                      key={i}
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="-80"
                      stroke="#000080"
                      strokeWidth="5"
                      transform={`rotate(${i * 15})`}
                    />
                  ))}
                </g>
              </svg>
            </div>

            {/* User Icon */}
            <Link href="/patients" className="hover:text-slate-900 transition-colors p-1" title="User Portal">
              <User className="h-5 w-5 stroke-[1.8]" />
            </Link>

            {/* Chat Icon */}
            <Link href="/contact" className="hover:text-slate-900 transition-colors p-1" title="Contact Support">
              <MessageSquare className="h-5 w-5 stroke-[1.8]" />
            </Link>
          </div>

        </div>
      </div>

      {/* ROW 2: Sub-Navigation Bar (Dark Charcoal #211f1c with Yellow Underline) */}
      <div className="oracle-subnav-bg text-white px-4 sm:px-6 lg:px-8 border-b border-stone-800">
        <div className="mx-auto max-w-[1440px] flex items-center justify-between h-12">
          <nav className="flex items-center gap-8 text-sm font-semibold h-full">
            {subNavItems.map((item) => {
              const isActive = activeTab === item.id || openDropdown === item.menuKey;
              return (
                <div 
                  key={item.id} 
                  className="h-full flex items-center relative"
                  onMouseEnter={() => item.menuKey && setOpenDropdown(item.menuKey)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  {item.hasDropdown ? (
                    <button
                      onClick={() => handleTabClick(item)}
                      className={`h-full flex items-center gap-1.5 px-1 text-sm font-semibold transition-colors border-b-2 ${
                        isActive 
                          ? "border-[#e6b738] text-white" 
                          : "border-transparent text-slate-300 hover:text-white"
                      }`}
                    >
                      {item.label}
                      <ChevronDown className={`h-3.5 w-3.5 transition-transform ${openDropdown === item.menuKey ? "rotate-180 text-[#e6b738]" : "opacity-70"}`} />
                    </button>
                  ) : (
                    <Link
                      href={item.href || "/"}
                      onClick={() => { setActiveTab(item.id); setOpenDropdown(null); }}
                      className={`h-full flex items-center gap-1.5 px-1 text-sm font-semibold transition-colors border-b-2 ${
                        isActive 
                          ? "border-[#e6b738] text-white" 
                          : "border-transparent text-slate-300 hover:text-white"
                      }`}
                    >
                      {item.label}
                    </Link>
                  )}

                  {/* LIGHT BLUE POPOVER DROPDOWN MENU */}
                  {item.hasDropdown && item.menuKey && openDropdown === item.menuKey && (
                    <div 
                      className="absolute top-full left-0 mt-0.5 w-64 bg-[#f0f7ff] text-slate-900 rounded-md shadow-xl border border-sky-200 py-2 z-50 animate-in fade-in slide-in-from-top-1 duration-150"
                    >
                      {dropdownData[item.menuKey]?.map((dropItem, idx) => (
                        <Link
                          key={idx}
                          href={dropItem.href}
                          onClick={() => { setOpenDropdown(null); setActiveTab(item.id); }}
                          className="block px-4 py-2.5 text-xs sm:text-sm font-normal text-[#1f1e1c] hover:text-[#0284c7] hover:bg-white transition-colors leading-snug"
                        >
                          {dropItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>
        </div>
      </div>

      {/* 2-COLUMN LIGHT BLUE SLIDING HAMBURGER DRAWER */}
      {hamburgerOpen && (
        <div className="fixed inset-0 z-50 flex">
          {/* Dimmed Background Overlay + Top Right Close X Button */}
          <div className="fixed inset-0 bg-slate-950/60 backdrop-blur-xs" onClick={() => setHamburgerOpen(false)} />
          <button 
            onClick={() => setHamburgerOpen(false)}
            className="absolute top-4 left-[610px] z-50 text-white hover:text-slate-300 p-2 hidden lg:block"
            title="Close Menu"
          >
            <X className="h-6 w-6 stroke-[2.5]" />
          </button>

          {/* 2-Column Light Blue Menu Panel */}
          <div className="relative bg-[#f0f7ff] text-slate-900 w-full max-w-2xl h-full shadow-2xl z-20 animate-in slide-in-from-left duration-200 flex overflow-hidden border-r border-sky-200">
            
            {/* Column 1: Primary Categories (Soft Sky Blue #e0f2fe) */}
            <div className="w-64 bg-[#e0f2fe] border-r border-sky-200 py-6 font-normal text-xs sm:text-sm shrink-0 space-y-1">
              <div className="px-5 pb-4 border-b border-sky-200 flex justify-between items-center lg:hidden">
                <span className="font-extrabold text-[#c74634] text-lg">AXIOVITAL</span>
                <button onClick={() => setHamburgerOpen(false)} className="p-1 text-slate-600">
                  <X className="h-5 w-5" />
                </button>
              </div>

              {[
                { id: "healthcare", label: "Digital Platform Overview" },
                { id: "solutions", label: "Healthcare Solutions" },
                { id: "products", label: "Healthcare Products" },
                { id: "company", label: "Company & Resources" }
              ].map((cat) => {
                const isCatActive = activeDrawerCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onMouseEnter={() => setActiveDrawerCategory(cat.id)}
                    onClick={() => setActiveDrawerCategory(cat.id)}
                    className={`w-full text-left px-5 py-3 flex items-center justify-between transition-colors ${
                      isCatActive 
                        ? "bg-[#0284c7] text-white font-bold shadow-xs" 
                        : "text-slate-700 hover:bg-sky-200/60"
                    }`}
                  >
                    <span>{cat.label}</span>
                    <ChevronRight className={`h-4 w-4 ${isCatActive ? "text-white" : "text-slate-500"}`} />
                  </button>
                );
              })}
            </div>

            {/* Column 2: Sub-categories Panel (Light Blue #f0f7ff) */}
            <div className="flex-1 bg-[#f0f7ff] py-6 px-6 overflow-y-auto space-y-3">
              <h3 className="text-sm font-bold text-slate-900 border-b border-sky-200 pb-3 mb-2">
                {drawerData[activeDrawerCategory]?.title}
              </h3>

              <div className="space-y-1">
                {drawerData[activeDrawerCategory]?.items.map((sub, idx) => (
                  <Link
                    key={idx}
                    href={sub.href}
                    onClick={() => setHamburgerOpen(false)}
                    className="flex items-center justify-between py-2.5 px-3 rounded-md text-xs sm:text-sm text-[#1f1e1c] hover:text-[#0284c7] hover:bg-white transition-colors shadow-2xs"
                  >
                    <span>{sub.label}</span>
                    <ChevronRight className="h-4 w-4 text-slate-400" />
                  </Link>
                ))}
              </div>
            </div>

          </div>
        </div>
      )}

      {/* Search Overlay */}
      {searchOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-slate-950/70 backdrop-blur-xs">
          <div className="bg-white w-full max-w-2xl rounded-xl shadow-2xl border border-slate-200 overflow-hidden">
            <div className="p-4 border-b border-slate-200 flex items-center gap-3 bg-slate-50">
              <Search className="h-5 w-5 text-slate-500 shrink-0" />
              <input 
                type="text" 
                placeholder="Search AxioVital online appointment booking, EHR, prescriptions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
                className="w-full text-slate-900 text-sm font-medium focus:outline-none placeholder:text-slate-400 bg-transparent"
              />
              <button onClick={() => setSearchOpen(false)} className="text-slate-400 hover:text-slate-600 p-1">
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="p-4 text-xs text-slate-500">
              Press ESC or click X to close.
            </div>
          </div>
        </div>
      )}

    </header>
  );
}
