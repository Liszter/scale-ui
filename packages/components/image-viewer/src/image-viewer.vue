
<template>
  <teleport to="body" :disabled="!props.teleported">
    <div
      class="s-image-viewer"
      ref="wrapper"
      :style="{ zIndex: computedZIndex }"
    >
      <!-- 底部遮罩 -->
      <div class="s-image-viewer__mask" @click="handleClose">
        <!-- 图片 -->
        <img
          class="s-image-viewer__image"
          :src="src"
          alt=""
          srcset=""
          :style="imgStyle"
        />
      </div>
    </div>
  </teleport>
</template>

<script lang="ts" setup name="SImage-viewer">
import { throttle } from "lodash";
import { imageViewerProps } from "./image-viewer";
import { onMounted, computed, ref, effectScope, CSSProperties } from "vue";
import { isNumber, useEventListener } from "@vueuse/core";

const emit = defineEmits(["handleClick", "close"]);

const props = defineProps(imageViewerProps);

const wrapper = ref<HTMLDivElement>();

const transform = ref({
  scale: 1,
  deg: 0,
  offsetX: 0,
  offsetY: 0,
  enableTransition: false,
});

const imgStyle = computed(() => {
  const { scale } = transform.value;
  const style: CSSProperties = {
    transform: `scale(${scale})`,
    zIndex: Number(computedZIndex),
  };
  return style;
});

// effectScope 创建一个 effect 作用域，可以捕获其中所创建的响应式副作用 (即计算属性和侦听器)，这样捕获到的副作用可以一起处理。
const scopeEventListener = effectScope();

// 注册一些键盘，鼠标事件
function registerEventListener() {
  const keydownHandler = throttle((e: KeyboardEvent) => {});

  // 鼠标操作
  const mousewheelHandler = throttle((e: WheelEvent) => {
    // 向下滑的距离  正数 为向下滑 负数为向上滑
    const delta = e.deltaY || e.deltaX;

    // 触发事件，更改这个缩放比例

    if (delta > 0) {
      handleActions({ zoomRate: 1 });
    } else {
      handleActions({ zoomRate: -1 });
    }
  });

  scopeEventListener.run(() => {
    useEventListener(document, "keydown", keydownHandler);
    useEventListener(document, "wheel", mousewheelHandler);
  });
}

// 执行动作
function handleActions({ zoomRate }) {
  if (zoomRate > 0) {
    transform.value.scale = Number((transform.value.scale / 1.6).toFixed(3));
  } else {
    transform.value.scale = Number((transform.value.scale * 1.6).toFixed(3));
  }
}
onMounted(() => {
  // 注册事件
  registerEventListener();

  wrapper.value?.focus?.();
});

// z-index
const computedZIndex = computed(() => {
  return Number(props.zIndex);
});

// 点击时触发的事件
const handleClick = () => {
  emit("handleClick");
};

// 点击 关闭
const handleClose = () => {
  emit("close");
};
</script>

<style lang="scss" scoped>
@import "./image-viewer.scss";
</style>

