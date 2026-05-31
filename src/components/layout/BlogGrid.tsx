import type { BlogPost } from "@/types";

interface Props { posts: BlogPost[] }

export function BlogGrid({ posts }: Props) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
      {posts.map((post) => (
        <article
          key={post.id}
          className="group cursor-pointer overflow-hidden rounded-2xl border border-border bg-surface transition-all hover:-translate-y-0.5 hover:border-border-2 hover:shadow-DEFAULT"
        >
          <div className="flex h-36 items-center justify-center bg-gradient-to-br from-accent-bg to-bg-4 text-5xl">
            {post.icon}
          </div>
          <div className="p-[18px]">
            <div className="mb-1.5 text-[11px] font-bold uppercase tracking-[1px] text-accent-2">
              {post.category}
            </div>
            <h3 className="mb-1.5 font-display text-[15px] font-bold leading-snug text-text">
              {post.title}
            </h3>
            <p className="text-[12px] leading-relaxed text-text-3">{post.excerpt}</p>
            <div className="mt-3 flex items-center gap-3 border-t border-border pt-3 text-[11px] text-text-3">
              <span>📅 {post.date}</span>
              <span>⏱️ {post.readTime} read</span>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
