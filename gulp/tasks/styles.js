var gulp = require("gulp");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var simplevars = require("postcss-simple-vars");
var nested = require("postcss-nested");
var cssimport = require("postcss-import");

gulp.task("styles",function(){
  return gulp.src("./app/assets/styles/styles.css")
  .pipe(postcss([cssimport,simplevars,nested,autoprefixer]))
  .pipe(gulp.dest("./app/temp/styles"));
});
