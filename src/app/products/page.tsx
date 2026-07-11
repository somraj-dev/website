"use client";

import { CreditCard, ShieldAlert, Cpu, Heart, Database, Smartphone } from "lucide-react";

export default function Products() {
  const products = [
    { id: "axio-id", title: "AXIO-ID", desc: "Unified digital identity token validating medical logins and credentials.", icon: ShieldAlert },
    { id: "axio-card", title: "AXIO Card", desc: "Smart physical NFC key providing secure patient check-ins.", icon: CreditCard },
    { id: "axioai", title: "AxioAI", desc: "Ambient translation engines drafting clinical chart observations in real-time.", icon: Cpu },
    { id: "axioinsights", title: "AxioInsights", desc: "Health analytics dashboards tracking facility occupancy and diagnostic volumes.", icon: Database },
    { id: "myhealthcare", title: "MyHealthcare App", desc: "Patient companion app allowing portal access and security audits.", icon: Smartphone }
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Banner */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full">Core Product Suite</span>
          <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight sm:text-5xl">
            AxioVital Platform Products
          </h1>
          <p className="text-lg text-slate-600">
            Explore the products that build our interoperable healthcare operating system.
          </p>
        </div>

        {/* Products Matrix */}
        <div className="space-y-8 max-w-4xl mx-auto">
          {products.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div key={idx} id={p.id} className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm flex flex-col md:flex-row gap-6 items-start hover:shadow-md transition-all scroll-mt-20">
                <div className="h-12 w-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                  <Icon className="h-6 w-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-slate-900">{p.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{p.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
