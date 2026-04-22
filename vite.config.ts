import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

function figmaAssetResolver() {
  return {
    name: 'figma-asset-resolver',
    resolveId(id) {
      if (id.startsWith('figma:asset/')) {
        const filename = id.replace('figma:asset/', '')
        return path.resolve(__dirname, 'src/assets', filename)
      }
    },
  }
}

export default defineConfig({
  // Ensures assets are resolved from the root, critical for SPA routing
  base: '/',
  plugins: [
    figmaAssetResolver(),
    // The React and Tailwind plugins are both required for Make
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      // Alias @ to the src directory
      '@': path.resolve(__dirname, './src'),
    },
  },
  // File types to support raw imports.
  assetsInclude: ['**/*.svg', '**/*.csv'],
  server: {
    // Ensures local dev server handles routing the same way Vercel will
    historyApiFallback: true,
    // The Proxy bridge: Redirects /api calls to the Vercel dev server
    proxy: {
      '/api': {
        target: 'http://localhost:3000', 
        changeOrigin: true,
        secure: false,
      },
    },
  },
})