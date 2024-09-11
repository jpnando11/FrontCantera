/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(180deg, #0AE755 0%, #67ED99 40.3%, #F0F6FC 100%);',
        'custom-curso': 'linear-gradient(180deg, #BEC4F3 0%, #E1E6FC 100%)'
      }
    },
  },
  plugins: [],
}