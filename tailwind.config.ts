import type { Config } from 'tailwindcss'

export default {
  content: [],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Instrument Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
} satisfies Config
