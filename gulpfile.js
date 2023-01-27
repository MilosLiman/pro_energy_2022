"use strict";

const gulp = require('gulp'),
      sass = require('gulp-sass')(require('sass'));

      
gulp.task("sass", function (cb) {
  gulp
    .src("./styles/style.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("./css"))
    cb();
});