"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  ChevronRight, Play, Activity, Shield, CreditCard, 
  Sparkles, BarChart3, Database, Smartphone, X, Calendar, UserCheck, 
  FileText, Clock, Building2, Stethoscope, Microscope, CheckCircle2, Lock,
  ShieldCheck, Award, Server, Key, Eye, HardDrive
} from "lucide-react";

export default function Home() {
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [securityTab, setSecurityTab] = useState("hipaa");

  return (
    <div className="flex flex-col min-h-screen bg-white font-sans text-[#1f1e1c] selection:bg-[#c74634] selection:text-white">
      
      {/* BREADCRUMB BAR */}
      <div className="bg-[#eef7fb] py-2 px-4 sm:px-8 text-xs text-[#595652] font-medium relative z-10">
        <div className="mx-auto max-w-7xl flex items-center gap-1.5">
          <Link href="/" className="hover:underline">AxioVital India</Link>
          <ChevronRight className="h-3 w-3 text-slate-400" />
          <span className="text-slate-800">Integrated Digital Healthcare Platform</span>
        </div>
      </div>

      {/* HERO SECTION */}
      <section className="bg-hero-canvas bg-medical-dots pt-4 pb-8 sm:pt-6 sm:pb-10 relative overflow-hidden">
        
        {/* Subtle Decorative Radial Blur Overlay */}
        <div className="absolute top-2 right-10 w-96 h-96 bg-sky-300/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-red-400/5 rounded-full blur-3xl pointer-events-none" />

        <div className="mx-auto max-w-7xl px-4 sm:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Original AxioVital Copy */}
            <div className="lg:col-span-7 space-y-4">
              <span className="inline-block text-xs font-bold uppercase tracking-wider text-sky-800 bg-sky-100/90 px-3.5 py-1 rounded-full border border-sky-200 shadow-2xs">
                Connected Healthcare Ecosystem
              </span>

              <h1 className="font-oracle-serif italic text-4xl sm:text-5xl lg:text-6xl font-normal text-[#1f1e1c] leading-[1.12] tracking-tight">
                Transforming Healthcare Through Intelligent Digital Care
              </h1>

              <p className="text-sm sm:text-base text-[#383431] leading-relaxed max-w-xl font-normal">
                AxioVital is an integrated healthcare platform that connects patients, healthcare providers, hospitals, and clinics through a secure digital ecosystem. From online appointment booking and electronic health records to digital prescriptions and streamlined hospital operations, AxioVital helps deliver faster, more efficient, and patient-centered healthcare experiences.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-1">
                <button 
                  onClick={() => setDemoModalOpen(true)}
                  className="oracle-btn-dark px-7 py-3.5 text-sm font-bold rounded-md shadow-sm inline-flex items-center gap-2"
                >
                  Book an Appointment
                </button>
                <Link 
                  href="/platform" 
                  className="border border-slate-300 bg-white/90 hover:bg-white text-slate-800 px-7 py-3.5 text-sm font-bold rounded-md transition-all shadow-2xs"
                >
                  Explore Our Platform
                </Link>
              </div>
            </div>

            {/* Right Column: Healthcare Video Visual Card */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-200/80 bg-[#0d4253] max-w-lg mx-auto">
                <div className="relative aspect-4/3 w-full bg-[#0d4253] overflow-hidden group cursor-pointer" onClick={() => setDemoModalOpen(true)}>
                  <img 
                    src="/oracle_hero_doctor.jpg" 
                    alt="Doctor consulting patient digitally" 
                    className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d4253]/90 via-[#0d4253]/30 to-transparent p-6 flex flex-col justify-between">
                    <div className="text-xs font-bold text-white tracking-widest uppercase">
                      AXIOVITAL CARE PLATFORM
                    </div>

                    <div className="space-y-3">
                      <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white leading-tight">
                        Connecting Patients, Doctors, & Hospitals Digitally
                      </h3>
                    </div>
                  </div>

                  <div className="absolute bottom-6 right-6">
                    <div className="h-12 w-12 rounded-full border-2 border-white bg-slate-900/60 text-white flex items-center justify-center shadow-lg group-hover:bg-[#c74634] transition-colors">
                      <Play className="h-5 w-5 fill-current ml-0.5" />
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-white border-t border-slate-100">
                  <button 
                    onClick={() => setDemoModalOpen(true)}
                    className="text-xs sm:text-sm font-bold text-[#1f1e1c] hover:text-[#c74634] transition-colors flex items-center gap-1 text-left"
                  >
                    Watch Platform Demo: See how AxioVital simplifies care delivery (1:45) <ChevronRight className="h-4 w-4 text-slate-500 shrink-0" />
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 2: HOW AXIOVITAL SIMPLIFIES HEALTHCARE */}
      <section className="bg-transition-hero-to-body py-8 sm:py-12 relative overflow-hidden">
        
        {/* Soft Background Wave Overlay */}
        <div className="absolute top-0 inset-x-0 h-20 bg-gradient-to-b from-[#eef7fb]/60 to-transparent pointer-events-none" />

        <div className="mx-auto max-w-7xl px-4 sm:px-8 space-y-8 relative z-10">
          <div className="max-w-3xl">
            <span className="text-xs font-bold text-sky-800 uppercase tracking-wider block mb-1">Empowering the Entire Health Spectrum</span>
            <h2 className="font-oracle-serif italic text-3xl sm:text-4xl font-normal text-[#1f1e1c] leading-tight">
              How AxioVital Simplifies Healthcare
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2 leading-relaxed">
              By connecting every touchpoint in the clinical journey, AxioVital eliminates paperwork delays and streamlines care delivery across healthcare providers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* For Patients */}
            <div className="bg-white/90 backdrop-blur-xs border border-slate-200/80 rounded-2xl p-7 hover:shadow-xl transition-all flex flex-col justify-between space-y-5">
              <div className="space-y-3">
                <div className="h-10 w-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center font-bold">
                  <UserCheck className="h-5 w-5" />
                </div>
                <h3 className="text-2xl font-bold text-[#1f1e1c]">For Patients</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Book appointment slots before visiting, skip long registration queues, access digital prescriptions, view test reports online, and manage your complete medical history securely in one place.
                </p>
              </div>
              <div className="pt-3 border-t border-slate-100">
                <Link href="/patients" className="text-sm font-bold text-[#1f1e1c] hover:text-[#c74634] flex items-center gap-1">
                  Explore Patient Capabilities <ChevronRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* For Doctors */}
            <div className="bg-white/90 backdrop-blur-xs border border-slate-200/80 rounded-2xl p-7 hover:shadow-xl transition-all flex flex-col justify-between space-y-5">
              <div className="space-y-3">
                <div className="h-10 w-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
                  <Stethoscope className="h-5 w-5" />
                </div>
                <h3 className="text-2xl font-bold text-[#1f1e1c]">For Doctors</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Manage patient consultation schedules efficiently, inspect complete medical history instantly, issue digital prescriptions, schedule follow-up visits, and eliminate administrative paperwork.
                </p>
              </div>
              <div className="pt-3 border-t border-slate-100">
                <Link href="/providers" className="text-sm font-bold text-[#1f1e1c] hover:text-[#c74634] flex items-center gap-1">
                  Explore Doctor Workflows <ChevronRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* For Hospitals & Clinics */}
            <div className="bg-white/90 backdrop-blur-xs border border-slate-200/80 rounded-2xl p-7 hover:shadow-xl transition-all flex flex-col justify-between space-y-5">
              <div className="space-y-3">
                <div className="h-10 w-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
                  <Building2 className="h-5 w-5" />
                </div>
                <h3 className="text-2xl font-bold text-[#1f1e1c]">For Hospitals & Clinics</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Digitize patient registration, maintain electronic health records (EHR), centralize patient information, reduce waiting times, and improve inter-departmental communication.
                </p>
              </div>
              <div className="pt-3 border-t border-slate-100">
                <Link href="/hospitals" className="text-sm font-bold text-[#1f1e1c] hover:text-[#c74634] flex items-center gap-1">
                  Explore Hospital Ecosystem <ChevronRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: CORE CAPABILITIES MATRIX */}
      <section className="bg-[#f8fafc] bg-medical-dots py-8 sm:py-12 relative overflow-hidden">
        
        {/* Subtle Ambient Radial Overlay */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-sky-200/10 rounded-full blur-3xl pointer-events-none" />

        <div className="mx-auto max-w-7xl px-4 sm:px-8 space-y-8 relative z-10">
          <div>
            <span className="text-xs font-bold text-sky-800 uppercase tracking-wider block mb-1">Integrated Platform Features</span>
            <h2 className="font-oracle-serif italic text-3xl sm:text-4xl font-normal text-[#1f1e1c]">
              Comprehensive Care Capabilities
            </h2>
            <p className="text-slate-600 text-sm mt-1 max-w-2xl">
              Practical digital tools designed to solve real healthcare challenges for patients, clinicians, and facility managers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { title: "Online Appointment Booking", desc: "Reserve preferred doctor consultation slots from home.", icon: Calendar },
              { title: "Queue-Free Hospital Visits", desc: "Skip reception lines with instant NFC kiosk check-in.", icon: Clock },
              { title: "Electronic Health Records", desc: "Access complete medical history anytime across facilities.", icon: Database },
              { title: "Digital Prescriptions", desc: "Receive e-Prescriptions directly on your phone.", icon: FileText },
              { title: "Laboratory Integration", desc: "Automatic lab report delivery directly to your portal.", icon: Microscope },
              { title: "Doctor Management", desc: "Streamline physician appointment schedules and charts.", icon: Stethoscope },
              { title: "Multi-Hospital Connectivity", desc: "Unified medical record matching across healthcare networks.", icon: Activity },
              { title: "Secure Cloud Storage", desc: "HIPAA-compliant FIPS 140-2 encrypted health records vault.", icon: Lock },
            ].map((cap, idx) => {
              const IconComp = cap.icon;
              return (
                <div key={idx} className="bg-white/95 border border-slate-200/80 p-5 rounded-xl space-y-2 hover:shadow-md transition-all">
                  <div className="h-9 w-9 rounded-lg bg-sky-50 text-sky-700 flex items-center justify-center font-bold">
                    <IconComp className="h-4 w-4" />
                  </div>
                  <h3 className="text-base font-bold text-[#1f1e1c]">{cap.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{cap.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 4: AXIOVITAL PRODUCT SUITE */}
      <section className="bg-transition-white-offwhite py-8 sm:py-12 relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-8 space-y-8 relative z-10">
          <div>
            <span className="text-xs font-bold text-sky-800 uppercase tracking-wider block mb-1">Hardware & AI Innovations</span>
            <h2 className="font-oracle-serif italic text-3xl sm:text-4xl font-normal text-[#1f1e1c]">
              AxioVital Integrated Product Suite
            </h2>
            <p className="text-slate-600 text-sm mt-1">
              Hardware credentials, AI assistants, and enterprise API gateways built specifically for modern healthcare.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "AXIO-ID Token", tag: "Digital Identity", desc: "Unified digital identity token for secure single sign-on across health networks.", icon: Shield },
              { title: "AXIO Smart Card", tag: "NFC Credential", desc: "Hardware contactless smart card for instant 1-tap clinic kiosk check-in.", icon: CreditCard },
              { title: "AxioAI Assistant", tag: "Doctor AI Engine", desc: "Doctor documentation engine assisting physicians with consultation notes.", icon: Sparkles },
              { title: "AxioInsights Analytics", tag: "Hospital Operations", desc: "Predictive ICU bed occupancy heatmaps and emergency ward flow analytics.", icon: BarChart3 },
              { title: "AxioConnect Engine", tag: "EMR Gateway", desc: "High-speed integration engine linking laboratories, pharmacies, and EHR databases.", icon: Database },
              { title: "MyHealthcare App", tag: "Patient Portal", desc: "Patient care companion app for appointment booking and report viewing.", icon: Smartphone },
            ].map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div key={idx} className="bg-white border border-slate-200/80 p-6 rounded-2xl space-y-3 hover:shadow-lg transition-all">
                  <div className="flex justify-between items-center">
                    <IconComp className="h-6 w-6 text-[#c74634]" />
                    <span className="text-[11px] font-bold text-slate-600 bg-slate-100 px-2.5 py-0.5 rounded border border-slate-200">{item.tag}</span>
                  </div>
                  <h3 className="text-lg font-bold text-[#1f1e1c]">{item.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 5: ENTERPRISE SECURITY & COMPLIANCE (100% MATCH OF SECOND SCREENSHOT) */}
      <section className="py-12 sm:py-16 bg-[#f8fafc] bg-medical-dots relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-8 space-y-8 relative z-10">
          
          {/* Header */}
          <div className="max-w-3xl space-y-3">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-700 bg-sky-50 border border-sky-200 px-3.5 py-1 rounded-full shadow-2xs">
              <ShieldCheck className="h-4 w-4 text-sky-600" />
              ENTERPRISE HEALTHCARE VAULT
            </span>
            <h2 className="font-oracle-serif italic text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1f1e1c]">
              Enterprise Security & Compliance
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              AxioVital protects patient data with industry-leading security, continuous compliance monitoring, and enterprise-grade infrastructure built for healthcare's highest standards.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Navigation Cards Column */}
            <div className="lg:col-span-5 space-y-3.5">
              {[
                { 
                  id: "hipaa", 
                  label: "HIPAA Security Rule", 
                  desc: "256-bit AES encryption & BAAs.",
                  icon: Lock,
                  iconBg: "bg-sky-50 text-sky-600"
                },
                { 
                  id: "gdpr", 
                  label: "GDPR Compliance", 
                  desc: "Patient data sovereignty & consent.",
                  icon: ShieldCheck,
                  iconBg: "bg-emerald-50 text-emerald-600"
                },
                { 
                  id: "soc2", 
                  label: "SOC 2 Type II", 
                  desc: "Annual independent security audits.",
                  icon: FileText,
                  iconBg: "bg-[#f0eefe] text-purple-600"
                },
                { 
                  id: "zerotrust", 
                  label: "Zero-Trust Engine", 
                  desc: "Granular role-based access control.",
                  icon: UserCheck,
                  iconBg: "bg-amber-50 text-amber-600"
                }
              ].map((sec) => {
                const IconComponent = sec.icon;
                const isSelected = securityTab === sec.id;
                return (
                  <button
                    key={sec.id}
                    onClick={() => setSecurityTab(sec.id)}
                    className={`w-full text-left p-4 sm:p-5 rounded-2xl transition-all flex items-center justify-between border ${
                      isSelected
                        ? "bg-white border-2 border-sky-500 shadow-md ring-4 ring-sky-500/10"
                        : "bg-white border-slate-200/90 hover:border-slate-300 shadow-2xs"
                    }`}
                  >
                    <div className="flex items-center gap-3.5">
                      <div className={`h-11 w-11 rounded-xl ${sec.iconBg} flex items-center justify-center shrink-0`}>
                        <IconComponent className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-[#1f1e1c]">{sec.label}</div>
                        <div className="text-xs text-slate-500 mt-0.5">{sec.desc}</div>
                      </div>
                    </div>
                    <ChevronRight className={`h-4 w-4 ${isSelected ? "text-sky-600 font-bold" : "text-slate-400"}`} />
                  </button>
                );
              })}
            </div>

            {/* Right Details Panel (Soft Light Blue Background & 3D Shield Visual) */}
            <div className="lg:col-span-7 bg-[#f0f7ff]/90 border border-sky-200/80 rounded-3xl p-6 sm:p-9 space-y-8 relative overflow-hidden shadow-xs">
              
              {/* Top Details Box */}
              <div className="flex flex-col sm:flex-row items-start justify-between gap-6 relative z-10">
                <div className="space-y-4 max-w-lg">
                  {securityTab === "hipaa" && (
                    <>
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-xl bg-sky-500/10 text-sky-600 flex items-center justify-center">
                          <ShieldCheck className="h-6 w-6" />
                        </div>
                        <h3 className="font-bold text-xl text-[#1f1e1c]">HIPAA Physical & Technical Safeguards</h3>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        All Protected Health Information (PHI) is encrypted at rest using FIPS 140-2 validated AES-256 keys, and in transit via TLS 1.3. Strict audit logs track all record accesses.
                      </p>
                    </>
                  )}
                  {securityTab === "gdpr" && (
                    <>
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center">
                          <Lock className="h-6 w-6" />
                        </div>
                        <h3 className="font-bold text-xl text-[#1f1e1c]">EU GDPR Data Privacy & Rights</h3>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        AxioVital enforces full patient consent governance, right-to-be-forgotten data purging APIs, and regional data residency constraints within local servers.
                      </p>
                    </>
                  )}
                  {securityTab === "soc2" && (
                    <>
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-xl bg-purple-500/10 text-purple-600 flex items-center justify-center">
                          <Award className="h-6 w-6" />
                        </div>
                        <h3 className="font-bold text-xl text-[#1f1e1c]">SOC 2 Type II Certified Data Centers</h3>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        Independently audited annually to verify operational effectiveness, continuous intrusion detection monitoring, and disaster recovery redundancy.
                      </p>
                    </>
                  )}
                  {securityTab === "zerotrust" && (
                    <>
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center">
                          <Server className="h-6 w-6" />
                        </div>
                        <h3 className="font-bold text-xl text-[#1f1e1c]">Zero-Trust Network Architecture</h3>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        No implicit trust granted to any user or system. Micro-segmentation and continuous biometric identity verification ensure absolute data protection.
                      </p>
                    </>
                  )}
                </div>

                {/* 3D Security Shield Graphic */}
                <div className="hidden sm:flex shrink-0 relative">
                  <div className="h-32 w-32 rounded-3xl bg-gradient-to-tr from-sky-400 to-indigo-500 p-0.5 shadow-xl rotate-3">
                    <div className="h-full w-full bg-gradient-to-b from-sky-100 to-indigo-50 rounded-[22px] flex items-center justify-center">
                      <Shield className="h-16 w-16 text-sky-600 stroke-[1.5] drop-shadow-md" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom 4 Feature Cards (Screenshot 2) */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-sky-200/70 relative z-10">
                <div className="space-y-1">
                  <div className="h-8 w-8 rounded-lg bg-sky-100/80 text-sky-700 flex items-center justify-center">
                    <Key className="h-4 w-4" />
                  </div>
                  <div className="text-xs font-bold text-[#1f1e1c] pt-1">Data Encryption</div>
                  <div className="text-[11px] text-slate-500 leading-tight">AES-256 encryption at rest and in transit</div>
                </div>

                <div className="space-y-1">
                  <div className="h-8 w-8 rounded-lg bg-emerald-100/80 text-emerald-700 flex items-center justify-center">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                  <div className="text-xs font-bold text-[#1f1e1c] pt-1">Access Control</div>
                  <div className="text-[11px] text-slate-500 leading-tight">Role-based access with least-privilege principle</div>
                </div>

                <div className="space-y-1">
                  <div className="h-8 w-8 rounded-lg bg-purple-100/80 text-purple-700 flex items-center justify-center">
                    <Eye className="h-4 w-4" />
                  </div>
                  <div className="text-xs font-bold text-[#1f1e1c] pt-1">Audit Logging</div>
                  <div className="text-[11px] text-slate-500 leading-tight">Comprehensive logs for all system activities</div>
                </div>

                <div className="space-y-1">
                  <div className="h-8 w-8 rounded-lg bg-amber-100/80 text-amber-700 flex items-center justify-center">
                    <HardDrive className="h-4 w-4" />
                  </div>
                  <div className="text-xs font-bold text-[#1f1e1c] pt-1">Secure Infra</div>
                  <div className="text-[11px] text-slate-500 leading-tight">HIPAA-aligned cloud with 24/7 monitoring</div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* SECTION 6: FAQ ACCORDION */}
      <section className="bg-transition-offwhite-white py-8 sm:py-12 relative overflow-hidden">
        <div className="mx-auto max-w-4xl px-4 sm:px-8 space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold text-sky-800 uppercase tracking-wider block">Enterprise Knowledge Base</span>
            <h2 className="font-oracle-serif italic text-3xl sm:text-4xl font-normal text-[#1f1e1c]">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-3">
            {[
              { q: "How does AxioVital integrate with existing hospital EMR systems?", a: "AxioConnect features native HL7 v2 and FHIR R4 adaptors that link directly with existing hospital software without interrupting active operations." },
              { q: "Can patients book appointment slots online before visiting?", a: "Yes. Patients can search for doctors, view available slots, and reserve appointment times online via the MyHealthcare mobile app or web portal." },
              { q: "How does the AXIO Card NFC kiosk check-in work?", a: "Patients simply tap their hardware AXIO Card at hospital reception kiosks to confirm check-in, verify eligibility, and load offline emergency medical tags." },
              { q: "Is patient medical data stored securely?", a: "All medical records are encrypted using AES-256 keys at rest and TLS 1.3 in transit, fully complying with HIPAA and GDPR regulations." }
            ].map((faq, fidx) => (
              <div key={fidx} className="bg-white border border-slate-200/80 rounded-xl p-5 shadow-2xs space-y-1.5">
                <h3 className="font-bold text-base text-[#1f1e1c]">{faq.q}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DEMO MODAL */}
      {demoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs">
          <div className="bg-white rounded-2xl p-6 sm:p-8 max-w-md w-full shadow-2xl border border-slate-200 relative space-y-6">
            <button onClick={() => setDemoModalOpen(false)} className="absolute top-6 right-6 text-slate-400 hover:text-slate-600 p-1">
              <X className="h-5 w-5" />
            </button>
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-[#1f1e1c]">Book Appointment / Demo</h3>
              <p className="text-xs text-slate-500">Connect with an AxioVital digital healthcare specialist.</p>
            </div>
            <form onSubmit={(e) => { e.preventDefault(); alert("Thank you! An AxioVital healthcare specialist will contact you shortly."); setDemoModalOpen(false); }} className="space-y-4">
              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">Full Name</label>
                <input required type="text" placeholder="Dr. Jane Doe" className="w-full text-sm p-3 rounded-lg border border-slate-300 focus:outline-none focus:border-slate-900" />
              </div>
              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">Work Email / Phone</label>
                <input required type="email" placeholder="jane@hospital.org" className="w-full text-sm p-3 rounded-lg border border-slate-300 focus:outline-none focus:border-slate-900" />
              </div>
              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">Account Type</label>
                <select className="w-full text-sm p-3 rounded-lg border border-slate-300 focus:outline-none focus:border-slate-900 bg-white">
                  <option>Patient</option>
                  <option>Doctor / Physician</option>
                  <option>Hospital Administrator</option>
                  <option>Clinic Owner</option>
                  <option>Diagnostic Laboratory</option>
                </select>
              </div>
              <button type="submit" className="w-full oracle-btn-dark py-3.5 text-sm font-bold rounded-lg">
                Submit Request
              </button>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
