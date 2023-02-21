// 读取一个文件， 并在末尾添加 一行代码

let path = require('path')
let fs = require('fs')
const inquirer = require('inquirer');

/**
 * 
 * @param path
 * @param content
 * @param callback
 * 
 * **/ 

let fpath = path.join(__dirname, '../', '..', 'components', 'components.ts')

fs.appendFile(fpath, 'asdasasd', function(e) {
  console.log(e)
})