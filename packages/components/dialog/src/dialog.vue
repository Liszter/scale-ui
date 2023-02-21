
<template>
  <div class="s-dialog">

  </div>
</template>

<script lang="ts" setup name="SDialog">
import { dialogProps } from "./dialog";

const emit = defineEmits(["handleClick"]);

const props = defineProps(dialogProps);

// 点击时触发的事件
const handleClick = () => {
 emit("handleClick");
};
</script>

<style lang="scss" scoped>
@import "./dialog.scss";
</style>
