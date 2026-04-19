import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'delta-navy': 'var(--color-delta-blue-700)',
        'delta-blue-700': 'var(--color-delta-blue-700)',
        'delta-blue-600': 'var(--color-delta-blue-600)',
        'delta-blue-500': 'var(--color-delta-blue-500)',
        'delta-blue-300': 'var(--color-delta-blue-300)',
        'delta-blue-200': 'var(--color-delta-blue-200)',
        'delta-red': 'var(--color-delta-red-400)',
        'delta-red-400': 'var(--color-delta-red-400)',
        'delta-red-100': 'var(--color-delta-red-100)',
        'neutral-0': 'var(--color-neutral-0)',
        'neutral-2': 'var(--color-neutral-2)',
        'neutral-5': 'var(--color-neutral-5)',
        'neutral-10': 'var(--color-neutral-10)',
        'neutral-50': 'var(--color-neutral-50)',
        'neutral-400': 'var(--color-neutral-400)',
        'neutral-500': 'var(--color-neutral-500)',
        'neutral-600': 'var(--color-neutral-600)',
        'neutral-700': 'var(--color-neutral-700)',
        'neutral-800': 'var(--color-neutral-800)',
      },
      fontFamily: {
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
        body: ['var(--font-body)', 'system-ui', 'sans-serif'],
        sans: ['var(--font-body)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'hero': ['48px', { lineHeight: '58px', letterSpacing: '-0.64px' }],
        'h1': ['48px', { lineHeight: '58px', letterSpacing: '-0.64px' }],
        'h2': ['40px', { lineHeight: '48px', letterSpacing: '-0.40px' }],
        'h3': ['28px', { lineHeight: '36px', letterSpacing: '-0.18px' }],
        'body-lg': ['18px', { lineHeight: '28px', letterSpacing: '0.14px' }],
        'body': ['16px', { lineHeight: '24px', letterSpacing: '0.14px' }],
        'label': ['14px', { lineHeight: '20px', letterSpacing: '0.32px' }],
      },
      spacing: {
        'nav-height': 'var(--nav-height)',
      },
      borderRadius: {
        'card': 'var(--radius-l)',
        'button': 'var(--radius-full)',
        'pill': '999px',
        'full': '9999px',
      },
      boxShadow: {
        'card': 'var(--shadow-card)',
        'button': 'var(--shadow-button)',
        'drop': 'var(--shadow-drop)',
      },
      screens: {
        'sm': '640px',
        'md': '800px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1512px',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          md: '2rem',
          lg: '2rem',
          xl: 'auto',
        },
        screens: {
          DEFAULT: '100%',
          xl: '1200px',
          '2xl': '1448px',
        },
      },
    },
  },
  plugins: [],
}

export default config
