## 图片

常见图片功能封装


## 常见业务


## 基础用法

单组件，默认样式

<div>
  <s-image src="https://biosafe.luoxunzmy.com:48756/izhibao/2023/02/01/352b6869-0a51-448b-8a83-16180b46c9bf.png">
 </s-image>
</div>

```
<s-image src="https://biosafe.luoxunzmy.com:48756/izhibao/2023/02/01/352b6869-0a51-448b-8a83-16180b46c9bf.png">
 </s-image>
``` 


## 设置尺寸
<div class="flex items-baseline">
  <s-image
    width="90px"
    height="90px" 
    src="https://biosafe.luoxunzmy.com:48756/izhibao/2023/02/01/352b6869-0a51-448b-8a83-16180b46c9bf.png">
 </s-image>
<s-image
    width="60"
    height="60" 
    src="https://biosafe.luoxunzmy.com:48756/izhibao/2023/02/01/352b6869-0a51-448b-8a83-16180b46c9bf.png">
 </s-image>

  <s-image
    width="50%"
    height="50%" 
    src="https://biosafe.luoxunzmy.com:48756/izhibao/2023/02/01/352b6869-0a51-448b-8a83-16180b46c9bf.png">
  </s-image>

</div>

```
 <s-image
    width="90px"
    height="90px" 
    src="https://biosafe.luoxunzmy.com:48756/izhibao/2023/02/01/352b6869-0a51-448b-8a83-16180b46c9bf.png">
 </s-image>
<s-image
    width="60"
    height="60" 
    src="https://biosafe.luoxunzmy.com:48756/izhibao/2023/02/01/352b6869-0a51-448b-8a83-16180b46c9bf.png">
 </s-image>

  <s-image
    width="50%"
    height="50%" 
    src="https://biosafe.luoxunzmy.com:48756/izhibao/2023/02/01/352b6869-0a51-448b-8a83-16180b46c9bf.png">
  </s-image>
```

## 图片延迟加载
  <s-image
    loading="lazy"
    src="https://biosafe.luoxunzmy.com:48756/izhibao/2023/02/01/352b6869-0a51-448b-8a83-16180b46c9bf.png">
 </s-image>

```
  <s-image
    loading="lazy"
    src="https://biosafe.luoxunzmy.com:48756/izhibao/2023/02/01/352b6869-0a51-448b-8a83-16180b46c9bf.png">
 </s-image>

```

 ## 图片如何适应到容器框
 <div class="flex justify-evenly"> 
 <s-image
    fit="fill"
    src="https://biosafe.luoxunzmy.com:48756/izhibao/2023/02/01/352b6869-0a51-448b-8a83-16180b46c9bf.png">
 </s-image>

   <s-image
    fit="contain"
    src="https://biosafe.luoxunzmy.com:48756/izhibao/2023/02/01/352b6869-0a51-448b-8a83-16180b46c9bf.png">
 </s-image>

   <s-image
    fit="cover"
    src="https://biosafe.luoxunzmy.com:48756/izhibao/2023/02/01/352b6869-0a51-448b-8a83-16180b46c9bf.png">
 </s-image>

   <s-image
    fit="scale-down"
    src="https://biosafe.luoxunzmy.com:48756/izhibao/2023/02/01/352b6869-0a51-448b-8a83-16180b46c9bf.png">
 </s-image>

   <s-image
    fit="none"
    src="https://biosafe.luoxunzmy.com:48756/izhibao/2023/02/01/352b6869-0a51-448b-8a83-16180b46c9bf.png">
 </s-image>
   <s-image
    fit="initial"
    src="https://biosafe.luoxunzmy.com:48756/izhibao/2023/02/01/352b6869-0a51-448b-8a83-16180b46c9bf.png">
 </s-image>
    <s-image
    fit="inherit"
    src="https://biosafe.luoxunzmy.com:48756/izhibao/2023/02/01/352b6869-0a51-448b-8a83-16180b46c9bf.png">
 </s-image>
 </div>

 ```
<s-image
    fit="fill"
    src="https://biosafe.luoxunzmy.com:48756/izhibao/2023/02/01/352b6869-0a51-448b-8a83-16180b46c9bf.png">
 </s-image>



   <s-image
    fit="cover"
    src="https://biosafe.luoxunzmy.com:48756/izhibao/2023/02/01/352b6869-0a51-448b-8a83-16180b46c9bf.png">
 </s-image>

   <s-image
    fit="scale-down"
    src="https://biosafe.luoxunzmy.com:48756/izhibao/2023/02/01/352b6869-0a51-448b-8a83-16180b46c9bf.png">
 </s-image>

   <s-image
    fit="none"
    src="https://biosafe.luoxunzmy.com:48756/izhibao/2023/02/01/352b6869-0a51-448b-8a83-16180b46c9bf.png">
 </s-image>
   <s-image
    fit="initial"
    src="https://biosafe.luoxunzmy.com:48756/izhibao/2023/02/01/352b6869-0a51-448b-8a83-16180b46c9bf.png">
 </s-image>
    <s-image
    fit="inherit"
    src="https://biosafe.luoxunzmy.com:48756/izhibao/2023/02/01/352b6869-0a51-448b-8a83-16180b46c9bf.png">
 </s-image>

 ```
  

## 显示加载中效果 (待完善该功能)

   <s-image
    :showLoading="true"
    src="https://biosafe.luoxunzmy.com:48756/izhibao/2023/02/01/352b6869-0a51-448b-8a83-16180b46c9bf.png">
 </s-image>

```
   <s-image
    :showLoading="true"
    src="https://biosafe.luoxunzmy.com:48756/izhibao/2023/02/01/352b6869-0a51-448b-8a83-16180b46c9bf.png">
 </s-image>

```

## 图片预览 (待完善该功能)

   <s-image
    preview="true"
    src="https://biosafe.luoxunzmy.com:48756/izhibao/2023/02/01/352b6869-0a51-448b-8a83-16180b46c9bf.png">
 </s-image>

```
<s-image
    preview="true"
    src="https://biosafe.luoxunzmy.com:48756/izhibao/2023/02/01/352b6869-0a51-448b-8a83-16180b46c9bf.png">
 </s-image>
```

## API

### image Props
名称 | 类型 | 默认值 | 说明 | 必传
-- | -- | -- | -- | --
src | String | '' | 图片地址 | N
title | String | '' | 鼠标放上面时，显示文本 | N
alt | String | '' | 规定图像的替代文本。 | N
width | String/number | | 图片的宽度 | N
height | String/number | | 图片的高度 | N
fit | fill、contain、cover、scale-down、none、initial、inherit | 对图片进行剪切，保留原始比例：| N
showLoading | Boolean | false | 是否显示加载中效果 | N
preview | Boolean | false | 是否可进行预览 | N
loading | String <`eager`> <`lazy`> | `eager` | 指定浏览器是应立即加载图像还是延迟加载图像。| N


### Events

名称 | 说明
-- | --
open | 打开预览
close | 关闭预览



<style>
  .s-image {
    margin-right: 20px;
  }
</style>
