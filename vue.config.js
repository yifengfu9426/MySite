const { defineConfig } = require('@vue/cli-service')
const path = require('path')
const fs = require('fs')

module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: config => {
    // 如果设置了 VUE_SERVE_TARGET 环境变量，使用临时入口文件（用于 vue serve 命令）
    if (process.env.VUE_SERVE_TARGET) {
      const tempEntryFile = path.resolve(__dirname, 'src/temp-serve-entry.js')
      console.log('VUE_SERVE_TARGET 已设置，查找临时入口文件:', tempEntryFile)
      if (fs.existsSync(tempEntryFile)) {
        console.log('找到临时入口文件，使用它作为入口点')
        config.entry('app').clear().add(tempEntryFile)
      } else {
        console.warn('警告: 临时入口文件不存在:', tempEntryFile)
      }
    }
  }
})
