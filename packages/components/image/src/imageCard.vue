<!--
 * @Author: liszter <liszter@qq.com>
 * @Date: 2023-02-02 20:36:08
 * @LastEditTime: 2023-08-16 15:43:18
 * @LastEditors: lishutao
 * @Description: 暂无
 * @FilePath: \scale-ui\packages\components\image\src\imageCard.vue
-->
<template>
  <div class="s-image">
    <img
      :src="props.src"
      :title="props.title"
      :alt="props.alt"
      :loading="props.loading"
      :style="{ ...sizeStyle, ...fitStyle }"
      :class="[props.preview ? 's-image__preview' : '']"
      @click="clickHandler"
    />
    <template v-if="props.preview">
      <image-viewer v-if="showViewer" :src="props.src" @close="closeViewer">
      </image-viewer>
    </template>
  </div>
</template>

<script lang="ts" setup name="SImage">
import { isUndefined, isNumber } from "../utils";
import { imageProps } from "./image";
import { ref, computed, CSSProperties } from "vue";

import { useEventListener } from '@vueuse/core'


// 
let prevOverflow = ref('')

// 监听上下滑动

let stopWheelListener: (() => void) | undefined

// 引入 图片预览组件
import ImageViewer from "@scale-ui/components/image-viewer";

const emit = defineEmits(["clickHandler"]);

const props = defineProps(imageProps);



// 展示预览图片
const showViewer = ref(false);

// 验证尺寸
const normalizeImageSizeProp = function (size?: string | number) {
  if (isUndefined(size)) return undefined;
  if (!isNumber(size) && /^\d+(%)$/.test(size)) return size;
  const num = parseInt(size as string, 10);
  return isNumber(num) ? `${num}px` : undefined;
};

// 图片尺寸
const sizeStyle = computed(() => ({
  width: normalizeImageSizeProp(props.width),
  height: normalizeImageSizeProp(props.height),
}));

// 图片裁剪
// enum FitType = 'fill' | 'contain' | 'cover' | 'scale-down' | 'none' | 'initial' | 'inherit';

const fitStyle = computed<CSSProperties>(() => {
  if (props.fit) {
    return { objectFit: props.fit };
  } else {
    return {};
  }
});


function wheelHandler(e: WheelEvent) {
  if (!e.ctrlKey) return

  if (e.deltaY < 0) {
    e.preventDefault()
    return false
  } else if (e.deltaY > 0) {
    e.preventDefault()
    return false
  }
}



// 点击时触发的事件
const clickHandler = () => {
  if (!props.preview) {
    return
  }
  
  // 记录
  prevOverflow.value = document.body.style.overflow;
  document.body.style.overflow = 'hidden';
  showViewer.value = true;

};

const closeViewer = () => {
  document.body.style.overflow = prevOverflow.value;

  showViewer.value = false;
};
</script>

<style lang="scss" scoped>
@import "./image.scss";
</style>

