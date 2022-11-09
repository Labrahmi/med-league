/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    fontFamily: {
      'Stretch' : ['Stretch'],
      'Azonix' : ['Azonix'],
      'Barc1' : ['Barc1'],
      'Barc2' : ['Barc2'],
      'Qualy' : ['Qualy'],
      'nums' : ['nums'],
      'now' : ['system-ui'],
    },
    screens: {
      'tablet': '640px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    extend: {},
  },
  plugins: [],
}
