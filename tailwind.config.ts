import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: "#EEF2F7",
          100: "#D5E0EE",
          200: "#A8BCD9",
          300: "#7A98C4",
          400: "#4D74AF",
          500: "#1F4F9A",
          600: "#163B75",
          700: "#0F2A54",
          800: "#091A35",
          900: "#050E1C",
          950: "#02070F",
        },
        gold: {
          50: "#FDF9EE",
          100: "#FAF0D0",
          200: "#F3DC98",
          300: "#ECC860",
          400: "#E5B428",
          500: "#C9921A",
          600: "#A36F12",
          700: "#7C4F0C",
          800: "#563607",
          900: "#2F1D03",
        },
        cream: "#F9F7F3",
        charcoal: "#1C1C2E",
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "hero-pattern":
          "linear-gradient(135deg, #0F2A54 0%, #163B75 50%, #1A4A8A 100%)",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "count-up": "countUp 2s ease-out forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
