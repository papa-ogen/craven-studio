/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
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
        "dot-pattern": "url('/dot-bg.svg')",
        "dot-pattern-white": "url('/dot-bg-white.svg')",
        jugge: "url('/jugge.png')",
        "jugge-transparent": "url('/jugge-transparent.png')",
        "jugge-white": "url('/jugge-white.png')",
        "jugge-white-transparent": "url('/jugge-white-transparent.png')",
      },
      backgroundSize: {
        "50%": "50%",
        18: "18rem",
        20: "20rem",
        22: "22rem",
        26: "26rem",
      },
    },
  },
  plugins: [],
};
