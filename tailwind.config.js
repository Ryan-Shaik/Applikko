/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'], // Default sans-serif
        poppins: ['Poppins', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        // You can define brand-specific colors here if needed
        // Example:
        // 'drinko-green': '#3A8E5A',
        // 'applikko-yellow': '#FFD700',
      }
    },
  },
  plugins: [],
}