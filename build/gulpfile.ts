/*
 * @Author: liszter <liszter@qq.com>
 * @Date: 2022-11-27 17:30:34
 * @LastEditTime: 2022-11-28 11:36:43
 * @LastEditors: lishutao
 * @Description: gulp打包
 * @FilePath: \scale-ui\build\gulpfile.ts
 */
import { series, parallel } from "gulp";
import { run, withTashName } from "./utils";

  // 1, 删除dist文件夹
  withTashName('clean', async () => run("rmdir ./dist"))
  // 2. 打包样式，工具  pnpm 执行 ./packages 目录下的内容  --parallel 并行打包
export default series(
  withTashName('clean', async () => run("rimraf ./dist")),
  withTashName('buildPackages', () => run("pnpm run --filter ./packages/** --parallel build"))
  
)