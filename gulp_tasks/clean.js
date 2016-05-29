var gulp            = require('gulp'),
    del             = require('del');



// Clean
gulp.task('clean', function() {
  return del([
    gulp.paths.pagesDest + '*.html',
    gulp.paths.pagesDest + 'assets/'
  ]);
});
