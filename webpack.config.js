module.exports = {
    watch: true,
    context: _dirname + "/app",
    entry: "./index",
    output:{
        path: _dirname + "/assets/js/",
        publicPath: "/assets/",
    },
    module:{
      loaders:[
          {
              test: /\.jsx$/,
              include:[
                  path.resolve(__dirname, "app/src")
              ],
              loader: "jsx-loader"
          },
          {
              test: /\.sass$/,
              include:[
                  path.resolve(__dirname, "app/src")
              ],
              loader: "sass-loader"
          }
      ]  
    }
}