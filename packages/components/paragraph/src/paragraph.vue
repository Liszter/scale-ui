
<template>
  <div class="s-paragraph">

  </div>
</template>

<script lang="ts" setup name="SParagraph">
import { paragraphProps } from "./paragraph";

const emit = defineEmits(["handleClick"]);

const props = defineProps(paragraphProps);

// 点击时触发的事件
const handleClick = () => {
 emit("handleClick");
};
</script>

<style lang="scss" scoped>
@import "./paragraph.scss";
</style>

