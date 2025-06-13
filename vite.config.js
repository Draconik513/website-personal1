import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/website-personal1/', // ⬅️ ganti sesuai nama repo GitHub-mu
  plugins: [react()],
})
