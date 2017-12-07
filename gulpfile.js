'use strict';

// ////////////////////////////////////////////////
//
// GULP СБОРКА ДЛЯ ВЕРСТКИ САЙТОВ
//
// // //////////////////ho///////////////////////////

/*----------------------------------------
	PLUGINS
----------------------------------------*/

var gulp = require('gulp'),
    // РАБОТАЕМ С ПРОИЗВОДИТЕЛЬНОСТЬЮ СБОРКИ
    gulpLoadPlugins = require('gulp-load-plugins'),
    $ = gulpLoadPlugins(),
    gulpIf = require('gulp-if'),

    //sprite png files
    spritesmith = require('gulp.spritesmith'),

    browserSync = require('browser-sync'),
    reload = browserSync.reload,
    plumber = require('gulp-plumber');

/*----------------------------------------
	PATHS / ПУТИ К ФАЙЛАМ
----------------------------------------*/
var paths = require('./gulp/paths');
console.log($);

// ПОДКЛЮЧАЕМ ОТДЕЛЬНО TASKS
function lazyRequireTask(taskName, path, options) {
    options = options || {};
    options.taskName = taskName;
    gulp.task(taskName, function(callback) {
        var task = require(path).call(this, options);

        return task(callback);
    });
}

/*----------------------------------------
	BROWSER SYNC
----------------------------------------*/

gulp.task('server', ['sass'], function() {
    browserSync.init({
        server: "./build",
        port: 4400
    });
});

gulp.task('watch-html', ['html'], function () {//pug or html
    browserSync.reload();
});

gulp.task('watch-js', ['js'], function () {
    browserSync.reload();
});

/*----------------------------------------
	HTML
----------------------------------------*/


lazyRequireTask('html', './gulp/tasks/html', {
    src: paths.html.src,
    dest: paths.html.dest
});

/*----------------------------------------
	STYLES
----------------------------------------*/
//sass
lazyRequireTask('sass', './gulp/tasks/sass', {
    src: 'src/sass/app.scss',
    dest: paths.sass.dest
});


/*----------------------------------------
	JS
----------------------------------------*/

lazyRequireTask('js', './gulp/tasks/js', {
    src: 'src/js/*.js',
    dest: paths.js.dest,
    minDest: paths.js.dest
});


//minify js files
// lazyRequireTask('js:min', './gulp/tasks/minjs', {
// 	src: paths.js.minSrc,
// 	dest: paths.js.minDest
// });


/*----------------------------------------
	SVG
----------------------------------------*/

//SVG SPRITE
lazyRequireTask('svg', './gulp/tasks/svg', {
    src: paths.svg.src,
});


//SVG SPRITE BASE 64
lazyRequireTask('svg:base', './gulp/tasks/svgBase', {
    src: paths.base64.src,
    dest: paths.base64.dest
});

/*----------------------------------------
	SPRITE PNG FILES
----------------------------------------*/
gulp.task('sprite', function () {
    var spriteData = gulp.src('src/images/sprite/*')
        .pipe(spritesmith({
                imgName: 'sprite.png',
                // retinaImgName: 'sprite@2x.png',
                cssName: '_sprite-png.scss',
                imgPath:'../images/sprite/sprite.png',
                padding: 15
            })
        );

    var imgStream = spriteData.img
        .pipe(gulp.dest('build/images/sprite'));

    var cssStream = spriteData.css
        .pipe(gulp.dest('src/sass/sprite/'));

});


gulp.task('jsMinSync', function () {
    return gulp.src('src/js/minifier/**/*.js')
        .pipe(plumber())
        .pipe(gulp.dest('build/js/'))
        .pipe(browserSync.stream());
});

/*----------------------------------------
	MINIFY IMAGES
----------------------------------------*/

lazyRequireTask('image:min', './gulp/tasks/images', {
    src: paths.images.src,
    dest: paths.images.dest
});

gulp.task('copy', function () {
    return gulp.src('src/assets/**/*')
        .pipe(gulp.dest('build/'))
});


gulp.task('watch', function () {
    // sass
    gulp.watch('src/sass/**/*.scss', ['sass']);
    // html
    gulp.watch(['src/html/**/*.html'], ['watch-html']);
    // js
    gulp.watch("src/js/**/*.js", ['watch-js']);
    // images
    gulp.watch("src/images/*", ['image:min']);
    // svg
    gulp.watch('src/svg/*.svg', ['svg']).on('change', function(event){
        if (event.type === 'deleted') {
            $.remember.forget('svg', event.path);
        }
    });
    gulp.watch('src/svg/**/*.svg', ['svg:base']);
    // png
    gulp.watch('src/images/sprite/*.png', ['sprite']);
});


gulp.task('default', ['js','svg','server','watch']);

gulp.task('build', ['copy','js','svg', 'html', 'sass', 'svg:base', 'image:min']);