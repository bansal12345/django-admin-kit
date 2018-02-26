const path = require('path')
const webpack = require('webpack')


module.exports = {
    entry: {
        base: ['./assets/js/base.js']
    },
    output: {
        path: path.resolve(__dirname, './admin_kit/static/admin_kit'),
        filename: 'js/[name].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin()
    ]
}