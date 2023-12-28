/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: '#1B1B1B',
        light: '#FFF',
        accent: '#4D55FF',
        accentDark: '#FFDB4D',
        gray: '#747474',
      },
      fontFamily: {
        in: ['var(--font-in)'],
        mr: ['var(--font-mr)'],
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
