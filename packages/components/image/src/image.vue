<!--
 * @Author: liszter <liszter@qq.com>
 * @Date: 2023-02-02 20:36:08
 * @LastEditTime: 2023-02-03 16:32:56
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
    />
  </div>
</template>

<script lang="ts" setup name="SImage">
import { isUndefined, isNumber } from "../utils";

import { imageProps } from "./image";
import { computed, CSSProperties } from "vue";
const emit = defineEmits(["handleClick"]);

const props = defineProps(imageProps);

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

// 点击时触发的事件
const handleClick = () => {
  emit("handleClick");
};
</script>

<style lang="scss" scoped>
@import "./image.scss";
</style>

