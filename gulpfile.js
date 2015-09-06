var gulp    = require('gulp');
var webpack = require('webpack');
var sass    = require('gulp-sass');
var del     = require('del');


var webpackConfig = require('./webpack-production.config');


gulp.task('clean', function(done){
  del('./build/*', done);
});

gulp.task('webpack', function(done){
  webpack(webpackConfig)
    .run(function(err){
      if(err){
        console.error(error);
      }
      done();
    });
});

gulp.task('sass', function(){
  gulp.src('./src/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./build/'));
});

gulp.task('copy', function(){
  gulp.src(['./src/index.html'])
    .pipe(gulp.dest('./build/'));
});


gulp.task('default', ['clean', 'webpack', 'sass', 'copy']);

















