var gulp = require('gulp');

var browserify = require('browserify');
var watchify = require('watchify');
var connect = require('gulp-connect');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');

gulp.task('scripts', function() {

  var bundle = function() {
    this.bundle()
      .on('error', function(error) {
        console.error(error);
      })
      .pipe(source('index.js'))
      .pipe(buffer())
      .pipe(gulp.dest('./.tmp/scripts'))
      .pipe(connect.reload());
  };

  var bundler = watchify(browserify('./index.js', {
    cache: {},
    packageCache: {},
    debug: true
  })).on('update', bundle);

  return bundle.apply(bundler);
});

gulp.task('html', function() {
  return gulp.src('./index.html')
    .pipe(gulp.dest('./.tmp/'));
});

var stylus = require('gulp-stylus');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('styles', function() {
  return gulp.src('./styles/index.styl')
    .pipe(sourcemaps.init())
    .pipe(stylus())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./.tmp/styles/'))
});

gulp.task('server', function() {
  return connect.server({
    root: ['./.tmp', './'],
    port: 3000,
    livereload: true
  });
});

gulp.task('default', ['server', 'scripts', 'html', 'styles']);