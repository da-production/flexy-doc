/** @type {import('tailwindcss').Config} */
export default {
  important: true,
  darkMode: 'class',
  mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        cairo: ['Cairo', 'sans-serif'],
        rubik: ['Rubik', 'sans-serif'],
        source: ['Source Code Pro', 'monospace']
      }
    },
  },
  plugins: [],
}
