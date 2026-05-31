"use client";
import { useState } from "react";

export function RemoveDupesTool() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const [info, setInfo] = useState("");
  const [sort, setSort] = useState(false);
  const [caseSensitive, setCaseSensitive] = useState(true);

  function process() {
    const lines = input.split("\n");
    const seen = new Set<string>();
    const unique = lines.filter((l) => {
      const key = caseSensitive ? l : l.toLowerCase();
      if (seen.has(key) || !l.trim()) return false;
      seen.add(key);
      return true;
    });
    const sorted = sort ? [...unique].sort() : unique;
    setResult(sorted.join("\n"));
    setInfo(`${sorted.length} unique lines (removed ${lines.length - sorted.length} duplicates)`);
  }

  return (
    <div>
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Paste lines here (one per line)…"
        className="mb-3 w-full resize-y rounded-lg border border-border bg-bg-3 px-3.5 py-3 text-sm text-text placeholder-text-3 outline-none transition-all focus:border-accent"
        style={{ minHeight: 140 }}
      />
      <div className="mb-3 flex flex-wrap items-center gap-3 text-[13px]">
        <label className="flex cursor-pointer items-center gap-1.5 text-text-2">
          <input
            type="checkbox"
            checked={sort}
            onChange={(e) => setSort(e.target.checked)}
            className="accent-accent"
          />
          Sort A–Z
        </label>
        <label className="flex cursor-pointer items-center gap-1.5 text-text-2">
          <input
            type="checkbox"
            checked={caseSensitive}
            onChange={(e) => setCaseSensitive(e.target.checked)}
            className="accent-accent"
          />
          Case-sensitive
        </label>
      </div>
      <div className="mb-3 flex gap-2">
        <button
          onClick={process}
          className="rounded-lg bg-accent px-4 py-2 text-[13px] font-semibold text-white transition-all hover:bg-accent-2"
        >
          Remove Duplicates
        </button>
        <button
          onClick={() => { setInput(""); setResult(""); setInfo(""); }}
          className="rounded-lg border border-border-2 bg-surface-2 px-4 py-2 text-[13px] font-semibold text-text-2 transition-all hover:bg-surface-3"
        >
          Clear
        </button>
      </div>
      {result && (
        <>
          <div className="mb-1.5 text-[12px] text-text-3">{info}</div>
          <div className="min-h-[100px] rounded-lg border border-border bg-bg-3 px-3.5 py-3 font-mono text-[13px] text-text whitespace-pre-wrap">
            {result}
          </div>
          <button
            onClick={() => navigator.clipboard.writeText(result)}
            className="mt-2 rounded-lg border border-border-2 bg-surface-2 px-4 py-2 text-[13px] font-semibold text-text-2 transition-all hover:bg-surface-3"
          >
            Copy Result
          </button>
        </>
      )}
    </div>
  );
}
