import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/content/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#101828",
          light: "#1e293b",
        },
        navy: {
          DEFAULT: "#10243A",
          dark: "#0B1928",
          light: "#18324F",
        },
        brand: {
          blue: "#1769AA",
          hover: "#12558A",
          cyan: "#38BDF8",
          cyanDark: "#0284C7",
        },
        surface: {
          DEFAULT: "#FFFFFF",
          muted: "#F5F8FC",
          card: "#FFFFFF",
        },
        border: {
          DEFAULT: "#DCE4EE",
          dark: "#CBD5E1",
        },
        muted: {
          DEFAULT: "#526174",
          light: "#64748B",
        },
        status: {
          success: "#16794B",
          error: "#B42318",
          warning: "#9A6700",
        },
      },
      borderRadius: {
        button: "12px",
        card: "16px",
        input: "10px",
      },
      maxWidth: {
        content: "1280px",
      },
      boxShadow: {
        subtle: "0 1px 3px 0 rgba(16, 24, 40, 0.05), 0 1px 2px 0 rgba(16, 24, 40, 0.03)",
        card: "0 4px 12px 0 rgba(16, 36, 58, 0.05)",
        hover: "0 10px 24px -4px rgba(16, 36, 58, 0.1)",
        elevated: "0 20px 30px -10px rgba(16, 36, 58, 0.12)",
      },
    },
  },
  plugins: [],
};

export default config;
