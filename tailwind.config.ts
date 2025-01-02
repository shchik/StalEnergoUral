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
        darkgreen: "#387C43",
        darkgray: "#979897",
        gray2: " #4E4E4E",
        gray3: " #828282",
        gray4: " #BDBDBD",
        orange: "#F3AA3C",
      },
      fontSize: {
        sm: "0.75rem",
        base: "0.875rem",
        normal: "1rem",
        high: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.563rem",
        "3xl": "1.953rem",
        "4xl": "2.441rem",
        "5xl": "3.052rem",
      },
    },
  },
  plugins: [],
} satisfies Config;
