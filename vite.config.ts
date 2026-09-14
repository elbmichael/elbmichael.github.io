import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'node:path'

// Vite config for GitHub Pages deployment
export default defineConfig({
  // elbmichael.github.io is a GitHub "user page" repo — these always deploy
  // to the root domain, so base must be '/' (not '/repo-name/').
  base: '/',
  build: {
    outDir: 'dist',
  },
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
