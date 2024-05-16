import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    chunkSizeWarningLimit: 1000,
  },
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'robots.txt'], // 정적 파일 목록
      injectRegister: 'auto',
      manifest: {
        name: 'BLOCK-HOMES',
        short_name: 'BLOCKHOMES',
        description: '블록홈즈',
        start_url: '/',
        display: 'standalone',
        orientation: 'portrait',
        theme_color: '#ffffff',
        background_color: '#ffffff',
        icons: [
          {
            src: 'icon/icon_main_character_192x192.png', // 192x192 크기의 아이콘
            type: 'image/png',
            sizes: '192x192',
          },
          {
            src: 'icon/icon_main_character_512x512.png', // 512x512 크기의 아이콘
            type: 'image/png',
            sizes: '512x512',
          },
        ],
      },
    }),
  ],
  define: {
    global: 'window',
  },
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, 'src') },
      { find: '@apis', replacement: path.resolve(__dirname, 'src/apis') },
      { find: '@common', replacement: path.resolve(__dirname, 'src/common') },
      {
        find: '@components',
        replacement: path.resolve(__dirname, 'src/components'),
      },
      { find: '@pages', replacement: path.resolve(__dirname, 'src/pages') },
      { find: '@stores', replacement: path.resolve(__dirname, 'src/stores') },
      { find: '@style', replacement: path.resolve(__dirname, 'src/style') },
      { find: '@hooks', replacement: path.resolve(__dirname, 'src/hooks') },
      {
        find: '@constants',
        replacement: path.resolve(__dirname, 'src/constants'),
      },
      {
        find: '@fonts',
        replacement: path.resolve(__dirname, 'src/fonts'),
      },
      {
        find: '@assets',
        replacement: path.resolve(__dirname, 'src/assets'),
      },
    ],
  },
  server: {
    port: 3000,
    host: true,
    origin: 'http://0.0.0.0',
  },
})
