/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ["class", '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        "bg-elevated": "var(--bg-elevated)",
        "bg-muted": "var(--bg-muted)",
        border: "var(--border)",
        "border-soft": "var(--border-soft)",
        ink: "var(--text)",
        "ink-soft": "var(--text-soft)",
        "ink-muted": "var(--text-muted)",
        deepPink: "#f15bb5",
        bananaCream: "#fee440",
        deepSkyBlue: "#00bbf9",
        aquamarine: "#00f5d4",
        lavender: "#9b5de5",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains)", "ui-monospace", "monospace"],
      },
    },
  },
  plugins: [],
}