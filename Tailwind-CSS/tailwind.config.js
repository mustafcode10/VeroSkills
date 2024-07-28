/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./dist/**/*.html"],
  theme: {
    // fontFamily: {
    //   "serif": ["Merriweather", "serif"] // modified all of your font style
    // },
    extend: {
        fontFamily: {
      "merriweather": ["Merriweather", "serif"] // extend font size merriweather is google font
    },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
