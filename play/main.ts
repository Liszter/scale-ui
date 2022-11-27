/*
 * @Author: liszter <liszter@qq.com>
 * @Date: 2022-11-27 10:06:52
 * @LastEditTime: 2022-11-27 17:14:17
 * @LastEditors: lishutao
 * @Description: 暂无
 * @FilePath: \scale-ui\play\main.ts
 */
import { createApp } from "vue";

import App from "./app.vue";

import ScaleUi from '@scale-ui/components';
import '@scale-ui/theme-chalk/src/index.scss'

const app = createApp(App);
app.use(ScaleUi);
app.mount("#app");
