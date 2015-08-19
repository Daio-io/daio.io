var gulp = require('gulp');
var mocha = require('gulp-mocha');

gulp.task('api-tests', function () {
    return gulp.src('api/test/*.test.js')
        .pipe(mocha({
            ui: 'bdd'
        }));
});

gulp.task('default', function () {});