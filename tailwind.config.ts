
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'custom-gray-900': '#1a1a1a', // Main background
        'custom-gray-700': '#333333', // Button background (closer to image)
        'custom-gray-600': '#444444', // Button hover (closer to image)
        'custom-gray-800': '#2a2a2a', // Modal background (slightly lighter than main)
        'custom-gray-300': '#d1d5db', // Secondary text (default gray-300)
        'custom-gray-400': '#9ca3af', // Modal close icon (default gray-400)
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      borderColor: {
         'custom-gray-700': '#333333', // Avatar border
         'custom-gray-600': '#4a4a4a', // Input border
      }
    },
  },
  plugins: [],
}
export default config

