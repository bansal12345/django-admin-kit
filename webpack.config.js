const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractSass = new ExtractTextPlugin({
    filename: 'css/style.css'
})

module.exports = {
    entry: {
        index: ['./assets/js/index.js', './assets/css/style.scss'],
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
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                    minimize: true
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceComments: false
                            }
                        }
                    ]
                })
            }
        ]
    },
    plugins: [
        extractSass
    ]
}