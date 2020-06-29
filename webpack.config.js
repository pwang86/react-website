const webpack = require("webpack");
const HtmlWebPackPlugin = require("html-webpack-plugin");
// const ExtractTextPlugin = require("extract-text-webpack-plugin");
const ErrorOverlayPlugin = require("error-overlay-webpack-plugin");

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
});

const errorOverlayPlugin = new ErrorOverlayPlugin();
// const extractTextPlugin = new ExtractTextPlugin("css/app.css");
const definePlugin = new webpack.DefinePlugin({
TEMPLATEID: JSON.stringify(),
USERID: JSON.stringify()
});

module.exports = {
  entry: "./src/index.js",
  devtool: "source-map",
  resolve: {
    extensions: [".js", ".jsx"]
  },
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.jsx?$/,
        use: ["eslint-loader"],
        exclude: /node_modules/
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      // {
      //   test: /\.s?css$/,
      //   use: ExtractTextPlugin.extract({
      //     fallback: "style-loader",
      //     use: ["css-loader", "sass-loader"]
      //   })
      // },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(jp(e*)g|png|gif|svg|pdf|ico)$/,
        use: [
          {
            loader: "file-loader",
            options: {}
          }
        ]
      }
    ]
  },
  plugins: [htmlPlugin, errorOverlayPlugin, definePlugin]
};
