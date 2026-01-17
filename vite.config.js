import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Vercel: No base path needed (uses root domain)
  // GitHub Pages: Uses /Portfolio/ 
  // Set base to '/' for Vercel deployment
  base: '/',
})
