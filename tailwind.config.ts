import type { Config } from "tailwindcss";

export default {
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
      },
      fontFamily: {
        IntegralCF: ["integral", "sans", "sans-serif"],
        SatoshiBold: ["satoshi_bold", "sans", "sans-serif"],
        SatoshiRegular: ["satoshi_regular", "sans", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
