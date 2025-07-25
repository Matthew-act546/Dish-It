/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#863E3E",
        secondary: "#F5E1DA",
      },
    }
  },
  plugins: [],
}
