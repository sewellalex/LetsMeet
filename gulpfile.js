/**
 * Created by alexsewell on 10/15/15.
 */

var gulp = require('gulp');

// Use gulp to run
gulp.task('default', ['nodemon']);

require('require-dir')('./gulp');