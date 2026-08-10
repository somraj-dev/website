"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  ChevronRight, Play, X, ShieldCheck
} from "lucide-react";

export default function HomeView() {
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [securityTab, setSecurityTab] = useState("hipaa");

  return (
    <div className="flex flex-col min-h-screen bg-white font-sans text-[#1f1e1c] selection:bg-[#c74634] selection:text-white">
      
      {/* BREADCRUMB BAR */}
      <div className="bg-[#eef7fb] py-2 px-4 sm:px-6 lg:px-8 text-xs text-[#595652] font-medium relative z-10">
        <div className="mx-auto max-w-[1440px] flex items-center gap-1.5">
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

        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Original AxioVital Copy */}
            <div className="lg:col-span-7 space-y-4">
              <span className="inline-block text-xs font-bold uppercase tracking-wider text-sky-800 bg-sky-100/90 px-3.5 py-1 rounded-full border border-sky-200 shadow-2xs">
                Connected Healthcare Ecosystem
              </span>

              <h1 className="font-baskerville text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-[1.15] tracking-tight">
                Intelligent Digital Care Ecosystems for Next-Gen Healthcare
              </h1>

              {/* Clean Subtitle with Controlled Line Length */}
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed text-pretty max-w-[55ch] font-normal">
                AxioVital is an integrated healthcare platform connecting patients, doctors, hospitals, clinics, and laboratories through a unified digital operating system. Streamline online appointment booking, electronic health records (EHR), digital prescriptions, and hospital workflows seamlessly.
              </p>

              <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 sm:gap-4 pt-3">
                <button 
                  onClick={() => setDemoModalOpen(true)}
                  className="btn-primary"
                >
                  Book an Appointment
                </button>
                <Link 
                  href="/platform" 
                  className="btn-secondary"
                >
                  Explore Our Platform
                </Link>
              </div>
            </div>

            {/* Right Column: Healthcare Video Visual Card */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-200/80 bg-[#0d4253] w-full">
                <div className="relative aspect-4/3 w-full bg-[#0d4253] overflow-hidden group cursor-pointer" onClick={() => setDemoModalOpen(true)}>
                  <img 
                    src="/oracle_hero_doctor.jpg" 
                    alt="Physician utilizing AxioVital digital healthcare platform during patient consultation" 
                    width={800}
                    height={600}
                    fetchPriority="high"
                    decoding="async"
                    className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-500"
                  />


                  
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d4253]/90 via-[#0d4253]/30 to-transparent p-6 flex flex-col justify-between">
                    <div className="text-xs font-bold text-white tracking-widest uppercase">
                      AXIOVITAL CARE PLATFORM
                    </div>

                    <div className="space-y-3">
                      <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold text-white leading-tight">
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
      <section className="bg-transition-hero-to-body py-16 lg:py-24 relative overflow-hidden">
        
        {/* Soft Background Wave Overlay */}
        <div className="absolute top-0 inset-x-0 h-20 bg-gradient-to-b from-[#eef7fb]/60 to-transparent pointer-events-none" />

        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 space-y-8 relative z-10">
          <div className="max-w-3xl">
            <span className="text-xs font-bold text-sky-800 uppercase tracking-wider block mb-1">Empowering the Entire Health Spectrum</span>
            <h2 className="font-sans font-semibold text-3xl sm:text-4xl text-slate-900 leading-tight">
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
                <h3 className="text-2xl font-bold text-[#1f1e1c]">For Patients</h3>
                <p className="text-sm text-slate-600 leading-relaxed text-pretty max-w-[46ch]">
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
                <h3 className="text-2xl font-bold text-[#1f1e1c]">For Doctors</h3>
                <p className="text-sm text-slate-600 leading-relaxed text-pretty max-w-[46ch]">
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
                <h3 className="text-2xl font-bold text-[#1f1e1c]">For Hospitals & Clinics</h3>
                <p className="text-sm text-slate-600 leading-relaxed text-pretty max-w-[46ch]">
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
      <section className="bg-[#f8fafc] bg-medical-dots py-16 lg:py-24 relative overflow-hidden">
        
        {/* Subtle Ambient Radial Overlay */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-sky-200/10 rounded-full blur-3xl pointer-events-none" />

        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 space-y-8 relative z-10">
          <div>
            <span className="text-xs font-bold text-sky-800 uppercase tracking-wider block mb-1">Integrated Platform Features</span>
            <h2 className="font-sans font-semibold text-3xl sm:text-4xl text-slate-900">
              Comprehensive Care Capabilities
            </h2>
            <p className="text-slate-600 text-sm mt-1 max-w-2xl">
              Practical digital tools designed to solve real healthcare challenges for patients, clinicians, and facility managers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { title: "Online Appointment Booking", desc: "Reserve preferred doctor consultation slots from home." },
              { title: "Queue-Free Hospital Visits", desc: "Skip reception lines with instant NFC kiosk check-in." },
              { title: "Electronic Health Records", desc: "Access complete medical history anytime across facilities." },
              { title: "Digital Prescriptions", desc: "Receive e-Prescriptions directly on your phone." },
              { title: "Laboratory Integration", desc: "Automatic lab report delivery directly to your portal." },
              { title: "Doctor Management", desc: "Streamline physician appointment schedules and charts." },
              { title: "Multi-Hospital Connectivity", desc: "Unified medical record matching across healthcare networks." },
              { title: "Secure Cloud Storage", desc: "HIPAA-compliant FIPS 140-2 encrypted health records vault." },
            ].map((cap, idx) => {
              return (
                <div key={idx} className="bg-white/95 border border-slate-200/80 p-5 rounded-xl space-y-2 hover:shadow-md transition-all">
                  <h3 className="text-base font-bold text-[#1f1e1c]">{cap.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{cap.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 4: AXIOVITAL PRODUCT SUITE */}
      <section className="bg-transition-white-offwhite py-16 lg:py-24 relative overflow-hidden">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 space-y-8 relative z-10">
          <div>
            <span className="text-xs font-bold text-sky-800 uppercase tracking-wider block mb-1">Hardware & AI Innovations</span>
            <h2 className="font-sans font-semibold text-3xl sm:text-4xl text-slate-900">
              AxioVital Integrated Product Suite
            </h2>
            <p className="text-slate-600 text-sm mt-1">
              Hardware credentials, AI assistants, and enterprise API gateways built specifically for modern healthcare.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "AXIO-ID Token", tag: "Digital Identity", desc: "Unified digital identity token for secure single sign-on across health networks." },
              { title: "AXIO Smart Card", tag: "NFC Credential", desc: "Hardware contactless smart card for instant 1-tap clinic kiosk check-in." },
              { title: "AxioAI Assistant", tag: "Doctor AI Engine", desc: "Doctor documentation engine assisting physicians with consultation notes." },
              { title: "AxioInsights Analytics", tag: "Hospital Operations", desc: "Predictive ICU bed occupancy heatmaps and emergency ward flow analytics." },
              { title: "AxioConnect Engine", tag: "EMR Gateway", desc: "High-speed integration engine linking laboratories, pharmacies, and EHR databases." },
              { title: "MyHealthcare App", tag: "Patient Portal", desc: "Patient care companion app for appointment booking and report viewing." },
            ].map((item, idx) => {
              return (
                <div key={idx} className="bg-white border border-slate-200/80 p-6 rounded-2xl space-y-3 hover:shadow-lg transition-all">
                  <div className="flex justify-between items-center">
                    <span className="text-[11px] font-bold text-sky-800 bg-sky-50 px-2.5 py-0.5 rounded border border-sky-200">{item.tag}</span>
                  </div>
                  <h3 className="text-lg font-bold text-[#1f1e1c]">{item.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 5: ENTERPRISE SECURITY & COMPLIANCE */}
      <section className="py-16 lg:py-24 bg-white border-t border-slate-200/80 relative overflow-hidden">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 space-y-10 relative z-10">
          
          {/* Header */}
          <div className="max-w-3xl space-y-3">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-800 bg-sky-50 border border-sky-200 px-3.5 py-1 rounded-full">
              <ShieldCheck className="h-4 w-4 text-sky-600" />
              ENTERPRISE HEALTHCARE VAULT
            </span>
            <h2 className="font-sans font-semibold text-3xl sm:text-4xl text-slate-900">
              Enterprise Security & Compliance
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed text-pretty max-w-[60ch]">
              AxioVital protects patient data with bank-grade encryption, continuous regulatory compliance monitoring, and enterprise infrastructure built to HIPAA and GDPR standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-start">
            
            {/* Left Navigation Cards Column (Classic Enterprise Menu) */}
            <div className="md:col-span-4 space-y-2">
              {[
                { 
                  id: "hipaa", 
                  label: "HIPAA Security Rule", 
                  desc: "FIPS 140-2 AES-256 encryption & BAA guarantees."
                },
                { 
                  id: "gdpr", 
                  label: "GDPR Compliance", 
                  desc: "Patient consent governance & data sovereignty."
                },
                { 
                  id: "soc2", 
                  label: "SOC 2 Type II", 
                  desc: "Annual third-party security & audit verification."
                },
                { 
                  id: "zerotrust", 
                  label: "Zero-Trust Architecture", 
                  desc: "Granular RBAC access & hardware SSO credentials."
                }
              ].map((sec) => {
                const isSelected = securityTab === sec.id;
                return (
                  <button
                    key={sec.id}
                    onClick={() => setSecurityTab(sec.id)}
                    className={`w-full text-left p-3 sm:p-4 rounded-xl transition-all flex items-center justify-between border ${
                      isSelected
                        ? "bg-sky-50/70 border-sky-200 border-l-4 border-l-sky-600 shadow-2xs"
                        : "bg-white border-slate-200/80 hover:border-slate-300"
                    }`}
                  >
                    <div>
                      <div className={`text-sm font-bold ${isSelected ? "text-sky-900" : "text-slate-900"}`}>{sec.label}</div>
                      <div className="text-xs text-slate-500 mt-0.5">{sec.desc}</div>
                    </div>
                    <ChevronRight className={`h-4 w-4 ${isSelected ? "text-sky-600 font-bold" : "text-slate-300"}`} />
                  </button>
                );
              })}
            </div>

            {/* Right Specification Details Panel (Classic Enterprise Card) */}
            <div className="md:col-span-8 bg-white border border-slate-200/90 border-t-4 border-t-sky-600 rounded-xl p-4 sm:p-6 md:p-8 space-y-5 sm:space-y-6 shadow-xs">
              
              <div className="space-y-4">
                {securityTab === "hipaa" && (
                  <>
                    <div className="pb-3 border-b border-slate-100">
                      <h3 className="font-bold text-xl text-slate-900">HIPAA Physical & Technical Safeguards</h3>
                      <p className="text-xs text-slate-500 mt-0.5">Fully compliant with HHS 45 CFR Part 160 and Part 164</p>
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed text-pretty">
                      All Protected Health Information (PHI) is encrypted at rest using FIPS 140-2 validated AES-256 keys, and in transit via TLS 1.3. Strict audit logs track all record accesses with zero-tamper verification.
                    </p>
                  </>
                )}
                {securityTab === "gdpr" && (
                  <>
                    <div className="pb-3 border-b border-slate-100">
                      <h3 className="font-bold text-xl text-slate-900">EU GDPR Data Privacy & Sovereign Rights</h3>
                      <p className="text-xs text-slate-500 mt-0.5">Regulation (EU) 2016/679 Privacy Framework</p>
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed text-pretty">
                      AxioVital enforces full patient consent governance, right-to-be-forgotten data purging APIs, and regional data residency constraints within isolated sovereign data centers.
                    </p>
                  </>
                )}
                {securityTab === "soc2" && (
                  <>
                    <div className="pb-3 border-b border-slate-100">
                      <h3 className="font-bold text-xl text-slate-900">SOC 2 Type II Certified Operations</h3>
                      <p className="text-xs text-slate-500 mt-0.5">AICPA Trust Services Criteria Audit Certified</p>
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed text-pretty">
                      Independently audited annually to verify operational effectiveness, continuous intrusion detection monitoring, disaster recovery redundancy, and automated failover systems.
                    </p>
                  </>
                )}
                {securityTab === "zerotrust" && (
                  <>
                    <div className="pb-3 border-b border-slate-100">
                      <h3 className="font-bold text-xl text-slate-900">Zero-Trust Network & Credential Architecture</h3>
                      <p className="text-xs text-slate-500 mt-0.5">NIST SP 800-207 Zero Trust Standard</p>
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed text-pretty">
                      No implicit trust granted to any internal user or system. Micro-segmentation, hardware NFC key verification, and role-based access control (RBAC) ensure total security.
                    </p>
                  </>
                )}
              </div>

              {/* Classic Technical Specification Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 pt-4 border-t border-slate-100">
                <div className="bg-slate-50/80 border border-slate-200/70 rounded-lg p-3.5 space-y-1.5">
                  <span className="text-xs font-bold text-slate-900 block">Data Encryption</span>
                  <p className="text-[11px] text-slate-500 leading-tight">AES-256 & TLS 1.3 encryption for all data</p>
                </div>

                <div className="bg-slate-50/80 border border-slate-200/70 rounded-lg p-3.5 space-y-1.5">
                  <span className="text-xs font-bold text-slate-900 block">Access Control</span>
                  <p className="text-[11px] text-slate-500 leading-tight">Role-based access with least-privilege rules</p>
                </div>

                <div className="bg-slate-50/80 border border-slate-200/70 rounded-lg p-3.5 space-y-1.5">
                  <span className="text-xs font-bold text-slate-900 block">Audit Logging</span>
                  <p className="text-[11px] text-slate-500 leading-tight">Immutable audit trails for system compliance</p>
                </div>

                <div className="bg-slate-50/80 border border-slate-200/70 rounded-lg p-3.5 space-y-1.5">
                  <span className="text-xs font-bold text-slate-900 block">Secure Infra</span>
                  <p className="text-[11px] text-slate-500 leading-tight">HIPAA-aligned cloud with 99.99% uptime SLA</p>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* SECTION 6: FAQ ACCORDION */}
      <section className="bg-transition-offwhite-white py-16 lg:py-24 relative overflow-hidden">
        <div className="mx-auto max-w-4xl px-4 sm:px-8 space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold text-sky-800 uppercase tracking-wider block">Enterprise Knowledge Base</span>
            <h2 className="font-sans font-semibold text-3xl sm:text-4xl text-slate-900">
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
