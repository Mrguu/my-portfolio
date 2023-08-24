/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      dropShadow: {
        "4xl": ["-20px 10px 5px gray"],
        "5xl": ["-20px 10px 5px black"],
      },
      shadow: {
        "4xl": ["-20px 10px 5px gray"],
      },
    },
  },
  plugins: [],
};
