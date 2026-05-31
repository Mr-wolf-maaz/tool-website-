import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-syne)", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      colors: {
        bg: {
          DEFAULT: "#0a0a0f",
          2: "#111118",
          3: "#16161f",
          4: "#1c1c28",
        },
        surface: {
          DEFAULT: "#1e1e2e",
          2: "#252535",
          3: "#2e2e42",
        },
        border: {
          DEFAULT: "#2a2a3d",
          2: "#363650",
        },
        text: {
          DEFAULT: "#f0f0f8",
          2: "#a8a8c0",
          3: "#6b6b85",
        },
        accent: {
          DEFAULT: "#7c6af7",
          2: "#9d8ff9",
          bg: "#1a1730",
          border: "#3d3560",
        },
        teal: { DEFAULT: "#2dd4c0", bg: "#0d2825" },
        amber: { DEFAULT: "#f59e0b", bg: "#1f1500" },
        rose: { DEFAULT: "#f43f5e", bg: "#1f0912" },
        green: { DEFAULT: "#22c55e", bg: "#0a1f0f" },
        sky: { DEFAULT: "#38bdf8", bg: "#0a1f2e" },
      },
      borderRadius: {
        sm: "8px",
        DEFAULT: "12px",
        lg: "16px",
        xl: "20px",
      },
      boxShadow: {
        DEFAULT: "0 4px 24px rgba(0,0,0,.4)",
        lg: "0 8px 40px rgba(0,0,0,.6)",
        glow: "0 0 0 3px rgba(124,106,247,.15)",
      },
      animation: {
        "pulse-slow": "pulse 3s ease-in-out infinite",
        "fade-in": "fadeIn 0.4s ease forwards",
        "slide-up": "slideUp 0.4s ease forwards",
      },
      keyframes: {
        fadeIn: { from: { opacity: "0" }, to: { opacity: "1" } },
        slideUp: {
          from: { opacity: "0", transform: "translateY(16px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
