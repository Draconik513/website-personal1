import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/website-personal1/', // ← ini HARUS sesuai dengan nama repo kamu di GitHub
  plugins: [react()],
})
