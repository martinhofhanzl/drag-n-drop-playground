var gulp = require('gulp'),
	concat = require('gulp-concat'),
	browserify = require('gulp-browserify'),
	sass = require('gulp-sass'),
	connect = require('gulp-connect'),
	postcss = require('gulp-postcss');

var jsSources = [
	'components/scripts/modernizr-custom.js',
	'components/scripts/script.js'];

gulp.task('sass', function() {
	gulp.src('components/sass/*.scss')
		.pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
		.pipe(postcss([ require('postcss-easy-import') ]))
		.pipe(gulp.dest('builds/development/css/'))
		.pipe(connect.reload())
});

gulp.task('js', function() {
	gulp.src(jsSources)
		.pipe(concat('script.js'))
		.pipe(browserify())
		.pipe(gulp.dest('builds/development/js/'))
		.pipe(connect.reload())
});

gulp.task('watch', function() {
	gulp.watch(jsSources, ['js']);
	gulp.watch('components/sass/*.scss', ['sass']);
});

gulp.task('connect', function() {
	connect.server({
		root: 'builds/development/',
		livereload: true
	})
})

gulp.task('default', ['sass', 'js', 'connect','watch']);