/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Core dark/light contrast (Prussian blue theme)
        primary: '#023047',
        accent: '#219ebc',
        bgLight: '#F6F7FB',

        // Brand accents from provided palette
        gold: '#ffb703',
        'gold-light': '#8ecae6',
        'gold-dark': '#fb8500',

        // Gradient brand tones mapped to blues
        'brand-start': '#8ecae6',
        'brand-mid': '#219ebc',
        'brand-end': '#023047',

        // Accent palette (keep optional neon utils)
        neonBlue: '#219ebc',
        neonCyan: '#8ecae6',
        neonPurple: '#A855F7',
        neonTeal: '#14F7FF',

        // Subtle neutrals
        surface: '#12151A',
        card: '#161A21',
        line: 'rgba(255,255,255,0.08)'
      },
      fontFamily: {
        heading: ['"Orbitron"', '"Plus Jakarta Sans"', 'sans-serif'],
        body: ['"Exo 2"', '"Inter Tight"', 'sans-serif'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
        'fade-in': 'fadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
        'slide-in-left': 'slideInLeft 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
        'slide-in-right': 'slideInRight 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
        'scale-in': 'scaleIn 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
        'shimmer': 'shimmer 3s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'spin-slow': 'spin 8s linear infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(40px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideInLeft: {
          '0%': {
            opacity: '0',
            transform: 'translateX(-80px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        slideInRight: {
          '0%': {
            opacity: '0',
            transform: 'translateX(80px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        scaleIn: {
          '0%': {
            opacity: '0',
            transform: 'scale(0.9)',
          },
          '100%': {
            opacity: '1',
            transform: 'scale(1)',
          },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '1', boxShadow: '0 0 20px rgba(212, 175, 55, 0.3)' },
          '50%': { opacity: '0.8', boxShadow: '0 0 40px rgba(212, 175, 55, 0.6)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}

