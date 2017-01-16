var gulp = require('gulp');
var config = require('../gulp.config')();
var del = require('del');

/* Run all clean tasks */
gulp.task('clean', ['clean-build', 'clean-ts', 'clean-ts-app', 'clean-sass']);

/* Clean build folder */
gulp.task('clean-build', function () {
    return del([config.build.path]);
});

/* Clean build folder */
gulp.task('clean-ts-app', function () {
    return del([config.tmpApp]);
});

/* Clean sass compile */
gulp.task('clean-sass', function () {
    return del([config.assetsPath.styles + '**/*.css']);
});

/* Clean js and map */
gulp.task('clean-ts', function () {
    return del([config.tmp]);
});
