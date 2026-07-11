"use client";

import { Activity, ShieldCheck, Heart, Star } from "lucide-react";

export default function About() {
  const credentials = [
    { title: "HIPAA Compliant", desc: "Data pipelines secured through strict access controls and physical encryption tokens." },
    { title: "SOC 2 Type II", desc: "Security and data handling validated through continuous compliance audits." },
    { title: "FHIR Interoperability", desc: "EHR database connections structured entirely on global HL7 standards." }
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Banner */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full">About AxioVital</span>
          <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight sm:text-5xl">
            A Trusted Healthcare Foundation
          </h1>
          <p className="text-lg text-slate-600">
            We build clinical security infrastructure, database connections, and automation tools to optimize provider pipelines.
          </p>
        </div>

        {/* Credentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {credentials.map((c, i) => (
            <div key={i} className="bg-white border border-slate-200 p-8 rounded-2xl shadow-sm text-center space-y-3">
              <div className="h-12 w-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mx-auto">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">{c.title}</h3>
              <p className="text-slate-650 text-sm leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
