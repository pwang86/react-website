const webpack = require("webpack");
const HtmlWebPackPlugin = require("html-webpack-plugin");
// const ExtractTextPlugin = require("extract-text-webpack-plugin");
const ErrorOverlayPlugin = require("error-overlay-webpack-plugin");

const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html",
});

const errorOverlayPlugin = new ErrorOverlayPlugin();
// const extractTextPlugin = new ExtractTextPlugin("css/app.css");
const definePlugin = new webpack.DefinePlugin({
  SERVICE_ID: JSON.stringify("your_service_id"),
  TEMPLATE_ID: JSON.stringify("your_template_id"),
  USER_ID: JSON.stringify("your_user_id"),
});

module.exports = {
  entry: "./src/index.js",
  devtool: "source-map",
  resolve: {
    extensions: [".js", ".jsx"],
  },
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.jsx?$/,
        use: ["eslint-loader"],
        exclude: /node_modules/,
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.s?css$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      // {
      //   test: /\.s?css$/,
      //   use: ExtractTextPlugin.extract({
      //     fallback: "style-loader",
      //     use: ["css-loader", "sass-loader"],
      //   }),
      // },
      {
        test: /\.(jp(e*)g|png|gif|svg|pdf|ico)$/,
        use: [
          {
            loader: "file-loader",
            options: {},
          },
        ],
      },
    ],
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: {
          warnings: false,
          output: {
            comments: false,
            beautify: false,
          },
        },
      }),
    ],
  },
  plugins: [htmlPlugin, errorOverlayPlugin, definePlugin],
};
