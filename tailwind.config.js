export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        background: '#0B0E14',
        primary: '#00D4FF',
        neon: '#00FF41',
        surface: 'rgba(15, 23, 42, 0.72)',
      },
      boxShadow: {
        glow: '0 0 45px rgba(0, 212, 255, 0.14)',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
    },
  },
  plugins: [],
};
