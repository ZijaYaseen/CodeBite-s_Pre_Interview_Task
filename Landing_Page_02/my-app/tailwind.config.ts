import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        blueGray : {
          900 : "#0F172A",
          600 : "#475569",
          300 : "#CBD5E1",
          100 : "#F1F5F9"
        },
        fuchsia : {
          800 : "#86198F"
        }
      },
      fontFamily : {
        roboto : ['var(--font-roboto)', 'sans-serif'],
      }
    },
  },
  plugins: [],
};
export default config;
