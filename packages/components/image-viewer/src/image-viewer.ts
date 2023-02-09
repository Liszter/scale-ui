/*
 * @Author: liszter@qq.com liszter@qq.com
 * @Date: 2023-02-08 17:30:22
 * @LastEditors: liszter@qq.com liszter@qq.com
 * @LastEditTime: 2023-02-08 17:45:10
 * @FilePath: \scale-ui\packages\components\image-viewer\src\image-viewer.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */


import type { ExtractPropTypes, PropType } from "vue"

export const imageViewerProps = {
  /**
   *  image-viewer类型：
   **/
  // 图片地址
  src: {
    type: String
  },
  // 图层
  zIndex: {
    type: Number,
    default: 2000
  },
  // 预览图片标题
  title: {
    type: String,
    default: '图片预览'
  },
  // image 自身是否插入至 body 元素上。 嵌套的父元素属性会发生修改时应该将此属性设置为 `true`
  teleported: {
    type: Boolean,
    default: false
  }

}
export type imageViewerProps = ExtractPropTypes<typeof imageViewerProps>
