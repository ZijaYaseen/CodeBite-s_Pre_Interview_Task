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
        foreground: "var(--foreground)",
        blueGray : {
          100 : "#F1F5F9",
          200 : "#E2E8F0",
          300 : "#CBD5E1",
          400 : "#94A3B8",
          600 : "#475569",
          900 : "#0F172A",
      }
      },
      fontFamily: {
        roboto: ['var(--font-roboto)'],
      },

    },
  },
  plugins: [],
};
export default config;
