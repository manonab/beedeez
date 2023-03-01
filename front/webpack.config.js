const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  entry: ["babel-polyfill", "./index.js"],
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./index.html",
    }),
    new webpack.EnvironmentPlugin({JEST_WORKER_ID: null}),
    new webpack.DefinePlugin({process: {env: {}}}),
  ],
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            babelrc: false,
            configFile: false,
            compact: false,
            presets: [
              require.resolve("babel-preset-react-app/dependencies"),
              {helpers: true},
              "@babel/env",
              "@babel/preset-react",
              {plugins: ["@babel/plugin-proposal-class-properties"]},
            ],
          },
        },
      },
    ],
  },
  resolve: {
    alias: {"react-native$": "react-native-web"},
    extensions: [".web.js", ".js"],
  },
};
