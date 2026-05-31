import { categories, tools } from "@/lib/data";

export function Footer() {
  const toolCols = [
    { title: "Image Tools", cat: "image" },
    { title: "Text Tools", cat: "text" },
    { title: "Dev Tools", cat: "dev" },
  ];

  return (
    <footer className="mt-auto border-t border-border bg-bg-2 px-6 pb-6 pt-12">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <a href="/" className="mb-3 flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-accent to-teal text-base">
                ⚡
              </div>
              <span className="font-display text-lg font-extrabold tracking-tight text-text">
                Tool<span className="text-accent-2">Forge</span>
              </span>
            </a>
            <p className="max-w-[240px] text-[13px] leading-relaxed text-text-3">
              The all-in-one web tools platform for students, creators, and developers.
              Free, fast, and browser-based.
            </p>
          </div>

          {/* Tool columns */}
          {toolCols.map((col) => (
            <div key={col.cat}>
              <h4 className="mb-3.5 text-[12px] font-bold uppercase tracking-[0.8px] text-text">
                {col.title}
              </h4>
              <ul className="space-y-1.5">
                {tools
                  .filter((t) => t.category === col.cat)
                  .slice(0, 5)
                  .map((t) => (
                    <li key={t.id}>
                      <a
                        href={`/tools/${t.slug}`}
                        className="block text-[13px] text-text-3 transition-colors hover:text-text"
                      >
                        {t.name}
                      </a>
                    </li>
                  ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-border pt-6 text-[12px] text-text-3">
          <span>© 2025 ToolForge. Built with ❤️ for the web.</span>
          <div className="flex gap-5">
            {["Privacy Policy", "Terms of Service", "Sitemap", "Contact"].map((l) => (
              <a key={l} href="#" className="transition-colors hover:text-text">
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
