import type { Metadata } from "next";
import { ToolsPageClient } from "@/components/layout/ToolsPageClient";
import { categories, tools } from "@/lib/data";

export const metadata: Metadata = {
  title: "All Free Online Tools",
  description:
    "Browse all 25+ free tools: image compressor, PDF merger, word counter, JSON formatter, CGPA calculator, Pomodoro timer, and much more.",
};

export default function ToolsPage() {
  return <ToolsPageClient categories={categories} tools={tools} />;
}
