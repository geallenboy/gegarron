
import { type Config } from 'tailwindcss'

export default {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	darkMode: ['class'],
	theme: {
		fontSize: {
			xs: [
				'0.8125rem',
				{
					lineHeight: '1.5rem'
				}
			],
			sm: [
				'0.875rem',
				{
					lineHeight: '1.5rem'
				}
			],
			base: [
				'1rem',
				{
					lineHeight: '1.75rem'
				}
			],
			lg: [
				'1.125rem',
				{
					lineHeight: '1.75rem'
				}
			],
			xl: [
				'1.25rem',
				{
					lineHeight: '2rem'
				}
			],
			'2xl': [
				'1.5rem',
				{
					lineHeight: '2rem'
				}
			],
			'3xl': [
				'1.875rem',
				{
					lineHeight: '2.25rem'
				}
			],
			'4xl': [
				'2rem',
				{
					lineHeight: '2.5rem'
				}
			],
			'5xl': [
				'3rem',
				{
					lineHeight: '3.5rem'
				}
			],
			'6xl': [
				'3.75rem',
				{
					lineHeight: '1'
				}
			],
			'7xl': [
				'4.5rem',
				{
					lineHeight: '1'
				}
			],
			'8xl': [
				'6rem',
				{
					lineHeight: '1'
				}
			],
			'9xl': [
				'8rem',
				{
					lineHeight: '1'
				}
			]
		},
		extend: {
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			colors: {
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))'
				}
			},
			animation: {
				orbit: 'orbit calc(var(--duration)*1s) linear infinite',
				meteor: 'meteor 5s linear infinite'
			},
			keyframes: {
				orbit: {
					'0%': {
						transform: 'rotate(calc(var(--angle) * 1deg)) translateY(calc(var(--radius) * 1px)) rotate(calc(var(--angle) * -1deg))'
					},
					'100%': {
						transform: 'rotate(calc(var(--angle) * 1deg + 360deg)) translateY(calc(var(--radius) * 1px)) rotate(calc((var(--angle) * -1deg) - 360deg))'
					}
				},
				meteor: {
					'0%': {
						transform: 'rotate(215deg) translateX(0)',
						opacity: '1'
					},
					'70%': {
						opacity: '1'
					},
					'100%': {
						transform: 'rotate(215deg) translateX(-500px)',
						opacity: '0'
					}
				}
			}
		}
	}
} satisfies Config
