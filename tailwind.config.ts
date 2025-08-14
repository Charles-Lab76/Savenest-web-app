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
        primary: '#22C475',
        white: '#F9FAFB',
        border: '#1B1F3B',
        text: '#14110B',
        'button-text': '#F9FAFB',
        hover: '#4BC589',
        clicked: '#179055',
        'placeholder-bg': '#F9FAFB',
        'placeholder-text': '#E3E3E3',
      },
      fontFamily: {
        'inter': ['var(--font-inter)', 'sans-serif'],
        'jetbrains-mono': ['var(--font-jetbrains-mono)', 'monospace'],
      },
    },
  },
  plugins: [],
}
export default config