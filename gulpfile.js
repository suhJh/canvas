const gulp = require('gulp');

const config = require('./config/gulp-config');

const babel = require('gulp-babel');
const babelify = require('babelify');

const browserify = require('browserify');

const buffer = require("vinyl-buffer"); //depre
const uglify = require("gulp-uglify");  //depre
const source = require('vinyl-source-stream'); //->얘를 써야하는 이유 http://programmingsummaries.tistory.com/382

const concat = require('gulp-concat');

const modRewirte = require('connect-modrewrite');


const nodemon = require('gulp-nodemon');
const browserSync = require('browser-sync');



gulp.task('default', [
  'browser-sync',
  'build',
  'copy',
  'watch'
]);

gulp.task('browser-sync', ['nodemon'], function() {
	browserSync.init(null, {
		proxy: "http://localhost:8080",
    files: ["public/dist/*.*"],
    port: 3000,
    open: 'external'
	});
});

gulp.task('copy', ()=>{config.dist.bundle
  gulp.src( config.src.img + '/**/*.jpg')
      .pipe(gulp.dest(config.dist.img));

  gulp.src( config.src.html + '/**/*.html')
      .pipe(gulp.dest(config.dist.html))

});

/* express가 아닌 그냥 스태틱으로만 쓸 경우*/
gulp.task('no-express', function(){
  return browserSync.init({
  	proxy: 'http://cdn.company.com/',
  	serveStatic: ['./dist'],
  	startPath: './dist/index.html',
    middleware: [
		    modRewrite([
			       '!\\.\\w+$ public/dist/index.html [L]'  //없는 경로인 경우 index를 반환
		        ])
	  ]
  });
});



gulp.task('nodemon', function (cb) {

	var started = false;

	return nodemon({
		script: 'app.js'
	}).on('start', function () {
		// to avoid nodemon being started multiple times
		// thanks @matthisk
		if (!started) {
			cb();
			started = true;
		}
	});
});



gulp.task('build', function () {

  /* deep copy하는 모듈설정 와야함*/
  /* build 실패시 서버안끊기도록 하는 소스 와야함*/

	return browserify(config.src.js + '/index.js')
		.transform(babelify, {presets: ['es2015']})
		.bundle()
		.pipe(source('bundle.js'))
    //.pipe(buffer())//->ugilfy도 vinyl스트림을 사용하므로 버퍼가 필요
    //.pipe(uglify())
		.pipe(gulp.dest(config.dist.bundle + '/'))
		.pipe(browserSync.reload({stream: true}));
});


gulp.task('watch', function () {
  gulp.watch( 'app/*.*' , ['default']);
  gulp.watch( config.src.img + '/**/*.jpg' , ['copy']).on('change', browserSync.reload);
  gulp.watch( config.src.html + '/**/*.html' , ['copy']).on('change', browserSync.reload);
	gulp.watch( config.src.js + '/**/*.js' , ['build']).on('change', browserSync.reload);
});
