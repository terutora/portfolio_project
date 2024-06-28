module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: [
          '"Noto Sans JP"',
          'sans-serif',
          // 他のフォールバックフォント
        ],
      },
      colors: {
        'main-black': '#0A0A0A',
        'accent-gold': '#FFD700',
        'accent-silver': '#C0C0C0',
        'text-offwhite': '#F5F5F5',
      },
      backgroundColor: {
        'gradient-dark': 'linear-gradient(to bottom, #0A0A0A, #1A1A1A)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}