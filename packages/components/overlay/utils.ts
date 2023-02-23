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