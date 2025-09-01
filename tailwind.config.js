/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "hsl(0, 37%, 38%)",
        secondary: "hsl(16, 57%, 91%)",
        accent: "hsl(24, 85%, 50%)",
        "accent-dark": "hsl(24, 85%, 60%)",
      },
    }
  },
  plugins: [],
}