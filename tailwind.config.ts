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
        // Premium Space Palette (Deep Void + Neon Accents)
			background: '#030014', // Deep Void Black
			foreground: '#ffffff', // Pure White
  			card: {
				DEFAULT: 'rgba(10, 10, 30, 0.6)', // Translucent Deep Blue
				foreground: '#ffffff'
  			},
  			popover: {
				DEFAULT: '#0f172a',
				foreground: '#ffffff'
  			},
  			primary: {
				DEFAULT: '#7042f8', // Electric Purple
				foreground: '#ffffff'
  			},
  			secondary: {
				DEFAULT: '#00d8ff', // Cyan
				foreground: '#ffffff'
  			},
  			muted: {
				DEFAULT: '#1e293b',
				foreground: '#94a3b8'
  			},
  			accent: {
				DEFAULT: '#2a0e61', // Dark Purple
				foreground: '#ffffff'
  			},
  			destructive: {
				DEFAULT: '#ef4444',
				foreground: '#ffffff'
  			},
			border: '#2a0e61', // Dark Purple Border
			input: '#2a0e61',
			ring: '#7042f8',
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}
export default config
