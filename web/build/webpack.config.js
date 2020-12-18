const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
/**
 * @type { import('webpack').Configuration}
 */
module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "../src/index.js"),
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "../dist"),
  },
  devServer: {
    contentBase: path.resolve(__dirname, "../dist"),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.js$/,
        use: ["babel-loader"],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "sdsada",
    }),
  ],
};
