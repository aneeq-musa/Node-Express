var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');
var nodemon = require('gulp-nodemon');

gulp.task('minify', function() {
  return gulp.src('views/**/*.ejs')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('_pages/'));
});

gulp.task('nodemon', function () {
  nodemon({
    script: 'server.js'
  , ext: 'js html css ejs'
  , env: { 'NODE_ENV': 'development' }
  })
});

gulp.task('default', ['minify','nodemon']);
