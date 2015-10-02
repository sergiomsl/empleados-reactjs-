var gulp = require('gulp')
var webserver = require('gulp-webserver')
var browserify = require('browserify')
var babelify = require('babelify')
var source = require('vinyl-source-stream')
var minify = require('gulp-minify-css')

gulp.task('server', function() {
  gulp.src('./build')
    .pipe(webserver({
      host: '0.0.0.0',
      port: 8080,
      fallback: 'index.html',
      livereload: true
    }))
})

gulp.task('build', function() {
  browserify({
    entries: './src/index.js',
    extensions: ['.js'],
    debug: true
  })
  .transform(babelify)
  .bundle()
  .pipe(source('bundle.js'))
  .pipe(gulp.dest('./build/js'))
})

gulp.task('watch', function() {
  gulp.watch('./src/**/*.js', ['build'])
})

gulp.task('default', ['server', 'watch'])
