import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  root: './ui',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './ui/src'),
      '@contracts': path.resolve(__dirname, './contracts'),
      '@backend': path.resolve(__dirname, './backend'),
    },
  },
  server: {
    port: 3000,
    open: true,
  },
  build: {
    outDir: '../dist-ui',
    emptyOutDir: true,
  },
})
