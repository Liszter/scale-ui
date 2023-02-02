/*
 * @Author: liszter@qq.com liszter@qq.com
 * @Date: 2023-01-29 15:16:01
 * @LastEditors: liszter@qq.com liszter@qq.com
 * @LastEditTime: 2023-02-02 10:49:21
 * @FilePath: \scale-ui\packages\components\button\src\button.ts
 * @Description: 按钮组件 封装
 * 具体功能参考 props
 * 
 */

import type { ExtractPropTypes, PropType } from "vue"

export const buttonProps = {

    /**
   *  按钮是否为块级元素：
   * @defaultValue false
   **/
    block: {
      type: Boolean,
      default: false
    },

    // 字体颜色 
    color: {
      type: String,
      default: ''
    },

  /**
   *  按钮的类型，区分总体样式：
   * 次要按钮。
   * @values 'default'、'dashed'、'outline'、'text' 
   * @defaultValue 'primary'
   **/
  type: {
    type: String as PropType<'default' | 'dashed' | 'outline' | 'text' >,
    default: "default"
  },

  /**
   * 边框样式
   * @defaultValue ''
   * **/
  borderStyle: {
    type: String,
    default: 'none'
  },

  outlineStyle: {
    type: String,
    default: 'none'
  },

  // 背景颜色配置
  theme: {
    type: String,
    default: ''
  },
  // 加载文字替换
  loadingText: {
    type: String,
    default: '加载中'
  },

  /**
   * 按钮的尺寸
   * @values 'mini'、'small'、'medium'、'large'
   *  @defaultValue 'medium'
   * **/
  size: {
    type: String,
    default: 'medium'
  },
  /**
   * 按钮的形状
   * 正常、圆、倒角
   **/
  shape: {
    type: String as PropType<'square' | 'round' | 'circle'>,
    default: 'square'
  },
  /**
   *  按钮是否禁用
   * 
   * @defaultValue false
  **/
  disabled: Boolean,
  /**
   * 按钮是否为加载中状态
   * 
   * **/
  loading: {
    type: Boolean,
    default: false,
  },
  
  /**
   * 按钮的宽度是否随容器进行自适应
   * @defaultValue false
   * **/ 
  long: {
    type: Boolean,
    default: false
  }
}

export type buttonProps = ExtractPropTypes<typeof buttonProps>

