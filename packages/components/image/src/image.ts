/*
 * @Author: liszter@qq.com liszter@qq.com
 * @Date: 2023-02-02 10:48:07
 * @LastEditors: liszter@qq.com liszter@qq.com
 * @LastEditTime: 2023-02-02 10:52:31
 * @FilePath: \scale-ui\packages\components\image\src\image.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

  
import type { ExtractPropTypes, PropType } from "vue"

export const imageProps = {
    /**
     *  image类型：
     **/
    src: {
      type: String,
    },

}
export type imageProps = ExtractPropTypes<typeof imageProps>
