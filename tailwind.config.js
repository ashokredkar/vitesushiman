/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: '480px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      fontFamily: {
        playfair: ['Playfair Display', 'sans-serif'],
        jakarta: ['Plus Jakarta Sans', 'sans-serif'],
      },
      colors: {
        'primary': "#b1454a",
        "secondary": "#121212",
        "creamson": "#fff0de",
        "black-200": "#020202",
        "black-300": "#333333",
        "black-400": "#1f1e31",
        "black-500": "#555555",
        "gray-100": "#888888",
        "trans": "#ffffff30"
      },
      backgroundImage: {
        'subscription-bg': "url('./src/assets/subscribe_bg.png')",
      },
    },
  },
  plugins: [],
}