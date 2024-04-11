import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        black: "#222222",
        primary: "#1e73be",
        secondary: "#002d38e6",
        gray: "#ebebeb",
        placeholder: "#8D98AA",
        inputBg: "#EDF2F6",
        green: "#009000",
        error: "#FF0000",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["corporate"],
  },
};
export default config;
