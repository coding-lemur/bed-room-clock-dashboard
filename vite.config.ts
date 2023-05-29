import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ command }) => {
  const baseConfig = {
    plugins: [react()],
  }

  if (command === 'serve') {
    return {
      ...baseConfig,
      server: {
        proxy: {
          '/api': {
            target: 'http://192.168.178.83/api',
            changeOrigin: true,
            rewrite: (path) => path.replace(/^\/api/, '')
          }
        }
      }
    }
  }

  // command === 'build'
  return {
    ...baseConfig,
    base: '/bed-room-clock-dashboard/'
  }
})