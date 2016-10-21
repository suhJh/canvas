const gulp = require('gulp');

const config = require('./config/gulp-config');

const babelify = require('babelify');
const browserify = require('browserify');
const watchify = require('watchify');

const source = require('vinyl-source-stream'); // ->얘를 써야하는 이유 http://programmingsummaries.tistory.com/382
const buffer = require("vinyl-buffer");
const merge = require('utils-merge');
const sourcemaps = require('gulp-sourcemaps')
const uglify = require("gulp-uglify");
const rename = require('gulp-rename')
//  const prettyError = require('gulp-prettyerror'); //depre
//  const concat = require('gulp-concat');
//  const modRewirte = require('connect-modrewrite');
//  const babel = require('gulp-babel');

/* 오류 잡이 */
//  const plumber = require('gulp-plumber');
const handleErrors = require('./config/handleErrors');
const map_error = require('./config/newHandleErrors');
const notify = require('gulp-notify'); // windows alert

const nodemon = require('gulp-nodemon');
const browserSync = require('browser-sync');



gulp.task('default', [
  'browser-sync',
  'copy',
  'build',
  'watch',
]);

gulp.task('nodemon', (cb) => {
  let started = false;
  return nodemon({
    script: 'app.js',
    ignore: [
      'gulpfile.js',
      'node_modules/',
      'public/',
    ],
  }).on('start', () => {
    // to avoid nodemon being started multiple times
    // thanks @matthisk
    if (!started) {
      cb();
      started = true;
    }
  });
});

//  gulp.task('browser-sync', ['nodemon'], function() {
gulp.task('browser-sync', ['nodemon'], () => {
  browserSync.init(null, {
    proxy: 'http://localhost:8080',
    files: ['public/dist/*.*'],
    port: 3000,
    open: 'external',
  });
});

gulp.task('copy', () => {
  gulp.src(config.src.img + '/**/*.jpg')
      .pipe(gulp.dest(config.dist.img));

  gulp.src(config.src.html + '/**/*.html')
      .pipe(gulp.dest(config.dist.html));
});


gulp.task('build', () => {
  const optionalB = browserify({
    insertGlobals: true,
    extensions: ['.js', '.jsx'],
  });

  optionalB.transform(babelify, { presets: ['react', 'es2015'] });

  try { //  build에 실패하면 실패하기 전의 소스를 스트림으로 반환
    optionalB.add(config.src.js + '/index.jsx');
  } catch (err) {
    notify.write(err);
    console.log(err);
  }

  return optionalB.bundle()
  .on('error', handleErrors)
  .pipe(source('bundle.js'))
  //  .pipe(buffer())//->ugilfy도 vinyl스트림을 사용하므로 버퍼가 필요
  //  .pipe(uglify())
  .pipe(gulp.dest(config.dist.bundle + '/'))
  .pipe(browserSync.reload({ stream: true }));
});


function bundle_js(bundler) {
  return bundler.bundle()
    .on('error', handleErrors)
    .pipe(source('bundle.js'))
    .pipe(buffer())
    .pipe(gulp.dest(config.dist.bundle + '/'))
    .pipe(rename('bundle.min.js'))
    .pipe(sourcemaps.init({ loadMaps: true }))
      // capture sourcemaps from transforms
      .pipe(uglify())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(config.dist.bundle + '/'))
    .pipe(browserSync.reload({ stream: true }));
}

gulp.task('watchify', ['browser-sync'], () => {
  const args = merge(watchify.args, {
    debug: true,
    insertGlobals: true,
    extensions: ['.js', '.jsx'],
  });
  const bundler = watchify(browserify(config.src.js + '/index.jsx', args)).transform(babelify, { presets: ['react', 'es2015'] });
  bundle_js(bundler);
  bundler.on('update', () => { bundle_js(bundler); });
});

gulp.task('watch', () => {
  gulp.watch(config.src.img + '/**/*.jpg', ['copy']).on('change', browserSync.reload);
  gulp.watch(config.src.html + '/**/*.html', ['copy']).on('change', browserSync.reload);
  gulp.watch(config.src.js + '/**/*.*', ['watchify']);//.on('change', browserSync.reload);
});
