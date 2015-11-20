var gulp = require('gulp'),
	requirejsOptimize = require('gulp-requirejs-optimize');

gulp.task('requirejs', function() {
	return gulp.src('scripts/main.js')
		.pipe(requirejsOptimize({
			optimize: 'none'
		}))
		.pipe(gulp.dest('dist'));
});

gulp.task('default', ['requirejs']);
