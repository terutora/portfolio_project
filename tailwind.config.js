module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main-black': '#0A0A0A',
        'accent-gold': '#FFD700',
        'accent-silver': '#C0C0C0',
        'text-offwhite': '#F5F5F5',
      },
      backgroundImage: {
        'gradient-dark': 'linear-gradient(to bottom, #0A0A0A, #1A1A1A)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}