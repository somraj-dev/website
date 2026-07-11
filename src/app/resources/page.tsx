"use client";

import { useState } from "react";
import { BookOpen, Newspaper, FileText, Video, Search } from "lucide-react";

export default function Resources() {
  const [filter, setFilter] = useState("all");

  const materials = [
    { title: "Interoperability in Modern Hospitals", category: "whitepapers", type: "PDF Whitepaper" },
    { title: "AxioAI Ambient Charting Demo", category: "videos", type: "Product Walkthrough Video" },
    { title: "Securing Patient Data Compliance", category: "blog", type: "Tech Blog Post" },
    { title: "EHR FHIR Connection Playbook", category: "whitepapers", type: "Reference Guide" }
  ];

  const filtered = filter === "all" ? materials : materials.filter(m => m.category === filter);

  return (
    <div className="bg-slate-50 min-h-screen py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight sm:text-5xl">
            Resource Library
          </h1>
          <p className="text-lg text-slate-600">
            Read technical whitepapers, watch product walkthrough videos, and follow our regulatory news updates.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2">
          {["all", "whitepapers", "videos", "blog"].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`rounded-full px-5 py-2 text-sm font-semibold capitalize transition-all border ${
                filter === cat 
                  ? "bg-blue-600 text-white border-blue-600 shadow-md" 
                  : "bg-white text-slate-600 border-slate-200 hover:border-slate-300"
              }`}
            >
              {cat === "all" ? "All Content" : cat}
            </button>
          ))}
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {filtered.map((item, idx) => (
            <div key={idx} className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm space-y-3">
              <div className="text-xs font-semibold text-blue-600">{item.type}</div>
              <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
