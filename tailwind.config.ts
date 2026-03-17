import type { Config } from 'tailwindcss'

export default {
  content: [],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eef7ff',
          100: '#d8ecff',
          200: '#b9deff',
          300: '#89cbff',
          400: '#52aeff',
          500: '#2a8bff',
          600: '#136bfa',
          700: '#0c55e6',
          800: '#1045ba',
          900: '#143d92',
          950: '#0f2558',
        },
        dark: {
          50: '#f6f6f9',
          100: '#ececf2',
          200: '#d5d5e2',
          300: '#b1b1c9',
          400: '#8686ab',
          500: '#676791',
          600: '#525178',
          700: '#444362',
          800: '#3b3a53',
          900: '#1a1a2e',
          950: '#0d0d1a',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
} satisfies Config
