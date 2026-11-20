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
        harbor: "#16264A",
        brand: "#3E5D9D",
        sky: "#6C9DD7",
        mist: "#EEF2F8",
        signal: "#F2B544",
        ink: "#24324F",
      },
      fontFamily: {
        sans: ["var(--font-figtree)", "system-ui", "sans-serif"],
        serif: ["var(--font-newsreader)", "Georgia", "serif"],
      },
      maxWidth: {
        page: "80rem",
      },
      screens: {
        "3xl": "2000px",
      },
    },
  },
  plugins: [],
};
