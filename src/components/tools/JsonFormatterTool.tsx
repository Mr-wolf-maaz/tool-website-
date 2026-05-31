"use client";
import { useState } from "react";

function syntaxHighlight(json: string): string {
  return json.replace(
    /("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+-]?\d+)?)/g,
    (m) => {
      let cls = "json-number";
      if (/^"/.test(m)) cls = /:$/.test(m) ? "json-key" : "json-string";
      else if (/true|false/.test(m)) cls = "json-bool";
      else if (/null/.test(m)) cls = "json-null";
      return `<span class="${cls}">${m}</span>`;
    }
  );
}

export function JsonFormatterTool() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const [indent, setIndent] = useState(2);

  function format() {
    try {
      const parsed = JSON.parse(input);
      setOutput(JSON.stringify(parsed, null, indent));
      setError("");
    } catch (e) {
      setError((e as Error).message);
      setOutput("");
    }
  }

  function minify() {
    try {
      setOutput(JSON.stringify(JSON.parse(input)));
      setError("");
    } catch (e) {
      setError((e as Error).message);
    }
  }

  function validate() {
    try {
      JSON.parse(input);
      setError("✅ Valid JSON!");
    } catch (e) {
      setError("❌ " + (e as Error).message);
    }
  }

  return (
    <div>
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder={'Paste your JSON here… {"name":"John","age":30}'}
        className="mb-3 w-full resize-y rounded-lg border border-border bg-bg-3 px-3.5 py-3 font-mono text-[13px] text-text placeholder-text-3 outline-none transition-all focus:border-accent"
        style={{ minHeight: 140 }}
      />
      <div className="mb-3 flex flex-wrap items-center gap-2">
        <button onClick={format} className="rounded-lg bg-accent px-4 py-2 text-[13px] font-semibold text-white transition-all hover:bg-accent-2">
          Format
        </button>
        <button onClick={minify} className="rounded-lg border border-border-2 bg-surface-2 px-4 py-2 text-[13px] font-semibold text-text-2 transition-all hover:bg-surface-3">
          Minify
        </button>
        <button onClick={validate} className="rounded-lg border border-border-2 bg-surface-2 px-4 py-2 text-[13px] font-semibold text-text-2 transition-all hover:bg-surface-3">
          Validate
        </button>
        <button onClick={() => { setInput(""); setOutput(""); setError(""); }} className="rounded-lg border border-border-2 bg-surface-2 px-4 py-2 text-[13px] font-semibold text-text-2 transition-all hover:bg-surface-3">
          Clear
        </button>
        <div className="ml-auto flex items-center gap-1.5 text-[12px] text-text-3">
          Indent:
          {[2, 4].map((n) => (
            <button
              key={n}
              onClick={() => setIndent(n)}
              className="rounded px-2 py-0.5 text-[11px] transition-all"
              style={{ background: indent === n ? "#1a1730" : "transparent", color: indent === n ? "#9d8ff9" : "#6b6b85" }}
            >
              {n}
            </button>
          ))}
        </div>
      </div>
      {error && (
        <div className="mb-3 rounded-lg border border-border bg-bg-3 px-3 py-2.5 font-mono text-[12px]"
          style={{ color: error.startsWith("✅") ? "#22c55e" : "#f43f5e" }}>
          {error}
        </div>
      )}
      {output && (
        <>
          <div
            className="overflow-x-auto rounded-lg border border-border bg-bg-3 px-3.5 py-3 font-mono text-[12px] leading-relaxed"
            dangerouslySetInnerHTML={{ __html: syntaxHighlight(output) }}
            style={{ minHeight: 100, whiteSpace: "pre" }}
          />
          <button
            onClick={() => navigator.clipboard.writeText(output)}
            className="mt-2 rounded-lg border border-border-2 bg-surface-2 px-4 py-2 text-[13px] font-semibold text-text-2 transition-all hover:bg-surface-3"
          >
            Copy Result
          </button>
        </>
      )}
    </div>
  );
}
