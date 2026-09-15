/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Semantic aliases — point to CSS vars so dark mode is automatic
        primary:  'var(--color-primary)',
        accent:   'var(--color-accent)',
        surface:  'var(--color-bg-surface)',
        elevated: 'var(--color-bg-elevated)',
        border:   'var(--color-border)',
        // Static palette for when you need direct hex access
        blue: {
          50: '#EFF6FF', 100: '#DBEAFE', 200: '#BFDBFE',
          400: '#60A5FA', 500: '#3B82F6', 600: '#2563EB',
          700: '#1D4ED8', 800: '#1E40AF',
        },
        teal: {
          100: '#CCFBF1', 400: '#2DD4BF', 500: '#14B8A6', 600: '#0D9488',
        },
        ink: {
          0: '#FFFFFF', 50: '#F8FAFC', 100: '#F0F2F8',
          200: '#E2E8F0', 300: '#CBD5E1', 400: '#94A3B8',
          500: '#64748B', 600: '#475569', 700: '#334155',
          800: '#1E293B', 900: '#0F172A', 950: '#0C0E14',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        '2xs': ['0.625rem', { lineHeight: '1rem' }],
      },
      maxWidth: {
        prose: '65ch',
        content: '52ch',
        page: '1400px',
      },
      spacing: {
        18: '4.5rem',
        22: '5.5rem',
      },
      borderRadius: {
        DEFAULT: '6px',
        sm: '4px',
        md: '6px',
        lg: '10px',
        xl: '14px',
        '2xl': '20px',
      },
      boxShadow: {
        xs:  '0 1px 2px 0 rgba(0,0,0,0.04)',
        sm:  '0 1px 3px 0 rgba(0,0,0,0.08), 0 1px 2px -1px rgba(0,0,0,0.04)',
        md:  '0 4px 12px -2px rgba(0,0,0,0.08), 0 2px 4px -2px rgba(0,0,0,0.04)',
        lg:  '0 10px 24px -4px rgba(0,0,0,0.10), 0 4px 8px -4px rgba(0,0,0,0.04)',
        xl:  '0 20px 40px -8px rgba(0,0,0,0.12), 0 8px 16px -8px rgba(0,0,0,0.04)',
      },
      backgroundImage: {
        'grid-pattern': 'linear-gradient(to right, var(--color-border) 1px, transparent 1px), linear-gradient(to bottom, var(--color-border) 1px, transparent 1px)',
        'grid-pattern-subtle': 'linear-gradient(to right, var(--color-bg-inset) 1px, transparent 1px), linear-gradient(to bottom, var(--color-bg-inset) 1px, transparent 1px)',
      },
      keyframes: {
        'fade-up': {
          '0%':   { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'skeleton-shimmer': {
          '0%':   { backgroundPosition: '200% 0' },
          '100%': { backgroundPosition: '-200% 0' },
        },
      },
      animation: {
        'fade-up':  'fade-up 0.4s ease-out forwards',
        'fade-in':  'fade-in 0.3s ease-out forwards',
        'skeleton': 'skeleton-shimmer 1.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
