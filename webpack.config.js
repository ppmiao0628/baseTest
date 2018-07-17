const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const cleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

console.log(path.resolve(__dirname, 'dist'));
module.exports = {
    entry: {
        app: './src/index.js'
    },
    devtool: "inline-source-map",
    devServer: {
        contentBase:'./dist',
        hot: true,
        compress: false,
        port: 9000
    },
    plugins: [
        new cleanWebpackPlugin(['dist']),
        new htmlWebpackPlugin({
            title: "Output Management"
        }),

        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
};