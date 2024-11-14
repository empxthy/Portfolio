/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        'ssm': '350px',
      },
      colors: {
        hPurple: "#e966eb",
        pBlue: "#6c63ff",
      }
    },
  },
  plugins: [],
}

