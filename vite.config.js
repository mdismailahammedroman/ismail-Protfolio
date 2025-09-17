import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: "./",

  plugins: [
    react(),
    tailwindcss({
      theme: {
        extend: {
          fontFamily: {
            helvetica: ['"Helvetica Neue"', 'Helvetica', 'Arial', 'sans-serif'],
            roboto: ['Roboto', 'sans-serif'],
            oswald: ['Oswald', 'sans-serif'],
          },
        },
      },
    }),
  ],
  build: {
    outDir: "dist"
  },
})
