const webpack = require("webpack");
const HtmlWebPackPlugin = require("html-webpack-plugin");
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ErrorOverlayPlugin = require("error-overlay-webpack-plugin");

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html",
});

const errorOverlayPlugin = new ErrorOverlayPlugin();
// const miniCssExtractPlugin = new MiniCssExtractPlugin();
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
        use: [
          //   {
          //     loader: MiniCssExtractPlugin.loader,
          //   },
          "style-loader",
          "css-loader",
          "sass-loader",
        ],
      },
      // {
      //   test: /\.css$/,
      //   use: ["style-loader", "css-loader"],
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
  plugins: [htmlPlugin, errorOverlayPlugin, definePlugin],
};
