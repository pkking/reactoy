var path = require('path');

module.exports = {
    watch: true,
    context: __dirname ,
    entry: "./index",
    resolve: {
        extensions: ['', '.js', '.jsx']
    },

    output:{
        path: __dirname + "/dist/assets",
        publicPath: "/assets/",
        filename: "bundle.js"
    },
    module:{
      loaders:[
          {
              test: /\.jsx?$/,
              exclude: /(node_modules|bower_components)/,
	      query:{
		    presets: ["es2015","react"],
	      },
              loader: "babel-loader"
          },
          {
              test: /\.scss$/,
              loaders: ["style", "css", "sass"]
          }

      ]  
    },
    sassLoader: {
      includePaths: [path.resolve(__dirname, "./src/sytles")]
    }
}
