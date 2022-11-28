/*
 * @Author: liszter <liszter@qq.com>
 * @Date: 2022-11-27 17:38:01
 * @LastEditTime: 2022-11-27 18:01:03
 * @LastEditors: lishutao
 * @Description: 暂无
 * @FilePath: \scale-ui\build\utils\index.ts
 */

import { spawn } from "child_process";
import { projectRoot } from "./path";
export const withTashName = <T>(name:string, fn:T) => 
  Object.assign(fn, { displayName:name })

// 在node使用子进程来运行脚本
export const run = async (command:string) => { // rf -rf
  return new Promise((resolve) => {
    const [cmd, ...args] = command.split(' ')
    
    const app = spawn(cmd, args, { 
      cwd: projectRoot,
      stdio: "inherit",
      shell: true,  
    })


    app.on("close", resolve)

  })
  
}