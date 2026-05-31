import type { Category } from "@/types";

interface Props {
  categories: Category[];
  activeId?: string;
  onSelect?: (id: string) => void;
}

export function CategoryGrid({ categories, activeId, onSelect }: Props) {
  return (
    <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 md:grid-cols-5">
      {categories.map((cat) => {
        const isActive = activeId === cat.id;
        return (
          <button
            key={cat.id}
            onClick={() => onSelect?.(cat.id)}
            className="group rounded-xl border px-3.5 py-4 text-center transition-all hover:-translate-y-0.5 hover:shadow-DEFAULT"
            style={{
              background: isActive ? cat.bgColor : "#1e1e2e",
              borderColor: isActive ? cat.color : "#2a2a3d",
            }}
          >
            <span className="mb-2 block text-2xl">{cat.icon}</span>
            <span className="block text-[13px] font-semibold text-text">{cat.name}</span>
            <span className="mt-0.5 block text-[11px] text-text-3">
              {cat.description.split(" ").slice(0, 3).join(" ")}…
            </span>
          </button>
        );
      })}
    </div>
  );
}
