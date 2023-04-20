// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: ['bulma'],
  runtimeConfig: {
    public: {
      datocms: {
        bundleSafeToken:
          // !> Before releasing to production, see the README for information concerning security
          // !> and be sure to use tokens with the minimum amount of permission
          process.env.NUXT_ENV_DATOCMS_API_BUNDLE_SAFE_TOKEN ||
          process.env.NUXT_ENV_DATOCMS_API_TOKEN,

        environment: process.env.NUXT_ENV_DATOCMS_ENVIRONMENT,
        endpoint: 'https://graphql.datocms.com',
      },
    },
  },
})
