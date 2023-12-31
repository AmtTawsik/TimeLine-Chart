// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "nuxt-calendly"],
  css: ["animate.css/animate.min.css"],
  buildModules: ["@nuxt/typescript-build"],
});
