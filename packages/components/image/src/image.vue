<!--
 * @Author: liszter <liszter@qq.com>
 * @Date: 2023-02-02 20:36:08
 * @LastEditTime: 2023-02-02 21:38:16
 * @LastEditors: lishutao
 * @Description: 暂无
 * @FilePath: \scale-ui\packages\components\image\src\image.vue
-->


<template>
  <div class="s-image">
    <img
       src="" alt="" srcset="">
  </div>
</template>

<script lang="ts" setup name="SImage">
import { imageProps } from "./image";

const emit = defineEmits(["handleClick"]);

const props = defineProps(imageProps);

// 点击时触发的事件
const handleClick = () => {
 emit("handleClick");
};
</script>

<style lang="scss" scoped>
@import "./image.scss";
</style>

