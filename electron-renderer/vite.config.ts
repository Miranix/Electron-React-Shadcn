import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  base: './',
  plugins: [react()],
  publicDir: './public',
  define: {
    "process.env.IS_PREACT": JSON.stringify("true"),
  },
  server: {
    port: 3001,
    open: false
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@model": path.resolve(__dirname, "./model"),
    }
  },
  build: {
    outDir: path.resolve(__dirname, "../electron-main/render"),
    emptyOutDir: true
  },
  optimizeDeps: {
    exclude: [
    ]
  }
})
