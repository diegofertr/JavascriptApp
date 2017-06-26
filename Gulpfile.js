var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var babel = require('babelify');
var browserify = require('browserify');

gulp.task('styles', function () {
	gulp
	  .src('index.scss')
	  .pipe(sass())
	  .pipe(rename('app.css'))
	  .pipe(gulp.dest('public'));
})

gulp.task('assets', function () {
	gulp
		.src('assets/*')
		.pipe(gulp.dest('public'));
})

gulp.task('scripts', function () {
	browserify('./src/index.js')
	  .transform(babel)
	  .bundle()
	  .pipe(source('index.js'))
})

gulp.task('default', ['styles', 'assets'])