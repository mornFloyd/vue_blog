module.exports = {
  configureWebpack: {
    resolve: {
      //读取路径配置
      alias: {
        'assets': '@/assets',
        'components': '@/components',
        'network': '@/network',
        'common': '@/common',
        'views': '@/views'
      }
    }
  },
}