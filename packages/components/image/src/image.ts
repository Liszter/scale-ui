/*
 * @Author: liszter@qq.com liszter@qq.com
 * @Date: 2023-02-02 10:48:07
 * @LastEditors: liszter@qq.com liszter@qq.com
 * @LastEditTime: 2023-02-03 16:15:39
 * @FilePath: \scale-ui\packages\components\image\src\image.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */


import type { ExtractPropTypes, PropType } from "vue"

export type FitType = 'fill' | 'contain' | 'cover' | 'scale-down' | 'none' | 'initial' | 'inherit';
export type LoadingType = 'eager' | 'lazy'

export const imageProps = {
  /**
   * 图片地址
   **/
  src: {
    type: String,
  },
  /**
   * 鼠标放上时显示文本
   * **/
  title: {
    type: String
  },
  /**
   * 规定图像的替代文本
   * **/
  alt: {
    type: String
  },
  /**
   * 图片的尺寸
   * **/
  width: {
    type: String || Number,
    default: '100'
  },
  height: {
    type: String || Number,
    default: '100'
  },

  /**
   * 对图片进行裁剪
   * **/
  fit: {
    type: String as PropType<FitType>
  },

  /**
   * 显示加载中效果
   * **/
  showLoading: {
    type: Boolean,
    default: false
  },
  /**
   * 预览功能
   * **/
  preview: {
    type: Boolean,
    default: false
  },
  /**
   * 加载图像还是延迟加载图像
   * **/
  loading: {
    type: String as PropType<LoadingType>,
    default: 'eager'
  }
}
export type imageProps = ExtractPropTypes<typeof imageProps>
