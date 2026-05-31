"use client";
import { useState } from "react";
import { convertCase } from "@/lib/utils";

const modes = [
  { id: "upper", label: "UPPERCASE" },
  { id: "lower", label: "lowercase" },
  { id: "title", label: "Title Case" },
  { id: "sentence", label: "Sentence case" },
  { id: "camel", label: "camelCase" },
  { id: "pascal", label: "PascalCase" },
  { id: "snake", label: "snake_case" },
  { id: "kebab", label: "kebab-case" },
  { id: "constant", label: "CONSTANT_CASE" },
];

export function CaseConverterTool() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const [copied, setCopied] = useState(false);

  function handleConvert(mode: string) {
    setResult(convertCase(input, mode));
  }

  function copyResult() {
    navigator.clipboard.writeText(result);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div>
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter your text here to convert case…"
        className="mb-3 w-full resize-y rounded-lg border border-border bg-bg-3 px-3.5 py-3 text-sm text-text placeholder-text-3 outline-none transition-all focus:border-accent"
        style={{ minHeight: 120 }}
      />
      <div className="mb-3 flex flex-wrap gap-1.5">
        {modes.map((m) => (
          <button
            key={m.id}
            onClick={() => handleConvert(m.id)}
            className="rounded-full border border-border px-3 py-1 text-[12px] font-medium text-text-2 transition-all hover:border-accent hover:bg-accent-bg hover:text-accent-2"
          >
            {m.label}
          </button>
        ))}
      </div>
      {result && (
        <>
          <div className="min-h-[60px] rounded-lg border border-border bg-bg-3 px-3.5 py-3 font-mono text-[13px] text-text whitespace-pre-wrap">
            {result}
          </div>
          <div className="mt-2 flex gap-2">
            <button
              onClick={copyResult}
              className="rounded-lg bg-accent px-4 py-2 text-[13px] font-semibold text-white transition-all hover:bg-accent-2"
            >
              {copied ? "✓ Copied!" : "Copy Result"}
            </button>
            <button
              onClick={() => { setInput(""); setResult(""); }}
              className="rounded-lg border border-border-2 bg-surface-2 px-4 py-2 text-[13px] font-semibold text-text-2 transition-all hover:bg-surface-3"
            >
              Clear
            </button>
          </div>
        </>
      )}
    </div>
  );
}
