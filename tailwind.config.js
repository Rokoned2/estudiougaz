/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: "500px",
      sm: "600px",
      md: "800px",
      lg: "960px",
      xl: "1100px",
      xxl: "1200px",
    },
    extend: {},
    fontFamily: {
      lato: ["Lato", "sans-serif"],
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
