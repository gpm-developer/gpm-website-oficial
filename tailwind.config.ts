import type {Config} from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        manrope: ["var(--font-manrope)"],
        caslon: ["var(--font-caslon)"],
        caslonDisplay: ["var(--font-caslon-display)"],
      },
    },
  },
  plugins: [],
};

export default config;
