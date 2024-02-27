/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      'bgyellow': '#FAAF3B',
      'hoverwhite': '#FFFFFF',
      'hoverblack': "#231F20"
    },

    extend: {},

    screens: {
      'xs': '390px',

    },
  },
  plugins: [require('@tailwindcss/forms')],
}

