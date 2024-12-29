/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: 'var(--primary-color)',
					50: '#f5f5ff',
					100: '#ebebff',
					200: '#d6d6ff',
					300: '#b3b3ff',
					400: '#8080ff',
					500: '#4B4ACF',
					600: '#3333cc',
					700: '#2929a3',
					800: '#1f1f7a',
					900: '#141452'
				},
				secondary: {
					DEFAULT: 'var(--secondary-color)',
					50: '#fff5f5',
					100: '#ffe6e6',
					200: '#ffcccc',
					300: '#ff9999',
					400: '#ff6666',
					500: '#FF6B6B',
					600: '#ff0000',
					700: '#cc0000',
					800: '#990000',
					900: '#660000'
				}
			}
		}
	},
	plugins: [
	]
} 