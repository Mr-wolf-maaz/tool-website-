"use client";
import { useState, useRef } from "react";

export function GenericFileTool() {
  const [file, setFile] = useState<File | null>(null);
  const [processed, setProcessed] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  function handleFile(f: File) { setFile(f); setProcessed(false); }

  return (
    <div>
      <div
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => { e.preventDefault(); const f = e.dataTransfer.files[0]; if (f) handleFile(f); }}
        onClick={() => inputRef.current?.click()}
        className="mb-4 cursor-pointer rounded-xl border-2 border-dashed border-border-2 bg-bg-3 px-6 py-10 text-center transition-all hover:border-accent hover:bg-accent-bg">
        <input ref={inputRef} type="file" className="hidden" onChange={(e) => { const f = e.target.files?.[0]; if (f) handleFile(f); }} />
        <div className="mb-3 text-4xl">📁</div>
        <div className="text-[14px] text-text-2">Drop your file here or click to browse</div>
        <div className="mt-1 text-[12px] text-text-3">Secure browser-based processing</div>
      </div>
      {file && (
        <div className="mb-4 flex items-center gap-3 rounded-xl border border-border bg-bg-3 px-4 py-3">
          <span className="text-2xl">📄</span>
          <div>
            <div className="text-[13px] font-semibold text-text">{file.name}</div>
            <div className="text-[11px] text-text-3">{(file.size / 1024).toFixed(1)} KB</div>
          </div>
        </div>
      )}
      <div className="flex gap-2">
        <button onClick={() => { if (file) setProcessed(true); }}
          disabled={!file}
          className="rounded-lg bg-accent px-5 py-2 text-[13px] font-semibold text-white transition-all hover:bg-accent-2 disabled:opacity-40">
          {processed ? "✓ Processed!" : "Process File"}
        </button>
        {processed && (
          <button onClick={() => {}} className="rounded-lg border border-border-2 bg-surface-2 px-5 py-2 text-[13px] font-semibold text-text-2 transition-all hover:bg-surface-3">
            ⬇ Download Result
          </button>
        )}
      </div>
    </div>
  );
}
