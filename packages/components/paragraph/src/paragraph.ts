/*
 * @Author: liszter@qq.com liszter@qq.com
 * @Date: 2023-02-03 16:37:18
 * @LastEditors: liszter@qq.com liszter@qq.com
 * @LastEditTime: 2023-02-21 11:21:19
 * @FilePath: \scale-ui\packages\components\paragraph\src\paragraph.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

  
import type { ExtractPropTypes, PropType } from "vue"

// 文本功能
export type ModeType = 'text' | 'article' | 'price' | 'date' | 'link'

// 换行
export type wordWrapType = 'normal' | 'break-word'

export const paragraphProps = {
    /**
     *  paragraph类型：
     **/
    mode: {
      type: String as PropType<ModeType>,
    },
    /**
     * 单位
     * 
    */
   unit: {
    type: String
   },
    /**
     * 文字换行显示
     * 指定如果足够长得话，应该换行：
     * 
     * 'normal' || 'break-word'
     * */ 
   wordWrap: {
    type: String as PropType<wordWrapType>,
    default: 'normal'
   },

   /**
    * bold 加粗
    * 
   */
  bold: {
    type: Boolean,
    default: true
  },
  /**
   * 文本颜色 
   **/ 
  color: {
    type: String,
    default:''
  },
  /**
   * 整个容器的高度
   * **/ 
  height: {
    type: String,
    default: ''
  },

  size: {
    type: String,
    default: '14'
  },
  lineHeight: {
    type: String,
    default: '1.5'
  },
  padding: {
    type: String,
    default: ''
  },
  /**
   * 是否显示
   * */ 
  show: {
    type: Boolean,
    default: true
  },
  // 展示内容
  text: {
    type: String,
    default: ''
  },
  /**
   * 链接地址
   * */ 
  href: {
    type: String,
    default: ''
  },
  /**
   * 数据格式
   * */ 
  format: {
    type: String,
    default: ''
  },


  /**
   * 行数限制, 需要搭配配置整个容器的高度
   * */
  lines: {
    type: String || Number,
    default: ''
  },
  /**
   * 是否展示查看更多的按钮
  */
  showMore: {
    type: Boolean,
    default: false
  }

}
export type paragraphProps = ExtractPropTypes<typeof paragraphProps>
