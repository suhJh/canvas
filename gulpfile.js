const gulp = require('gulp');

const babel = require('gulp-babel');

const browserify = require('browserify');
const babelify = require('babelify');

const source = require('vinyl-source-stream');
const browserSync = require('browser-sync');

const config = require('./config/gulp-config');
