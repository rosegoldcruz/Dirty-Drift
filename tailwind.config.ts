import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        midnight: '#06101a',
        deepwater: '#0b1724',
        cyan: '#6be7ff',
        ember: '#ff8a3d',
        rust: '#ff6138',
        cream: '#efe5d6'
      },
      boxShadow: {
        panel: '0 24px 80px rgba(0, 0, 0, 0.45)',
        glow: '0 0 32px rgba(107, 231, 255, 0.28)'
      },
      backgroundImage: {
        'signal-grid': 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)'
      },
      animation: {
        'slow-pan': 'slowPan 18s ease-in-out infinite',
        'ambient-float': 'ambientFloat 12s ease-in-out infinite',
        shimmer: 'shimmer 6s linear infinite',
        grain: 'grain 10s steps(6) infinite'
      },
      keyframes: {
        slowPan: {
          '0%, 100%': { transform: 'scale(1.04) translate3d(0,0,0)' },
          '50%': { transform: 'scale(1.08) translate3d(-1.5%, -1%, 0)' }
        },
        ambientFloat: {
          '0%, 100%': { transform: 'translate3d(0, 0, 0)' },
          '50%': { transform: 'translate3d(0, -10px, 0)' }
        },
        shimmer: {
          '0%': { opacity: '0.2', transform: 'translateX(-12%)' },
          '50%': { opacity: '0.5' },
          '100%': { opacity: '0.2', transform: 'translateX(12%)' }
        },
        grain: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '20%': { transform: 'translate(-1%, 1%)' },
          '40%': { transform: 'translate(1%, -1%)' },
          '60%': { transform: 'translate(-0.5%, 0.5%)' },
          '80%': { transform: 'translate(0.5%, -0.5%)' }
        }
      }
    }
  },
  plugins: []
};

export default config;
