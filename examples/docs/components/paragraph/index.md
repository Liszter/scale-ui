<!--
 * @Author: liszter@qq.com liszter@qq.com
 * @Date: 2023-02-04 13:54:50
 * @LastEditors: liszter@qq.com liszter@qq.com
 * @LastEditTime: 2023-02-04 18:06:09
 * @FilePath: \scale-ui\examples\docs\components\paragraph\index.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
## 文本文字

   文字/段落

   该组件功能:
   - 字体大小控制
   - 字体颜色控制
   - 段落字体行高

   - 限制行数控制
   - 展开查看全部


## 常见业务


## 基本用法


<div class="artical-box">

<s-paragraph text="测试一下基本用法"></s-paragraph>
<s-paragraph :show="false" text="测试一下基本用法，隐藏效果"></s-paragraph>
</div>

```
<s-paragraph text="基本用法"></s-paragraph>
<s-paragraph show="false" text="基本用法"></s-paragraph>
```

### 文本类型 mode
<div class="flex ">
<div class="artical-box">
<s-paragraph mode="text" text="text文本"></s-paragraph>
</div>
<div class="artical-box">
<s-paragraph mode="price" text="1526.50"></s-paragraph>
</div>
<div class="artical-box">
<s-paragraph mode="date" text="2020-10-01"></s-paragraph>
</div>
<div class="artical-box">
<s-paragraph mode="link" text="官网地址" href="http://www.baidu.com/"></s-paragraph>
</div>
</div>


```
<s-paragraph mode="text" text="text文本"></s-paragraph>
<s-paragraph mode="price" text="1526.50"></s-paragraph>
<s-paragraph mode="date" text="2020-10-01"></s-paragraph>
<s-paragraph mode="link" text="官网地址" href="http://www.baidu.com/"></s-paragraph>
```

### 样式修改

<div class="artical-box">
<s-paragraph
   mode="text"
   text="text文本"
   blod="true"
   color="#008cff"
   size="14px"
   margin="10px"
></s-paragraph>
</div>

### 限制行数

<div class="flex">  
<div class="artical-box">
   <s-paragraph
   :lines="1"
   mode="text"
   text="锄禾日当午,汗滴禾下土."
   color="#008cff"
   size="14px"
   margin="10px"
></s-paragraph>
</div>


<div class="artical-box">

<s-paragraph
      :lines="3"
      mode="text"
      text="锄禾日当午,汗滴禾下土."
      color="#008cff"
      size="14px"
></s-paragraph>

</div>

<div class="artical-box">
<s-paragraph
   :lines="3"
   height="72px"
   :showMore="true"
   mode="text"
   lineHeight="1.5"
   text="锄禾日当午,汗滴禾下土. 谁知盘中餐,粒粒皆辛苦。锄禾日当午,汗滴禾下土. 谁知盘中餐,粒粒皆辛苦。"
></s-paragraph>
</div>
</div>


```
<s-paragraph
   lines="1"
   mode="text"
   text="锄禾日当午,汗滴禾下土."
   color="#008cff"
   size="14px"
   margin="10px"
></s-paragraph>

<s-paragraph
   lines="3"
   mode="text"
   text="锄禾日当午,汗滴禾下土."
   color="#008cff"
   size="14px"
></s-paragraph>

<s-paragraph
   lines="3"
   :showMore="true"
   mode="text"
   lineHeight="1.5"
   text="锄禾日当午,汗滴禾下土. 谁知盘中餐,"
></s-paragraph>

```


## API

### text Props

名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
mode | String | text | 文本类型<'普通文本text', '文段 article', '价格price', '日期date', '超链接link'> | Y
unit | String | '' | 设置mode=price | N
wordWrap | String | - | 文字换行 | N
bold | Boolean | false  | 是否为粗体 | N
color | String | 跟随系统 | 文本颜色 | N
size | String | 14 | 字体大小 | N 
lineHeight | String | 1.5 | 行高 | N
padding | String |  | 内边距, 字符串形式即可 | N
show | Boolean | true | 是否显示 | true
text | String | '' | 显示的内容 | Y
href | String | '' | 当`mode=link`, 配置的链接 | N
format | String | 文本类型更改后,可配置format进行校验 | 格式化规则 | N
lines | String/Number | - | 文本显示的行数,如果设置,超出此行数,将会显示省略号 | N
showMore | Boolean | false | 是否展示查看更多的按钮 | N







<style lang="scss" scroped>


.s-paragraph {

}


.artical-box {
   box-sizing: border-box;
   margin: 10px;
   background: rgba(100,100,100, .5);
   opacity:0.8;
   filter:alpha(opacity=80);
   box-sizing: border-box;
   width: 200px;
   height: 100px;
   padding: 16px;
}

</style>

