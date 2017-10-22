const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: "./src/index.jsx",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "build")
    },
    module: {
        rules: [
            {
                test: /(\.jsx|\.js)$/,
                use: [
                    'babel-loader?cacheDirectory'   // cacheDirector用来缓存loader的执行结果
                ],
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: "./build",  // 设置webpack-dev-server提供服务器的文件夹
        port: 3000,              // 服务器端口
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
}