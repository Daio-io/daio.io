var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var del = require('del');
var list = require('gulp-list');
var mocha = require('gulp-mocha');

gulp.task('clean', function () {
    del([
        'public/js/bundle.js'
    ]);
});

gulp.task('help', function () {
    return gulp.src('./build-tasks.json')
        .pipe(list())

});

gulp.task('bundle', ['clean'], function () {
    return browserify({entries: './front_app/app.js', debug: false})
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('./public/js'))
});

gulp.task('api-tests', function () {
    return gulp.src('api/test/*.test.js')
        .pipe(mocha({
            ui: 'bdd'
        }));
});

gulp.task('default', ['help'], function () {});