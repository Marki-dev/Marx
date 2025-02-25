import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          0: "#080307",
          1: "#0e0912",
          2: "#16111b"
        },
        primary: {
          0: "#7a6dcd"
        },
        secondary: {
          0: "#6e1918"
        },
        accent: {
          0: "#f5f5f7"
        },
        success: {
          0: "#008000"
        }
    },
    },
  },
  plugins: [],
} satisfies Config
