require('dotenv').config()

export default {
  // we need to have universal
  mode: 'spa',
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name || '',
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '$white-100' },
  /*
   ** Global CSS
   */
  css: ['~/assets/scss/_main.scss'],
  styleResources: {
    scss: [
      '~/assets/scss/*.scss',
      '~/assets/scss/_main.scss', // use underscore "_" & also file extension ".scss"
    ],
  },
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    // Doc: https://github.com/nuxt-community/style-resources-module
    '@nuxtjs/vuetify',
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
    ['@nuxtjs/eslint-module', { fix: true }],
  ],
  // env: {
  //   APIServer: process.env.API_URL,
  //   baseURL: process.env.baseURL,
  // },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    customVariables: ['~/assets/scss/variables.scss'],
    treeShake: true,
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, { isDev, isClient }) {
      // Run ESLint on save
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        })
      }
    },
  },
}
