const pages = require('./build/pages')

module.exports = {
  publicPath: './',
  pages: pages,
  productionSourceMap: false // 是否生成sourceMap文件
}
