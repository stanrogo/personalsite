module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'StanRogo - Thoughts, Events and Other Things by Stanley Clark',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no' },
      { hid: 'description', name: 'description', content: 'Thoughts, events and other things from a computer science student in Eindhoven.' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'manifest', href: 'manifest.json' },
    ]
  },
  /*
  ** Define registered plugins
  */
  plugins: [
    '~/plugins/vue-async-computed',
    '~/plugins/contentful',
    '~/plugins/vue-bootstrap',
    '~/plugins/vue-disqus',
    '~/plugins/vue-markdown',
    '~/plugins/vue-moment',
    '~/plugins/vue-highlight',
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  render: {
    bundleRenderer: {
      shouldPreload: (file, type) => {
        return ['script', 'style', 'font'].includes(type)
      }
    }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
};
