import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f0fdfa",
          100: "#ccfbf1",
          200: "#99f6e4",
          300: "#5eead4",
          400: "#2dd4bf",
          500: "#14b8a6",
          600: "#0d9488",
          700: "#0f766e",
          800: "#115e59",
          900: "#134e4a",
        },
        ink: "#0F172A",
        canvas: "#FAFAF8",
      },
      boxShadow: {
        soft: "0 1px 2px rgba(15,23,42,0.04), 0 8px 24px -8px rgba(15,23,42,0.10)",
        lift: "0 2px 4px rgba(15,23,42,0.05), 0 16px 40px -12px rgba(15,23,42,0.18)",
      },
      keyframes: {
        "ring-pulse": {
          "0%": { transform: "scale(0.9)", opacity: "0.7" },
          "70%": { transform: "scale(1.6)", opacity: "0" },
          "100%": { transform: "scale(1.6)", opacity: "0" },
        },
        "wave-bounce": {
          "0%, 100%": { transform: "scaleY(0.35)" },
          "50%": { transform: "scaleY(1)" },
        },
      },
      animation: {
        "ring-pulse": "ring-pulse 2.4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "wave-bounce": "wave-bounce 1.1s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
