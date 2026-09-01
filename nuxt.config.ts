// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  app: {
    head: {
      htmlAttrs: {
        lang: 'id'
      }
    }
  },
  css: [
    '~/assets/style/main.css'
  ],
  vite: {
    plugins: [tailwindcss()],
  },
})
