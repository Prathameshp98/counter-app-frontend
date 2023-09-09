/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    height: {
      'container' : '350px'
    },
    borderWidth : {
      '1': '1px',
    },
    extend: {},
  },
  plugins: [],
}

