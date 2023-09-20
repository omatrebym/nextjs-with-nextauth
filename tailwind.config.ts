import type { Config } from "tailwindcss";

const config: Config = {
  prefix: "tw-",
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Oslo sans", "arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
