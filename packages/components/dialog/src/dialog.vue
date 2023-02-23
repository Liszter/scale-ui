<!--
 * @Author: liszter@qq.com liszter@qq.com
 * @Date: 2023-02-21 14:56:58
 * @LastEditors: liszter@qq.com liszter@qq.com
 * @LastEditTime: 2023-02-23 16:28:46
 * @FilePath: \scale-ui\packages\components\dialog\src\dialog.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->

<template>
  <teleport to="body">
    <transition name="dialog-fade">
      <!-- 遮罩 -->
      <div
        class="s-overlay"
        :style="{ ...overStyle, ...zIndexStyle }"
        v-if="computedVisible"
        @click="close"
      >
        <div
          v-show="computedVisible"
          role="dialog"
          aria-modal="true"
          class="s-overlay-dialog"
          :style="{ ...overlayDialogStyle, ...fullscreenStyle }"
          @click="overlayEvent.onClick"
          @mousedown="overlayEvent.onMousedown"
          @mouseup="overlayEvent.onMouseup"
        >
          <!-- aria-modal="true"——对话框以外的元素无法被聚焦  -->
          <!-- close -->
          <div :class="[props.fullscreen?'s-overlay-dialog__close-full':'s-overlay-dialog__close']" v-if="closeable" @click="close">
            ×
          </div>
          <slot />
        </div>
      </div>
    </transition>
  </teleport>
</template>


<script lang="ts" setup name="SDialog">
import { computed, onMounted, watch, ref, onBeforeUnmount } from "vue";
import { dialogProps } from "./dialog";
import { useSameTarget, useOverflow } from "../utils";
import { throttle } from "lodash";

const emit = defineEmits(["close", "beforeOpen", "beforeClose"]);
const props = defineProps(dialogProps);

const containerRef = ref();

// 开启、关闭 srollbar
const { setOverflowHidden, resetOverflow } = useOverflow(containerRef);
// 是否展示 dialog
const computedVisible = computed(() => props.visible);

onMounted(() => {
  // 初始化，获取父容器
  let popupContainer = props.popupContainer;
  containerRef.value = document.querySelector(String(popupContainer));

  // 添加esc关闭功能
  if (props.closeOnPressEscape) {
    // 添加 esc 按键的
    addGlobalKeyDownListener();
  }
});

// 关闭时

onBeforeUnmount(() => {
  removeGlobalKeyDownListener();
});

let globalKeyDownListener = false;
// 监听 visible 属性
watch(computedVisible, (value: boolean) => {
  if (value === true) {
    // 开启的时候
    emit("beforeOpen");
    if (computedVisible.value) {
      setOverflowHidden();
    }
  } else {
    // 关闭的时候
    emit("beforeClose");
    if (!computedVisible.value) {
      resetOverflow();
    }
  }
});
// 点击时触发的事件
const close = () => {
  // 阻止 点击事件
  emit("close");
};
// overlay 样式
const overStyle = computed(() => {
  if (props.bgColor) {
    return { background: props.bgColor };
  } else {
    return {};
  }
});

// mask 遮罩
const zIndexStyle = computed(() => ({
  zIndex: props.zIndex,
}));

// dialog 的样式

// 自定义样式

interface dialogStyleType {
  width?: String;
  height?: String;
  top?: String;
}

const overlayDialogStyle = computed(() => {
  let resStyle: dialogStyleType = {};
  if (props.height) {
    resStyle.height = props.height;
  }
  if (props.width) {
    resStyle.width = props.width;
  }
  if (props.top) {
    resStyle.top = props.top;
  }
  return resStyle as {};
});

const fullscreenStyle = computed(() => {

  if (props.fullscreen) {
    return {
      width: "100%",
      height: "100%",
      borderRadius: '20px',
    }
  } else {
    return {}
  }
});

// // 遮罩点击事件
const overlayEvent = {
  onClick: (e: { stopPropagation: () => void }) => {
    // console.log("click, 阻止冒泡");
    e.stopPropagation();
  },
  onMousedown: (e: { stopPropagation: () => void }) => {
    // console.log("mousedown, 阻止冒泡");
    e.stopPropagation();
  },
  onMouseup: (e: { stopPropagation: () => void }) => {
    // console.log("onMouseup, 阻止冒泡");
    e.stopPropagation();
  },
};

// 添加按键监听

function addGlobalKeyDownListener() {
  if (props.closeOnPressEscape && !globalKeyDownListener) {
    globalKeyDownListener = true;

    document.querySelector("body")?.addEventListener("keydown", (e) => {
      if (e.keyCode == 27) {
        close();
      }
    });
  }
}

// 移出 按钮监听事件

function removeGlobalKeyDownListener() {
  if (props.closeOnPressEscape && !globalKeyDownListener) {
    globalKeyDownListener = true;

    document.querySelector("body")?.removeEventListener("keydown", () => {});
  }
}
</script>

<style lang="scss" scoped>
@import "./dialog.scss";

.dialog-fade-enter-active .inner,
.dialog-fade-leave-active .inner {
  transition: all 0.3s ease-in-out;
}

.dialog-fade-enter-from .inner,
.dialog-fade-leave-to .inner {
  transform: translateX(30px);
  transition: all 0.9s ease;
  opacity: 0;
}
</style>
