import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://talperets.github.io/War-Card-Game/',
  plugins: [react()],
})
