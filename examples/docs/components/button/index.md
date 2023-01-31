<!--
 * @Author: liszter@qq.com liszter@qq.com
 * @Date: 2023-01-30 16:03:24
 * @LastEditors: liszter@qq.com liszter@qq.com
 * @LastEditTime: 2023-01-31 18:08:47
 * @FilePath: \scale-ui\examples\docs\components\button\index.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
## button 按钮

封装基础的按钮样式，提供一些简单的按钮配套方案。

## 常见业务

<div>
  <s-button
    shape="round"
    :long="true"
    theme="linear-gradient(to bottom right, red, yellow)"
    >倒角,颜色,类型</s-button>


  <s-button
    type="outline"
    :disabled="true"
    >禁用</s-button>


  <s-button
    type="outline"
     shape="round"
    :loading="true"
    >禁用</s-button>
</div>




## 基础用法
单组件，默认样式

<div> 
  <s-button>基础按钮</s-button>
</div>

```
 <s-button>基础按钮</s-button>
```

## 是否为块级元素

<div class=""> 
  <s-button>行内元素</s-button>
  <s-button >行内元素</s-button>
  <s-button :block="true">块级元素</s-button>
</div>

```
  <s-button>行内元素</s-button>
  <s-button>行内元素</s-button>
  <s-button :block="true">块级元素</s-button>
```

## 按钮类型
- `default` - 主要按钮
- `dashed` - 虚线按钮
- `outline` - 线形按钮
- `text` - 文本按钮

<div> 
  <s-button >默认按钮</s-button>
  <s-button type="dashed">虚线按钮</s-button>
  <s-button type="outline">线形按钮</s-button>
  <s-button type="text">文本按钮</s-button>
</div>

```
  <s-button >默认按钮</s-button>
  <s-button type="dashed">虚线按钮</s-button>
  <s-button type="outline">线形按钮</s-button>
  <s-button type="text">文本按钮</s-button>
```

## 按钮风格(颜色)（theme）

<div class=""> 
  <s-button>默认按照主题</s-button>
  <s-button theme="#008cff">换个颜色</s-button> 
  <s-button theme="linear-gradient(to bottom right, red, yellow)">渐变色</s-button> 
</div>

```
  <s-button>默认按照主题</s-button>
  <s-button theme="#008cff">换个颜色</s-button> 
  <s-button 
    theme="linear-gradient(to bottom right, red, yellow)"
   >
   渐变色
  </s-button> 
```

## 按钮形状 

<div class=" "> 
  <s-button shape="square">没有倒角</s-button>
  <s-button shape="circle">+</s-button>
  <s-button shape="round">开始提交</s-button>
</div>

```
  <s-button shape="square">没有倒角</s-button>
  <s-button shape="circle">+</s-button>
  <s-button shape="round">开始提交</s-button>
```


## 长按钮

<div class="" style="height: 60px"> 
  <s-button :long="true">基于父元素进行展开</s-button>
</div>

```
  <s-button :long="true">基于父元素进行展开</s-button>
```

## 禁用

<div class="" style="height: 60px"> 
  <s-button :disabled="true">禁用</s-button>
  <s-button :disabled="false">不禁用</s-button>

</div>

```
  <s-button :disabled="true">禁用</s-button>
  <s-button :disabled="false">不禁用</s-button>
```

## 加载中

- 点击按钮后进行数据加载操作，在按钮上显示加载状态。

<div class="" style="height: 100px">
  <s-button :loading="false" >提交</s-button>
  <s-button :loading="true" >提交</s-button>
</div>

```
<s-button :loading="false">提交</s-button>
<s-button :loading="true">提交</s-button>
```

<style>
  .s-button {
    margin: 8px;
  }
</style>




## API
### Button Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
block | Boolean | false | 是否为块级元素 | N
type | String | default | 按钮类型 dashed/outline/text | N
theme | String | 默认主色调 | 按钮背景色 | N
disabled | Boolean | false | 按钮是否禁用 | N
loading | Boolean | false | 按钮是否禁用 | N
long | Boolean | false | 按钮的宽度是否跟随容器自适应 | N
shape | `square` `round` `circle` | square | 按钮的形状 | N




### Button Events

名称 | 参数 | 描述
-- | -- | --
click | `(e: MouseEvent)` | 点击时触发