// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['vue-toast-notification/dist/theme-default.css'],
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/eslint-module']
})
