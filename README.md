<!--
 * @Author: liszter <liszter@qq.com>
 * @Date: 2022-11-26 17:41:45
 * @LastEditTime: 2022-11-27 22:36:48
 * @LastEditors: lishutao
 * @Description: 暂无
 * @FilePath: \scale-ui\README.md
-->
# scale-ui

#### 介绍
vue3 + ts 大屏组件库

搭建一个 

#### 软件架构

##### pnpm
  通过软链 npm link 进行资源的复用

  #### 打包 把组件库进行打包 gulp 控制打包流程   打包采用 rollup
   pnpm install gulp @types/gulp sucrase -w -D


#### windows 
 - 使用 rimraf 实现linux rm -rf ./dist 功能

 - 或者使用 git bash 好像能使用rm -rf