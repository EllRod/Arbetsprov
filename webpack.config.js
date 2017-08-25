const path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: "./src/entry.js",
    output: {
        path: path.resolve(__dirname, 'dist', 'assets'),
        filename: "bundle.js",
        publicPath: '/assets', 
    },
    module: {
        rules: [
            {
            test: /\.scss$/,
            use: ExtractTextPlugin.extract({
               fallback: 'style-loader',
               loader: ['css-loader','sass-loader'],
               publicPath: '/dist'
            })
            }
        ]
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'src'),    // New
    },
    plugins: [
        new ExtractTextPlugin({
            filename: 'style.css',
            disabled: false,
            allChunk: true
    
        })
    ]
};