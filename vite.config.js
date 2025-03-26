import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/Attendance-Calculator/", // Set this to match your GitHub Pages repo name
  build: {
    outDir: "dist"
  },
  server: {
    host: true,
    port: 3000,
    open: true
  }
});
