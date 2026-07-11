"use client";

import { CreditCard, Smartphone, ShieldAlert, HeartHandshake } from "lucide-react";

export default function Patients() {
  const patientSolutions = [
    {
      title: "AXIO Card Credentials",
      desc: "An encrypted patient card that holds check-in information without revealing sensitive diagnostics.",
      icon: CreditCard
    },
    {
      title: "MyHealthcare Companion App",
      desc: "Schedule doctors, review clinical summaries, and share histories securely on iOS or Android.",
      icon: Smartphone
    },
    {
      title: "Access Controls & Logs",
      desc: "Manage who sees your diagnostic reports. Get notified when records are requested or updated.",
      icon: ShieldAlert
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Banner */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full">For Patients & Families</span>
          <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight sm:text-5xl">
            MyHealthcare Patient Portal
          </h1>
          <p className="text-lg text-slate-600">
            Control your medical profile, verify diagnostics access, and coordinate care pipelines.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {patientSolutions.map((sol, index) => {
            const Icon = sol.icon;
            return (
              <div key={index} className="bg-white border border-slate-200 p-8 rounded-2xl shadow-sm space-y-4 hover:shadow-md transition-all">
                <div className="h-12 w-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">{sol.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{sol.desc}</p>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
