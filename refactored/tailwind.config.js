/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./client/**/*.{js, jsx, ts, tsx}",
    // "node_modules/flowbite-react/lib/esm/**/*.js"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

