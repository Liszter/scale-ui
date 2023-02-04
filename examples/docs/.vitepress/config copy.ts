/*
 * @Author: liszter@qq.com liszter@qq.com
 * @Date: 2023-01-30 15:51:16
 * @LastEditors: liszter@qq.com liszter@qq.com
 * @LastEditTime: 2023-02-04 11:17:59
 * @FilePath: \scale-ui\examples\docs\.vitepress\config.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { componentPreview, containerPreview } from '@vitepress-demo-preview/plugin'
import { defineConfig } from 'vitepress'

export default defineConfig({
        title: "scale-ui",
        description: '大屏组件\可视化\自适应',
        lastUpdated: true,

        themeConfig: {
          logo: "/logo.png",
          nav: [
            { text: "首页", link: "/" },
            // { text: "我的笔记", link: "/daily/" },
            // { text: "前端总结", link: "/javascript/" },
            // { text: "生活感悟", link: "/life/" },
            // { text: "我的掘金", link: "https://juejin.cn/user/2242659452477016" },
            // { text: "关于我", link: "/me/" },
          ],
          // socialLinks: [{ icon: "github", link: "https://github.com/aehyok" }],
          footer: {
            message: "Released under the MIT License.",
            copyright: "Copyright © 2022-07-27～present scale-ui",
          },
      
          sidebar: {
            "/components/": [
              {
                text: 'button 按钮',
                items: [
                  { text: "按钮", link: "/button/" },
                ]
              }
            ],
          },
        },
  // markdown: {
  //   theme: {
  //     light: 'vitesse-light',
  //     dark: 'vitesse-dark'
  //   },
  //   lineNumbers: true,
  //   config(md) {
  //     md.use(componentPreview)
  //     md.use(containerPreview)
  //   }
  // },



})
