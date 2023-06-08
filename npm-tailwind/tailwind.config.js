/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      
      'phone': {'max': '500px'},
      // => @media (max-width: 639px) { ... }
    }
  },
  plugins: [],
}

