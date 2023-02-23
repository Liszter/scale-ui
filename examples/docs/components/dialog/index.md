<!--
 * @Author: liszter@qq.com liszter@qq.com
 * @Date: 2023-02-21 14:56:58
 * @LastEditors: liszter@qq.com liszter@qq.com
 * @LastEditTime: 2023-02-23 15:18:36
 * @FilePath: \scale-ui\examples\docs\components\dialog\index.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->



## dialog 弹层

弹出层容器，用于展示弹窗、信息提示等内容，支持上、下、左、右和中部弹出。组件只提供容器，内部内容由用户自定义。


## 常见业务

  <s-button type="text" @click="handleClick">点击打开dialog</s-button>
  <s-dialog  @close="handleClose" v-model:visible="visible">
    <div class="my-dialog">
      <div>
          header
      </div>
      <div>
        body
      </div>
      <div>
      footer
      </div>
    </div>
  </s-dialog>

```vue
<s-dialog  @close="handleClose" v-model:visible="visible">
    <div class="my-dialog">
      <div>
          header
      </div>
      <div>
        body
      </div>
      <div>
      footer
      </div>
    </div>
  </s-dialog>
  <script lang="ts" setup>
  import { ref } from "vue"

  const visible = ref(false)
  const handleClick = () => {
    visible.value = true
  }
  const handleClose = () => {
    visible.value = false
  }

</script>
<style lang="scss" scoped>

.my-dialog {
  position: relative;
  box-sizing: border-box;
  margin: 20px;
}
</style>
```

## 更改位置样式

  <s-button type="text" @click="handleClick1">测试样式api</s-button>

<s-dialog v-model:visible="visible1" width="400px" height="300px" top="10vh" bgColor="transparent" :closeable="false" @close="handleClose1" 
>
 <div> 宽度400px </div>
 <div> 高度300px </div>
 <div> 距离顶部 10vh </div>
 <div> 遮罩颜色换为 透明色 </div>
 <div> 不显示 关闭按钮 </div>

 <div> 默认点击 esc 关闭</div>
</s-dialog>

```vue
<s-dialog v-model:visible="visible1" 
  width="400px" 
  height="300px" 
  top="10vh" 
  bgColor="transparent" 
  :closeable="false"
  @close="handleClose1" 
>
 <div> 宽度400px </div>
 <div> 高度300px </div>
 <div> 距离顶部 10vh </div>
 <div> 遮罩颜色换为 透明色 </div>
 <div> 不显示 关闭按钮 </div>
</s-dialog>

```



## 是否全屏

  <s-button type="text" @click="handleClick2">测试样式api</s-button>

  <s-dialog v-model:visible="visible2" :fullscreen="true" @close="handleClose2">
      全屏
  </s-dialog>

```vue
<s-dialog v-model:visible="visible2" @close="handleClose2">
    全屏
</s-dialog>
```


## API
### dialog Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
popupContainer | String | `body` | 弹出框挂载的容器 | N
visible | Boolean | false | 是否显示 Dialog | Y
fullscreen | Boolean | false | 是否全屏 | N
width | String | 50% | Dialog的宽度 | N
height | String | 50% | Dialog的高度 | N
top | String | 15vh | Dialog CSS 中的 margin-top 值 | N
overlay | Boolean | true | 是否显示遮罩 | N
lock-scroll | Boolean | true | 是否在 Dialog 出现时将 body 滚动锁定	 | N
close-on-press-escape | boolean	| true |  是否可以通过按下 ESC 关闭 Dialog | N
closeable | Boolean | false | 是否显示关闭图标 | Y
before-close | function | - | function(done)，done 用于关闭 Dialog | N
duration | String | Number | 遮罩打开或收起的动画过渡时间，单位ms	300	| N
closeOnClickOverlay | Boolean | true |  点击遮罩是否关闭弹窗（注意：关闭事件需要自行处理，只会在开启closeOnClickOverlay后点击遮罩层执行close回调）| N
bgColor | String | '' | 背景色，一般用于特殊弹窗内容场景，设置为transparent可去除默认的白色背景 | N 
destroy-on-close | Boolean | false | 关闭时销毁 Dialog 中的元素	| N


### dialog Slot


<!-- 名称 | 参数 | 描述
-- | -- | -- -->


### dialog Events


名称 | 参数 | 描述
-- | -- | --
open | Dialog 打开的回调 | —
opened | Dialog 打开动画结束时的回调 | —
close | Dialog 关闭的回调 | —
closed | Dialog 关闭动画结束时的回调 | —




<script lang="ts" setup>
  import { ref } from "vue"

  const visible = ref(false)



  const handleClick = () => {
    visible.value = true
  }
  const handleClose = () => {
    visible.value = false
  }






  const visible1 = ref(false)
  const handleClick1 = () => {
    visible1.value = true
  }
  const handleClose1 = () => {
    visible1.value = false
  }



    const visible2 = ref(false)
  const handleClick2 = () => {
    visible2.value = true
  }
  const handleClose2 = () => {
    visible2.value = false
  }



</script>
<style lang="scss" scoped>

.my-dialog {
  position: relative;
  box-sizing: border-box;
  margin: 20px;
}
</style>