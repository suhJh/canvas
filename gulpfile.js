const gulp = require('gulp');

const babel = require('gulp-babel');

const browserify = require('browserify');
const babelify = require('babelify');

const source = require('vinyl-source-stream');
const browserSync = require('browser-sync');

const config = require('./config/gulp-config');



gulp.task('server', function () {

  /* 여기에 express 키는 소스와야 함*/

	browserSync({
		socket: {
			domain: "localhost:3000"
		},
		proxy: 'localhost:8080',
		open: 'external'
	});

	return()=>{console.log('hey! browserSync started');};
});


gulp.task('build', function () {

  /* deep copy하는 모듈설정 와야함*/
  /* build 실패시 서버안끊기도록 하는 소스 와야함*/

	return browserify(config.src.js + '/main.js')
		.transform(babelify, {presets: ['es2015']})
		.bundle()
		.pipe(source('bundle.js'))
		.pipe(gulp.dest(config.dist.bundle + '/'))
		.pipe(browserSync.reload({stream: true}));
});


gulp.task('watch', function () {
	gulp.watch( config.src.js + '/**/*.*' , ['build']).on('change', browserSync.reload);
});


gulp.task('default', [
	'server',
	'build',
	'watch'
	]);
