const path = require('path')

module.exports = {
  dev: {
     /* 中略 */
  },

  build: {
    // Template for index.html
    index: path.resolve(__dirname, '../docs/index.html'), //①

    // Paths
    assetsRoot: path.resolve(__dirname, '../docs'),  //②
    assetsSubDirectory: 'static',
    assetsPublicPath: './',  //③
    /* 中略 */
  }
}