/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'var(--clr-primary)',
          dark: 'var(--clr-primary-dark)',
        },
        accent: 'var(--clr-accent)',
        background: 'var(--clr-bg)',
        foreground: 'var(--clr-text)',
        muted: {
          DEFAULT: 'var(--clr-bg-card)',
          foreground: 'var(--clr-text-muted)',
        },
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
