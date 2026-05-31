"use client";
import { useState } from "react";

const presets = [
  { label: "Email", pattern: "[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}" },
  { label: "URL", pattern: "https?:\\/\\/(www\\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\\.[a-zA-Z0-9()]{1,6}\\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)" },
  { label: "Phone", pattern: "\\+?[\\d\\s\\-().]{7,20}" },
  { label: "IP Address", pattern: "\\b\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\b" },
];

export function RegexTesterTool() {
  const [pattern, setPattern] = useState("");
  const [flags, setFlags] = useState("gi");
  const [testStr, setTestStr] = useState("");
  const [error, setError] = useState("");

  let matches: RegExpMatchArray[] = [];
  let highlighted = testStr;

  if (pattern && testStr) {
    try {
      const safeFlags = flags.replace(/[^gimsuy]/g, "");
      const re = new RegExp(pattern, safeFlags.includes("g") ? safeFlags : safeFlags + "g");
      matches = [...testStr.matchAll(re)];
      highlighted = testStr.replace(re, (m) =>
        `<mark style="background:rgba(124,106,247,.3);color:#9d8ff9;border-radius:3px;padding:0 2px">${m.replace(/</g,"&lt;")}</mark>`
      );
      setError("");
    } catch (e) {
      setError((e as Error).message);
    }
  }

  return (
    <div>
      <div className="mb-3 flex gap-2">
        <div className="flex-1">
          <label className="mb-1 block text-[11px] text-text-3">Regular Expression</label>
          <input type="text" value={pattern} onChange={(e) => setPattern(e.target.value)}
            placeholder="([a-z]+)\\d+"
            className="w-full rounded-lg border border-border bg-bg-3 px-3.5 py-2.5 font-mono text-sm text-text outline-none focus:border-accent" />
        </div>
        <div className="w-20">
          <label className="mb-1 block text-[11px] text-text-3">Flags</label>
          <input type="text" value={flags} onChange={(e) => setFlags(e.target.value)}
            className="w-full rounded-lg border border-border bg-bg-3 px-3 py-2.5 font-mono text-sm text-text text-center outline-none focus:border-accent" />
        </div>
      </div>
      <div className="mb-2 flex flex-wrap gap-1.5">
        {presets.map((p) => (
          <button key={p.label} onClick={() => setPattern(p.pattern)}
            className="rounded-full border border-border px-2.5 py-0.5 text-[11px] text-text-3 transition-all hover:border-accent hover:text-accent-2">
            {p.label}
          </button>
        ))}
      </div>
      <textarea value={testStr} onChange={(e) => setTestStr(e.target.value)}
        placeholder="Enter test string here…"
        className="mb-3 w-full resize-y rounded-lg border border-border bg-bg-3 px-3.5 py-3 text-sm text-text placeholder-text-3 outline-none focus:border-accent"
        style={{ minHeight: 100 }} />
      {error && <div className="mb-2 text-[12px] text-rose">{error}</div>}
      {!error && pattern && testStr && (
        <div className="mb-2 text-[12px]" style={{ color: matches.length ? "#22c55e" : "#f43f5e" }}>
          {matches.length ? `${matches.length} match${matches.length > 1 ? "es" : ""} found` : "No matches"}
        </div>
      )}
      {highlighted !== testStr && (
        <div className="rounded-lg border border-border bg-bg-3 px-3.5 py-3 text-sm leading-relaxed"
          dangerouslySetInnerHTML={{ __html: highlighted }} />
      )}
    </div>
  );
}
