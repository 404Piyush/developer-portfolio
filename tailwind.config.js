module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: "#0a0a0a",
        electricBlue: "#3b82f6",
        lavender: "#9b5de5",
        deepPink: "#f15bb5",
        bananaCream: "#fee440",
        deepSkyBlue: "#00bbf9",
        aquamarine: "#00f5d4",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        pulseGlow: "pulseGlow 4s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(59,130,246,0.2)" },
          "50%": { boxShadow: "0 0 0 12px rgba(59,130,246,0)" },
        },
      },
    }
  },
  plugins: [],
}
