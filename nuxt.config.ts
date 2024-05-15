// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: [ "@nuxtjs/tailwindcss",'nuxt-highcharts'], //"@nuxt/ui",
  plugins:[{ src: '~/plugins/apex.js', mode: 'client' }]
})