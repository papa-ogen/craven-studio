/** @type {import('tailwindcss').Config} */
export default {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        orange: "#FF5E00",
        dark: "#251D18",
        yellow: "#FFD014",
        gray: "#E7E5E4",
        beige: "#FDF5E2",
      },
      fontFamily: {
        bebasNeue: ["bebas-neue", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        "dot-pattern": "url('/public/dot-bg.svg')",
        "dot-pattern-white": "url('/public/dot-bg-white.svg')",
        jugge: "url('/public/jugge.png')",
        "jugge-transparent": "url('/public/jugge-transparent.png')",
      },
      backgroundSize: {
        "50%": "50%",
        18: "18rem",
        26: "26rem",
      },
    },
  },
  plugins: [],
};
