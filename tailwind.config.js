/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'bebas-neue': ['Bebas Neue', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {
      scrollbar: ['rounded', 'hidden'], // Enable the scrollbar variants
    },
  },
  plugins: [],
}
