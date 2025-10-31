/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // 🌙 enables manual dark mode toggling
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "google-sans": ["Google Sans", "sans-serif"],
        "google-sans-mono": ["Google Sans Mono", "monospace"],
      },
      colors: {
        "gdg-blue": "#4285f4",
        "gdg-green": "#34a853",
        "gdg-yellow": "#f9ab00",
        "gdg-red": "#ea4335",
        "gdg-off-white": "#f0f0f0",
        "gdg-black": "#1e1e1e",
        // Optional dark theme shades
        "gdg-dark-bg": "#121212",
        "gdg-dark-surface": "#1f1f1f",
        "gdg-dark-text": "#e4e4e4",
      },
    },
  },
  plugins: [],
};
