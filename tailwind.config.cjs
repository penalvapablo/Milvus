/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
  ],
  theme: {
    colors: {
      one: '#F0A500',
      two: '#334756',
      three: '#082032',
      four: '#FFCD5E',
      gray: '#F7F7F7',
      white: '#FFFFFF',
      black: '#000000',
    },
    extend: {
      screens: {
        'min-tall-mobile3': { raw: '(min-height: 600px)' },
        'min-tall-mobile': { raw: '(min-height: 700px)' },
        'min-tall-mobile2': { raw: '(min-height: 800px)' },
        'big-desktop': { raw: '(min-width: 1980px)' },
      },
      fontFamily: {
        sans: [
          ['Montserrat', ' sans'],
          ...defaultTheme.fontFamily.sans,
        ],
      },
    },
  },
  plugins: [],
};
