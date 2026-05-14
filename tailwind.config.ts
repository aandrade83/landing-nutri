import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        teal: {
          950: "#0a2a2a",
          900: "#0d3b3b",
          800: "#115c5c",
          700: "#157a7a",
          600: "#1a9898",
        },
        gold: {
          400: "#d4a843",
          300: "#e2c070",
        },
      },
      fontFamily: {
        serif: ["Georgia", "Cambria", "Times New Roman", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;
