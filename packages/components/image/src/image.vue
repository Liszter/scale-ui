<!--
 * @Author: liszter <liszter@qq.com>
 * @Date: 2023-02-02 20:36:08
 * @LastEditTime: 2023-02-22 14:32:37
 * @LastEditors: liszter@qq.com liszter@qq.com
 * @Description: 暂无
 * @FilePath: \scale-ui\packages\components\image\src\image.vue
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

// 引入 图片预览组件
import ImageViewer from "../../image-viewer";

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

// 记录当前页面的 overflow 状态

const prevOverflow = document.body.style.overflow;

// 点击时触发的事件
const clickHandler = () => {
  if (props.preview) {
    document.body.style.overflow = "hidden";
    showViewer.value = true;
    // emit("clickHandler");
  }
};

const closeViewer = () => {
  document.body.style.overflow = prevOverflow;

  showViewer.value = false;
};
</script>

<style lang="scss" scoped>
@import "./image.scss";
</style>

