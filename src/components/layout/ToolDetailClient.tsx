"use client";
import { useState } from "react";
import type { Tool, Category } from "@/types";
import { WordCounterTool } from "@/components/tools/WordCounterTool";
import { CaseConverterTool } from "@/components/tools/CaseConverterTool";
import { SlugGeneratorTool } from "@/components/tools/SlugGeneratorTool";
import { RemoveDupesTool } from "@/components/tools/RemoveDupesTool";
import { JsonFormatterTool } from "@/components/tools/JsonFormatterTool";
import { Base64Tool } from "@/components/tools/Base64Tool";
import { ColorPickerTool } from "@/components/tools/ColorPickerTool";
import { RegexTesterTool } from "@/components/tools/RegexTesterTool";
import { CgpaCalculatorTool } from "@/components/tools/CgpaCalculatorTool";
import { PomodoroTool } from "@/components/tools/PomodoroTool";
import { CitationTool } from "@/components/tools/CitationTool";
import { GenericFileTool } from "@/components/tools/GenericFileTool";

const toolMap: Record<string, React.ComponentType> = {
  "word-count": WordCounterTool,
  "char-count": WordCounterTool,
  "case-convert": CaseConverterTool,
  "slug-gen": SlugGeneratorTool,
  "remove-dupes": RemoveDupesTool,
  "json-fmt": JsonFormatterTool,
  "base64": Base64Tool,
  "color-pick": ColorPickerTool,
  "regex-test": RegexTesterTool,
  "cgpa-calc": CgpaCalculatorTool,
  "pomodoro": PomodoroTool,
  "study-timer": PomodoroTool,
  "citation": CitationTool,
};

interface Props {
  tool: Tool;
  category: Category;
  relatedTools: Tool[];
}

export function ToolDetailClient({ tool, category, relatedTools }: Props) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const ToolComponent = toolMap[tool.id] || GenericFileTool;

  return (
    <div className="mx-auto w-full max-w-3xl px-6 py-8">
      {/* Breadcrumb */}
      <nav className="mb-6 flex items-center gap-1.5 text-[12px] text-text-3">
        <a href="/" className="transition-colors hover:text-accent-2">Home</a>
        <span className="opacity-40">/</span>
        <a href={`/tools?cat=${tool.category}`} className="transition-colors hover:text-accent-2">
          {category.name}
        </a>
        <span className="opacity-40">/</span>
        <span className="text-text">{tool.name}</span>
      </nav>

      {/* Tool header */}
      <header className="mb-7">
        <div className="mb-2 flex items-center gap-3.5">
          <div
            className="flex h-12 w-12 items-center justify-center rounded-xl text-[22px] font-bold"
            style={{ background: tool.bgColor, color: tool.color }}
          >
            {tool.icon}
          </div>
          <h1 className="font-display text-[28px] font-extrabold tracking-tight text-text">
            {tool.name}
          </h1>
        </div>
        <p className="text-[15px] leading-relaxed text-text-2">{tool.longDesc}</p>
      </header>

      {/* Tool panel */}
      <div className="mb-8 overflow-hidden rounded-2xl border border-border bg-surface">
        <div className="flex items-center justify-between border-b border-border px-5 py-3.5">
          <span className="text-[13px] font-semibold text-text-2">{tool.name}</span>
          <span className="text-[12px] text-text-3">👥 {tool.uses} uses</span>
        </div>
        <div className="p-5">
          <ToolComponent />
        </div>
      </div>

      {/* FAQ */}
      <div className="mb-8">
        <h2 className="font-display mb-4 text-xl font-bold tracking-tight text-text">
          ❓ Frequently Asked Questions
        </h2>
        <div className="divide-y divide-border">
          {tool.faqs.map((faq, i) => (
            <div key={i} className="py-4">
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="flex w-full items-center justify-between text-left text-[14px] font-semibold text-text"
              >
                {faq.q}
                <span className="ml-4 shrink-0 text-text-3">
                  {openFaq === i ? "−" : "+"}
                </span>
              </button>
              {openFaq === i && (
                <p className="mt-2 text-[13px] leading-relaxed text-text-2">{faq.a}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Related tools */}
      {relatedTools.length > 0 && (
        <div>
          <h2 className="font-display mb-4 text-xl font-bold tracking-tight text-text">
            🔗 Related Tools
          </h2>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
            {relatedTools.map((r) => (
              <a
                key={r.id}
                href={`/tools/${r.slug}`}
                className="group rounded-xl border border-border bg-surface p-3.5 transition-all hover:border-border-2 hover:shadow-DEFAULT"
              >
                <div className="mb-2 flex items-center gap-2.5">
                  <div
                    className="flex h-8 w-8 items-center justify-center rounded-lg text-sm font-bold"
                    style={{ background: r.bgColor, color: r.color }}
                  >
                    {r.icon}
                  </div>
                  <span className="text-[13px] font-semibold text-text">{r.name}</span>
                </div>
                <div className="text-[11px] leading-relaxed text-text-3">{r.shortDesc}</div>
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
