import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // The local file: dependency resolves outside node_modules. Process its
  // compiled CommonJS just like an installed tarball, in dev and production.
  optimizeDeps: { include: ['react-icons'] },
  build: { commonjsOptions: { include: [/node_modules/, /[\\/]dist[\\/]/] } },
})
