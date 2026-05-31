"use client";
import { useState } from "react";

type Style = "apa" | "mla" | "chicago";

export function CitationTool() {
  const [style, setStyle] = useState<Style>("apa");
  const [form, setForm] = useState({ author: "", title: "", source: "", year: "", url: "" });
  const [citation, setCitation] = useState("");
  const [copied, setCopied] = useState(false);

  function update(field: string, val: string) { setForm((f) => ({ ...f, [field]: val })); }

  function generate() {
    const { author, title, source, year, url } = form;
    if (!author || !title) return;
    const yr = year || "n.d.";
    let c = "";
    if (style === "apa")
      c = `${author} (${yr}). ${title}. ${source}.${url ? " Retrieved from " + url : ""}`;
    else if (style === "mla")
      c = `${author}. "${title}." ${source}, ${yr}.${url ? " Web. " + url : ""}`;
    else
      c = `${author}. "${title}." ${source} (${yr}).${url ? " " + url : ""}`;
    setCitation(c);
  }

  function copy() {
    navigator.clipboard.writeText(citation);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  const fields = [
    { id: "author", label: "Author(s)", placeholder: "Last, First M." },
    { id: "title", label: "Title of Work", placeholder: "Title of the article or book" },
    { id: "source", label: "Journal / Website / Publisher", placeholder: "Source name" },
    { id: "year", label: "Year", placeholder: "2024" },
    { id: "url", label: "URL (optional)", placeholder: "https://example.com" },
  ];

  return (
    <div>
      <div className="mb-4 flex gap-1 rounded-xl border border-border bg-surface p-1">
        {(["apa", "mla", "chicago"] as Style[]).map((s) => (
          <button key={s} onClick={() => setStyle(s)}
            className="flex-1 rounded-lg py-1.5 text-[13px] font-medium uppercase transition-all"
            style={{ background: style === s ? "#2e2e42" : "transparent", color: style === s ? "#f0f0f8" : "#6b6b85" }}>
            {s}
          </button>
        ))}
      </div>
      <div className="mb-3 space-y-2">
        {fields.map((f) => (
          <div key={f.id}>
            <label className="mb-1 block text-[11px] text-text-3">{f.label}</label>
            <input type="text" placeholder={f.placeholder}
              value={form[f.id as keyof typeof form]}
              onChange={(e) => update(f.id, e.target.value)}
              className="w-full rounded-lg border border-border bg-bg-3 px-3.5 py-2 text-sm text-text outline-none focus:border-accent" />
          </div>
        ))}
      </div>
      <button onClick={generate} className="mb-3 rounded-lg bg-accent px-5 py-2 text-[13px] font-semibold text-white transition-all hover:bg-accent-2">
        Generate Citation
      </button>
      {citation && (
        <>
          <div className="rounded-lg border border-border bg-bg-3 px-3.5 py-3 text-[13px] leading-relaxed text-text">
            {citation}
          </div>
          <button onClick={copy} className="mt-2 rounded-lg border border-border-2 bg-surface-2 px-4 py-2 text-[13px] font-semibold text-text-2 transition-all hover:bg-surface-3">
            {copied ? "✓ Copied!" : "Copy Citation"}
          </button>
        </>
      )}
    </div>
  );
}
