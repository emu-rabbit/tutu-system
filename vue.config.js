const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    outputDir: './docs',
    publicPath: './',
    devServer: {
        port: 8080,
        open: {
            target: ['http://localhost:8080/']
        }
    },
    productionSourceMap: false,
    transpileDependencies: true
})
