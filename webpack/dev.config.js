/* eslint-disable import/no-extraneous-dependencies, no-var, prefer-template */
var webpack = require("webpack");
var path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

var PORT = 3000 || process.env.PORT;
var API_PORT = 3050 || process.env.API_PORT;

module.exports = {
  entry: {
    vendor: ["react", "react-dom"],
    main: ["./client/index.js"]
  },
  name: "client",
  mode: "development",
  output: {
    filename: "[name]-bundle.js",
    path: path.resolve(__dirname, "./public"),
    publicPath: "/"
  },
  devtool: "#eval-source-map",
  devServer: {
    host: "localhost",
    port: PORT,
    contentBase: path.resolve(__dirname, "../public"),
    watchContentBase: true,
    hot: true,
    historyApiFallback: {
      disableDotRule: true
    },
    watchOptions: {
      ignored: /node_modules/
    },
    overlay: {
      warnings: true,
      errors: true
    },
    proxy: {
      "/api": "http://localhost:3050"
    },
    stats: "errors-only"
  },
  module: {
    rules: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: "babel-loader" },
      { test: /\.css$/, loaders: ["style-loader", "css-loader"] },
      { test: /\.png$/, loader: "url-loader?limit=100000" },
      { test: /\.jpg$/, loader: "file-loader" },
      {
        test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&mimetype=application/font-woff"
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&mimetype=application/octet-stream"
      },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&mimetype=image/svg+xml"
      }
    ]
  },
  resolve: {
    modules: [path.resolve("client"), "node_modules"],
    extensions: [".js", ".jsx"]
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: path.resolve(__dirname, "../public/index.html")
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ]
};
