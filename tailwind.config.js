/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    screens: {
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      colors:{
        brightOrange: "#FFA41B",
        darkOrange: "#fa9806",
        verydarkOrange: "#cf7e04",
        black: "#000000",
        antiquewhite: '#fff3e2',
        thickSkyBlue: "#161B40",
        white: '#ffffff',
        grayishBlack: "#363636",
        puffOrange: "#FFD6A5",
        whitishOrange: "#c4893d",
        hrColor: "#7c7777 ",
        random1: "#abcdef",
        random2: "#a22def",
        random3: "#4bcd01",
        random4: "#334bca",
      }
    },
  },
  plugins: [],
}

