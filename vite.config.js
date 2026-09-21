import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { SITE_URL } from './src/config/site.js'

const injectSiteUrl = () => ({
  name: 'inject-site-url',
  transformIndexHtml: (html) => html.replaceAll('__SITE_URL__', SITE_URL),
})

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), injectSiteUrl()],
  build: {
    target: 'es2020',
    sourcemap: false,
  },
})
