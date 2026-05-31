"use client";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import type { Category, Tool } from "@/types";
import { CategoryGrid } from "./CategoryGrid";
import { ToolGrid } from "./ToolGrid";

interface Props { categories: Category[]; tools: Tool[] }

function ToolsContent({ categories, tools }: Props) {
  const searchParams = useSearchParams();
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const q = searchParams.get("q");
    if (q) setSearchQuery(q);
  }, [searchParams]);

  const allCategory: Category = {
    id: "all",
    name: "All Tools",
    icon: "⚡",
    color: "#7c6af7",
    bgColor: "#1a1730",
    description: "Browse all tools",
  };

  const filtered = tools.filter((t) => {
    const matchesCat = activeCategory === "all" || t.category === activeCategory;
    const matchesQ =
      !searchQuery ||
      t.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.shortDesc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesQ;
  });

  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-12">
      <h1 className="font-display mb-2 text-3xl font-extrabold tracking-tight text-text">
        All Tools
      </h1>
      <p className="mb-8 text-sm text-text-3">
        {tools.length}+ free browser-based tools — no account required
      </p>

      {/* Search */}
      <div className="relative mb-6 max-w-sm">
        <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-text-3 text-sm">
          🔍
        </span>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search tools..."
          className="w-full rounded-xl border border-border bg-surface py-2.5 pl-9 pr-4 text-sm text-text placeholder-text-3 outline-none transition-all focus:border-accent"
        />
      </div>

      {/* Categories */}
      <div className="mb-8">
        <CategoryGrid
          categories={[allCategory, ...categories]}
          activeId={activeCategory}
          onSelect={setActiveCategory}
        />
      </div>

      <ToolGrid tools={filtered} />
    </section>
  );
}

export function ToolsPageClient(props: Props) {
  return (
    <Suspense fallback={<div className="p-12 text-center text-text-3">Loading tools...</div>}>
      <ToolsContent {...props} />
    </Suspense>
  );
}
