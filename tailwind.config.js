/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        coffee: {
          50: '#FAF7F2',
          100: '#F5E6D3',
          200: '#E8D5C4',
          300: '#D2B48C',
          400: '#BC9A6A',
          500: '#8B4513',
          600: '#7A3D10',
          700: '#68350E',
          800: '#562D0B',
          900: '#442309',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};