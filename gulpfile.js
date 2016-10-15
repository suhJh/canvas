const gulp = require('gulp');

const config = require('./config/gulp-config');

//  const babel = require('gulp-babel');
const babelify = require('babelify');

const browserify = require('browserify');

//  const buffer = require("vinyl-buffer"); //depre
//  const uglify = require("gulp-uglify");  //depre
//  const prettyError = require('gulp-prettyerror'); //depre


const source = require('vinyl-source-stream'); // ->얘를 써야하는 이유 http://programmingsummaries.tistory.com/382

//  const concat = require('gulp-concat');

//  const modRewirte = require('connect-modrewrite');

/* 오류 잡이 */
//  const plumber = require('gulp-plumber');
const handleErrors = require('./config/handleErrors');

const nodemon = require('gulp-nodemon');
const browserSync = require('browser-sync');

const notify = require('gulp-notify'); // windows alert

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

/* express가 아닌 그냥 스태틱으로만 쓸 경우
gulp.task('no-express', () => {
  return browserSync.init({
    proxy: 'http://cdn.company.com/',
    serveStatic: ['./dist'],
    startPath: './dist/index.html',
    middleware: [
      modRewrite([
        '!\\.\\w+$ public/dist/index.html [L]'  //  없는 경로인 경우 index를 반환
      ])
    ]
  });
});
*/

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


gulp.task('watch', () => {
  gulp.watch(config.src.img + '/**/*.jpg', ['copy']).on('change', browserSync.reload);
  gulp.watch(config.src.html + '/**/*.html', ['copy']).on('change', browserSync.reload);
  gulp.watch(config.src.js + '/**/*.*', ['build']);//.on('change', browserSync.reload);
});
