const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  devtool: false,
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "./build"),
    filename: "bundle.js",
    // 重新打包时, 先将之前打包的文件夹删除掉
    clean: true,
  },
  resolve: {
    extensions: [".js", ".json", ".wasm", ".jsx", ".ts"],
  },
  module: {
    rules: [
      // 针对jsx?代码进行babel处理
      {
        test: /\.jsx?$/, // x?: 0或者1个x
        // exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          //   options: {
          //     // plugins: [
          //     //   "@babel/plugin-transform-arrow-functions",
          //     //   "@babel/plugin-transform-block-scoping"
          //     // ]
          //     presets: [
          //       ["@babel/preset-env", {
          //         // 在开发中针对babel的浏览器兼容查询使用browserslist工具, 而不是设置target
          //         // 因为browserslist工具, 可以在多个前端工具之间共享浏览器兼容性(postcss/babel)
          //         // targets: ">5%" // 指定适配哪些浏览器
          //       }]
          //     ]
          //   }
        },
      },
      {
        test: /\.ts$/,
        use: "ts-loader",
        // use: 'babel-loader'
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
  ],
};
