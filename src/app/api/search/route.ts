import { NextRequest, NextResponse } from "next/server";
import { searchTools } from "@/lib/data";

export async function GET(req: NextRequest) {
  const q = req.nextUrl.searchParams.get("q") ?? "";
  if (!q.trim()) return NextResponse.json({ results: [] });
  const results = searchTools(q).slice(0, 8).map((t) => ({
    id: t.id, name: t.name, slug: t.slug, shortDesc: t.shortDesc,
    icon: t.icon, category: t.category,
  }));
  return NextResponse.json({ results });
}
