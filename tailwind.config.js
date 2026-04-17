/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // This links the custom luxury fonts to Tailwind
        sans: ["var(--font-ttnorms)", "sans-serif"],
        serif: ["var(--font-ivy)", "serif"], 
      },
    },
  },
  plugins: [],
};