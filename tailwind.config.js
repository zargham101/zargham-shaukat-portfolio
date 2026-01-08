module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neon: {
          green: "#39FF14",
        },
        dark: {
          DEFAULT: "#0a0a0a",
          secondary: "#1a1a1a",
        }
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 3s ease-in-out infinite',
        'blink-caret': 'blink-caret .75s step-end infinite',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px #39FF14, 0 0 10px #39FF14' },
          '100%': { boxShadow: '0 0 20px #39FF14, 0 0 40px #39FF14' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'blink-caret': {
          'from, to': { borderRightColor: 'transparent' },
          '50%': { borderRightColor: '#39FF14' },
        }
      }
    },
  },
  plugins: [],
}