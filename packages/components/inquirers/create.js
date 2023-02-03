/*
 * @Author: liszter@qq.com liszter@qq.com
 * @Date: 2023-02-01 17:52:14
 * @LastEditors: liszter@qq.com liszter@qq.com
 * @LastEditTime: 2023-02-02 10:45:10
 * @FilePath: \scale-ui\packages\cli\inquirers\create.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

// 新建一个组件

// 新建组件对应的vitepress

import inquirer  from "inquirer";
import fs from "fs";

/**
 * @Description: 创建文件， 文件名 + 内容
 * @param {*} filename
 * @param {*} content
 */
export function createFile(filename, content) {
  fs.writeFile(`./${filename}`, content, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log(`--${filename}--创建成功`);
    }
  });
}


// 创建文件夹
export function mkdirFile (dirName) {
  if (fs.existsSync(dirName)) {
    console.log('------该组件已存在------退出!')
  } else {
    // 不存在这个文件
    fs.mkdirSync(dirName)
  }
}

// console.log('fileContent', fileContent)

// 1. 创建组件的文件夹, 位置指定
// 用户输入内容
let fileContent = await inquirer.prompt([{
  type: "input",
  message: "输入新建组件名称--",
  name: "name",
  default: ''
}])
// 创建文件

mkdirFile(fileContent.name)
// 创建文件中的 index 文件
let name = fileContent.name
// 大写开头
function titleCase(str) {
  return str.slice(0,1).toUpperCase() +str.slice(1).toLowerCase();
  }
 console.log(titleCase('adsasdqweq')) 


//  创建 index.ts 文件
const indexContent = `
import  ${name} from "./src/${name}.vue";
import { withInstall } from "@scale-ui/utils";

// 一定要加export 不然怎么用use
 const S${titleCase(name)} = withInstall(${name})

export {
  S${titleCase(name)}
}

export default S${titleCase(name)} 

`

createFile(`./${fileContent.name}/index.ts`, indexContent)


// 创建 组件 文件

mkdirFile(`./${fileContent.name}/src`)

// 创建组件文件scss内容
const scssContent = `
@import "../../style/index.scss";


.#{$cls-prefix}-${fileContent.name} {

}`

createFile(`./${fileContent.name}/src/${fileContent.name}.scss`, scssContent)


// 创建组件文件 ts 内容
const propsContent = `
  
import type { ExtractPropTypes, PropType } from "vue"

export const ${name}Props = {
    /**
     *  ${name}类型：
     **/
    type: {
      type: String,
    },

}
export type ${name}Props = ExtractPropTypes<typeof ${name}Props>
`

createFile(`./${fileContent.name}/src/${fileContent.name}.ts`, propsContent)


// 创建组件文件 ts 内容
const vueContent = `
<template>
  <div class="s-${name}">

  </div>
</template>

<script lang="ts" setup name="S${titleCase(name)}">
import { ${name}Props } from "./${name}";

const emit = defineEmits(["handleClick"]);

const props = defineProps(${name}Props);

// 点击时触发的事件
const handleClick = () => {
 emit("handleClick");
};
</script>

<style lang="scss" scoped>
@import "./${name}.scss";
</style>

`

createFile(`./${fileContent.name}/src/${fileContent.name}.vue`, vueContent)






