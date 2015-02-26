var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var del = require('del');

gulp.task('clean', function () {
    del([
        'public/js/bundle.js'
    ]);
});

gulp.task('bundle',['clean'], function () {
    return browserify({entries: './front_app/app.js', debug: true})
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('./public/js'))
});

gulp.task('default', function () {
});