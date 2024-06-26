/** @type {import('tailwindcss').Config} */

import mycolors from "./src/assets/colors";

export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      // another color here
      ...mycolors,
    },
    extend: {},
  },
  plugins: [require("tailwindcss-primeui")],
};
