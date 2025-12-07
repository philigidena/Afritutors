import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Enable minification
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Remove console.log in production
        drop_debugger: true
      }
    },
    // Code splitting for better caching
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-react': ['react', 'react-dom'],
          'vendor-motion': ['framer-motion'],
          'vendor-router': ['react-router-dom']
        }
      }
    },
    // Target modern browsers for smaller bundles
    target: 'es2020',
    // Enable source maps for debugging
    sourcemap: false,
    // Chunk size warning limit
    chunkSizeWarningLimit: 500
  },
  // Optimize dependencies
  optimizeDeps: {
    include: ['react', 'react-dom', 'framer-motion', 'react-router-dom']
  },
  // Enable CSS code splitting
  css: {
    devSourcemap: true
  }
})
