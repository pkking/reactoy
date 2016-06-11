var gulp = require('gulp');
var webpackgulp = require('webpack-stream');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var gutil = require("gulp-util");
var devServerConfig = require('./webpack-dev-server.config.js');

gulp.task('webpack', function () {
  return gulp.src('index.jsx')
    .pipe(webpackgulp(require('./webpack.config.js')))
    .pipe(gulp.dest('dist/assets'));
});

gulp.task('template', function () {
  return gulp.src('*.html')
    .pipe(gulp.dest('dist/'));
});

gulp.task("webpack-dev-server", function (callback) {
  // Start a webpack-dev-server
  var compiler = webpack(require('./webpack.config.js'));
  new WebpackDevServer(compiler, devServerConfig).listen(devServerConfig.port, devServerConfig.host, function (err) {
    if (err) {
      throw new gutil.PluginError("webpack-dev-server", err);
    }
    // Server listening
    gutil.log("[webpack-dev-server]", "http://" + devServerConfig.host + ":" + devServerConfig.port + "/index.html");
    // keep the server alive or continue?
    callback();
  });
});
gulp.task('default', ['template', 'webpack'])
gulp.watch(['src/*/*.jsx', '*.html', '*.jsx', 'src/sytles/*.scss', 'src/static/*'], ['default']);
