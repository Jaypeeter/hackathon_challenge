/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#150828",
        secondary: "#D434FE",
        tertiary: "#9D3AFF",
        footer_black: "100B20",
      },
      backgroundImage: {
        hero: "url('/public/images/hero-pattern.png')",
      },
    },
  },
  plugins: [],
};
