import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Corregimos la ruta base para asegurar que todos los assets (JS, CSS, imágenes)
// se carguen de forma relativa y funcionen en el build final de Netlify.
export default defineConfig({
  plugins: [react()],
  // CAMBIO CRUCIAL: Usamos './' (relativo) en lugar de '/' (absoluto)
  base: './', 
})