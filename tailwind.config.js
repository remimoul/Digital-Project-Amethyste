/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'agir': '#C6B6D9',
        'event': '#E3C9E2',
        'grin': '#34B7C0',
      },
    },
  },
  plugins: [],
}