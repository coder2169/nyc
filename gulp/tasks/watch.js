var gulp = require("gulp");
var watch = require("gulp-watch");



gulp.task("default",function(){
  console.log("gulp running");
});

gulp.task("html",function(){
  console.log("index.html modification!!");
});
gulp.task("watch",function(){
  watch("./app/index.html",function(){
    gulp.start("html");
  });
  watch("./app/assets/styles/**/*.css",function(){
    gulp.start("styles")
  });
});
