"use client";
import { useState } from "react";

export function Base64Tool() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [mode, setMode] = useState<"encode" | "decode">("encode");
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);

  function process() {
    setError("");
    try {
      if (mode === "encode") {
        setOutput(btoa(unescape(encodeURIComponent(input))));
      } else {
        setOutput(decodeURIComponent(escape(atob(input))));
      }
    } catch {
      setError(mode === "encode" ? "Encoding failed." : "Invalid Base64 input.");
    }
  }

  function copy() {
    navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div>
      <div className="mb-3 flex gap-1 rounded-xl border border-border bg-surface p-1">
        {(["encode", "decode"] as const).map((m) => (
          <button
            key={m}
            onClick={() => { setMode(m); setOutput(""); setError(""); }}
            className="flex-1 rounded-lg py-1.5 text-[13px] font-medium capitalize transition-all"
            style={{ background: mode === m ? "#2e2e42" : "transparent", color: mode === m ? "#f0f0f8" : "#a8a8c0" }}
          >
            {m}
          </button>
        ))}
      </div>
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder={mode === "encode" ? "Enter text to encode…" : "Enter Base64 to decode…"}
        className="mb-3 w-full resize-y rounded-lg border border-border bg-bg-3 px-3.5 py-3 font-mono text-sm text-text placeholder-text-3 outline-none transition-all focus:border-accent"
        style={{ minHeight: 100 }}
      />
      <div className="mb-3 flex gap-2">
        <button onClick={process} className="rounded-lg bg-accent px-4 py-2 text-[13px] font-semibold text-white transition-all hover:bg-accent-2">
          {mode === "encode" ? "Encode to Base64" : "Decode from Base64"}
        </button>
        <button onClick={() => { setInput(""); setOutput(""); setError(""); }}
          className="rounded-lg border border-border-2 bg-surface-2 px-4 py-2 text-[13px] font-semibold text-text-2 transition-all hover:bg-surface-3">
          Clear
        </button>
      </div>
      {error && <div className="mb-3 text-[12px] text-rose">{error}</div>}
      {output && (
        <>
          <div className="min-h-[60px] rounded-lg border border-border bg-bg-3 px-3.5 py-3 font-mono text-[13px] text-text break-all">
            {output}
          </div>
          <button onClick={copy} className="mt-2 rounded-lg border border-border-2 bg-surface-2 px-4 py-2 text-[13px] font-semibold text-text-2 transition-all hover:bg-surface-3">
            {copied ? "✓ Copied!" : "Copy Result"}
          </button>
        </>
      )}
    </div>
  );
}
