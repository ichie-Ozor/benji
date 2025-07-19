/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js, jsx, tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      color: {
        "dark-blue": '#000033',
        "purple-950": "4B0082"
      }
    },
  },
  plugins: [],
}

