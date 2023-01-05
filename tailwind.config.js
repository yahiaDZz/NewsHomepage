/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors:{
        darkBlue:"#00001a"
      },
      fontFamily:{
        'display': ['Inter:wght@400'],
      }
    },
  },
  plugins: [],
}
