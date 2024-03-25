/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "n-green": "hsl(75, 94%, 57%)",
        "n-white": "hsl(0, 0%, 100%)",
        "n-grey": "hsl(0, 0%, 20%)",
        "n-dark-grey": "hsl(0, 0%, 12%)",
        "n-off-black": "hsl(0, 0%, 8%)",
      },
      fontFamily: {
        inter: "'Inter', sans-serif;"
      },
      fontSize: {
        paragraph: "14px",
      }
    },
  },
  plugins: [],
}

