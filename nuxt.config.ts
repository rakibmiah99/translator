// https://nuxt.com/docs/api/configuration/nuxt-config
// @ts-ignore
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/ui'],
  css: ['~/assets/css/style.css'],
  runtimeConfig: {
    public: {
      BASE_URL: process.env.API_BASE_URL
    }
  }
})
