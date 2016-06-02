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
              test: /\.sass$/,
              include:[
                  path.resolve(__dirname, "/src/sass")
              ],
              loader: "sass-loader"
          },
          {
              test: /\.css$/,
	      loader: "style-loader!css-loader"
          }

      ]  
    },
}
