/*
 * @Author: liszter <liszter@qq.com>
 * @Date: 2022-11-27 16:10:57
 * @LastEditTime: 2022-12-19 21:44:42
 * @LastEditors: lishutao
 * @Description: 暂无
 * @FilePath: \scale-ui\packages\utils\index.ts
 */
export * from './vue';


/**
 * @Description: 短横线转小驼峰
 * @Date: 2022-12-19 21:43:30
 * @LastEditTime: Do not edit
 * @FilePath: Do not edit
 * @param {*} str   todo-item
 * @returns {*} str  todoItem
 */
export function getCamelCase(str) {
  var arr=str.split('-')
  return arr.map(function(item,index){
      if(index===0){
          return item
      }else{
          return item[0].toUpperCase()+item.slice(1)
      }
  }).join('')
}

/**
 * @Description: 短横线转大驼峰
 * @Date: 2022-12-19 21:42:38
 * @LastEditTime: Do not edit
 * @FilePath: Do not edit
 * @param {*} str   todo-item
 * @returns {*} str  TodoItem
 */
export function getBigCamelCase(str) {
  var arr=str.split('-')
  return arr.map(function(item,index){
          return item[0].toUpperCase()+item.slice(1)
  }).join('')
}



// console.log( getCamelCase1( 'user-name' ) ); //userName