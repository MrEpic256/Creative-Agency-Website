/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'accent': '#00ff88',
        'dark': '#0a0a0a',
        'light': '#ffffff',
        'gray-custom': '#888888',
      },
      fontFamily: {
        'heading': ['Inter', 'Helvetica', 'Arial', 'sans-serif'],
        'body': ['Inter', 'Helvetica', 'Arial', 'sans-serif'],
      },
      fontSize: {
        'hero': ['clamp(3rem, 10vw, 8rem)', { lineHeight: '0.95' }],
        'section': ['clamp(2rem, 6vw, 5rem)', { lineHeight: '1.1' }],
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        'marquee': 'marquee 30s linear infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
}
