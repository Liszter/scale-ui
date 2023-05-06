<!--
 * @Author: liszter <liszter@qq.com>
 * @Date: 2022-11-27 11:52:28
 * @LastEditTime: 2023-05-06 09:55:10
 * @LastEditors: liszter@qq.com liszter@qq.com
 * @Description: 暂无
 * @FilePath: \scale-ui\packages\components\icon\src\icon.vue
-->
<template>
  <i class="s-icon" :style="style">
  </i>
</template>

<script lang="ts" setup name="SButton">
import { computed } from "vue";
import { iconProps } from "./icon";
const props = defineProps(iconProps);
    const style = computed(() => {
      if (!props.size && !props.color) {
        return {};
      }
      return {
        ...(props.size ? { "fontSize": props.size + "px" } : {}),
        ...(props.color ? { "color": props.color } : {}),
      };
    });

</script>