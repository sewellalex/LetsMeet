/**
 * Created by alexsewell on 10/15/15.
 */

var gulp = require('gulp');
var mocha = require('gulp-mocha');
var request = require('supertest');

gulp.task('test', function() {
  return gulp.src('test.js', {read: false})
      .pipe(mocha({reporter: 'landing'}));
});

