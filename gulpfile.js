var gulp = require('gulp');
var webpackgulp = require('webpack-stream');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var gutil = require("gulp-util");

gulp.task('webpack', function() {
  return gulp.src('src/js/index.jsx')
    .pipe(webpackgulp(require('./webpack.config.js')))
    .pipe(gulp.dest('dist/assets'));
});

gulp.task('template', function() {
  return gulp.src('src/html/*.html')
    .pipe(gulp.dest('dist/'));
});

gulp.task("webpack-dev-server", function(callback) {
    // Start a webpack-dev-server
    var compiler = webpack(require('./webpack.config.js'));

    new WebpackDevServer(compiler, require('./webpack-dev-server.config.js')).listen(8080, "localhost", function(err) {
        if(err) throw new gutil.PluginError("webpack-dev-server", err);
        // Server listening
        gutil.log("[webpack-dev-server]", "http://localhost:8080/index.html");
        // keep the server alive or continue?
        callback();
    });
});

gulp.task('default', ['template','webpack', 'webpack-dev-server']);