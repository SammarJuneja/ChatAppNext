import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "app-bg": "#16181e",
        "log-tab": "#050811",
        "signup-button": "#1f2b49",
        "login-button": "#323746"
      },
    },
  },
  plugins: [],
};
export default config;
