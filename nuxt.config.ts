// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  pages: true,
  devtools: { enabled: false },
  runtimeConfig: {
    public: {
      bucketUrl: process.env.BUCKET_URL,
    },
  },
  modules: [
    "nuxt-icon",
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt",

    "@nuxtjs/supabase",
  ],
  supabase: {
    redirect: false,
  },
});
