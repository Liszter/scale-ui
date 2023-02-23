<!--
 * @Author: liszter@qq.com liszter@qq.com
 * @Date: 2023-02-23 15:26:36
 * @LastEditors: liszter@qq.com liszter@qq.com
 * @LastEditTime: 2023-02-23 16:33:59
 * @FilePath: \scale-ui\packages\components\scalebox\src\scalebox.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->

<template>
  <div class="s-scalebox">
    <div
      class="scale-box"
      :style="{...ratioStyle, ...computedStyle}"
    >
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup name="SScalebox">
import { scaleboxProps } from "./scalebox";
import debounce from "lodash/debounce";
import { computed, ref } from "vue";

// 组件参数
const props = defineProps(scaleboxProps);

// 自适应框样式
interface ratioType {
  width?: String;
  height?: String;
  backgroundColor?: String;
}

const ratioStyle = computed(() => {
  let resStyle: ratioType = {};

  if (props.width) {
    resStyle.width = String(props.width) + "px";
  }

  if (props.height) {
    resStyle.height = String(props.height) + "px";
  }

  if (props.bgColor) {
    resStyle.backgroundColor = props.bgColor;
  }

  return resStyle as {};
});

// 创建一个 style对象
let windowSize = ref(1);
let computedStyle = computed({
  get: () => {
    return {
      transform: `scaleX(${windowSize.value}) scaleY(${windowSize.value}) translateX(-50%) translateY(-50%)`,
    };
  },
  set: () => {},
});
debounce(calculateSize, 200)();
// 监听window size 改变的事件
window.addEventListener("resize", debounce(calculateSize, 200));
// 计算尺寸
function calculateSize() {
  // 获取界面的宽高
  let windowH = document.documentElement.clientHeight,
    windowW = document.documentElement.clientWidth;
  windowSize.value = Math.min(windowH / props.height, windowW / props.width);
}
</script>

<style lang="scss" scoped>
@import "./scalebox.scss";
</style>
