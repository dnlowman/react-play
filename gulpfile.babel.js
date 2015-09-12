var gulp = require('gulp');
var browserSync = require('browser-sync').create();

// Static server
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./src",
            routes: {
                "/bower_components": "bower_components",
                "/node_modules": "node_modules"
            }
        }
    });
});
