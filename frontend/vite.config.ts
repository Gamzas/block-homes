import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
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
