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
      colors: {
        'custom-purple': '#410F72',
        'custom-light-purple': '#9003FF',
        'custom-light-violet': '#B451FF',
        'custom-yellow': '#FFAE00',
        'custom-cream': '#FFFAF0'
      }, 
    },
  },
  plugins: [],
};
export default config;
