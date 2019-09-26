var gulp = require('gulp'),
    jade = require('gulp-jade'),
    sass = require('gulp-sass'),
    browserSync  = require('browser-sync'),
    minifyCSS = require('gulp-minify-css'),
    sourcemaps = require('gulp-sourcemaps');
    autoprefixer = require('gulp-autoprefixer'),
    clean = require('gulp-clean'),
    builder = require('gulp-task-builder');


function styles() {
  return gulp.src('public/scss/*.scss')
    .pipe(sourcemaps.init())
		.pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
    .pipe(gulp.dest('public/css'))
    .pipe(minifyCSS())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('public/css'))
		.pipe(sass().on('error', sass.logError))
    .pipe(browserSync.reload({stream: true}))
}

function jadeList() {
  return gulp.src('public/jade/**/*.jade')
  .pipe(jade({
    jadeList: jadeList,
    pretty: true
  }))
  .pipe(gulp.dest('public/'))
  .pipe(browserSync.reload({stream: true}))
}

function watch() {
    browserSync({
      server: {
        baseDir: 'public'
      },
      notify: false
    });
  
    gulp.watch('public/scss/*.scss', styles);
    gulp.watch('public/jade/*.jade', jadeList);
}

function build() {
    var jsDist = gulp.src(['public/scripts/*.js',]).pipe(gulp.dest('dist/scripts'));
    var cssDist = gulp.src(['public/css/*.css',]).pipe(gulp.dest('dist/css'));
    var htmlDist = gulp.src(['public/*.html',]).pipe(gulp.dest('dist'));
    var imgDist = gulp.src(['public/images/**/*',]).pipe(gulp.dest('dist/images'));
    var fontDist = gulp.src(['public/fonts/**/*',]).pipe(gulp.dest('dist/fonts'));

    return jsDist, cssDist, htmlDist, imgDist, fontDist
}

exports.jadeList = jadeList;
exports.styles = styles;
exports.watch = watch;
exports.build = build;
