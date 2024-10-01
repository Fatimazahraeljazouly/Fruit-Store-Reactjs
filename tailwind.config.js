/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: '#CD5C5C',
        secondary: '#fb923c',
      },
      fontFamily:{
        poppins:['poppins','sans-serif'],
        averia:['Averia Serif Libre ','serif'],

      },
      container:{
        center :true,
        padding:{
          default:'1rem',
          sm:'2rem',
          lg:'4rem',
          xl:'5rem',
          '2xl':'6rem',
        }
      }
    },
  },
  plugins: [],
}

