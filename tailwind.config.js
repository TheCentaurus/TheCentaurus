/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: '',
  important: true,
  content: [
    './src/pages/*.{js,ts,jsx,tsx}',
    './src/components/*.{js,ts,jsx,tsx}',
    './node_modules/flowbite/**/*.js'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif']
      }
    }
  },
  plugins: [require('tailwind-scrollbar'), require('flowbite/plugin')]
}
