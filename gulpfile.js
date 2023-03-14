'use strict';

const gulp = require('gulp'),
  watch = require('gulp-watch'),
  prefixer = require('gulp-autoprefixer'),
  uglify = require('gulp-uglify'),
  sass = require('gulp-sass'),
  sourcemaps = require('gulp-sourcemaps'),
  rigger = require('gulp-rigger'),
  cssmin = require('gulp-minify-css'),
  imagemin = require('gulp-imagemin'),
  pngquant = require('imagemin-pngquant'),
  rimraf = require('rimraf'),
  browserSync = require("browser-sync"),
  plumber = require('gulp-plumber'),
  reload = browserSync.reload;

const path = {
  build: { //Тут мы укажем куда складывать готовые после сборки файлы
    html: 'build/',
    js: 'build/js/',
    css: 'build/css/',
    img: 'build/img/',
    fonts: 'build/fonts/'
  },
  src: { //Пути откуда брать исходники
    html: 'src/*.html', //Синтаксис src/*.html говорит gulp что мы хотим взять все файлы с расширением .html
    js: 'src/js/main.js',//В стилях и скриптах нам понадобятся только main файлы
    js_libs: 'src/js/libs.js',
    js_scripts: 'src/js/scripts.js',
    styles: 'src/styles/styles.scss',
    style: 'src/style/common.scss',
    style_main: 'src/style/main.scss',
    //style_main_min: 'src/style/main.min.scss',
    style_libs: 'src/style/libs.scss',
    style_styles: 'src/style/styles.scss',
    img: 'src/img/**/*.*', //Синтаксис img/**/*.* означает - взять все файлы всех расширений из папки и из вложенных каталогов
    fonts: 'src/fonts/**/*.*'
  },
  watch: { //Тут мы укажем, за изменением каких файлов мы хотим наблюдать
    html: 'src/**/*.html',
    js: 'src/js/**/*.js',
    style: 'src/style/**/*.scss',
    style_main: 'src/style/main.scss',
    style_libs: 'src/style/libs.scss',
    img: 'src/img/**/*.*',
    fonts: 'src/fonts/**/*.*'
  },
  clean: './build'
};

const config = {
  server: {
    baseDir: "./build",
    open: true
  },
  //tunnel: true,
  host: 'localhost',
  port: 9000,
  logPrefix: "Frontend_Devil",
  notify: true
};

gulp.task('html:build', function () {
  return gulp.src(path.src.html) //Выберем файлы по нужному пути
    .pipe(plumber())
    .pipe(rigger()) //Прогоним через rigger
    .pipe(gulp.dest(path.build.html)) //Выплюнем их в папку build
    .pipe(reload({stream: true})); //И перезагрузим наш сервер для обновлений
});
gulp.task('js:build', function (cb) {
  gulp.src(path.src.js_libs) //Найдем наш main файл
    .pipe(plumber())
    .pipe(rigger()) //Прогоним через rigger
    .pipe(sourcemaps.init()) //Инициализируем sourcemap
    // .pipe(uglify()) //Сожмем наш js !!!не использовать
    .pipe(sourcemaps.write()) //Пропишем карты
    .pipe(gulp.dest(path.build.js)) //Выплюнем готовый файл в build
    .pipe(reload({stream: true})); //И перезагрузим сервер

  gulp.src(path.src.js_scripts) //Найдем наш main файл
    .pipe(plumber())
    .pipe(rigger()) //Прогоним через rigger
    //.pipe(sourcemaps.init()) //Инициализируем sourcemap
    //  .pipe(uglify()) //Сожмем наш js
    //.pipe(sourcemaps.write()) //Пропишем карты
    .pipe(gulp.dest(path.build.js)) //Выплюнем готовый файл в build
    .pipe(reload({stream: true})); //И перезагрузим сервер

  gulp.src(path.src.js) //Найдем наш main файл
    .pipe(plumber())
    .pipe(rigger()) //Прогоним через rigger
    // .pipe(sourcemaps.init()) //Инициализируем sourcemap
    // .pipe(uglify()) //Сожмем наш js
    //.pipe(sourcemaps.write()) //Пропишем карты
    .pipe(gulp.dest(path.build.js)) //Выплюнем готовый файл в build
    .pipe(reload({stream: true})); //И перезагрузим сервер
  return cb();
});
gulp.task('style:build', function () {
  return gulp.src([path.src.style_libs,path.src.style_styles,path.src.style_main]) // .scss
    .pipe(plumber())
    //.pipe(sourcemaps.init()) //Инициализируем sourcemap
    .pipe(sass()) //Скомпилируем
    .pipe(prefixer()) //Добавим вендорные префиксы
    .pipe(cssmin()) //Сожмем
    //.pipe(sourcemaps.write()) //Пропишем карты
    .pipe(gulp.dest(path.build.css)) //И в build
    .pipe(reload({stream: true}));

});
gulp.task('image:build', function () {
  return gulp.src(path.src.img) //Выберем наши картинки
    .pipe(plumber())
    .pipe(imagemin({ //Сожмем их
      progressive: true,
      svgoPlugins: [{removeViewBox: false}],
      use: [pngquant()],
      interlaced: true
    }))
    .pipe(gulp.dest(path.build.img)) //И бросим в build
    .pipe(reload({stream: true}));
});
gulp.task('fonts:build', function() {
  return gulp.src(path.src.fonts)
    .pipe(gulp.dest(path.build.fonts))
});
gulp.task('build', [
  'html:build',
  'js:build',
  'style:build',
  'fonts:build',
  'image:build'
]);
gulp.task('watch', function(){
  watch([path.watch.html], function(event, cb) {
    gulp.start('html:build');
  });
  watch([path.watch.style], function(event, cb) {
    gulp.start('style:build');
  });
  watch([path.watch.js], function(event, cb) {
    gulp.start('js:build');
  });
  watch([path.watch.img], function(event, cb) {
    gulp.start('image:build');
  });
  watch([path.watch.fonts], function(event, cb) {
    gulp.start('fonts:build');
  });
});
gulp.task('webserver', function () {
  browserSync(config);
});
gulp.task('clean', function (cb) {
  rimraf(path.clean, cb);
});
gulp.task('default', ['build', 'watch','webserver']);
