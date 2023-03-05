module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        c: '0 1px 6px rgb(32 33 36 / 28%)',
        c2: '0 1px 1px rgb(0 0 0 / 10%)',
        darkC: '0px 1px 6px rgba(150 150 150 / 20%)',
      },

      keyframes: {
        heartbeat: {
          '0%': { transform: 'scale(0.95)' },
          '5%': {
            transform: 'scale(1.1)',
          },
          '39%': {
            transform: 'scale(0.85)',
          },
          '45%': {
            transform: 'scale(1)',
          },
          '60%': {
            transform: 'scale(0.95)',
          },
          '100%': {
            transform: 'scale(0.9)',
          },
        },
      },
      animation: {
        heart: 'heartbeat 1.2s infinite cubic-bezier(0.215, 0.61, 0.355, 1)',
      },
    },
  },
  plugins: [],
};
