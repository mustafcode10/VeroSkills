/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./dist/**/*.{html,js}"],
  theme: {
        fontFamily: {
      "serif": ["Merriweather", "serif"], // modified all of your font style
      "sans": ['Graphik', 'sans-serif'],
    },

  
    extend: {
     fontFamily: {
      "merriweather": ["merriweather", "serif"]
     },
     colors: {
      'blue': '#1fb6ff',
      'purple': '#7e5bef',
    },

 
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
