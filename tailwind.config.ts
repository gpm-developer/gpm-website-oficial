import type {Config} from "tailwindcss";

import typography from "@tailwindcss/typography";
import plugin from "tailwindcss/plugin";

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
        manrope: "var(--font-manrope)",
        caslon: "var(--font-caslon)",
        caslonDisplay: "var(--font-caslon-display)",
      },
      colors: {
        gpmYellow: {
          100: "hsl(var(--custom-yellow-1) / <alpha-value>)",
          200: "hsl(var(--custom-yellow-2) / <alpha-value>)",
          300: "hsl(var(--custom-yellow-3) / <alpha-value>)",
          400: "hsl(var(--custom-yellow-4) / <alpha-value>)",
          500: "hsl(var(--custom-yellow-5) / <alpha-value>)",
          600: "hsl(var(--custom-yellow-6) / <alpha-value>)",
          700: "hsl(var(--custom-yellow-7) / <alpha-value>)",
          800: "hsl(var(--custom-yellow-8) / <alpha-value>)",
          900: "hsl(var(--custom-yellow-9) / <alpha-value>)",
          950: "hsl(var(--custom-yellow-10) / <alpha-value>)",
        },
        gpmBlue: {
          100: "hsl(var(--custom-blue-1) / <alpha-value>)",
          200: "hsl(var(--custom-blue-2) / <alpha-value>)",
          300: "hsl(var(--custom-blue-3) / <alpha-value>)",
          400: "hsl(var(--custom-blue-4) / <alpha-value>)",
          500: "hsl(var(--custom-blue-5) / <alpha-value>)",
          600: "hsl(var(--custom-blue-6) / <alpha-value>)",
          700: "hsl(var(--custom-blue-7) / <alpha-value>)",
          800: "hsl(var(--custom-blue-8) / <alpha-value>)",
          900: "hsl(var(--custom-blue-9) / <alpha-value>)",
          950: "hsl(var(--custom-blue-10) / <alpha-value>)",
        },
        cGray: {
          100: "hsl(var(--custom-gray-1) / <alpha-value>)",
          200: "hsl(var(--custom-gray-2) / <alpha-value>)",
          300: "hsl(var(--custom-gray-3) / <alpha-value>)",
          400: "hsl(var(--custom-gray-4) / <alpha-value>)",
          500: "hsl(var(--custom-gray-5) / <alpha-value>)",
          600: "hsl(var(--custom-gray-6) / <alpha-value>)",
          700: "hsl(var(--custom-gray-7) / <alpha-value>)",
          800: "hsl(var(--custom-gray-8) / <alpha-value>)",
          900: "hsl(var(--custom-gray-9) / <alpha-value>)",
          950: "hsl(var(--custom-gray-10) / <alpha-value>)",
        },
      },
      keyframes: {
        // Radix Navigator Keyframes
        enterFromRight: {
          from: {opacity: "0", transform: "translateX(200px)"},
          to: {opacity: "1", transform: "translateX(0)"},
        },
        enterFromLeft: {
          from: {opacity: "0", transform: "translateX(-200px)"},
          to: {opacity: "1", transform: "translateX(0)"},
        },
        exitToRight: {
          from: {opacity: "1", transform: "translateX(0)"},
          to: {opacity: "0", transform: "translateX(200px)"},
        },
        exitToLeft: {
          from: {opacity: "1", transform: "translateX(0)"},
          to: {opacity: "0", transform: "translateX(-200px)"},
        },
        scaleIn: {
          from: {opacity: "0", transform: "rotateX(-10deg) scale(0.9)"},
          to: {opacity: "1", transform: "rotateX(0deg) scale(1)"},
        },
        scaleOut: {
          from: {opacity: "1", transform: "rotateX(0deg) scale(1)"},
          to: {opacity: "0", transform: "rotateX(-10deg) scale(0.95)"},
        },
        fadeIn: {
          from: {opacity: "0"},
          to: {opacity: "1"},
        },
        fadeOut: {
          from: {opacity: "1"},
          to: {opacity: "0"},
        },
        slideInFromBottom: {
          from: {opacity: "0", transform: "translateY(200px)"},
          to: {opacity: "1", transform: "translateY(0)"},
        },
      },
      // Radix Navigator Animations
      animation: {
        scaleIn: "scaleIn 200ms ease",
        scaleOut: "scaleOut 200ms ease",
        fadeIn: "fadeIn 200ms ease",
        fadeOut: "fadeOut 200ms ease",
        enterFromLeft: "enterFromLeft 250ms ease",
        enterFromRight: "enterFromRight 250ms ease",
        exitToLeft: "exitToLeft 250ms ease",
        exitToRight: "exitToRight 250ms ease",
        slideInFromBottom: "slideInFromBottom 300ms ease",
      },
    },
  },
  plugins: [
    typography,
    plugin(({matchUtilities}) => {
      matchUtilities({
        perspective: (value: string) => ({
          perspective: value,
        }),
      });
    }),
  ],
};

export default config;
