var gulp = require('gulp')
	concat = require('gulp-concat')
	browserify = require('gulp-browserify')
	sass = require('gulp-sass')

var jsSources = [
	'components/scripts/modernizr-custom.js',
	'components/scripts/script.js'];

gulp.task('sass', function() {
	gulp.src('components/sass/*.scss')
		.pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
		.pipe(gulp.dest('builds/development/css/'))
});

gulp.task('js', function() {
	gulp.src(jsSources)
		.pipe(concat('script.js'))
		.pipe(browserify())
		.pipe(gulp.dest('builds/development/js/'))
});

gulp.task('watch', function() {
	gulp.watch(jsSources, ['js']);
	gulp.watch('components/sass/*.scss', ['sass']);
})

gulp.task('default', ['sass', 'js', 'watch']);