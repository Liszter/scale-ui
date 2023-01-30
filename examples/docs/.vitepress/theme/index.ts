import theme from 'vitepress/dist/client/theme-default/index'
import { AntDesignContainer } from '@vitepress-demo-preview/component'
import '@vitepress-demo-preview/component/dist/style.css'


import ScaleUi from "@scale-ui/components"
// import "@scale-ui/theme-chalk"


export default {
  ...theme,
  enhanceApp({app}) {
    app.use(ScaleUi)
    app.component('demo-preview', AntDesignContainer)
  }
}
