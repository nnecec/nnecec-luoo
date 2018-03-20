const path = require("path");
const nodeExternals = require("webpack-node-externals");
// const ExtractTextPlugin = require("extract-text-webpack-plugin");


module.exports = env => {
  return {
    target: "node",
    node: {
      __dirname: false,
      __filename: false
    },
    externals: [nodeExternals()],
    resolve: {
      alias: {
        env: path.resolve(__dirname, `../config/env_${env}.json`),
        components: path.resolve(__dirname, `../src/components`),
        api: path.resolve(__dirname, `../src/api`),
        stores: path.resolve(__dirname, `../src/stores`),
        utils: path.resolve(__dirname, `../src/utils`),
      }
    },
    devtool: "source-map",
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: ["babel-loader"]
        },
        {
          test: /.(css|scss|sass)$/,
          use: ["style-loader", "css-loader", "sass-loader"]
        },
        {
          test: /.(png|woff|woff2|eot|ttf|svg)$/,
          use: ['url-loader']
        }
      ]
    },
    plugins: [
      // new ExtractTextPlugin({
      //   filename: "style.css",
      //   disable: process.env.NODE_ENV === "development"
      // }),
    ]
  };
};
