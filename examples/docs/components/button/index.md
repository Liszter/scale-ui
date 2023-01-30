<!--
 * @Author: liszter@qq.com liszter@qq.com
 * @Date: 2023-01-30 16:03:24
 * @LastEditors: liszter@qq.com liszter@qq.com
 * @LastEditTime: 2023-01-30 16:03:31
 * @FilePath: \scale-ui\examples\docs\components\button\index.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
## button 按钮

封装基础的按钮样式，提供一些简单的按钮配套方案。


## 基础用法

<div>

  <s-button>基础按钮</s-button>

  <s-button>基础按钮</s-button>

  <s-button>基础按钮</s-button>

  <s-button>基础按钮</s-button>

</div>



## API
### Button Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
block | Boolean | false | 是否为块级元素 | N
type | String | default | 按钮类型 | N
plain | Boolean | false | 按钮是否镂空（无背景色）| N
disabled | Boolean | false | 按钮是否禁用 | N
loading | Boolean | false | 按钮是否禁用 | N
long | Boolean | false | 按钮的宽度是否跟随容器自适应 | N
shape | `square` `round` `circle` | square | 按钮的形状 | N




### Button Events

名称 | 参数 | 描述
-- | -- | --
click | `(e: MouseEvent)` | 点击时触发