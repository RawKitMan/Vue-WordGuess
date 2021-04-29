module.exports = {
    mode: development,
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.css/,
                use: ['vue-style-loader', 'css-loader']
            }
        ]
    }
}