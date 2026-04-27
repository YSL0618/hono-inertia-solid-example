import { cloudflare } from '@cloudflare/vite-plugin'
import { defineConfig } from 'vite'
import ssrPlugin from 'vite-ssr-components/plugin'
import { inertiaPagesPlugin } from './src/vite-plugin'

export default defineConfig({
  plugins: [inertiaPagesPlugin(), cloudflare(), ssrPlugin()]
})
