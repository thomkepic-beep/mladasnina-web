/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#0B1A4A',
          blue: '#1E2F6E',
          yellow: '#F1DE8B',
          bg: '#F5F7FB',
        },
      },
      boxShadow: {
        soft: '0 12px 30px rgba(11, 26, 74, 0.08)',
      },
      animation: {
        'fade-up': 'fadeUp 0.8s ease-out both',
        float: 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(18px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
    },
  },
  plugins: [],
};
