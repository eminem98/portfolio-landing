/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/sections/**/*.{js,ts,jsx,tsx}',
    './src/data/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: '#2563eb',
        'brand-dark': '#1d4ed8',
        light: '#f9fafb',
        dark: '#0f172a',
        base: '#334155',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out both',
      },
    },
  },
  plugins: [],
}