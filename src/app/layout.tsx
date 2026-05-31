import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Toaster } from "@/components/ui/Toaster";

export const metadata: Metadata = {
  title: {
    default: "ToolForge — Free Online Tools Platform",
    template: "%s | ToolForge",
  },
  description:
    "25+ free browser-based tools for images, PDFs, text, developers, and students. No signup required. Works instantly in your browser.",
  keywords: [
    "free online tools",
    "image compressor",
    "pdf tools",
    "word counter",
    "json formatter",
    "base64 encoder",
    "color picker",
    "pomodoro timer",
    "cgpa calculator",
  ],
  authors: [{ name: "ToolForge" }],
  creator: "ToolForge",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://toolforge.app",
    siteName: "ToolForge",
    title: "ToolForge — Free Online Tools Platform",
    description: "25+ free browser-based tools. No signup. Works instantly.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ToolForge — Free Online Tools Platform",
    description: "25+ free browser-based tools. No signup. Works instantly.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
