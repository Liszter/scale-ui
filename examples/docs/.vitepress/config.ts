/*
 * @Author: liszter@qq.com liszter@qq.com
 * @Date: 2023-01-30 15:51:16
 * @LastEditors: liszter@qq.com liszter@qq.com
 * @LastEditTime: 2023-01-30 15:51:28
 * @FilePath: \scale-ui\examples\docs\.vitepress\config.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { componentPreview, containerPreview } from '@vitepress-demo-preview/plugin'
import { defineConfig } from 'vitepress'

export default defineConfig({
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
  }
})
