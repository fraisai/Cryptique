/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./client/**/*.{js, jsx, ts, tsx}",
    "./client/containers/**/*.{js,jsx,ts,tsx}",
    "./client/App.jsx",
    "./client/containers/SignupContainer.jsx",

    // important: true,
    // "node_modules/flowbite-react/lib/esm/**/*.js"
  ],
  theme: {
    extend: {},
    screens: {
      'xs': '340px',
      'sm': '640px', // => @media (min-width: 640px) { ... }

      'md': '728px', // => @media (min-width: 768px) { ... }
    }
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

