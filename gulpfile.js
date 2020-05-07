"use strict";

// Load plugins
const browsersync = require("browser-sync").create();
const gulp = require("gulp");

// BrowserSync
function browserSync(done) {
  browsersync.init({
    server: {
      baseDir: "./src"
    },
    port: 8087
  });
  done();
}

// BrowserSync reload
function browserSyncReload(done) {
  browsersync.reload();
  done();
}

// Watch files
function watchFiles() {
  gulp.watch("./**/*.css", browserSyncReload);
  gulp.watch("./**/*.html", browserSyncReload);
}

const watch = gulp.series(gulp.parallel(watchFiles, browserSync));

// Export tasks
exports.watch = watch;
exports.default = watch;
