/*
 * @Author: liszter <liszter@qq.com>
 * @Date: 2023-08-11 14:40:43
 * @LastEditTime: 2023-08-11 14:46:19
 * @LastEditors: lishutao
 * @Description: 暂无
 * @FilePath: \自定义组件库-scale\scripts\preinstall.js
 */
// 安装之前运行的脚本

if (!/pnpm/.test(process.env.npm_execpath || '')) {
  console.log('该项目只能使用pnpm安装依赖')
  console.warn(
    `\u001b[33mThis repository requires using pnpm as the package manager ` +
      ` for scripts to work properly.\u001b[39m\n`
  )
  process.exit(1)
}
