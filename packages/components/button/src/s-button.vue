<!--
 * @Author: liszter <liszter@qq.com>
 * @Date: 2022-11-27 11:52:28
 * @LastEditTime: 2023-01-30 10:09:20
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
.s-button {
  transition: all 0.2s linear;

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

.s-button__primary {
  background: #008cff;
  color: #fff;
}
.s-button__secondary {
  background: red;
  color: #fff;
}

.s-button__isPlain {
  background: transparent;
}

.button__isDisabled {
  background: contrast(95%);
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
.s-button__cicle {
  border-radius: 50%;
}
.s-button__round {
  border-radius: 6px;
}
</style>
