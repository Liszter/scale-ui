/*
 * @Author: liszter@qq.com liszter@qq.com
 * @Date: 2023-01-30 15:51:16
 * @LastEditors: liszter@qq.com liszter@qq.com
 * @LastEditTime: 2023-02-21 14:57:44
 * @FilePath: \scale-ui\examples\docs\.vitepress\config.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { componentPreview, containerPreview } from '@vitepress-demo-preview/plugin'

import { defineConfig } from "vitepress";

export default defineConfig({
  title: "scale-ui",
  description: '大屏组件\可视化\自适应',
  lastUpdated: true,
  base: '/scale-ui/',
  head: [["link", { rel: "icon", type: "image/svg+xml", href: "logo.png" }]],
  markdown: {
    theme: {
      light: 'vitesse-light',
      dark: 'vitesse-dark'
    },
    lineNumbers: true,
    config(md) {
      md.use(componentPreview)
      md.use(containerPreview)
    }
  },

  themeConfig: {
    logo: "/logo.png",
    nav: [
      { text: "首页", link: "/" },
      { text: "组件文档", link: "/components/" },
      { text: "我的掘金", link: "https://juejin.cn/user/3632442151021582" },
      // { text: "关于我" },
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/Liszter" },
      // { icon: "gitee", link: "https://github.com/Liszter" }
    ],
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2022～present Liszter",
    },

    sidebar: {

      "/components/": [
        {
          text: '开发指南',
          items: [
            { text: "安装", link: "/components/install/installation.md" }
          ]
        },
        {
          text: '基础组件',
          items: [
            { text: "icon 图标", link: "/components/icon/" },

            { text: "button 按钮", link: "/components/button/" },
            { text: "image 图片", link: "/components/image/" },
            { text: "paragraph 文本/段落", link: "/components/paragraph/" },
            { text: "dialog 弹窗", link: "/components/dialog/" },



          ]
        }
      ],
    },
  },
  vite: {
    server: {
      host: true,
      port: 3000,
      // open: true,
      proxy: {
        '/so': {
          // target: 'http://139.159.245.209:5000', // 代理接口
          changeOrigin: true,
          // rewrite: (path) => path.replace(/^\/so/, '')
        }
      }
    },
  },
});