# ⚡ ToolForge — Unified Web Tools Platform

A production-ready, SEO-optimized web tools platform built with **Next.js 15**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

## 🚀 Features

- **25+ Free Tools** across 5 categories
- **Zero signup required** — all tools work instantly
- **Browser-based processing** — files never leave the user's device
- **SEO optimized** — dynamic metadata, sitemap, robots.txt, OpenGraph
- **Mobile-first** responsive design
- **Dark theme** premium SaaS aesthetic
- **Monetization-ready** — AdSense placeholders, pricing tiers, Pro upgrade flow

## 🛠️ Tool Categories

| Category | Tools |
|----------|-------|
| 🖼️ Image | Compressor, Resizer, JPG→PNG, PNG→JPG, Cropper |
| 📄 PDF | Merge, Split, Compress, PDF→Image |
| ✏️ Text | Word Counter, Character Counter, Case Converter, Slug Generator, Remove Duplicates |
| ⚙️ Dev | JSON Formatter, Base64 Encoder/Decoder, Color Picker, Regex Tester |
| 🎓 Student | CGPA Calculator, Study Timer, Pomodoro Timer, Citation Generator |

## 📦 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 3
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel (optimized)

## 🏁 Getting Started

### Prerequisites
- Node.js 18+
- npm or pnpm

### Installation

```bash
# Clone the repo
git clone https://github.com/yourusername/toolforge.git
cd toolforge

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm run start
```

## 🚀 Deployment (Vercel)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import your repository
4. Set environment variables (see `.env.example`)
5. Click **Deploy**

That's it! Vercel auto-detects Next.js and configures everything.

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx            # Home page
│   ├── layout.tsx          # Root layout + metadata
│   ├── sitemap.ts          # Auto-generated sitemap
│   ├── robots.ts           # robots.txt
│   ├── tools/
│   │   ├── page.tsx        # All tools listing
│   │   └── [id]/page.tsx   # Individual tool pages
│   ├── blog/page.tsx       # Blog listing
│   ├── pricing/page.tsx    # Pricing page
│   └── api/search/         # Search API route
├── components/
│   ├── layout/             # Page-level components
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── HeroSection.tsx
│   │   ├── ToolDetailClient.tsx
│   │   └── ...
│   ├── tools/              # Individual tool components
│   │   ├── WordCounterTool.tsx
│   │   ├── JsonFormatterTool.tsx
│   │   ├── ColorPickerTool.tsx
│   │   ├── PomodoroTool.tsx
│   │   └── ...
│   └── ui/                 # Reusable UI components
│       └── Toaster.tsx
├── lib/
│   ├── data.ts             # All tools, categories, blog data
│   └── utils.ts            # Utility functions
└── types/
    └── index.ts            # TypeScript types
```

## 🔧 Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX          # Google Analytics
NEXT_PUBLIC_ADSENSE_ID=ca-pub-XXXXXXXX  # Google AdSense
```

## 💰 Monetization Setup

1. **Google AdSense**: Replace `NEXT_PUBLIC_ADSENSE_ID` in `.env.local`
2. **Stripe (Pro plan)**: Add `STRIPE_SECRET_KEY` and `NEXT_PUBLIC_STRIPE_KEY`
3. **Analytics**: Replace `NEXT_PUBLIC_GA_ID` with your GA4 measurement ID

## 🎨 Customization

- **Colors**: Edit `tailwind.config.ts` → `colors`
- **Tools**: Add new entries to `src/lib/data.ts` → `tools` array
- **Tool UI**: Create a new component in `src/components/tools/` and register it in `ToolDetailClient.tsx`
- **Blog posts**: Add entries to `src/lib/data.ts` → `blogPosts`

## 📈 SEO Checklist

- [x] Dynamic `<title>` and `<meta description>` per page
- [x] OpenGraph + Twitter Card tags
- [x] Auto-generated `sitemap.xml`
- [x] `robots.txt`
- [x] Semantic HTML structure
- [x] Breadcrumb navigation
- [x] FAQ sections per tool
- [x] Keyword-rich tool descriptions
- [x] Internal linking between related tools

## 📝 License

MIT — free to use for personal and commercial projects.
