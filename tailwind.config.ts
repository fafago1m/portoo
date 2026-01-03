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
  		colors: {
        // Professional Palette (Slate + Indigo)
			background: '#0f172a', // Slate 900
			foreground: '#f8fafc', // Slate 50
  			card: {
				DEFAULT: '#1e293b', // Slate 800
				foreground: '#f8fafc'
  			},
  			popover: {
				DEFAULT: '#1e293b',
				foreground: '#f8fafc'
  			},
  			primary: {
				DEFAULT: '#6366f1', // Indigo 500
				foreground: '#ffffff'
  			},
  			secondary: {
				DEFAULT: '#334155', // Slate 700
				foreground: '#f8fafc'
  			},
  			muted: {
				DEFAULT: '#334155',
				foreground: '#94a3b8' // Slate 400
  			},
  			accent: {
				DEFAULT: '#1e293b',
				foreground: '#f8fafc'
  			},
  			destructive: {
				DEFAULT: '#ef4444', // Red 500
				foreground: '#f8fafc'
  			},
			border: '#334155', // Slate 700
			input: '#334155',
			ring: '#6366f1',
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}
export default config
