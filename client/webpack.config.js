const webpack = require('webpack');
const path = require('path');
// const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

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
        new webpack.HotModuleReplacementPlugin(),
        // new webpack.DefinePlugin({     // 使用全局变量来决定是否记录日志
        //     'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production')     // 设置打包环境为生产环境
        // }),
        // new UglifyJSPlugin({
        //     uglifyOptions: {
        //         ie8: false,
        //         output: {
        //             comments: false,
        //             beautify: false,
        //         },
        //         mangle: {
        //             keep_fnames: true
        //         },
        //         compress: {
        //             warnings: false,
        //             drop_console: true
        //         },
        //     }
        // })
    ],
}