/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Outfit: ["Outfit", "sans-serif"],
      },
      colors: {
        softBlue: "hsl(215, 51%, 70%)",
        cyan: "hsl(178, 100%, 50%)",
        veryDarkBlueMainBg: "hsl(217, 54%, 11%)",
        veryDarkBlueCardBg: "hsl(216, 50%, 16%)",
        veryDarkBlueLine: "hsl(215, 32%, 27%)",
      },
    },
  },
  plugins: [],
};
