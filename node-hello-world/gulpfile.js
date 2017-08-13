const gulp = require('gulp');
const ts = require('gulp-typescript');

// Pull in the project's tsconfig.json file
const tsConfig = ts.createProject('tsconfig.json');

gulp.task('scripts', () => {
  const tsResult = tsProject.src()
    .pipe(tsConfig());
  return tsResult.js.pipe(gulp.dest('dist'));
});

gulp.task('watch', ['scripts'], () => {
  gulp.watch('src/**/*.ts', ['scripts']);
});

gulp.task('default', 'watch');
