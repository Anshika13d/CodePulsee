/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'glow-purple': '0 0 0.5px rgba(177, 156, 217, 0.8), 0 0 10px rgba(177, 156, 217, 0.8)',
      },
      colors: {
        'custom-bg': '#181d2f'
      }
    },
  },
  plugins: [],
}

