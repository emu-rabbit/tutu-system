const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    devServer: {
        port: 8080,
        open: {
            target: ['http://localhost:8080/']
        }
    },
    transpileDependencies: true
})
