/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // Enable dark mode
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#181818",
        light: "#e0e0e0",
        primary: "#00aaff",
        card: "#2a2a2a",
      },
    },
  },
  plugins: [],
};
