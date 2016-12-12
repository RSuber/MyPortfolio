var gulp = require('gulp');
var sass = require('gulp-sass');
var browserify = require('gulp-browserify')
var htmlmin = require('gulp-htmlmin');
var babel = require('gulp-babel')

gulp.task('default', ['html','css', 'js'])

gulp.task('css', function (){
  gulp.src('./styles.css')
  .pipe(sass())
  .pipe(gulp.dest('./public'))
});
gulp.task('html', function () {
    gulp.src('./Templates/*.html').pipe(gulp.dest('./public/Templates'));

    return gulp.src('./index.html')
        .pipe(gulp.dest('./public'));
});

gulp.task('js', function(){
  gulp.src('./main.js')
    .pipe(browserify())
    .pipe(babel({
            presets: ['es2015']
        }))
    .pipe(gulp.dest('./public'))

});

gulp.task('watch', function(){
  gulp.watch('./styles.css', ['css']);
  gulp.watch('./index.html', ['html']);
  gulp.watch('./main.js', ['js']);
  gulp.watch('./Templates/*.html', ['html']);
  gulp.watch('./js/*/*.js', ['js']);
});
