const path = require('path');
const merge = require('webpack-merge');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.resolve(__dirname, './dist'),
        hot: true,
        historyApiFallback: true,
        host: '0.0.0.0',
        port: 9000
    },
    plugins: [
        new CopyWebpackPlugin([ ]),
    ],
});