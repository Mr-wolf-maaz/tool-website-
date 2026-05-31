"use client";
import { useState } from "react";
import { searchTools } from "@/lib/data";

export function HeroSection() {
  const [query, setQuery] = useState("");

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === "Enter") {
      const results = searchTools(query);
      if (results.length === 1) window.location.href = `/tools/${results[0].slug}`;
      else window.location.href = `/tools?q=${encodeURIComponent(query)}`;
    }
  }

  return (
    <section className="relative overflow-hidden px-6 pb-16 pt-20 text-center">
      {/* Radial glow background */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% -20%, rgba(124,106,247,.12), transparent)",
        }}
      />

      {/* Badge */}
      <div className="mb-6 inline-flex items-center gap-1.5 rounded-full border border-accent-border bg-accent-bg px-3.5 py-1 text-[12px] font-medium text-accent-2">
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
        25+ Free Tools & Counting
      </div>

      {/* Headline */}
      <h1 className="font-display mx-auto mb-5 max-w-3xl text-4xl font-extrabold leading-[1.1] tracking-[-2px] text-text md:text-6xl">
        The Only Toolkit
        <br />
        You&apos;ll Ever{" "}
        <span className="grad-text">Need</span>
      </h1>

      <p className="mx-auto mb-9 max-w-lg text-lg font-light leading-relaxed text-text-2">
        Image compression, PDF tools, text utilities, developer tools, and student
        helpers — all free, no signup required.
      </p>

      {/* Search */}
      <div className="relative mx-auto max-w-xl">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Search tools… try 'compress image' or 'word count'"
          className="w-full rounded-2xl border border-border-2 bg-surface py-4 pl-5 pr-14 text-base text-text placeholder-text-3 shadow-DEFAULT outline-none transition-all focus:border-accent focus:shadow-glow"
        />
        <button
          onClick={() => {
            const results = searchTools(query);
            if (results.length === 1) window.location.href = `/tools/${results[0].slug}`;
            else window.location.href = `/tools?q=${encodeURIComponent(query)}`;
          }}
          className="absolute right-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-xl bg-accent text-white transition-all hover:bg-accent-2 hover:scale-105"
        >
          →
        </button>
      </div>

      {/* Stats */}
      <div className="mt-12 flex flex-wrap justify-center gap-10">
        {[
          { num: "25+", label: "Free Tools" },
          { num: "0", label: "Signups Needed" },
          { num: "100%", label: "Browser-Based" },
          { num: "5", label: "Categories" },
        ].map((s) => (
          <div key={s.label} className="text-center">
            <div className="font-display text-3xl font-extrabold tracking-[-1px] text-text">
              {s.num}
            </div>
            <div className="mt-0.5 text-[12px] text-text-3">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
