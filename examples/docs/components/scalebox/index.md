<!--
 * @Author: liszter@qq.com liszter@qq.com
 * @Date: 2023-02-23 15:26:36
 * @LastEditors: liszter@qq.com liszter@qq.com
 * @LastEditTime: 2023-02-23 16:39:49
 * @FilePath: \scale-ui\examples\docs\components\scalebox\index.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
# scalebox


## 基础用法

<s-button type="text" @click="handleOpen"> 开启 </s-button>

<s-dialog v-model:visible="v" top="0" fullscreen="true" :closeable="false"  @close="handleClose">
<div class="overflow-auto">
</div>
<s-scalebox width="1920" height="1080" bgColor="#ccc" >
  <div class=" color-lightBlue">
    测试大屏自适应


    点击 ESC  关闭
  </div>
</s-scalebox>
</s-dialog>


```vue

<s-scalebox width="1920" height="1080" bgColor="#ccc">
  <div class=" bg-orange color-lightBlue">
    测试大屏

  </div>
</s-scalebox>


```


## API
名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --

width | Number | 1920 | 宽度 | Y
height | Number | 1080 | 高度 | Y
bgColor | String | transparent | 背景色 | Y




<script setup lang="ts">
import { ref } from "vue"

const v = ref(false)

function handleOpen () {
  v.value = true
}

function handleClose () {
  v.value = false
}

</script>