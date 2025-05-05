import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: '#F7F3EE',
        foreground: '#3A3A3A',
        primary: '#8B4513',
        secondary: '#E8DED1',
        accent: '#5E452A',
        muted: '#7A7A7A'
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'monospace'],
        serif: ['Cormorant Garamond', 'Spectral', 'Merriweather', 'serif'],
        sans: ['Montserrat', 'Inter', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
        decorative: ['Cinzel', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;