/*
 * @Author: liszter@qq.com liszter@qq.com
 * @Date: 2023-02-08 17:30:22
 * @LastEditors: liszter@qq.com liszter@qq.com
 * @LastEditTime: 2023-02-08 17:31:53
 * @FilePath: \scale-ui\packages\components\image-viewer\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import  imageViewer from "./src/image-viewer.vue";
import { withInstall } from "@scale-ui/utils";

// 一定要加export 不然怎么用use
 const SImageViewer = withInstall(imageViewer)

export {
  SImageViewer
}

export default SImageViewer 

