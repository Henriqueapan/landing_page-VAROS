import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        "infinite-scroll": "infinite-scroll 15s linear infinite",
      },
      keyframes: {
        "infinite-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
      },
      screens: {
        // "lg": "827px",
        lg: "900px",
        xl: "1260px",
      },
      fontSize: {
        "4xl": ["38px", "110%"],
        "5xl": "50px",
        "6xl": "64px",
      },
      colors: {
        "c-black": "#131313",
        "s-green": "#00f700",
        "fl-green": "#19C819",
        doc: "#FAFAFA",
        grey: {
          100: "#f2f4f8",
          200: "#e2e5eb",
          400: "#C6CAD2",
          500: "#B0B7BE",
          600: "#878D96",
          700: "#4D5358",
          800: "#222729",
          900: "#131516",
        },
        turquoise: {
          200: "#00F0C9",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
