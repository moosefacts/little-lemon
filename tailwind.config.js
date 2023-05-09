/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,jsx}"],
    theme: {
      extend: {
        colors: {
          little_lemon_green: {
            DEFAULT: "#495E57",
          },
          little_lemon_yellow: {
            DEFAULT: "#f4ce14",
          },
          little_lemon_gray: {
            light:"#EDEFEE",
            DEFAULT: "#333333",
          },
        }
      },
    },
    plugins: [],
  }