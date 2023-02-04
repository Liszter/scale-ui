<!--
 * @Author: liszter@qq.com liszter@qq.com
 * @Date: 2023-02-03 16:37:18
 * @LastEditors: liszter@qq.com liszter@qq.com
 * @LastEditTime: 2023-02-04 18:05:52
 * @FilePath: \scale-ui\packages\components\paragraph\src\paragraph.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->

<template>
  <div class="s-paragraph"
    v-show="props.show"
    :style="{...sizeStyle, ...linesStyle}"
  >
    <!-- 段落  -->
    <template v-if="props.mode === 'article'">
      <p>{{ props.text }}</p>
    </template>
    <!-- 日期 -->
    <template v-else-if="props.mode === 'date'">
      <span>{{ props.text }}</span>
    </template>
    <!-- 金钱 -->
    <template v-else-if="props.mode === 'price'">
      <span>{{ props.text }}</span>
    </template>
    <!-- 超链接 -->
    <template v-else-if="props.mode === 'link'">
      <a :href="props.href">
        <span>
          {{ props.text }}
        </span>
      </a>
    </template>
    <!-- 文字 text-->
    <template v-else>
      <span>{{ props.text }}</span>
    </template>
  </div>
</template>

<script lang="ts" setup name="SParagraph">
import { computed, CSSProperties } from "vue";

import { paragraphProps } from "./paragraph";

const emit = defineEmits(["handleClick"]);

const props = defineProps(paragraphProps);


// 自定义样式
interface sizeStyleType {
  color?: String,
  size?: String,
  lineHeight?: String,
  padding?: String,
  height?: String
}
// 自定义样式
const sizeStyle = computed(()=> {
  let resStyle : sizeStyleType = {}
  // 颜色
  if (props.color) {
    resStyle.color = props.color
  } 
  // 字体大小
  if (props.size) {
    resStyle.size = props.size
  } 
  // 行高
  if (props.lineHeight) {
    resStyle.lineHeight = props.lineHeight
  } 
  // 外边距
  if (props.padding) {
    resStyle.padding = props.padding
  } 
  if (props.height) {
    resStyle.height = props.height
  }
  return resStyle as {}
})


// 行数
const linesStyle = computed(()=> {

  let reg = /^[0-9]+$/
  if(props.lines && reg.test(props.lines)) {
    return {
      "display": "-webkit-box",
      "overflow": "hidden",
      "-webkit-line-clamp": props.lines,
      "-webkit-box-orient": "vertical"
    }
} else {
  return {} 
}
})














// 点击时触发的事件
const handleClick = () => {
  emit("handleClick");
};
</script>

<style lang="scss" scoped>
@import "./paragraph.scss";
</style>

