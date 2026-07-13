/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: '#FFFFFF',
        offwhite: '#FCFAF9',
        pink: {
          DEFAULT: '#E8C9C6',
          deep: '#C99B96',
          veil: '#F8EEEC',
        },
        grey: {
          line: '#E3E1E0',
          mid: '#8A8785',
        },
        graphite: '#333130',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'],
        sans: ['"Jost"', 'sans-serif'],
        script: ['"Alex Brush"', '"Petit Formal Script"', 'cursive'],
      },
      spacing: {
        '8': '8px',
        '16': '16px',
        '24': '24px',
        '32': '32px',
        '48': '48px',
        '64': '64px',
        '96': '96px',
        '128': '128px',
        '160': '160px',
        '200': '200px',
      },
    },
  },
  plugins: [],
}
