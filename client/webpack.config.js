const path = require("path");
const webpack = require('webpack');

module.exports = {

    devServer: {
        port: 3000,
        historyApiFallback: true
    },

    devtool: 'cheap-module-source-map',
    entry: ['babel-polyfill', './src/index'],

    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/dist/',
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                include: __dirname
            },
            {
                test: /\.less$/,
                loader: "style-loader!css-loader!less-loader"
            },
            {   test: /\.(jpe?g|png|gif|svg|eot|ttf|woff)/,
                loader: "file-loader"
            }
        ]
    }
};
