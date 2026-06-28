import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['og-image.png', 'icons/icon-192.png', 'icons/icon-512.png'],
      manifest: {
        name: 'American AI Solutions LLC',
        short_name: 'AmericanAI',
        description: 'Detroit-based AI consulting. Workflow automation and AI deployment for Michigan businesses.',
        start_url: '/',
        display: 'standalone',
        background_color: '#0D1117',
        theme_color: '#1A3A8F',
        orientation: 'portrait-primary',
        icons: [
          { src: '/icons/icon-192.png', sizes: '192x192', type: 'image/png', purpose: 'any maskable' },
          { src: '/icons/icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'any maskable' }
        ],
        shortcuts: [
          {
            name: 'Book a Strategy Call',
            url: '/?book=1',
            description: 'Book your free 30-minute AI strategy call'
          },
          {
            name: 'ROI Calculator',
            url: '/#roi',
            description: 'Calculate your AI return on investment'
          },
          {
            name: 'Our Services',
            url: '/#services',
            description: 'Explore AI workflow automation services'
          },
          {
            name: 'Pricing',
            url: '/#pricing',
            description: 'See fixed-scope pricing tiers'
          },
          {
            name: 'CEO Dashboard',
            url: '/dashboard/',
            description: 'CEO Command Center — leads, pipeline, client portal'
          }
        ],
        categories: ['business', 'productivity'],
        lang: 'en-US'
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,png,svg,ico,woff2}'],
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
            handler: 'CacheFirst',
            options: { cacheName: 'google-fonts-cache', expiration: { maxEntries: 10, maxAgeSeconds: 60 * 60 * 24 * 365 } }
          },
          {
            urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
            handler: 'CacheFirst',
            options: { cacheName: 'gstatic-fonts-cache', expiration: { maxEntries: 10, maxAgeSeconds: 60 * 60 * 24 * 365 } }
          }
        ]
      }
    })
  ]
})
