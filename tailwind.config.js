/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: 'rgb(var(--color-dark) / <alpha-value>)',
        light: 'rgb(var(--color-light) / <alpha-value>)',
        background: 'rgb(var(--color-background) / <alpha-value>)',
        primary: 'rgb(var(--color-primary) / <alpha-value>)',
        secondary: 'rgb(var(--color-secondary) / <alpha-value>)',
        accent: 'rgb(var(--color-accent) / <alpha-value>)',
        brd: 'rgb(var(--color-brd) / <alpha-value>)',
        text: 'rgb(var(--color-text) / <alpha-value>)',
        obackground: 'rgb(var(--color-obackground) / <alpha-value>)',
        navbar: '#dedcff',
       },
       boxShadow: {
        'outline': '0 0 0 4px rgba(246, 90, 76, 1)', // Customize the color and size as needed
      },
    },
  },
  plugins: [],
}