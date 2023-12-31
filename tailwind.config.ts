import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#000000",
          white: "#FFFFFF",
        },
        gold: "#CCB579",
        mainPrimary:"#222222",
        mainGray:"#F5F5F7",
        black: "#222",
        whitegray: "#d9d9d9",
        darkgray: "#888",
        testRed: "#FF0000"
      },
      fontFamily: {
        
      },
      height: {
        header: "80px",
        footer: "400px",
      },
      minHeight: {
        content: "calc(100vh - 480px)",
      },
    },
  },
  plugins: [require("daisyui"), require("tailwind-scrollbar-hide")],
};
export default config;
