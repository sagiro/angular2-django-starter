/// <binding AfterBuild='default' />
/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/

var gulp = require('gulp');
var gutil = require('gulp-util');
var webpack = require('webpack');
var config = require('./webpack.config.js');

gulp.task('default', function () {
    gulp.start('copy', 'webpack');
});

gulp.task('copy', function () {
    gulp.src([
      'client/*.html'
    ]).pipe(gulp.dest('./dist'));
    gulp.src([
      'client/css/*.css'
    ]).pipe(gulp.dest('./dist/css'));
    gutil.log(gutil.colors.green('Copied all files to dev folder'));
});

gulp.task('webpack', function(done){
   webpack(config).run(onBuild(done));
});

function onBuild(done) {
    return function(err, stats) {
        if (err) {
            gutil.log('Error', err);
            if (done) {
                done();
            }
        } else {
            Object.keys(stats.compilation.assets).forEach(function(key) {
                gutil.log('Webpack: output ', gutil.colors.green(key));
            });
            gutil.log('Webpack: ', gutil.colors.blue('finished'));
            if (done) {
                done();
            }
        }
    }
}