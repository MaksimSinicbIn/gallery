import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'
import { createHash } from 'crypto'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  css: {
    modules: {
      localsConvention: 'camelCase',
      generateScopedName: (name, filename, css) => {
        const component = path.basename(filename, '.module.scss')
        const classRegex = new RegExp(`\\.${name}[\\s\\{]+([^}]+)`)
        const classContent = (css.match(classRegex) || [''])[0]
        const hash = createHash('md5').update(`${name}_${classContent}`).digest('hex').substring(0, 5)
        return `${component}__${name}__${hash}`
      },
    },
  },
  plugins: [
    react(),
    VitePWA({
      workbox: {
        runtimeCaching: [
          {
            urlPattern: /https:\/\/dog\.ceo\/api\/.*/,
            handler: 'NetworkFirst',
            options: { cacheName: 'dog-api-cache' },
          },
          {
            urlPattern: /https:\/\/images\.dog\.ceo\/breeds\/[a-z-]+\/[a-z0-9_]+\.(jpg|jpeg|png|webp)/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'dog-images-cache',
              expiration: {
                maxEntries: 500,
                maxAgeSeconds: 30 * 24 * 60 * 60,
              },
            },
          },
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      '@/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
})
