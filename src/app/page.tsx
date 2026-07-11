"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  Shield, Activity, Cpu, Users, ChevronRight, BarChart3, Database, 
  ArrowRight, Check, Zap, CheckCircle2, Lock, Sparkles, Server, Globe
} from "lucide-react";

export default function Home() {
  const [activeTab, setActiveTab] = useState("clinical");
  const [demoIdName, setDemoIdName] = useState("");
  const [demoGenerated, setDemoGenerated] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Hero Section - Matching Oracle Health layout exactly */}
      <section className="relative overflow-hidden text-white pt-20 pb-24 md:pt-28 md:pb-36 hero-gradient">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8 space-y-6">
              <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-300 text-xs font-semibold uppercase tracking-wider">
                AxioVital Cloud Infrastructure
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-white leading-none">
                Reimagine the <br className="hidden sm:inline" />
                <span className="text-blue-400">future of health</span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-200 max-w-3xl leading-relaxed">
                Advancing how health happens by providing secure and reliable cloud solutions that help deliver better healthcare insights and people-centric experiences.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Link href="/contact" className="rounded-full bg-blue-600 px-7 py-3.5 text-sm font-bold text-white shadow-md hover:bg-blue-700 hover:shadow-lg transition-all flex items-center gap-2">
                  Request a Demo <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="/platform" className="rounded-full border border-slate-600 px-7 py-3.5 text-sm font-bold text-slate-200 hover:bg-slate-800/80 transition-all">
                  Explore Platform Capabilities
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Focus Areas (The Three Pillars) - Replicating Oracle's text patterns exactly */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">How AxioVital Can Help</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Driving Connected Health Technology
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Pillar 1: Improve Health Globally */}
            <div className="bg-slate-50 border border-slate-200/80 rounded-3xl p-8 flex flex-col justify-between hover:shadow-md transition-all">
              <div className="space-y-4">
                <div className="h-12 w-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                  <Activity className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Improve health globally</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  With our secure, unified EHR ecosystem, we bring patient and research data together to enable clinicians to take meaningful actions and improve outcomes worldwide.
                </p>
              </div>
              <div className="pt-6">
                <Link href="/platform" className="text-sm font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1">
                  Learn about data outcomes <ChevronRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Pillar 2: Streamline Operations */}
            <div className="bg-slate-50 border border-slate-200/80 rounded-3xl p-8 flex flex-col justify-between hover:shadow-md transition-all">
              <div className="space-y-4">
                <div className="h-12 w-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                  <BarChart3 className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Streamline operations</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  We provide timely, predictive, and actionable health insights through automated revenue cycle management (RCM) workflows to optimize resources and drive efficiencies.
                </p>
              </div>
              <div className="pt-6">
                <Link href="/pricing" className="text-sm font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1">
                  Explore operational tools <ChevronRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Pillar 3: Unleash Innovation */}
            <div className="bg-slate-50 border border-slate-200/80 rounded-3xl p-8 flex flex-col justify-between hover:shadow-md transition-all">
              <div className="space-y-4">
                <div className="h-12 w-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                  <Database className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Unleash innovation</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Accelerate innovation and build on an open healthcare platform with intelligent API integrations designed for human-centric healthcare experiences.
                </p>
              </div>
              <div className="pt-6">
                <Link href="/documentation" className="text-sm font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1">
                  Explore integrations <ChevronRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clinical AI Agent Section - Dedicated Ambient Voice Showcase */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">Clinical AI Agent</span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Restore the joy <br /> of practicing medicine
            </h2>
            <p className="text-slate-650 text-base leading-relaxed">
              Our voice-first Clinical AI Agent reduces administrative burdens by transcribing provider-patient consultations into structured EHR SOAP notes automatically, allowing doctors to focus on the patient instead of a screen.
            </p>
            <div className="flex gap-4 pt-2">
              <Link href="/ai-features" className="rounded-full bg-slate-900 px-5 py-2.5 text-sm font-bold text-white hover:bg-slate-800 transition-all">
                See Clinical AI features
              </Link>
            </div>
          </div>
          
          <div className="lg:col-span-6">
            <div className="bg-slate-900 text-slate-350 p-6 rounded-3xl font-mono text-xs space-y-4 shadow-xl">
              <div className="flex justify-between items-center text-slate-500 text-[10px]">
                <span>AMBIENT RECORDER ACTIVE</span>
                <span className="h-2 w-2 rounded-full bg-red-500 animate-pulse"></span>
              </div>
              <div className="text-slate-200">
                &quot;Patient has a mild cough starting two days ago. Recommending hydration and follow-up as needed.&quot;
              </div>
              <div className="border-t border-slate-800 pt-3 space-y-1">
                <span className="text-blue-400 font-bold">AUTO-GENERATED EHR NOTE:</span>
                <div className="text-slate-400 text-[10px]">
                  S: Coughing (2 days duration)<br />
                  A: Upper respiratory congestion<br />
                  P: Hydration, scheduled checkup if fever develops
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Ecosystem Sandbox Tab Layout */}
      <section className="py-24 bg-slate-50 border-t border-slate-200/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                One unified platform
              </h2>
              <p className="text-slate-655 text-sm sm:text-base leading-relaxed">
                Connect clinical applications, financial operations, and patient engagement portals in a single secure environment.
              </p>
              
              <div className="flex flex-col gap-2">
                {[
                  { id: "clinical", label: "Clinical Applications", desc: "Core AxioProvider EHR tools, automated charts, and check-in cards." },
                  { id: "financial", label: "Financial Operations", desc: "Smart RCM claim verification and coding workflows." },
                  { id: "population", label: "Population Health & Analytics", desc: "AxioInsights ward demand and occupancy dashboards." }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`text-left p-4 rounded-2xl border transition-all ${
                      activeTab === tab.id 
                        ? "border-blue-500 bg-blue-50/50 shadow-sm" 
                        : "border-slate-200/80 bg-white hover:border-slate-355"
                    }`}
                  >
                    <div className="font-bold text-slate-900 text-sm">{tab.label}</div>
                    <div className="text-xs text-slate-500 mt-1">{tab.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 min-h-[350px] flex flex-col justify-between shadow-sm">
                {activeTab === "clinical" && (
                  <div className="space-y-6">
                    <div className="flex items-center gap-2 text-blue-600 text-xs font-bold uppercase tracking-wider">
                      <Cpu className="h-4 w-4" /> Clinical Suite
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center gap-4 bg-slate-50 p-3.5 rounded-2xl border border-slate-100">
                        <div className="h-8 w-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-xs">1</div>
                        <div>
                          <h4 className="font-semibold text-slate-800 text-sm">AxioProvider EHR</h4>
                          <p className="text-xs text-slate-500">Voice-integrated patient charts.</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 bg-slate-50 p-3.5 rounded-2xl border border-slate-100">
                        <div className="h-8 w-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-xs">2</div>
                        <div>
                          <h4 className="font-semibold text-slate-800 text-sm">AXIO Card Check-in</h4>
                          <p className="text-xs text-slate-500">NFC patient authentication cards.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "financial" && (
                  <div className="space-y-6">
                    <div className="flex items-center gap-2 text-blue-600 text-xs font-bold uppercase tracking-wider">
                      <BarChart3 className="h-4 w-4" /> Operations Suite
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center gap-4 bg-slate-50 p-3.5 rounded-2xl border border-slate-100">
                        <div className="h-8 w-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-xs">A</div>
                        <div>
                          <h4 className="font-semibold text-slate-800 text-sm">Revenue Cycle Management (RCM)</h4>
                          <p className="text-xs text-slate-500">Automated pre-authorizations and coding validations.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "population" && (
                  <div className="space-y-6">
                    <div className="flex items-center gap-2 text-blue-600 text-xs font-bold uppercase tracking-wider">
                      <Globe className="h-4 w-4" /> Global Analytics
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center gap-4 bg-slate-50 p-3.5 rounded-2xl border border-slate-100">
                        <div className="h-8 w-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-xs">I</div>
                        <div>
                          <h4 className="font-semibold text-slate-800 text-sm">AxioInsights Dashboards</h4>
                          <p className="text-xs text-slate-500">Facility occupancy, admission levels, and clinical metrics.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise Security Section */}
      <section className="bg-slate-900 text-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Enterprise-Grade Security & Compliance</h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
            AxioVital matches the scale of global health networks, complying with HIPAA guidelines, GDPR privacy laws, and SOC 2 audits.
          </p>
          <div className="flex justify-center gap-4 pt-4">
            <Link href="/contact" className="rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-700 transition-all">
              Request Demo
            </Link>
            <Link href="/documentation" className="rounded-full border border-slate-700 px-6 py-3 text-sm font-semibold text-slate-350 hover:bg-slate-800 transition-all">
              API Documentation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
