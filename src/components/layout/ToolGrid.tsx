import type { Tool } from "@/types";

const badgeColors = {
  hot: { bg: "#1f0912", color: "#f43f5e" },
  new: { bg: "#1a1730", color: "#9d8ff9" },
  free: { bg: "#0a1f0f", color: "#22c55e" },
};

interface Props { tools: Tool[] }

export function ToolGrid({ tools }: Props) {
  if (!tools.length) {
    return (
      <div className="py-16 text-center">
        <span className="mb-4 block text-5xl">🔍</span>
        <div className="text-lg font-bold text-text">No tools found</div>
        <div className="mt-2 text-sm text-text-3">Try a different search or category</div>
      </div>
    );
  }

  return (
    <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {tools.map((tool) => (
        <a
          key={tool.id}
          href={`/tools/${tool.slug}`}
          className="group relative overflow-hidden rounded-xl border border-border bg-surface p-[18px] transition-all hover:-translate-y-0.5 hover:border-border-2 hover:shadow-DEFAULT"
        >
          <div className="mb-2.5 flex items-start justify-between">
            <div
              className="flex h-10 w-10 items-center justify-center rounded-xl text-lg font-bold"
              style={{ background: tool.bgColor, color: tool.color }}
            >
              {tool.icon}
            </div>
            {tool.badge && (
              <span
                className="rounded-full px-2 py-0.5 text-[10px] font-bold"
                style={badgeColors[tool.badge]}
              >
                {tool.badge.toUpperCase()}
              </span>
            )}
          </div>
          <div className="mb-1 text-sm font-semibold text-text">{tool.name}</div>
          <div className="text-[12px] leading-relaxed text-text-3">{tool.shortDesc}</div>
          <div className="mt-3 flex items-center justify-between border-t border-border pt-3">
            <span className="text-[11px] text-text-3">👥 {tool.uses} uses</span>
            <span className="text-[12px] text-text-3 transition-all group-hover:translate-x-0.5 group-hover:text-accent-2">
              →
            </span>
          </div>
        </a>
      ))}
    </div>
  );
}
