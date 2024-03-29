/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			textShadow: {
				sm: '0 1px 2px var(--tw-shadow-color)',
				DEFAULT: '0 2px 4px var(--tw-shadow-color)',
				lg: '0 8px 16px var(--tw-shadow-color)',
			},
			fontFamily: {
				'twinkle-star': ['"Twinkle Star"', 'sans-serif'],
				angkor: ['Angkor', 'sans-serif'],
				oswald: ['Oswald', 'sans-serif'],
				'indie-flower': ['Indie Flower', 'cursive'],
			},
		},
	},
	darkMode: 'class',
	plugins: [
		plugin(function ({ matchUtilities, theme }) {
			matchUtilities(
				{
					'text-shadow': (value) => ({
						textShadow: value,
					}),
				},
				{ values: theme('textShadow') }
			)
		}),
	],
}
