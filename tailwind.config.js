/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'neon-green': '#00FF88',
        'dark-bg': '#0a0a0a',
      },
      fontFamily: {
        'sans': ['Inter', 'Sora', 'system-ui', 'sans-serif'],
        'pixel': ['Press Start 2P', 'VT323', 'monospace'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}

