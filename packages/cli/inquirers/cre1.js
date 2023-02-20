/*
 * @Author: liszter@qq.com liszter@qq.com
 * @Date: 2023-02-01 17:52:14
 * @LastEditors: lishutao
 * @LastEditTime: 2023-02-17 15:07:37
 * @FilePath: \scale-ui\packages\cli\inquirers\cre1.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

// 新建一个组件

// 新建组件对应的vitepress

// js创建一个iframe


let path = require('path')
let fs = require('fs')

console.log(__dirname)

let zujianPath = path.join(__dirname, '../', '../', 'components', '123')

try {
  fs.mkdirSync(zujianPath)
} catch (error) {
  console.log(error)
}



