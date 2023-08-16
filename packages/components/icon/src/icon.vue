<!--
 * @Author: liszter <liszter@qq.com>
 * @Date: 2022-11-27 11:52:28
 * @LastEditTime: 2023-08-15 13:57:33
 * @LastEditors: lishutao
 * @Description: 暂无
 * @FilePath: \scale-ui\packages\components\icon\src\icon.vue
-->
<template>
  <i class="s-icon" :style="style">
  </i>
</template>

<script lang="ts" setup name="SIcon">
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