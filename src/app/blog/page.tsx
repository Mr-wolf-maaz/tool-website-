import type { Metadata } from "next";
import { BlogGrid } from "@/components/layout/BlogGrid";
import { BLOG_POSTS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Blog — Tips, Guides & Tutorials",
  description:
    "Learn how to use free online tools effectively. Tips on image compression, PDF workflows, developer productivity, and student tools.",
};

export default function BlogPage() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-12">
      <div className="mb-2">
        <h1 className="font-display text-3xl font-extrabold tracking-tight text-text mb-2">
          Blog & Tutorials
        </h1>
        <p className="text-text-3 text-sm">
          Tips, guides, and tutorials on productivity and web tools
        </p>
      </div>
      <div className="mt-8">
        <BlogGrid posts={blogPosts} />
      </div>
    </section>
  );
}
