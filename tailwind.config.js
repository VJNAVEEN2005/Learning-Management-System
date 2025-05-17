module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "primary-black": "#121212",
        "secondary-black": "#212121",
        "primary-green": "#1db954",
        "custom-orange": "#FF7F50",
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
  darkMode: 'class',
  
}