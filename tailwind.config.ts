import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          button: "#0072FF",
        },
        gray: {
          bg: "#0A0A0A",
          border: "#2D2D2D",
        },
      },
      boxShadow: {
        "3xl": "0 25px 35px -12px rgb(0 0 0 / 0.08)",
      },
    },
  },
  plugins: [],
}
export default config
