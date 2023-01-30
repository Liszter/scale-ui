<!--
 * @Author: liszter <liszter@qq.com>
 * @Date: 2022-11-27 11:52:28
 * @LastEditTime: 2023-01-30 18:24:25
 * @LastEditors: liszter@qq.com liszter@qq.com
 * @Description: 暂无
 * @FilePath: \scale-ui\packages\components\button\src\button.vue
-->
<template>
  <button
    class="s-button"
    @click="handleClick"
    :disabled="props.disabled || props.loading"
    :class="[
      type ? 's-button__' + props.type : '',
      size ? 's-button__' + props.size : '',
      shape ? 's-button__' + props.shape : '',
      {
        's-button__block': props.block,
        's-button__isPlain': props.plain,
        's-button__isDisabled': props.disabled,
        's-button__isLoading': props.loading,
        's-button__long': props.long,
      },
    ]"
    :style="{
      border: props.borderStyle,
      outline: props.outlineStyle,
    }"
  >
    <slot> </slot>
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

$primery-color: #008cff;
$click-color: #008cffb1;
$font-color-f: #fff;
$font-color-0: #000;
$secondary-color: #008cff54;

$font-size-1: 14px;
$font-size-2: 18px;
$font-size-3: 22px;
$font-size-4: 24px;
$font-size-5: 28px;
$font-size-6: 32px;

.s-button {
  background: $primery-color;
  color: $font-color-f;
  transition: all 0.2s linear;
  cursor: pointer;
  min-width: 28px;
  min-height: 28px;
  // 按钮点击时的效果
  &:active {
    color: red;
    border: 1px solid red;
    background: rebeccapurple;
  }
  // 鼠标放按钮上的效果
  &:hover {
    color: yellow;
    border: 1px solid red;
  }
}

// 'primary' | 'secondary' | 'dashed' | 'outline' | 'text'
.s-button__default {
}
.s-button__dashed {
  background: transparent;
  color: $font-color-0;
  border: solid 2px red;
}

.s-button__outline {
  background: transparent;
  border: solid 1px $primery-color;
  color: $font-color-0;
}
.s-button__text {
  background: transparent;
  color: $font-color-0;
}

.s-button__isPlain {
  background: transparent;
}

.s-button__isDisabled {
  background: contrast(95%);
  cursor: not-allowed;
}

.button__long {
  width: 100%;
}

.s-button__mini {
  line-height: 1;
  padding: 0 2px;
}
.s-button__small {
  line-height: 1.2;
  padding: 0 6px;
}
.s-button__medium {
  line-height: 1.5;
  padding: 0 10px;
}
.s-button__large {
  line-height: 2;
  padding: 0 16px;
}

.s-button__square {
  border-radius: 0;
}
.s-button__circle {
  border-radius: 50%;
}
.s-button__round {
  border-radius: 6px;
}
.s-button__block {
  display: block;
}
</style>
