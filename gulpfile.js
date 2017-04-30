var gulp = require('gulp')
	concat = require('gulp-concat')
	browserify = require('gulp-browserify');

var jsSources = [
	'components/scripts/modernizr-custom.js',
	'components/scripts/script.js'];

gulp.task('js', function() {
	gulp.src(jsSources)
		.pipe(concat('script.js'))
		.pipe(browserify())
		.pipe(gulp.dest('builds/development/js/'))
});