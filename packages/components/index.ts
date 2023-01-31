/*
 * @Author: liszter@qq.com liszter@qq.com
 * @Date: 2022-11-30 16:18:50
 * @LastEditors: liszter@qq.com liszter@qq.com
 * @LastEditTime: 2023-01-31 11:36:52
 * @FilePath: \scale-ui\packages\components\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import type { App } from 'vue';
import * as components from './components';
import { version } from './package.json';


const install = function (app: App): void {
  Object.entries(components).forEach(([key, value]) => {
    app.component(key, value);
  });
};

export default {
  install,
  version
};
