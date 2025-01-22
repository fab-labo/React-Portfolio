import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  root: './', // Ensure the root is correct
  server: {
    open: true, // Automatically open the browser on start
  },
})
