// var path = require("path");

module.exports = {
  context: __dirname,
  entry: "./javascripts/root.js",
  output: {
    filename: "./javascripts/bundle.js"
    // path: path.resolve(__dirname, 'app', 'assets', 'javascripts'),
    // filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: [/\.js?$/],
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }
    ]
  },
  devtool: 'source-maps',
  resolve: {
    extensions: [".js", "*"]
  }
};
