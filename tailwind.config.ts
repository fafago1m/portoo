import type { Config } from 'tailwindcss'

const config: Config = {
    darkMode: ['class'],
    content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
  	extend: {
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
      },
  		colors: {
			background: '#050505', // Almost black
			foreground: '#e2e8f0', // Slate 200
  			card: {
				DEFAULT: 'rgba(20, 20, 25, 0.6)',
				foreground: '#ffffff'
  			},
  			primary: {
				DEFAULT: '#818cf8', // Indigo 400
				foreground: '#ffffff'
  			},
  			secondary: {
				DEFAULT: '#22d3ee', // Cyan 400
				foreground: '#ffffff'
  			},
			border: 'rgba(255, 255, 255, 0.08)',
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}
export default config
