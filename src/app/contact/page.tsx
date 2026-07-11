"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, CheckCircle } from "lucide-react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", msg: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      setSubmitted(true);
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Left Side Info */}
        <div className="lg:col-span-5 space-y-6">
          <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">Contact Our Enterprise Team</h1>
          <p className="text-slate-650 text-sm leading-relaxed">
            Need customized EHR database integrations, FHIR connectors, or compliance documentation? Reach out below.
          </p>
          <div className="space-y-4 text-sm font-semibold text-slate-700">
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-blue-600" />
              <span>sales@axiovital.com</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-blue-600" />
              <span>+1 (800) 555-AXIO</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-blue-600" />
              <span>San Francisco, CA / Austin, TX</span>
            </div>
          </div>
        </div>

        {/* Right Side: Stateful Form */}
        <div className="lg:col-span-7 bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
          {submitted ? (
            <div className="text-center py-12 space-y-3">
              <div className="h-12 w-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Message Received Successfully</h3>
              <p className="text-slate-500 text-xs">An integrations specialist will respond within 12 business hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-500 uppercase">Your Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="John Doe"
                  className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm focus:border-blue-500 focus:outline-none"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-500 uppercase">Work Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="john@clinic.org"
                  className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm focus:border-blue-500 focus:outline-none"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-500 uppercase">How can we help?</label>
                <textarea
                  required
                  rows={4}
                  value={formData.msg}
                  onChange={(e) => setFormData({ ...formData, msg: e.target.value })}
                  placeholder="Tell us about your hospital, EHR version, or database needs..."
                  className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm focus:border-blue-500 focus:outline-none resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-blue-600 py-3 text-sm font-semibold text-white hover:bg-blue-700 transition-all shadow-md"
              >
                Send Request
              </button>
            </form>
          )}
        </div>

      </div>
    </div>
  );
}
