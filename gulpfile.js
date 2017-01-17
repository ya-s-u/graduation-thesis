'use strict'

/**
 * Module dependencies
 */
const gulp = require('gulp')
const plumber = require('gulp-plumber')
const sketch = require('gulp-sketch')

/**
 * Tasks
 */
gulp.task('export', function() {
    gulp.src('./*.sketch')
        .pipe(plumber())
        .pipe(sketch({
          export: 'artboards',
          formats: 'png'
        }))
        .pipe(gulp.dest('./assets/img'))
})
