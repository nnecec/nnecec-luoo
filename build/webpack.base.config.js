const path = require("path");
const glob = require('glob');
const nodeExternals = require("webpack-node-externals");
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const PurifyCSSPlugin = require('purifycss-webpack');


module.exports = env => {
  return {
    target: "node",
    node: {
      __dirname: false,
      __filename: false
    },
    externals: [nodeExternals()],
    resolve: {
      modules: [
        "node_modules",
        path.resolve(__dirname, '../src')
      ],
      extensions: ['.js', '.json', '.jsx', '.css'],
      alias: {
        env: path.resolve(__dirname, `../config/env_${env}.json`),
        components: path.resolve(__dirname, `../src/components`),
        api: path.resolve(__dirname, `src/api`),
        stores: path.resolve(__dirname, `src/stores`),
        utils: path.resolve(__dirname, `src/utils`),
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
      new FriendlyErrorsWebpackPlugin(),
      new ExtractTextPlugin({
        filename: "style.css",
        disable: process.env.NODE_ENV === "development"
      }),
      new PurifyCSSPlugin({
        // Give paths to parse for rules. These should be absolute!
        paths: glob.sync(path.join(__dirname, 'app/*.html')),
      })
    ]
  };
};
