"use client";

import { useState } from "react";
import { Code2, Terminal, Book, CheckCircle } from "lucide-react";

export default function Documentation() {
  const [activeLang, setActiveLang] = useState<"curl" | "javascript">("curl");

  const codeBlocks: Record<"curl" | "javascript", string> = {
    curl: `curl -X POST "https://api.axiovital.net/v1/patients/verify" \\
  -H "Authorization: Bearer AXIO_SECRET_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "axio_id": "axio_token_993f88bc01d99"
  }'`,
    javascript: `const response = await fetch('https://api.axiovital.net/v1/patients/verify', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer AXIO_SECRET_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    axio_id: 'axio_token_993f88bc01d99'
  })
});
const data = await response.json();`
  };

  return (
    <div className="bg-slate-50 min-h-screen py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Left Side: Text Details */}
        <div className="lg:col-span-5 space-y-6">
          <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">API Documentation</h1>
          <p className="text-slate-600 text-sm leading-relaxed">
            AxioVital provides REST endpoints for FHIR resource replication, clinical SOAP integrations, and patient verification systems.
          </p>
          <div className="space-y-4">
            <div className="flex gap-3 items-start">
              <CheckCircle className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-slate-800 text-sm">Secure Authentication</h4>
                <p className="text-xs text-slate-500">All calls require an authorized AXIO bearer credential token.</p>
              </div>
            </div>
            <div className="flex gap-3 items-start">
              <CheckCircle className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-slate-800 text-sm">FHIR Standards Alignment</h4>
                <p className="text-xs text-slate-500">Payload schema aligns fully with HIPAA and HL7 FHIR v4 specifications.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Tabbed Code Blocks */}
        <div className="lg:col-span-7 bg-slate-900 rounded-3xl p-6 shadow-xl text-slate-300 font-mono text-xs space-y-4">
          <div className="flex justify-between items-center border-b border-slate-800 pb-3">
            <div className="flex items-center gap-2">
              <Terminal className="h-4 w-4 text-blue-500" />
              <span className="text-xs text-slate-400 font-bold">ENDPOINT CODE RUNNER</span>
            </div>
            <div className="flex gap-1.5">
              {(["curl", "javascript"] as const).map((lang) => (
                <button
                  key={lang}
                  onClick={() => setActiveLang(lang)}
                  className={`px-3 py-1 rounded-md text-[10px] uppercase font-bold transition-all ${
                    activeLang === lang ? "bg-blue-600 text-white" : "bg-slate-850 text-slate-500 hover:text-slate-400"
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>
          </div>
          <pre className="overflow-x-auto text-slate-200 p-2 leading-relaxed bg-slate-950 rounded-xl border border-slate-800">
            <code>{codeBlocks[activeLang]}</code>
          </pre>
        </div>

      </div>
    </div>
  );
}
