/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'mob': { 'raw': '(max-width: 767.7px)' },
        // => @media (min-height: 800px) { ... }
      }
    },
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [],
}
