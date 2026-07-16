import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#FDF3EB",
        "cream-dark": "#F8E9DD",
        ink: "#181124",
        "ink-soft": "#4A4458",
        muted: "#7C7688",
        orange: {
          DEFAULT: "#FF6B35",
          light: "#FF8C5A",
          dark: "#E8542A",
        },
        purple: {
          DEFAULT: "#7C3AED",
          light: "#9D5CFF",
          dark: "#5B21B6",
        },
        night: {
          DEFAULT: "#120B1E",
          soft: "#1C1229",
        },
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(135deg, #FF6B35 0%, #C13FE8 55%, #7C3AED 100%)",
        "brand-gradient-soft": "linear-gradient(135deg, #FF8C5A 0%, #9D5CFF 100%)",
        "hero-blob": "radial-gradient(circle at 65% 35%, rgba(255,140,90,0.45) 0%, rgba(255,107,53,0.15) 45%, rgba(255,107,53,0) 70%)",
        "night-glow": "radial-gradient(circle at 20% 20%, rgba(124,58,237,0.35) 0%, rgba(18,11,30,0) 50%), radial-gradient(circle at 85% 80%, rgba(255,107,53,0.25) 0%, rgba(18,11,30,0) 50%)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 20px 45px -20px rgba(24,17,36,0.18)",
        button: "0 12px 24px -8px rgba(255,107,53,0.45)",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-slow": "float 9s ease-in-out infinite",
        "spin-slow": "spin 18s linear infinite",
        blob: "blob 12s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-16px)" },
        },
        blob: {
          "0%, 100%": { transform: "scale(1) translate(0,0)" },
          "50%": { transform: "scale(1.08) translate(10px,-10px)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
