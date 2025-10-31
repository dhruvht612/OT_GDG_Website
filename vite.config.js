import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Replace <repo-name> with your GitHub repository name
export default defineConfig({
  plugins: [react()],
  base: '/gdg-ontario-tech/', // <-- Add this line for GitHub Pages
})
