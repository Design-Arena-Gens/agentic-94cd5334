import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        canvas: "#030712",
        frosted: "rgba(12, 31, 52, 0.65)",
        accent: "#43f3ff",
        "accent-soft": "rgba(67, 243, 255, 0.35)"
      },
      boxShadow: {
        glass: "0 30px 80px rgba(15, 90, 140, 0.45)",
        aura: "0 0 120px rgba(67, 243, 255, 0.35)",
        subtle: "0 15px 40px rgba(3, 15, 35, 0.5)"
      },
      backgroundImage: {
        "radial-grid":
          "radial-gradient(circle at top, rgba(67, 243, 255, 0.15), transparent 60%)"
      },
      backdropBlur: {
        xs: "3px"
      }
    }
  },
  plugins: []
};

export default config;
