<!--
 * @Author: liszter <liszter@qq.com>
 * @Date: 2022-11-27 11:52:28
 * @LastEditTime: 2023-01-31 18:07:17
 * @LastEditors: liszter@qq.com liszter@qq.com
 * @Description: 暂无
 * @FilePath: \scale-ui\packages\components\button\src\button.vue
-->
<template>
  <button
    class="s-button"
    @click="handleClick"
    :disabled="props.disabled || props.loading"
    :style="{ background: props.theme ? props.theme : '',
      color: props.color ? props.color : ''
    }"
    :class="[
      type ? 's-button__' + props.type : '',
      size ? 's-button__' + props.size : '',
      shape ? 's-button__' + props.shape : '',
      {
        's-button__block': props.block,
        's-button__isDisabled': props.disabled,
        's-button__isLoading': props.loading,
        's-button__long': props.long,
      },
    ]"
  >
    <slot v-if="!loading"> </slot>
    <span v-else class="loading">
      <svg
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        stroke="currentColor"
        class="s-rotating icon"
        stroke-width="4"
        stroke-linecap="butt"
        stroke-linejoin="miter"
      >
        <path
          d="M42 24c0 9.941-8.059 18-18 18S6 33.941 6 24 14.059 6 24 6"
        ></path>
      </svg>
        {{ props.loadingText }}
    </span>
  </button>
</template>

<script lang="ts" setup name="SButton">
import { buttonProps } from "./button";

const emit = defineEmits(["handleClick"]);

const props = defineProps(buttonProps);

// 点击时触发的事件
const handleClick = () => {
  emit("handleClick");
};
</script>

<style lang="scss" scoped>
@import "./button.scss";
</style>
