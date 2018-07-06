module.exports = {
    devServer: {
        port: 10001,
        proxy: {
            '/api': {
                target: 'http://localhost:9006',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    },
    
}