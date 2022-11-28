/*
 * @Author: liszter <liszter@qq.com>
 * @Date: 2022-11-28 09:40:53
 * @LastEditTime: 2022-11-28 10:59:46
 * @LastEditors: lishutao
 * @Description: 打包样式
 * @FilePath: \scale-ui\packages\theme-chalk\gulpfile.ts
 */

// pnpm install gulp-sass  @types/gulp-sass @types/sass @types/gulp-autoprefixer gulp-autoprefixer @types/gulp-clean-css gulp-clean-css sass -D -w
// 所需插件
// + @types/gulp-autoprefixer 0.0.33
// + @types/gulp-clean-css 4.3.0
// + @types/gulp-sass 5.0.0
// + @types/sass 1.43.1
// + gulp-clean-css 4.3.0
// + gulp-sass 5.1.0


import gulpSass from "gulp-sass"
import dartSass from "sass"
import autoprefixer from "gulp-autoprefixer"
import cleanCss from "gulp-clean-css"
import path from "path"

import { series, src, dest } from "gulp";

function compile() {
  console.log(12312313)
  const sass = gulpSass(dartSass)

  return src(path.resolve(__dirname, "./src/*.scss"))
    .pipe(sass.sync())
    .pipe(autoprefixer())
    .pipe(cleanCss())
    .pipe(dest("./dist/css"))

}

function copyfont() {

  return src(path.resolve(__dirname, "./src/fonts/**"))
    .pipe(cleanCss())
    .pipe(dest("./dist/fonts/"))

}

function copyfullStyle() {

  return src(path.resolve(__dirname, "./dist/**"))
    .pipe(dest(path.resolve(__dirname, "../../dist/theme-chalk")))
}


export default series(compile, copyfont, copyfullStyle) 