/* eslint-disable @typescript-eslint/no-require-imports */
const animate = require('tailwindcss-animate');

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
        brand:      '#2563eb',
        'brand-dark':'#1d4ed8',
        light:      '#f9fafb',
        dark:       '#0f172a',
        base:       '#334155',
      },
      // se vuoi aggiungere altre animazioni custom, puoi farlo qui
    },
  },
  plugins: [
    animate,
  ],
}
