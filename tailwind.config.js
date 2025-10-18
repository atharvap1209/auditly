export default {
  content: [
    './index.html', './src/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        ink: '#0b1220',
        charcoal: '#0f172a',
        ocean: '#0a1022',
        accent: {
          sky: '#38bdf8',
          violet: '#8b5cf6',
          mint: '#34d399',
          amber: '#f59e0b'
        }
      },
      boxShadow: {
        soft: '0 1px 2px 0 rgba(0,0,0,0.25), 0 10px 30px -12px rgba(0,0,0,0.35)',
        glow: '0 0 0 2px rgba(255,255,255,0.08), 0 0 25px rgba(56,189,248,0.35)'
      },
      backgroundImage: {
        'premium-gradient': 'radial-gradient(1400px 800px at 100% -10%, rgba(56,189,248,0.15), transparent 60%), radial-gradient(1200px 600px at -10% 10%, rgba(139,92,246,0.12), transparent 60%), linear-gradient(180deg, #0b1220 0%, #0a1022 60%, #0f172a 100%)'
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 0 2px rgba(255,255,255,0.06), 0 0 12px rgba(56,189,248,0.35)' },
          '50%': { boxShadow: '0 0 0 2px rgba(255,255,255,0.10), 0 0 22px rgba(139,92,246,0.45)' }
        }
      },
      animation: {
        pulseGlow: 'pulseGlow 2.2s ease-in-out infinite'
      }
    },
  },
  plugins: [],
};
