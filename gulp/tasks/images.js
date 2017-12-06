'use strict';

var gulp = require('gulp'),
	gulpLoadPlugins = require('gulp-load-plugins'),
	$ = gulpLoadPlugins(),
	notify = require('gulp-notify'),
	imagemin = require('gulp-imagemin'),
	pngquant = require('imagemin-pngquant'),
	debug = require('gulp-debug'),
	multipipe = require('multipipe');

module.exports = function(options) {

	return function() {
		return multipipe (
			gulp.src(options.src),
			imagemin({
				progressive: true,
				svgoPlugins: [{removeViewBox: false}],
				use: [pngquant()],
				interlaced: true
			}),
			$.debug({title:'images minify done !'}),
			gulp.dest(options.dest)
		);
	};

};