import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Esta configuración asegura que las rutas de los assets sean correctas para Netlify
export default defineConfig({
  plugins: [react()],
  // Definimos la ruta base como la raíz.
  base: '/',
})