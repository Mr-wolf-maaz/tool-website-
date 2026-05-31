"use client";
import { useState } from "react";
import { hexToRgb, rgbToHsl } from "@/lib/utils";

const swatches = [
  "#7c6af7","#f43f5e","#22c55e","#38bdf8","#f59e0b","#fb923c",
  "#2dd4c0","#ec4899","#8b5cf6","#06b6d4","#84cc16","#f97316",
  "#ef4444","#6366f1","#10b981","#eab308",
];

export function ColorPickerTool() {
  const [hex, setHex] = useState("#7c6af7");
  const [copied, setCopied] = useState("");

  const rgb = hexToRgb(hex) ?? { r: 124, g: 106, b: 247 };
  const hsl = rgbToHsl(rgb.r, rgb.g, rgb.b);

  function copy(text: string, label: string) {
    navigator.clipboard.writeText(text);
    setCopied(label);
    setTimeout(() => setCopied(""), 2000);
  }

  function handleHexInput(val: string) {
    if (/^#[0-9a-f]{6}$/i.test(val)) setHex(val);
  }

  return (
    <div>
      <div className="mb-4 flex gap-4 flex-wrap">
        <input type="color" value={hex} onChange={(e) => setHex(e.target.value)}
          className="h-20 w-20 cursor-pointer rounded-xl border-none bg-none" />
        <div className="flex-1 min-w-[200px]">
          <div className="mb-2 grid grid-cols-8 gap-1.5">
            {swatches.map((s) => (
              <button key={s} onClick={() => setHex(s)}
                className="aspect-square rounded-md border-2 transition-all hover:scale-110"
                style={{ background: s, borderColor: hex === s ? "#fff" : "transparent" }} />
            ))}
          </div>
        </div>
      </div>
      <div className="mb-4 h-12 rounded-xl border border-border transition-all" style={{ background: hex }} />
      <div className="mb-4 grid grid-cols-2 gap-2 md:grid-cols-4">
        {[
          { label: "HEX", value: hex },
          { label: "RGB", value: `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})` },
          { label: "HSL", value: `hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)` },
          { label: "CSS Var", value: `--color: ${hex}` },
        ].map((item) => (
          <button key={item.label} onClick={() => copy(item.value, item.label)}
            className="rounded-lg border border-border bg-bg-3 px-3 py-2 text-left transition-all hover:border-accent"
            style={{ borderColor: copied === item.label ? "#22c55e" : undefined }}>
            <div className="text-[10px] text-text-3 mb-0.5">{item.label}</div>
            <div className="font-mono text-[11px] text-text truncate">{item.value}</div>
            <div className="text-[10px] mt-0.5" style={{ color: copied === item.label ? "#22c55e" : "#6b6b85" }}>
              {copied === item.label ? "✓ Copied!" : "Click to copy"}
            </div>
          </button>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-2">
        <div>
          <label className="mb-1 block text-[11px] text-text-3">HEX Input</label>
          <input type="text" defaultValue={hex} onBlur={(e) => handleHexInput(e.target.value)}
            className="w-full rounded-lg border border-border bg-bg-3 px-3 py-2 font-mono text-sm text-text outline-none focus:border-accent" />
        </div>
        <div className="grid grid-cols-3 gap-1.5">
          {(["r","g","b"] as const).map((ch) => (
            <div key={ch}>
              <label className="mb-1 block text-[11px] text-text-3 uppercase">{ch}</label>
              <input type="number" min={0} max={255} value={rgb[ch]}
                onChange={(e) => {
                  const updated = { ...rgb, [ch]: Math.min(255, Math.max(0, +e.target.value)) };
                  setHex(`#${[updated.r,updated.g,updated.b].map(v=>v.toString(16).padStart(2,"0")).join("")}`);
                }}
                className="w-full rounded-lg border border-border bg-bg-3 px-2 py-2 text-sm text-text outline-none focus:border-accent" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
