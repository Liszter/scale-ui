/*
 * @Author: liszter <liszter@qq.com>
 * @Date: 2022-11-27 10:08:56
 * @LastEditTime: 2022-11-27 11:08:58
 * @LastEditors: lishutao
 * @Description: 解决 main.ts 中，import vue组件报红的提示  ---- 声明模块
 * @FilePath: \scale-ui\play\typings\vue-shim.d.ts
 */
declare module '*.vue' {
  import type { DefineComponent } from "vue";

  const component : DefineComponent<{},{},any>

  export default component

}