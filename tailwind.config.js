/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        orange: "#FF6E32",
        dark: "#372E2D",
        gray: "#9E9E9E",
      },
      gradientColorStops: {
        orange_dark: "#FF6E32",
        orange_light: "#FFA118",
      },
      borderColor: {
        orange: "#FF6E32",
        dark: "#372E2D",
        gray: "#9E9E9E",
      },
      backgroundImage: {
        hero: "url('/images/slamet.jpg')",
      },
      colors: {
        orange: "#FF6E32",
        dark: "#372E2D",
        gray: "#9E9E9E",
      },
    },
  },
  plugins: [],
};
