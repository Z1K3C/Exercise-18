const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
    entry: './views/app.jsx',
    mode: 'development',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
       rules: [
          { test: /\.jsx$/,loader: 'babel-loader',exclude: /node_modules/ },
          { test: /\.css/,use: [MiniCssExtractPlugin.loader,'css-loader'] },
       ]
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: "bundle.css"
      }),
      //new BundleAnalyzerPlugin({ analyzerPort: 7777 }),
    ],
    devtool: 'source-map'
}