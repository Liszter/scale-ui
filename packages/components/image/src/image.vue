<!--
 * @Author: liszter@qq.com liszter@qq.com
 * @Date: 2023-02-02 10:48:07
 * @LastEditors: liszter@qq.com liszter@qq.com
 * @LastEditTime: 2023-02-02 18:25:40
 * @FilePath: \scale-ui\packages\components\image\src\image.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->

<template>
  <div class="s-image">
    <!-- <img src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" alt="" srcset="">
     -->

    <img src="https://biosafe.luoxunzmy.com:48756/izhibao/2023/02/01/352b6869-0a51-448b-8a83-16180b46c9bf.png" alt="" srcset="">

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

