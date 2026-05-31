"use client";
import { useState } from "react";

export function WordCounterTool() {
  const [text, setText] = useState("");

  const words = text.trim() ? text.trim().split(/\s+/).length : 0;
  const chars = text.length;
  const charsNoSpace = text.replace(/\s/g, "").length;
  const sentences = text.split(/[.!?]+/).filter((s) => s.trim()).length;
  const paras = text.split(/\n\n+/).filter((p) => p.trim()).length || (text.trim() ? 1 : 0);
  const readTime = Math.ceil(words / 200) || 0;

  const stats = [
    { num: words, label: "Words" },
    { num: chars, label: "Characters" },
    { num: charsNoSpace, label: "No Spaces" },
    { num: sentences, label: "Sentences" },
    { num: paras, label: "Paragraphs" },
    { num: readTime, label: "Min Read" },
  ];

  return (
    <div>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Paste or type your text here…"
        className="mb-3 w-full resize-y rounded-lg border border-border bg-bg-3 px-3.5 py-3 text-sm text-text placeholder-text-3 outline-none transition-all focus:border-accent focus:shadow-glow"
        style={{ minHeight: 180 }}
      />
      <div className="grid grid-cols-3 gap-2 md:grid-cols-6">
        {stats.map((s) => (
          <div key={s.label} className="rounded-lg border border-border bg-bg-3 p-3 text-center">
            <div className="font-display text-xl font-extrabold text-text">{s.num}</div>
            <div className="mt-0.5 text-[11px] text-text-3">{s.label}</div>
          </div>
        ))}
      </div>
      <div className="mt-3 flex gap-2">
        <button
          onClick={() => setText("")}
          className="rounded-lg border border-border-2 bg-surface-2 px-4 py-2 text-[13px] font-semibold text-text-2 transition-all hover:bg-surface-3 hover:text-text"
        >
          Clear
        </button>
        <button
          onClick={() => navigator.clipboard.writeText(text)}
          className="rounded-lg bg-accent px-4 py-2 text-[13px] font-semibold text-white transition-all hover:bg-accent-2"
        >
          Copy Text
        </button>
      </div>
    </div>
  );
}
