/*
 * @Author: liszter@qq.com liszter@qq.com
 * @Date: 2023-01-29 15:16:01
 * @LastEditors: liszter@qq.com liszter@qq.com
 * @LastEditTime: 2023-01-29 18:03:03
 * @FilePath: \scale-ui\packages\components\button\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import  Sbutton from "./src/s-button.vue";
import { withInstall } from "@scale-ui/utils";

// 一定要加export 不然怎么用use
 const SButton = withInstall(Sbutton)

export {
  SButton
}

export default SButton 