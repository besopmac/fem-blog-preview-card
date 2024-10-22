const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'figtree': ['Figtree', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        yellow: {
          '450': '#F4D04E'
        },
        gray: {
          '500': '#6B6B6B',
          '950': '#111111'
        }
      },
      fontSize: {
        'xxs': '14px',
      },
    },
  },
  plugins: [],
}

