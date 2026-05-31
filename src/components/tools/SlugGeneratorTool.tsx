"use client";
import { useState } from "react";
import { slugify } from "@/lib/utils";

export function SlugGeneratorTool() {
  const [input, setInput] = useState("");
  const [sep, setSep] = useState<"-" | "_">("-");
  const [copied, setCopied] = useState(false);

  const slug = slugify(input).replace(/-/g, sep);

  function copy() {
    if (!slug) return;
    navigator.clipboard.writeText(slug);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter your title or text…"
        className="mb-3 w-full rounded-lg border border-border bg-bg-3 px-3.5 py-2.5 text-sm text-text placeholder-text-3 outline-none transition-all focus:border-accent"
      />
      <div className="mb-3 flex items-center gap-3">
        <span className="text-[12px] text-text-3">Separator:</span>
        {(["-", "_"] as const).map((s) => (
          <button
            key={s}
            onClick={() => setSep(s)}
            className="rounded-full border px-3 py-0.5 text-[12px] font-medium transition-all"
            style={{
              borderColor: sep === s ? "#7c6af7" : "#2a2a3d",
              background: sep === s ? "#1a1730" : "transparent",
              color: sep === s ? "#9d8ff9" : "#6b6b85",
            }}
          >
            {s === "-" ? "hyphen" : "underscore"}
          </button>
        ))}
      </div>
      <div className="mb-3 text-[12px] text-text-3">Generated slug:</div>
      <div className="min-h-[48px] rounded-lg border border-border bg-bg-3 px-3.5 py-3 font-mono text-base text-accent-2">
        {slug || <span className="text-text-3">Slug will appear here…</span>}
      </div>
      <div className="mt-3 flex gap-2">
        <button
          onClick={copy}
          disabled={!slug}
          className="rounded-lg bg-accent px-4 py-2 text-[13px] font-semibold text-white transition-all hover:bg-accent-2 disabled:opacity-40"
        >
          {copied ? "✓ Copied!" : "Copy Slug"}
        </button>
        <button
          onClick={() => setInput("")}
          className="rounded-lg border border-border-2 bg-surface-2 px-4 py-2 text-[13px] font-semibold text-text-2 transition-all hover:bg-surface-3"
        >
          Clear
        </button>
      </div>
    </div>
  );
}
