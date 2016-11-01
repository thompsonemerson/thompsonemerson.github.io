var gulp            = require('gulp'),
    plumber         = require('gulp-plumber'),
    pug             = require('gulp-pug'),
    browserSync     = require('browser-sync');



// Pages
gulp.task('pages', function(){
  return gulp.src([gulp.paths.pages])
    .pipe(plumber({
      errorHandler: function (error) {
        console.log(error.message);
        this.emit('end');
    }}))
    .pipe(pug({
        pretty: !gulp.config.compressed
    }))
    .pipe(gulp.dest(gulp.paths.pagesDest))
    .pipe(browserSync.reload({stream:true}))
});
