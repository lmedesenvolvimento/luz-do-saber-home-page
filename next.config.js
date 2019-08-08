const externalCSS = require('@zeit/next-css')
module.exports = externalCSS()

const isProd = (process.env.NODE_ENV || 'production') === 'production'

module.exports = {
    exportPathMap: () => ({
        '/': { page: '/' },
        '/contact': { page: '/contact' }
    }),
    assetPrefix: isProd ? '/luz-do-saber-home-page' : '',
}