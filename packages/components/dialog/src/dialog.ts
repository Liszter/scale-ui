
/*
 * @Author: liszter@qq.com liszter@qq.com
 * @Date: 2023-02-21 14:56:58
 * @LastEditors: liszter@qq.com liszter@qq.com
 * @LastEditTime: 2023-02-23 14:33:14
 * @FilePath: \scale-ui\packages\components\dialog\src\dialog.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import type { ExtractPropTypes, PropType } from "vue"
export const dialogProps = {
  /**
   *  dialog类型：
   **/

  /**
   * 是否显示dialog
   * */ 
  visible: {
    type: Boolean,
    default: true
  },

  /*
   *popupContainer 弹出框的挂载容器  
   * 
   * **/ 
   popupContainer: {
    type: [String, Object] as PropType<string | HTMLElement>,
    default: 'body',
  },


  /**
   * 宽度
   * **/ 
  width: {
    type: String,
    default: "50%"
  },

    /**
   * 高度
   * **/ 
    height: {
      type: String,
      default: "auto"
    },


  /**
   * margin-top 值
   * **/ 
  top: {
    type: String,
  },
  /**
   * 动画时间
   * 
  */
  duration: {
    type: String,
  },

  /**
   * 
   * **/ 
  beforeClose: {
  },
  /**
   * 是否全屏
   * 
   * */ 
  fullscreen: {
    type: Boolean,
    default: false
  },
  /**
   * 是否显示遮罩
   * */ 
  overlay: {
    type: Boolean
  },
  /**
   * body 是否滚动
   * */ 
  lockScroll: {
    type: Boolean
  },
  /**
   * 点击esc 关闭功能
   * */ 
  closeOnPressEscape: {
    type: Boolean,
    default: true
  },
  /***
   * 是否显示关闭按钮
   * */ 
  closeable: {
    type: Boolean,
    default: true
  },
  /**
   * 点击遮罩层关闭
   * */ 
  closeOnClickOverlay: {
    type: Boolean,
    default: false

  },
  /**
   * 关闭时销毁dialog 元素
   * */ 
  destroyOnClose: {
    type: Boolean,
    default: false
  },

  bgColor: {
    type: String
  },

  zIndex: {
    type: Number,
    default: 100
  }

}
export type dialogProps = ExtractPropTypes<typeof dialogProps>
