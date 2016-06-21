var path = require('path');

module.exports = {
  watch: true,
  context: __dirname,
  entry: "./index",
  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  output: {
    path: __dirname + "/dist/assets",
    publicPath: "/assets/",
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        query: {
		        presets: ["es2015", "react"],
        },
        loader: "babel-loader"
      },
      { test: /\.css$/, loader: "style!css" },
      { test: /\.(jpe?g|png|gif|svg)$/i, loaders: ['url?limit=10000', 'img?minimize'] },
      { test: /\.json$/, loader: "file?name=[hash].[ext]" },
    ]
  },

  imagemin: {
    gifsicle: { interlaced: false },
    jpegtran: {
      progressive: true,
      arithmetic: false
    },
    optipng: { optimizationLevel: 5 },
    pngquant: {
      floyd: 0.5,
      speed: 2
    },
    svgo: {
      plugins: [
        { removeTitle: true },
        { convertPathData: false }
      ]
    }
  }
}
