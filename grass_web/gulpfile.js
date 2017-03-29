var gulp = require('gulp'),
 	connect = require('gulp-connect');
 
gulp.task('run', function() {
  connect.server({
    port: 2017
  });
});
 
gulp.task('default', ['run']);