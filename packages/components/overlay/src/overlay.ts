/*
 * @Author: liszter@qq.com liszter@qq.com
 * @Date: 2023-02-21 18:04:32
 * @LastEditors: liszter@qq.com liszter@qq.com
 * @LastEditTime: 2023-02-21 19:24:36
 * @FilePath: \scale-ui\packages\components\overlay\src\overlay.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createVNode, defineComponent, h, renderSlot, ExtractPropTypes, PropType } from 'vue'
import type { CSSProperties } from 'vue'

import { useSameTarget } from "../utils"

export const overlayProps = {
  /**
   * 是佛开启遮罩
   * */
  mask: {
    type: Boolean,
    default: true,
  },
  // 遮罩事件
  customMaskEvent: {
    type: Boolean,
    default: false,
  },
  // 图层
  zIndex: {
    type: [String, Number]
  },
  // 遮罩的具体样式
  overlayClass: {
    type: String
  }
}

// 点击事件

export const overlayEmits = {
  click: (evt: MouseEvent) => evt instanceof MouseEvent,
}

export default defineComponent({
  name: 'SOverlay',
  props: overlayProps,
  emits: overlayEmits,
  setup(props, { slots, emit }) {


    const onMaskClick = (e: MouseEvent) => {
      emit('click', e)
    }

    const { onClick, onMousedown, onMouseup } = useSameTarget(
      props.customMaskEvent ? undefined : onMaskClick
    )
    return () => {
      return props.mask ?  createVNode(
        'div',
        {
          class: [props.overlayClass],
          style: {
            zIndex: props.zIndex,
          },
          onClick,
          onMousedown,
          onMouseup,
        },
        [renderSlot(slots, 'default')],
      ) : h(
        'div',
        {
          class: props.overlayClass,
          style: {
            zIndex: props.zIndex,
            position: 'fixed',
            top: '0px',
            right: '0px',
            bottom: '0px',
            left: '0px',
          } as CSSProperties,
        },
        [renderSlot(slots, 'default')]
      )
    }

  }

})




