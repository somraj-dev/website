"use client";

import Link from "next/link";
import { UserCheck, Award, MessageSquare, Clipboard, Star } from "lucide-react";

export default function Providers() {
  const values = [
    {
      title: "Optimized Charting",
      desc: "Save up to 3 hours a day with AxioAI's ambient dictation tools.",
      icon: Clipboard
    },
    {
      title: "Secure Verification",
      desc: "Authenticate histories immediately using AXIO-ID credentials.",
      icon: UserCheck
    },
    {
      title: "Interoperable Referrals",
      desc: "Send data between clinics, hospitals, and pharmacies via FHIR pipelines.",
      icon: MessageSquare
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Banner */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full">For Clinicians & Doctors</span>
          <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight sm:text-5xl">
            AxioProvider Solution Suite
          </h1>
          <p className="text-lg text-slate-600">
            Automate charting pipelines so you can concentrate fully on patient care.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((v, i) => {
            const Icon = v.icon;
            return (
              <div key={i} className="bg-white border border-slate-200 p-8 rounded-2xl shadow-sm space-y-4">
                <div className="h-12 w-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">{v.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{v.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Interactive Feature Demo */}
        <div className="bg-white border border-slate-200 rounded-3xl p-8 max-w-4xl mx-auto shadow-sm grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-slate-900">Seamless Ambient Transcription</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              AxioProvider listens dynamically to clinician-patient conversations and automatically drafts formatted SOAP observations ready for verification.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" /> HIPPA Compliant & Encrypted
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" /> Fully compatible with Epic & Cerner
              </div>
            </div>
          </div>
          <div className="bg-slate-900 text-slate-350 p-6 rounded-2xl font-mono text-xs space-y-4 shadow-inner">
            <div className="flex justify-between items-center text-slate-500 text-[10px]">
              <span>AXIOPROVIDER LIVE RECORDER</span>
              <span className="h-2 w-2 rounded-full bg-red-500 animate-pulse"></span>
            </div>
            <div className="text-slate-200">
              &quot;Patient reports a dull headache starting three days ago. Recommending rest and follow-up in one week.&quot;
            </div>
            <div className="border-t border-slate-800 pt-3 space-y-1">
              <span className="text-blue-400 font-bold">AUTO-GENERATED SOAP NOTE:</span>
              <div className="text-slate-400 text-[10px]">
                S: Cephalgia (3 days progression)<br />
                A: Tension headache, unspecified<br />
                P: Scheduled checkup, monitor symptoms
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
