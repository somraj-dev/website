"use client";

import Link from "next/link";

export default function Documentation() {
  return (
    <div className="bg-white min-h-screen text-[#171717] font-sans antialiased selection:bg-[#0070f3] selection:text-white">
      {/* Article Container */}
      <article className="max-w-[700px] mx-auto px-6 pt-12 pb-24 space-y-10">
        
        {/* Breadcrumbs */}
        <div className="flex items-center gap-1.5 text-[13px] text-[#666666] font-medium tracking-tight">
          <Link href="/blog" className="hover:text-black transition-colors">Blog</Link>
          <span>/</span>
          <span className="text-[#888888]">Field Engineering</span>
        </div>

        {/* Title */}
        <h1 className="text-[36px] sm:text-[44px] font-bold text-black tracking-tight leading-[1.1] font-sans">
          Build knowledge agents without embeddings
        </h1>

        {/* Author / Date info */}
        <div className="flex items-center gap-3 text-[13px] text-[#666666]">
          <div className="flex items-center -space-x-1.5">
            <span className="inline-block w-6 h-6 rounded-full bg-slate-200 border border-white text-[10px] flex items-center justify-center font-bold text-slate-700">BS</span>
            <span className="inline-block w-6 h-6 rounded-full bg-slate-350 border border-white text-[10px] flex items-center justify-center font-bold text-slate-800">HR</span>
          </div>
          <span className="font-semibold text-black hover:underline cursor-pointer">Ben Sabic, Hugo Richard</span>
          <span>•</span>
          <span className="text-[#888888]">July 11, 2026</span>
        </div>

        {/* Core Article Body */}
        <div className="space-y-6 text-[15px] sm:text-[16px] text-[#444444] leading-[1.65] font-sans">
          <h2 className="text-[20px] sm:text-[22px] font-bold text-black tracking-tight pt-4">
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
            That's why we tried something different. We replaced our vector pipeline with a filesystem and gave the agent <code className="bg-[#fafafa] border border-[#eaeaea] text-[#eb5757] font-mono text-[13px] px-1.5 py-0.5 rounded">bash</code>. Our <span className="underline decoration-dotted cursor-pointer hover:text-black">sales call summarization agent</span> went from ~$1.00 to ~$0.25 per call, and the output quality improved. The agent was doing what it already knew how to do: read files, run <code className="bg-[#fafafa] border border-[#eaeaea] text-[#eb5757] font-mono text-[13px] px-1.5 py-0.5 rounded">grep</code>, and navigate directories.
          </p>
          
          <p>
            So we open-sourced the <span className="font-bold underline cursor-pointer hover:text-black">Knowledge Agent Template</span>, a production-ready version of this architecture built on Vercel.
          </p>

          <h2 className="text-[20px] sm:text-[22px] font-bold text-black tracking-tight pt-6">
            What the template does
          </h2>

          <p>
            The Knowledge Agent Template is an open source, file-system-based agent you can fork, customize, and deploy. Plug any source: GitHub repos, YouTube transcripts, documents (e.g., markdown files), or custom APIs. Ship it as a web chat app, a GitHub bot, a Discord bot, or all three at once.
          </p>

          <p>
            The template is built on <span className="underline cursor-pointer hover:text-black font-semibold text-black">Vercel Sandbox</span>, <span className="underline cursor-pointer hover:text-black font-semibold text-black">AI SDK</span>, and <span className="underline cursor-pointer hover:text-black font-semibold text-black">Chat SDK</span>. Deploy to Vercel in a single click, configure your sources, and start answering questions.
          </p>
        </div>

        {/* Process Flow Diagram Component */}
        <div className="border border-[#eaeaea] bg-[#fafafa] rounded-lg p-6 flex flex-wrap items-center justify-center gap-2 text-[11px] font-mono text-black font-semibold tracking-tight shadow-sm select-none">
          <div className="bg-black text-white px-3 py-1.5 rounded uppercase text-[10px]">Admin Interface</div>
          <span className="text-[#888888]">➔</span>
          <div className="border border-[#eaeaea] bg-white px-3 py-1.5 rounded uppercase text-[10px]">Git Postgres</div>
          <span className="text-[#888888]">➔</span>
          <div className="border border-[#eaeaea] bg-white px-3 py-1.5 rounded uppercase text-[10px]">Snapshot Repo</div>
          <span className="text-[#888888]">➔</span>
          <div className="border border-[#eaeaea] bg-white px-3 py-1.5 rounded uppercase text-[10px]">Vercel Sandbox</div>
          <span className="text-[#888888]">➔</span>
          <div className="bg-black text-white px-3 py-1.5 rounded uppercase text-[10px]">Agent Response</div>
        </div>

        {/* File-based search content */}
        <div className="space-y-6 text-[15px] sm:text-[16px] text-[#444444] leading-[1.65] font-sans">
          <h2 className="text-[20px] sm:text-[22px] font-bold text-black tracking-tight pt-6">
            File-based search with Vercel Sandbox
          </h2>

          <p className="font-semibold text-black">
            No vector database. No chunking pipeline. No embedding model.
          </p>

          <p>
            Your agent uses <code className="bg-[#fafafa] border border-[#eaeaea] text-[#eb5757] font-mono text-[13px] px-1.5 py-0.5 rounded">grep</code>, <code className="bg-[#fafafa] border border-[#eaeaea] text-[#eb5757] font-mono text-[13px] px-1.5 py-0.5 rounded">find</code>, and <code className="bg-[#fafafa] border border-[#eaeaea] text-[#eb5757] font-mono text-[13px] px-1.5 py-0.5 rounded">cat</code> inside of isolated <span className="underline cursor-pointer hover:text-black font-semibold text-black">Vercel Sandboxes</span>.
          </p>

          <p className="font-bold text-black pt-2">Here&apos;s how it works:</p>
          
          <ol className="list-decimal list-outside pl-5 space-y-3.5 text-[#444444] text-[15px]">
            <li>You add sources through the admin interface, and they&apos;re stored in Postgres.</li>
            <li>Content syncs to a snapshot repository via <span className="underline cursor-pointer hover:text-black font-semibold text-black">Vercel Workflow</span>.</li>
            <li>When the agent needs to search, a Vercel Sandbox loads the <span className="underline cursor-pointer hover:text-black font-semibold text-black">snapshot</span>.</li>
            <li>The agent&apos;s <code className="bg-[#fafafa] border border-[#eaeaea] text-[#eb5757] font-mono text-[13px] px-1.5 py-0.5 rounded">bash</code> and <code className="bg-[#fafafa] border border-[#eaeaea] text-[#eb5757] font-mono text-[13px] px-1.5 py-0.5 rounded">bash_batch</code> tools execute file-system commands.</li>
            <li>The agent returns an answer with optional references.</li>
          </ol>

          <p className="pt-2">
            Results are deterministic, explainable, and fast. When the agent gives a wrong answer, you open the trace and see: it ran <code className="bg-[#fafafa] border border-[#eaeaea] text-[#eb5757] font-mono text-[13px] px-1.5 py-0.5 rounded">grep -r &quot;pricing&quot; docs/</code>, read <code className="bg-[#fafafa] border border-[#eaeaea] text-[#eb5757] font-mono text-[13px] px-1.5 py-0.5 rounded">docs/plans/enterprise.md</code>, and pulled the wrong section. You fix the file or adjust the agent&apos;s search strategy. The whole debugging loop takes minutes.
          </p>

          <p>
            Compare that to vectors. If the agent returns a bad chunk, you have to determine which chunk it retrieved, then figure out why it scored 0.82 and the correct one scored 0.79. The problem could be the chunking boundary, the embedding model, or the similarity threshold. With filesystem search, there is no guessing why it picked that chunk and no tuning retrieval scores in the dark. You&apos;re debugging a question, not a pipeline.
          </p>
        </div>

        {/* 1:1 Comparative Matrix Component */}
        <div className="max-w-[450px] mx-auto border border-[#eaeaea] rounded-lg overflow-hidden shadow-sm text-[13px]">
          <div className="grid grid-cols-2 bg-[#fdfdfd] border-b border-[#eaeaea] text-[#888888] font-medium p-3.5">
            <div>Embeddings</div>
            <div>Filesystem</div>
          </div>
          <div className="grid grid-cols-2 divide-x divide-[#eaeaea] border-b border-[#eaeaea] p-3.5">
            <div className="pr-2 text-[#666666]">Black-box scoring</div>
            <div className="pl-2 text-black font-semibold">Transparent commands</div>
          </div>
          <div className="grid grid-cols-2 divide-x divide-[#eaeaea] border-b border-[#eaeaea] p-3.5">
            <div className="pr-2 text-[#666666]">Hard to debug</div>
            <div className="pl-2 text-black font-semibold">Inspect actual files</div>
          </div>
          <div className="grid grid-cols-2 divide-x divide-[#eaeaea] p-3.5">
            <div className="pr-2 text-[#666666]">Requires tuning</div>
            <div className="pl-2 text-black font-semibold">Works out of the box</div>
          </div>
        </div>

        {/* Bottom Details Section */}
        <div className="space-y-6 text-[15px] sm:text-[16px] text-[#444444] leading-[1.65] font-sans">
          <p>
            LLMs already understand filesystems. They&apos;ve been trained on massive amounts of code: navigating directories, grepping through files, managing state across complex codebases. If agents excel at filesystem operations for code, they excel at them for anything. That&apos;s the insight behind the <span className="underline cursor-pointer hover:text-black font-semibold text-black">filesystem and bash approach</span>.
          </p>
          <p>
            You&apos;re not teaching the model a new skill; you&apos;re using the one it&apos;s best at. No embedding pipeline to maintain or vector DB to scale. Add a source, sync, and search.
          </p>

          <h2 className="text-[20px] sm:text-[22px] font-bold text-black tracking-tight pt-6">
            Chat SDK: one agent, every platform
          </h2>
          <p>
            Your agent has one knowledge base, one codebase, and one source of truth. Yet your engineers are scattered across Slack, your community spread across Discord, your bug reports buried in GitHub. A single agent that understands all three.
          </p>
        </div>

      </article>
    </div>
  );
}
