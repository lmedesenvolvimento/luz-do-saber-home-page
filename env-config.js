const prod = process.env.NODE_ENV === 'production'

module.exports = { assetPrefix: prod ? 'https://rodrigoronin.github.io/luz-do-saber-home-page/' : '' }