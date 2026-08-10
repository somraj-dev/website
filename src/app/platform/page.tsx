"use client";

import Link from "next/link";
import { Cpu, Shield, Database } from "lucide-react";

export default function Platform() {
  const layers = [
    {
      title: "Interoperability Layer (AxioConnect)",
      description: "Direct query orchestration linking legacy and modern FHIR APIs.",
      icon: Database
    },
    {
      title: "Security Core (AXIO-ID Tokenizer)",
      description: "Hardware credential validation and zero-knowledge encryption protocols.",
      icon: Shield
    },
    {
      title: "Intelligence Engine (AxioAI)",
      description: "Ambient audio analysis, diagnostic coding support, and optimization models.",
      icon: Cpu
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Banner */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full">Architecture Specs</span>
          <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight sm:text-5xl">
            The Healthcare Operating System
          </h1>
          <p className="text-lg text-slate-600">
            AxioVital offers enterprise-grade database replication, fast FHIR integrations, and decentralized security structures.
          </p>
        </div>

        {/* Stack Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {layers.map((layer, index) => {
            const Icon = layer.icon;
            return (
              <div key={index} className="bg-white border border-slate-200 p-8 rounded-2xl shadow-sm space-y-4">
                <div className="h-12 w-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">{layer.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{layer.description}</p>
              </div>
            );
          })}
        </div>

        {/* Bottom Trust CTA */}
        <div className="bg-slate-900 rounded-3xl p-8 text-center text-white space-y-4">
          <h3 className="text-xl font-bold">Looking for specific integration specs?</h3>
          <p className="text-slate-400 text-sm max-w-lg mx-auto">
            Read details about authentication tokens, database adapters, and security parameters.
          </p>
          <div className="pt-2">
            <Link href="/documentation" className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 hover:bg-slate-50 transition-all">
              Go to API Docs
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
