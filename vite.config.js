// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'build', // 👈 change from dist → build
    chunkSizeWarningLimit: 1000 // (optional) avoid chunk size warning
  }
})
