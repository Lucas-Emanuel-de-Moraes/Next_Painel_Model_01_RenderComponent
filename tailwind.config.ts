import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundColor: {
        bgApp : '#F0F0F0',
        button : '#444444',
        buttonHover : '#454545',
        primary: '#444444',
        primaryHover: '#454545',
        primary_10: '#44444420',
        primary_20: '#44444440',
        sobreposition: '#00000060',
      },
      boxShadow: {
        center : "0px 0px 5px #00000011",
        classic : "5px 5px 5px #00000011",
        expansive : "5px 5px 15px #00000011",
      },
      colors: {
        primary: '#444444',
        primaryHover: '#454545',
      },
    },
  },
  plugins: [],
};
export default config;
