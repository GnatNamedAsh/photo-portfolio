const nodeExternals = require("webpack-node-externals");
const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (env, args) => {
  const isProduction = !args.mode || args.mode === 'production';

  return {
    entry: {
      server: "./src/server/server.js"
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      publicPath: "/",
      filename: 'server.js'
    },
    target: "node",
    node: {
      __dirname: false,
      __filename: false
    },
    externals: [nodeExternals()],
  };
};
