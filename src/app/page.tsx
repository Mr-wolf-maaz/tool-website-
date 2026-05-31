import type { Metadata } from "next";
import { HeroSection } from "@/components/layout/HeroSection";
import { CategoryGrid } from "@/components/layout/CategoryGrid";
import { ToolGrid } from "@/components/layout/ToolGrid";
import { BlogGrid } from "@/components/layout/BlogGrid";
import { NewsletterSection } from "@/components/layout/NewsletterSection";
import { categories, getTrendingTools, blogPosts } from "@/lib/data";

export const metadata: Metadata = {
  title: "ToolForge — Free Online Tools Platform",
  description:
    "25+ free browser-based tools for images, PDFs, text, developers, and students. Compress images, merge PDFs, count words, format JSON, and more — no signup required.",
};

export default function HomePage() {
  const trending = getTrendingTools();

  return (
    <>
      <HeroSection />

      <section className="mx-auto w-full max-w-6xl px-6 py-12">
        <div className="mb-7 flex items-center justify-between">
          <h2 className="font-display text-xl font-bold tracking-tight text-text">
            Browse by Category
          </h2>
        </div>
        <CategoryGrid categories={categories} />
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 pb-12">
        <div className="mb-7 flex items-center justify-between">
          <h2 className="font-display text-xl font-bold tracking-tight text-text">
            🔥 Trending Tools
          </h2>
          <a href="/tools" className="text-sm text-accent-2 hover:text-text transition-colors">
            View all →
          </a>
        </div>
        <ToolGrid tools={trending} />
      </section>

      <NewsletterSection />

      <section className="mx-auto w-full max-w-6xl px-6 py-12">
        <div className="mb-7 flex items-center justify-between">
          <h2 className="font-display text-xl font-bold tracking-tight text-text">
            📝 Latest from Blog
          </h2>
          <a href="/blog" className="text-sm text-accent-2 hover:text-text transition-colors">
            All posts →
          </a>
        </div>
        <BlogGrid posts={blogPosts.slice(0, 3)} />
      </section>
    </>
  );
}
