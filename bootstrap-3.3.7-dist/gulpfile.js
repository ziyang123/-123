var gulp = require('gulp'),  //引入gulp
    minify=require('gulp-minify-html'),//引入cmd中压缩文件
     minify=require('gulp-minify-css');//引入cmd中压缩文件
//压缩html文件
gulp.task('myhtml',function(){
     gulp.src('*.html') //要压缩的文件
     .pipe(minify())		//引入压缩
     .pipe(gulp.dest('one')) //创建文件夹
});
gulp.task('default',['myhtml']); //运行myhtml 进行压缩


//压缩css文件

gulp.task('indexcss',function(){
     gulp.src('css/*.css')
     .pipe(minify())
     .pipe(gulp.dest('two'))
});
gulp.task('default',['indexcss']);

