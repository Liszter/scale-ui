/*
 * @Author: liszter@qq.com liszter@qq.com
 * @Date: 2023-01-30 15:45:30
 * @LastEditors: liszter@qq.com liszter@qq.com
 * @LastEditTime: 2023-05-06 09:19:54
 * @FilePath: \scale-ui\examples\docs\.vitepress\theme\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import theme from 'vitepress/dist/client/theme-default/index'
import { AntDesignContainer } from '@vitepress-demo-preview/component'
import '@vitepress-demo-preview/component/dist/style.css'
import ScaleUi from "@scale-ui/components"
import '@scale-ui/theme-chalk/src/index.scss'
// import "@scale-ui/theme-chalk"
import 'uno.css'


export default {
  ...theme,
  enhanceApp({app}) {
    app.use(ScaleUi)
    app.component('demo-preview', AntDesignContainer)
  }
}
