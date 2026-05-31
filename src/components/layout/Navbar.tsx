"use client";
import { useState, useRef, useEffect } from "react";
import { searchTools } from "@/lib/data";
import type { Tool } from "@/types";

export function Navbar() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Tool[]>([]);
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  function handleSearch(q: string) {
    setQuery(q);
    if (!q.trim()) { setResults([]); setOpen(false); return; }
    const found = searchTools(q).slice(0, 6);
    setResults(found);
    setOpen(found.length > 0);
  }

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/tools", label: "All Tools" },
    { href: "/blog", label: "Blog" },
    { href: "/pricing", label: "Pricing" },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-bg/85 backdrop-blur-xl">
      <div className="mx-auto flex h-[60px] max-w-6xl items-center gap-6 px-6">
        {/* Logo */}
        <a href="/" className="flex shrink-0 items-center gap-2.5 no-underline">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-accent to-teal text-base">
            ⚡
          </div>
          <span className="font-display text-lg font-extrabold tracking-tight text-text">
            Tool<span className="text-accent-2">Forge</span>
          </span>
        </a>

        {/* Search */}
        <div className="relative flex-1 max-w-sm" ref={ref}>
          <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-text-3 text-sm">
            🔍
          </span>
          <input
            type="text"
            value={query}
            onChange={(e) => handleSearch(e.target.value)}
            onFocus={() => results.length > 0 && setOpen(true)}
            placeholder="Search 25+ tools..."
            className="w-full rounded-[8px] border border-border bg-surface py-2 pl-9 pr-3 text-sm text-text placeholder-text-3 outline-none transition-all focus:border-accent focus:bg-bg-2"
          />
          {open && (
            <div className="absolute top-[calc(100%+8px)] left-0 right-0 z-50 overflow-hidden rounded-xl border border-border-2 bg-surface shadow-lg">
              {results.map((t) => (
                <a
                  key={t.id}
                  href={`/tools/${t.slug}`}
                  className="flex items-center gap-2.5 px-3.5 py-2.5 transition-colors hover:bg-surface-2"
                >
                  <div
                    className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md text-xs font-bold"
                    style={{ background: t.bgColor, color: t.color }}
                  >
                    {t.icon}
                  </div>
                  <div>
                    <div className="text-[13px] font-medium text-text">{t.name}</div>
                    <div className="text-[11px] text-text-3">{t.shortDesc}</div>
                  </div>
                </a>
              ))}
            </div>
          )}
        </div>

        {/* Nav links */}
        <div className="ml-auto hidden items-center gap-1 md:flex">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-[8px] px-3 py-1.5 text-[13px] font-medium text-text-2 transition-colors hover:bg-surface hover:text-text"
            >
              {l.label}
            </a>
          ))}
        </div>

        <a
          href="/pricing"
          className="shrink-0 rounded-[8px] bg-accent px-4 py-1.5 text-[13px] font-semibold text-white transition-all hover:bg-accent-2 hover:-translate-y-px"
        >
          Get Pro ✨
        </a>
      </div>
    </nav>
  );
}
