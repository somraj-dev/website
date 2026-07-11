"use client";

import { useState } from "react";
import Link from "next/link";
import { Terminal, Shield, Cpu, Code2, Play, CheckCircle, Database } from "lucide-react";

export default function Documentation() {
  return (
    <div className="bg-white min-h-screen py-16 sm:py-24 text-slate-800">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Breadcrumb & Title */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 uppercase tracking-wider">
            <span>Blog</span>
            <span>/</span>
            <span className="text-slate-500">Field Engineering</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Build knowledge agents without embeddings
          </h1>
          
          <div className="flex items-center gap-3 pt-2 text-xs font-semibold text-slate-500">
            <span className="bg-slate-100 text-slate-800 px-2 py-0.5 rounded">Ben Sabic</span>
            <span className="bg-slate-100 text-slate-800 px-2 py-0.5 rounded">Hugo Richard</span>
            <span>•</span>
            <span>July 11, 2026</span>
          </div>
        </div>

        {/* Section 1 */}
        <div className="space-y-6 text-base sm:text-lg text-slate-650 leading-relaxed max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Deploy an agent with Vercel Sandbox, Chat SDK, and AI SDK
          </h2>
          <p>
            Most knowledge agents start the same way. You pick a vector database, then build a chunking pipeline. You choose an embedding model, then tune retrieval parameters.
          </p>
          <p>
            Weeks later, your agent answers a question incorrectly, and you have no idea which chunk it retrieved or why that chunk scored highest.
          </p>
          <p>
            We kept seeing this pattern internally and for teams building agents on Vercel. The embedding stack works for semantic similarity, but it falls short when you need a specific value from structured data. The failure mode is silent: the agent confidently returns the wrong chunk, and you can't trace the path from question to answer.
          </p>
          <p>
            That's why we tried something different. We replaced our vector pipeline with a filesystem and gave the agent <code className="bg-slate-100 px-1.5 py-0.5 rounded text-sm text-pink-600 font-mono">bash</code>. Our sales call summarization agent went from ~$1.00 to ~$0.25 per call, and the output quality improved. The agent was doing what it already knew how to do: read files, run <code className="bg-slate-100 px-1.5 py-0.5 rounded text-sm text-pink-600 font-mono">grep</code>, and navigate directories.
          </p>
        </div>

        {/* Dynamic Diagram */}
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-semibold text-slate-700 shadow-sm">
          <div className="flex items-center gap-2 bg-white px-4 py-3.5 rounded-xl border border-slate-200 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-blue-600"></span>
            Admin Interface
          </div>
          <div className="text-slate-400">➔</div>
          <div className="flex items-center gap-2 bg-white px-4 py-3.5 rounded-xl border border-slate-200 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-blue-600"></span>
            Postgres Ingestion
          </div>
          <div className="text-slate-400">➔</div>
          <div className="flex items-center gap-2 bg-white px-4 py-3.5 rounded-xl border border-slate-200 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-blue-600"></span>
            Vercel Sandbox
          </div>
          <div className="text-slate-400">➔</div>
          <div className="flex items-center gap-2 bg-white px-4 py-3.5 rounded-xl border border-slate-200 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-emerald-600"></span>
            Agent Response
          </div>
        </div>

        {/* Section 2 */}
        <div className="space-y-6 text-base sm:text-lg text-slate-650 leading-relaxed max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            File-based search with Vercel Sandbox
          </h2>
          <p>
            No vector databases. No chunking pipeline. No embedding model.
          </p>
          <p>
            Your agent uses <code className="bg-slate-100 px-1.5 py-0.5 rounded text-sm text-pink-600 font-mono">grep</code>, <code className="bg-slate-100 px-1.5 py-0.5 rounded text-sm text-pink-600 font-mono">find</code>, and <code className="bg-slate-100 px-1.5 py-0.5 rounded text-sm text-pink-600 font-mono">cat</code> inside of isolated Vercel Sandboxes.
          </p>
          
          <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl space-y-4">
            <h4 className="font-bold text-slate-900 text-sm">Here&apos;s how it works:</h4>
            <ol className="list-decimal list-inside space-y-2 text-sm">
              <li>You add sources through the admin interface, and they&apos;re stored in Postgres.</li>
              <li>Content syncs to a snapshot repository via Vercel Workflow.</li>
              <li>When the agent needs to search, a Vercel Sandbox loads the snapshot.</li>
              <li>The agent&apos;s tool calls execute file-system commands directly.</li>
              <li>The agent returns an answer with optional references.</li>
            </ol>
          </div>
        </div>

        {/* Comparison Matrix Table */}
        <div className="border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
          <table className="w-full text-left text-sm border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200">
                <th className="p-4 font-bold text-slate-900">Embeddings Approach</th>
                <th className="p-4 font-bold text-slate-900">Filesystem Approach</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-150">
              <tr>
                <td className="p-4 text-slate-650">Black-box scoring</td>
                <td className="p-4 text-slate-800 font-semibold">Transparent bash commands</td>
              </tr>
              <tr>
                <td className="p-4 text-slate-650">Difficult to debug context errors</td>
                <td className="p-4 text-slate-800 font-semibold">Inspect actual sandbox files</td>
              </tr>
              <tr>
                <td className="p-4 text-slate-650">Requires continuous model tuning</td>
                <td className="p-4 text-slate-800 font-semibold">Works out of the box</td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}
