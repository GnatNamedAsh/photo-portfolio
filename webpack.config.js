const path = require("path")
const HtmlWebPackPlugin = require("html-webpack-plugin")

module.exports = {
    entry: {
        main: './src/js/index.js'
    },
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: '/',
        filename: '[name].js'
    },
    target: 'web',
    devtool: '#source-map',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/html/index.html",
            filename: "./index.html",
            excludeChunks: ['server']
        })
    ]
}