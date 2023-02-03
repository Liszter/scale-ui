
<template>
  <div class="s-image">

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

