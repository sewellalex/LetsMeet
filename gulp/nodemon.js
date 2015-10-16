/**
 * Created by alexsewell on 10/15/15.
 */

var gulp = require('gulp');
var nodemon = require('gulp-nodemon');

gulp.task("nodemon", function() {
  nodemon({
    script: "app.js",
    ext: "js"
  })
      .on("start", ['test'])
      .on("change", function() {
        console.log("Changes have been made!");
      })
      .on("restart", function() {
        console.log("Restarted express app!");
      });
});