import type { Config } from 'tailwindcss'

export default {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		container: {
			center: true,
			padding: {
				DEFAULT: '1rem',
				sm: '2rem',
				md: '2rem',
				xl: '5rem',
				'2xl': '6rem',
			},
		},
		extend: {
			colors: {
				primary: {
					50: '#FFFBF0',
					100: '#FFF6DB',
					200: '#FFEEBD',
					300: '#FFE699',
					400: '#FFDE7A',
					500: '#FFD557',
					600: '#FFC414',
					700: '#CC9900',
					800: '#8A6700',
					900: '#423200',
					950: '#241B00',
				},
			},
		},
	},
	plugins: [],
} satisfies Config
