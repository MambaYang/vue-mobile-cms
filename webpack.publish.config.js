const HtmlWebpackPlugin = require("html-webpack-plugin"); // 通过 npm 安装
const webpack = require("webpack"); // 访问内置的插件
const path = require("path");
//抽离css
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
//压缩css
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader");

module.exports = {
    entry: {
        index: path.join(__dirname, "./src/main.js"),
        vendors: ["vue", "vuex", "vue-router", "mint-ui"], //指定第三包的名称
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "js/[name].bundle.js",
        clean: true,
    },
    mode: "development",
    plugins: [
        new webpack.ProgressPlugin(),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "./src/index.html"),
            filename: "index.html",
            minify: {
                //表示提供压缩选项
                removeComments: true, //移除页面中的注释
                collapseWhitespace: true, //合并空白字符
                removeAttributeQuotes: true, //移除属性节点上的引号
            },
        }),
        //抽离css
        new MiniCssExtractPlugin({
            filename: "css/style.css",
        }),
        new VueLoaderPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: "../", //设置公共路径
                        },
                    },
                    "css-loader",
                ],
            },
            {
                test: /\.less$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: "../",
                        },
                    },
                    "css-loader",
                    "less-loader",
                ],
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: "../",
                        },
                    },
                    "css-loader",
                    "sass-loader",
                ],
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
                    filename: "images/[hash:8]-[name][ext][query]",
                },
            },
            {
                //编译es6高级语法 配置babel
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
            {
                //解析vue组件的loader
                test: /\.vue$/,
                use: "vue-loader",
            },
            {
                test: /\.ttf|woff|woff2|eot|svg$/,
                type: "asset/resource",
                generator: {
                    //自定义文件名
                    filename: "font/[hash:8]-[name][ext][query]",
                },
            },
        ],
    },
    //优化插件配置项
    optimization: {
        splitChunks: {
            //SplitChunksPlugin插件的默认配置，主文件和第三方库分成两块
            cacheGroups: {
                vendors: {
                    // test: /[\\/]node_modules[\\/]/,
                    chunks: "async",
                },
            },
        },
        //压缩配置
        minimize: true,
        minimizer: [
            // new UglifyJsPlugin({
            //     test: /\.js(\?.*)?$/i,
            // }),
            new CssMinimizerPlugin(),
        ],
    },
};
