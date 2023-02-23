/*
 * @Author: liszter@qq.com liszter@qq.com
 * @Date: 2023-02-22 15:19:08
 * @LastEditors: liszter@qq.com liszter@qq.com
 * @LastEditTime: 2023-02-23 11:06:29
 * @FilePath: \scale-ui\packages\components\dialog\utils.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { ref, Ref } from "vue";

// 


export const useSameTarget = (handleClick) => {

  let mousedownTarget = false
  let mouseupTarget = false
  // 参阅这个 https://javascript.info/mouse-events-basics
  // 按这个顺序触发的事件: mousedown -> mouseup -> click
  // 在点击事件触发后，我们需要设置 mousedown 和 mouseup 的 target 为 false

  const onClick = (e: MouseEvent) => {
    // 当且仅当
    if (mousedownTarget && mouseupTarget) {
      handleClick(e)
    }
    mousedownTarget = mouseupTarget = false
  }

  const onMousedown = (e: MouseEvent) => {
    // 标记当前 mousedown 事件的 target
    mousedownTarget = e.target === e.currentTarget
  }
  const onMouseup = (e: MouseEvent) => {
    // 标记当前 mouseup 事件的 target
    mouseupTarget = e.target === e.currentTarget
  }

  return { onClick, onMousedown, onMouseup }
}




// overflow


export const useOverflow = (elementRef: Ref<HTMLElement | undefined>) => {

  const isSetOverflow = ref(false);

  const originStyle = {
    overflow: '',
    width: '',
    boxSizing: ''
  }

  // 设置 overflow hidden
  const setOverflowHidden = () => {

    if (elementRef.value) {

      const element = elementRef.value

      // 未设置  且 overflow 为 hidden
      if (!isSetOverflow.value && element.style.overflow !== 'hidden') {

        // 目前只 关注 boxSizing 和  overflow 属性

        originStyle.overflow = element.style.overflow;
        originStyle.boxSizing = element.style.boxSizing;
        element.style.overflow = 'hidden';
        element.style.boxSizing = 'border-box';

        isSetOverflow.value = true
      }


    }

  }
  // 恢复 reset 属性
  const resetOverflow = () => {

    if (elementRef.value && isSetOverflow.value) {
      const element = elementRef.value
      element.style.overflow = originStyle.overflow
      element.style.boxSizing = originStyle.boxSizing;
      isSetOverflow.value = false;
    }


  }



  return {
    setOverflowHidden,
    resetOverflow
  }



}