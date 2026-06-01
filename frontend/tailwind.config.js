/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        // Editorial / brutalist type system — deliberately NOT Inter/Roboto/Space Grotesk.
        display: ["'Anton'", "'Archivo Black'", "sans-serif"],
        sans: ["'Hanken Grotesk'", "system-ui", "sans-serif"],
        mono: ["'Space Mono'", "'IBM Plex Mono'", "monospace"],
      },
      colors: {
        paper: "#EFEBE0", // warm off-white ground
        paper2: "#E5E0D2", // panel / inset
        ink: "#131210", // near-black
        inksoft: "#4A463E", // muted body
        inkfaint: "#8C8678", // labels
        accent: {
          DEFAULT: "#FF3B00", // electric vermilion
          ink: "#C42E00",
        },
        line: "#131210",
      },
      boxShadow: {
        hard: "6px 6px 0 0 #131210",
        "hard-sm": "4px 4px 0 0 #131210",
        "hard-accent": "6px 6px 0 0 #FF3B00",
      },
    },
  },
  plugins: [],
};
