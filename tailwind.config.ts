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
      breakpoints: {
        // min-width
        mobile: "0px",
        phablet: "576px",
        tablet: "768px",
        "tablet-big": "1024px",
        laptop: "1280px",
        desktop: "1600px",
        // max-width
        "phablet-max": { max: "576px" },
        "tablet-max": { max: "768px" },
        "tablet-big-max": { max: "1024px" },
        "laptop-max": { max: "1280px" },
        "desktop-max": { max: "1600px" },
        // target spesific screen size
        "mobile-only": { min: "0px", max: "576px" },
        "phablet-only": { min: "576px", max: "768px" },
        "tablet-only": { min: "768px", max: "1024px" },
        "tablet-big-only": { min: "1024px", max: "1280px" },
        "laptop-only": { min: "1280px", max: "1600px" },
      },
      fontFamily: {
        sans: ["Oslo sans", "arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
