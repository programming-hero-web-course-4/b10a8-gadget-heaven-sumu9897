/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "color-primary": "#9538E2",
        "color-two": "rgba(48, 156, 8)",
        "color-three": "rgb(11, 11, 11)",
        "color-four": "rgb(9, 8, 15)",
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

