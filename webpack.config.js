var webpack = require('webpack');

module.exports = {
  context: __dirname,
  entry: "./app/index.js",
  module:{
    loaders:[
      {
        test:/\.js?$/,
        exclude: /(node_modules|bower_components)/,
        loader:'babel-loader',
        query:{
          presets:['react','es2015']
        }
      }
    ]

  },
  output: {
    path: __dirname + "/public",
    filename: "bundle.js"
  }
};
