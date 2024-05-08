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
        'custom-purple': '#F1C9FF',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'custom': '0 10px 15px -3px rgba(70, 71, 84, 0.1), 0 4px 6px -2px rgba(70, 71, 84, 0.05)',
      },
    },
  },
  plugins: [],
}