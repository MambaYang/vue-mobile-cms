const HtmlWebpackPlugin = require("html-webpack-plugin"); // 通过 npm 安装
const webpack = require("webpack"); // 访问内置的插件
const path = require("path");
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
    entry: path.join(__dirname, "./src/main.js"),
    output: {
        path: path.join(__dirname, "./dist"),
        filename: "bundle.js",
    },
    mode: "development",
    devServer: {
        contentBase: path.join(__dirname, "./dist"),
        compress: true,
        port: 3000,
        // open: true,
    },
    plugins: [
        new webpack.ProgressPlugin(),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "./src/index.html"),
            filename: "index.html",
        }),
        new VueLoaderPlugin()
    ],
    module: {
        rules: [
            { test: /\.css$/, use: ["style-loader", "css-loader"] },
            {
                test: /\.less$/,
                use: ["style-loader", "css-loader", "less-loader"],
            },
            {
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
            // {
            //     test: /\.jpg|png|gif|bmp$/,
            //     use: ["url-loader"],
            // },
            {
                //用 asset 模块 处理图片
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource",
                parser: {
                    dataUrlCondition: {
                        maxSize: 119410, // 限制图片大小
                    },
                },
                generator: {
                    //自定义文件名
                    filename: "images/[hash:8]-[name].[ext][query]",
                },
            },
            {
                //编译es6高级语法 配置babel
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    // options: {
                    //     presets: ["@babel/preset-env"],
                    //     plugins: ["@babel/plugin-transform-runtime","@babel/plugin-transform-strict-mode"],
                    // },
                },
            },
            {
                //解析vue组件的loader
                test:/\.vue$/, 
                use:'vue-loader'   
            },
            {
                test:/\.ttf|woff|woff2|eot|svg$/,
                type: "asset/resource",
            }
        ],
    },
};
