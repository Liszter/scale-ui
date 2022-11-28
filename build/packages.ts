/*
 * @Author: liszter <liszter@qq.com>
 * @Date: 2022-11-28 11:06:33
 * @LastEditTime: 2022-11-28 11:18:24
 * @LastEditors: lishutao
 * @Description: 专门打包 js工具包
 * @FilePath: \scale-ui\build\packages.ts
 */
// 

import { series } from "gulp"

export const buildPackages = (dirname:string, name:string) => {
  console.log(dirname,'-----------' , name)

  // 打包格式需要什么类型的？ 模块规范  cjs  es 模块规范
  // umd是在浏览器中用的

  return () => {

  }
  
}

