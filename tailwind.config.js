/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "header-pattern": "url('https://www.transparenttextures.com/patterns/brick-wall.png')",
        "footer-pattern": "url('/images/footer-pattern.svg')",
      }),
    },
  },
  plugins: [],
}