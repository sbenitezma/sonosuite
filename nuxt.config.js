const pkg = require('./package')


const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'
      }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#ff8c1d' },

  /*
  ** Global CSS
  */
  css: [
    '~/assets/style/app.styl',
    '@assets/stylesheets/main.scss'
    // Debugging files
    // 'tachyons/css/tachyons.min.css',
    // 'tachyons-debug/css/tachyons-debug.min.css',
  ],
  // router: {
  //   middleware: 'i18n'
  // },
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/vuetify',
    '@/plugins/filters',
    '@/plugins/i18n.js'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
  ],

  /*
  ** Build configuration
  */
  build: {
    babel: {
      presets: ['es2015', 'stage-2'],
      plugins: ["transform-vue-jsx", "transform-runtime", "transform-object-rest-spread"],
    },
    transpile: ['vuetify/lib'],
    vendor: ['axios', 'vue-i18n'],
    plugins: [new VuetifyLoaderPlugin()],
    loaders: {
      stylus: {
        import: ["~assets/style/variables.styl"]
      }
    },
    /**
     * Run ESLint on save
     */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push(
          {
            enforce: 'pre',
            test: /\.(js|vue)$/,
            loader: 'eslint-loader',
            exclude: /(node_modules)/
          },{
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /(node_modules)/
          })
      }
    }
  }
}
