/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'blue-950': 'rgb(30 27 75)', // Define the color if it's not available
      },
    },
  },
  plugins: [],
};
