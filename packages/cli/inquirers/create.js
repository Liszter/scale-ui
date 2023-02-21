/*
 * @Author: liszter@qq.com liszter@qq.com
 * @Date: 2023-02-01 17:52:14
 * @LastEditors: liszter@qq.com liszter@qq.com
 * @LastEditTime: 2023-02-21 14:56:30
 * @FilePath: \scale-ui\packages\cli\inquirers\cre1.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */


let path = require('path')
let fs = require('fs')
const inquirer = require('inquirer');

const questions = [
  {
    type: 'input',
    name: 'newComponentsName',
    message: "输入新建组件名称--",
  }
]

// 大写开头
function titleCase(str) {
  return str.slice(0, 1).toUpperCase() + str.slice(1).toLowerCase();
}

//  创建 index.ts 文件
const indexContent = function (name) {
  return `
import  ${name} from "./src/${name}.vue";
import { withInstall } from "@scale-ui/utils";

// 一定要加export 不然怎么用use
 const S${titleCase(name)} = withInstall(${name})

export {
  S${titleCase(name)}
}

export default S${titleCase(name)} 
`
}

// 创建组件文件src/scss内容
const scssContent = (name) => `
@import "../../style/index.scss";

.#{$cls-prefix}-${name} {

}`

// 组件文件  src/props
const propsContent = (name) => `
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

// src/vue 文件

const vueContent = (name) => `
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



inquirer.prompt(questions).then((answers) => {

  // 1. 获取组件名称
  let cname = answers.newComponentsName
  // 2. 获取组件的位置
  let zujianPath = path.join(__dirname, '../', '../', 'components', cname)
  // 3. 创建对应的文件夹
  try {
    fs.mkdirSync(zujianPath)
  } catch (error) {
    console.log(error)
    return
  }

  // 4. 创建文件 index.ts
  createFile('index.ts', zujianPath, indexContent(cname))

  // 5. 创建 src 文件夹
  let srcPath = path.join(zujianPath, 'src')
  try {
    fs.mkdirSync(srcPath)
  } catch (error) {
    console.log(error)
    return
  }

  // 创建对应的  name。scss name。vue name.ts
  createFile(`${cname}.ts`, srcPath, propsContent(cname))
  createFile(`${cname}.scss`, srcPath, scssContent(cname))
  createFile(`${cname}.vue`, srcPath, vueContent(cname))

  // 7. 在components 中添加 组件名, 引入组件
  /**
   * @param path
   * @param content
   * @param callback
   * **/
  let ComponentsPath = path.join(__dirname, '../', '..', 'components', 'components.ts')

  fs.appendFile(ComponentsPath, `export { S${titleCase(cname)} } from './${cname}';
    `, function (e) {
    console.log(e)
  })

  // 创建 vitepress 文件

  let mdPath = path.join(__dirname, '../', '..', '..', './examples', './docs', './components', `${cname}`)

  try {
    fs.mkdirSync(mdPath)
  } catch (error) {
    console.log(error)
  }

  createFile('index.md', mdPath, `#${cname}`)
});

// 创建文件

/**
 * @name 新文件的名称
 * @fpath 所在的文件夹下
 * @content 文件的内容
 * 
 * **/

function createFile(name, fpath, content) {
  fpath = path.join(fpath, `./${name}`)
  try {
    fs.writeFile(fpath, content, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log(`--${name}--创建成功`);
      }
    });
  } catch (error) {
    console.log(error)
  }

}




