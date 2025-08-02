/** @type {import('tailwindcss').Config} */
export default {
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        blazeOrange: '#EB5E28',
        darkBlack: '#252422',
        lightBlack: '#403D38',
        darkGray: '#CCC6BA',
        lightGray: '#FFFCF2',
        errorRed: '#E61212',
      },
    },
  },
  plugins: [],
}

