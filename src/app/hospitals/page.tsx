"use client";

import { useState } from "react";
import { Server, Activity, ShieldCheck, PieChart, Users, ChevronRight } from "lucide-react";

export default function Hospitals() {
  const [occupancy, setOccupancy] = useState(82);

  const stats = [
    { title: "Real-time sync latency", value: "<150ms" },
    { title: "Average ER wait reduction", value: "24%" },
    { title: "Security protocol strength", value: "AES-256" }
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Banner */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full">For Health Networks</span>
          <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight sm:text-5xl">
            AxioHospital Platform
          </h1>
          <p className="text-lg text-slate-600">
            Synchronize ER throughput, track available bed capacity, and coordinate multi-facility pipelines instantly.
          </p>
        </div>

        {/* Dashboard mock simulator */}
        <div className="bg-white border border-slate-200 rounded-3xl p-8 max-w-4xl mx-auto shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 border-b border-slate-100 pb-4">
            <div>
              <h3 className="font-bold text-slate-900 text-lg">Central Facility Status</h3>
              <p className="text-xs text-slate-500">Live monitoring data simulator.</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-500"></span>
              <span className="text-xs font-semibold text-slate-600">All Node Systems Connected</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-slate-50 border border-slate-100 p-5 rounded-2xl space-y-2">
              <div className="text-xs font-semibold text-slate-400 uppercase">Emergency Room Load</div>
              <div className="text-2xl font-bold text-slate-800">Normal</div>
            </div>
            
            <div className="bg-slate-50 border border-slate-100 p-5 rounded-2xl space-y-2">
              <div className="text-xs font-semibold text-slate-400 uppercase">Interactive Bed Occupancy</div>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-blue-600">{occupancy}%</span>
                <div className="flex gap-1">
                  <button onClick={() => setOccupancy(Math.max(50, occupancy - 5))} className="px-2 py-0.5 border bg-white rounded-md text-xs font-bold">-</button>
                  <button onClick={() => setOccupancy(Math.min(100, occupancy + 5))} className="px-2 py-0.5 border bg-white rounded-md text-xs font-bold">+</button>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 border border-slate-100 p-5 rounded-2xl space-y-2">
              <div className="text-xs font-semibold text-slate-400 uppercase">Active Diagnostics Pipelines</div>
              <div className="text-2xl font-bold text-slate-800">14 Active</div>
            </div>
          </div>
        </div>

        {/* Core Value Props */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((s, idx) => (
            <div key={idx} className="bg-white border border-slate-200 p-8 rounded-2xl shadow-sm text-center space-y-2">
              <div className="text-3xl font-extrabold text-blue-600">{s.value}</div>
              <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">{s.title}</div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
