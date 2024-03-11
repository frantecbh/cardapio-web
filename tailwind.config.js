/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'serif'],
      },
      backgroundImage: {
        home: "url('/src/assets/bg.jpg')",
      },
    },
  },
  plugins: [],
}
