<!--
 * @Author: liszter <liszter@qq.com>
 * @Date: 2022-11-26 17:41:45
 * @LastEditTime: 2023-08-16 15:58:43
 * @LastEditors: lishutao
 * @Description: 暂无
 * @FilePath: \scale-ui\README.md
-->
# scale-ui

version 1.0.5
scale-ui 前端UI框架开发


#### 介绍
vue3 + ts 大屏组件库

参考文档地址

http://front-end-base.gitee.io/scale-ui



- 屏幕自适应
- 自定义弹窗
- 按钮
- 图片展示及预览功能




#### 软件架构


##### pnpm
  通过软链 npm link 进行资源的复用

#### 打包 把组件库进行打包 gulp 控制打包流程   打包采用 rollup
   pnpm install gulp @types/gulp sucrase -w -D



## 贡献指南

如果您想参与到项目中，并参与贡献，请务必阅读以下的注意事项以及`CONTRIBUTING.md`。

## 注意事项

接下来如果您开始着手开发工作，请阅读下面的CONTRIBUTING.md

`CONTRIBUTING.md`

## 出发点
  1. 熟悉组件库的搭建过程
  2. 搞一份符合自己习惯的组件库
  3. 组件库可以简单移植到其他项目中，可二次修改复用。
  4. 卷卷卷~~~

## 开发计划

### 第一步（基础组件）：

  按进度开发完现在流行前端组件库的基础组件。

### 第二步（物料组件）：
  从第一步基础组件出发，开始封装功能性组件。  
  
  例如：用户组件、登录组件、评论组件、富文本等等。

### 第三步（业务组件）：
  
  封装前后端组件。

  该步会将组件封装为单个功能模块，解决前后端功能，做到类似低代码模块能力（我相信他是很不一样的，我期望并坚持站在设计体验的角度去思考这一步）。