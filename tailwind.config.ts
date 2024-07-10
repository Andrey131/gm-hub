import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        text: "#000000",
        title: "#58180D",
        titleLine: "#9C2B1B",
        logo: "#ED1C24",
        footerLine: "#B89A67",
        smallTitle: "#C9Ad6A",
        footerDeco: "#E7D29B",
        tables: "#E0E5C1",
        back: "#F2ECE4",
        back2: "#e6dacc",
      },
    },
  },
  plugins: [],
};
export default config;
