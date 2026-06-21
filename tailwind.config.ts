import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#090b10",
          900: "#0e1117",
          850: "#141823",
          800: "#1a1f2b",
          700: "#252b3a",
          600: "#323a4d",
        },
        brand: {
          300: "#5eead4",
          400: "#2dd4bf",
          500: "#14b8a6",
          600: "#0d9488",
        },
        accent: "#7c9cff",
      },
    },
  },
  plugins: [],
};
export default config;
