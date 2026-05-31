import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { tools, categories, getCategoryById } from "@/lib/data";
import { ToolDetailClient } from "@/components/layout/ToolDetailClient";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return tools.map((t) => ({ id: t.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const tool = tools.find((t) => t.slug === id);
  if (!tool) return { title: "Tool Not Found" };
  const cat = getCategoryById(tool.category);
  return {
    title: `${tool.name} — Free Online Tool`,
    description: tool.longDesc,
    keywords: tool.keywords,
    openGraph: {
      title: `${tool.name} — Free Online Tool | ToolForge`,
      description: tool.longDesc,
    },
  };
}

export default async function ToolPage({ params }: Props) {
  const { id } = await params;
  const tool = tools.find((t) => t.slug === id);
  if (!tool) notFound();

  const category = getCategoryById(tool.category);
  const related = tools.filter((t) => t.category === tool.category && t.id !== tool.id).slice(0, 4);

  return (
    <ToolDetailClient tool={tool} category={category!} relatedTools={related} />
  );
}
