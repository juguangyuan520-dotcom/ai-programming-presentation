/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Syne', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        'void': '#030307',
        'deep': '#0a0a12',
        'surface': '#12121c',
        'surface-light': '#1a1a2e',
        'border': 'rgba(255,255,255,0.08)',
        'border-bright': 'rgba(255,255,255,0.15)',
        'accent': '#00d4ff',
        'accent-dim': '#0099cc',
        'accent-glow': 'rgba(0,212,255,0.3)',
        'violet': '#7c3aed',
        'violet-light': '#8b5cf6',
        'violet-glow': 'rgba(124,58,237,0.3)',
        'amber': '#f59e0b',
        'amber-glow': 'rgba(245,158,11,0.3)',
        'green': '#10b981',
        'green-glow': 'rgba(16,185,129,0.3)',
        'red': '#ef4444',
        'text-primary': '#f0f0f5',
        'text-secondary': '#8b8ba0',
        'text-muted': '#55556a',
      },
      animation: {
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'aurora': 'aurora 12s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s ease-in-out infinite',
        'data-flow': 'dataFlow 3s linear infinite',
      },
      keyframes: {
        glowPulse: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        aurora: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        dataFlow: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
      backgroundSize: {
        '400%': '400% 400%',
      },
      boxShadow: {
        'glow-accent': '0 0 30px rgba(0,212,255,0.25), 0 0 60px rgba(0,212,255,0.1)',
        'glow-violet': '0 0 30px rgba(124,58,237,0.3), 0 0 60px rgba(124,58,237,0.15)',
        'glow-green': '0 0 30px rgba(16,185,129,0.25)',
        'glow-amber': '0 0 30px rgba(245,158,11,0.25)',
      },
    },
  },
  plugins: [],
}
