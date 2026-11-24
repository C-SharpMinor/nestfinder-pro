/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0D3B36',
          light: '#1A4F48',
        },
        accent: {
          DEFAULT: '#FF7A3D',
          hover: '#FF6A2A',
        },
        light: {
          DEFAULT: '#F7FBFA',
          section: '#E8F3F1',
        },
        text: {
          dark: '#1A2E2B',
          muted: '#5A6B68',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
