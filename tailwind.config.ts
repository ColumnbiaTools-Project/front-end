import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {},
      height: {
        header: "80px",
        footer: "400px",
      },
      minHeight: {
        content: "calc(100vh - 480px)",
      },
    },
  },
  plugins: [require("daisyui")],
};
export default config;