/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow: {
        'fanoespecial': '0px 0px 10px 10px rgba(0,0,0,0.05)',
      },
      colors: {
        'gris': '#6C6D68',
        'azul': '#909FB6',
        'azul2': '#c5b5e9',
        'azuloscuro': '#707F96',
        'ow': '#E4DEDE',
        'ow2': '#F5F5F5',
        'verde': '#9EAA97',
      },
      width: {
        'complete-sm': 'calc(100% - 192px)',
        'complete': 'calc(100% - 64px)',
      },
      fontFamily: {
        'sans': ["'Montserrat'", 'sans-serif'],
        'serif': ["'Libre Baskerville'", 'serif'],
      }
    },
  },
  plugins: [],
}
