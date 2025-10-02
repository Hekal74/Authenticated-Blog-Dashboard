import type { Config } from 'tailwindcss'

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"], // Ensure it scans your files
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1E40AF",  // Base primary color
          2: "#1E3A8A",        // Darker shade
          3: "#3B82F6",        // Lighter shade
        },
      },
      fontWeight: {
        regular: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
      },
    },
  },
  plugins: [],
}

export default config
