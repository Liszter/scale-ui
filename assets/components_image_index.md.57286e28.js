import{_ as l,c as p,a as e,b as a,e as n,o as t,r as o}from"./app.bb98460e.js";const S=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"图片","slug":"图片","link":"#图片","children":[]},{"level":2,"title":"常见业务","slug":"常见业务","link":"#常见业务","children":[]},{"level":2,"title":"基础用法","slug":"基础用法","link":"#基础用法","children":[]},{"level":2,"title":"设置尺寸","slug":"设置尺寸","link":"#设置尺寸","children":[]},{"level":2,"title":"图片延迟加载","slug":"图片延迟加载","link":"#图片延迟加载","children":[]},{"level":2,"title":"图片如何适应到容器框","slug":"图片如何适应到容器框","link":"#图片如何适应到容器框","children":[]},{"level":2,"title":"显示加载中效果 (待完善该功能)","slug":"显示加载中效果-待完善该功能","link":"#显示加载中效果-待完善该功能","children":[]},{"level":2,"title":"图片预览 (待完善该功能)","slug":"图片预览-待完善该功能","link":"#图片预览-待完善该功能","children":[]},{"level":2,"title":"API","slug":"api","link":"#api","children":[{"level":3,"title":"image Props","slug":"image-props","link":"#image-props","children":[]},{"level":3,"title":"Events","slug":"events","link":"#events","children":[]}]}],"relativePath":"components/image/index.md","lastUpdated":1675413539000}'),c={name:"components/image/index.md"},i=n('<h2 id="图片" tabindex="-1">图片 <a class="header-anchor" href="#图片" aria-hidden="true">#</a></h2><p>常见图片功能封装</p><h2 id="常见业务" tabindex="-1">常见业务 <a class="header-anchor" href="#常见业务" aria-hidden="true">#</a></h2><h2 id="基础用法" tabindex="-1">基础用法 <a class="header-anchor" href="#基础用法" aria-hidden="true">#</a></h2><p>单组件，默认样式</p>',5),r=n(`<div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#dbd7caee;">&lt;s-image src=&quot;https://biosafe.luoxunzmy.com:48756/izhibao/2023/02/01/352b6869-0a51-448b-8a83-16180b46c9bf.png&quot;&gt;</span></span>
<span class="line"><span style="color:#dbd7caee;"> &lt;/s-image&gt;</span></span>
<span class="line"><span style="color:#dbd7caee;"></span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#393a34;">&lt;s-image src=&quot;https://biosafe.luoxunzmy.com:48756/izhibao/2023/02/01/352b6869-0a51-448b-8a83-16180b46c9bf.png&quot;&gt;</span></span>
<span class="line"><span style="color:#393a34;"> &lt;/s-image&gt;</span></span>
<span class="line"><span style="color:#393a34;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="设置尺寸" tabindex="-1">设置尺寸 <a class="header-anchor" href="#设置尺寸" aria-hidden="true">#</a></h2>`,2),b={class:"flex items-baseline"},d=n(`<div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#dbd7caee;"> &lt;s-image</span></span>
<span class="line"><span style="color:#dbd7caee;">    width=&quot;90px&quot;</span></span>
<span class="line"><span style="color:#dbd7caee;">    height=&quot;90px&quot; </span></span>
<span class="line"><span style="color:#dbd7caee;">    src=&quot;https://biosafe.luoxunzmy.com:48756/izhibao/2023/02/01/352b6869-0a51-448b-8a83-16180b46c9bf.png&quot;&gt;</span></span>
<span class="line"><span style="color:#dbd7caee;"> &lt;/s-image&gt;</span></span>
<span class="line"><span style="color:#dbd7caee;">&lt;s-image</span></span>
<span class="line"><span style="color:#dbd7caee;">    width=&quot;60&quot;</span></span>
<span class="line"><span style="color:#dbd7caee;">    height=&quot;60&quot; </span></span>
<span class="line"><span style="color:#dbd7caee;">    src=&quot;https://biosafe.luoxunzmy.com:48756/izhibao/2023/02/01/352b6869-0a51-448b-8a83-16180b46c9bf.png&quot;&gt;</span></span>
<span class="line"><span style="color:#dbd7caee;"> &lt;/s-image&gt;</span></span>
<span class="line"><span style="color:#dbd7caee;"></span></span>
<span class="line"><span style="color:#dbd7caee;">  &lt;s-image</span></span>
<span class="line"><span style="color:#dbd7caee;">    width=&quot;50%&quot;</span></span>
<span class="line"><span style="color:#dbd7caee;">    height=&quot;50%&quot; </span></span>
<span class="line"><span style="color:#dbd7caee;">    src=&quot;https://biosafe.luoxunzmy.com:48756/izhibao/2023/02/01/352b6869-0a51-448b-8a83-16180b46c9bf.png&quot;&gt;</span></span>
<span class="line"><span style="color:#dbd7caee;">  &lt;/s-image&gt;</span></span>
<span class="line"><span style="color:#dbd7caee;"></span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#393a34;"> &lt;s-image</span></span>
<span class="line"><span style="color:#393a34;">    width=&quot;90px&quot;</span></span>
<span class="line"><span style="color:#393a34;">    height=&quot;90px&quot; </span></span>
<span class="line"><span style="color:#393a34;">    src=&quot;https://biosafe.luoxunzmy.com:48756/izhibao/2023/02/01/352b6869-0a51-448b-8a83-16180b46c9bf.png&quot;&gt;</span></span>
<span class="line"><span style="color:#393a34;"> &lt;/s-image&gt;</span></span>
<span class="line"><span style="color:#393a34;">&lt;s-image</span></span>
<span class="line"><span style="color:#393a34;">    width=&quot;60&quot;</span></span>
<span class="line"><span style="color:#393a34;">    height=&quot;60&quot; </span></span>
<span class="line"><span style="color:#393a34;">    src=&quot;https://biosafe.luoxunzmy.com:48756/izhibao/2023/02/01/352b6869-0a51-448b-8a83-16180b46c9bf.png&quot;&gt;</span></span>
<span class="line"><span style="color:#393a34;"> &lt;/s-image&gt;</span></span>
<span class="line"><span style="color:#393a34;"></span></span>
<span class="line"><span style="color:#393a34;">  &lt;s-image</span></span>
<span class="line"><span style="color:#393a34;">    width=&quot;50%&quot;</span></span>
<span class="line"><span style="color:#393a34;">    height=&quot;50%&quot; </span></span>
<span class="line"><span style="color:#393a34;">    src=&quot;https://biosafe.luoxunzmy.com:48756/izhibao/2023/02/01/352b6869-0a51-448b-8a83-16180b46c9bf.png&quot;&gt;</span></span>
<span class="line"><span style="color:#393a34;">  &lt;/s-image&gt;</span></span>
<span class="line"><span style="color:#393a34;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h2 id="图片延迟加载" tabindex="-1">图片延迟加载 <a class="header-anchor" href="#图片延迟加载" aria-hidden="true">#</a></h2>`,2),u=n(`<div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#dbd7caee;">  &lt;s-image</span></span>
<span class="line"><span style="color:#dbd7caee;">    loading=&quot;lazy&quot;</span></span>
<span class="line"><span style="color:#dbd7caee;">    src=&quot;https://biosafe.luoxunzmy.com:48756/izhibao/2023/02/01/352b6869-0a51-448b-8a83-16180b46c9bf.png&quot;&gt;</span></span>
<span class="line"><span style="color:#dbd7caee;"> &lt;/s-image&gt;</span></span>
<span class="line"><span style="color:#dbd7caee;"></span></span>
<span class="line"><span style="color:#dbd7caee;"></span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#393a34;">  &lt;s-image</span></span>
<span class="line"><span style="color:#393a34;">    loading=&quot;lazy&quot;</span></span>
<span class="line"><span style="color:#393a34;">    src=&quot;https://biosafe.luoxunzmy.com:48756/izhibao/2023/02/01/352b6869-0a51-448b-8a83-16180b46c9bf.png&quot;&gt;</span></span>
<span class="line"><span style="color:#393a34;"> &lt;/s-image&gt;</span></span>
<span class="line"><span style="color:#393a34;"></span></span>
<span class="line"><span style="color:#393a34;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="图片如何适应到容器框" tabindex="-1">图片如何适应到容器框 <a class="header-anchor" href="#图片如何适应到容器框" aria-hidden="true">#</a></h2>`,2),h={class:"flex justify-evenly"},m=n(`<div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#dbd7caee;">&lt;s-image</span></span>
<span class="line"><span style="color:#dbd7caee;">   fit=&quot;fill&quot;</span></span>
<span class="line"><span style="color:#dbd7caee;">   src=&quot;https://biosafe.luoxunzmy.com:48756/izhibao/2023/02/01/352b6869-0a51-448b-8a83-16180b46c9bf.png&quot;&gt;</span></span>
<span class="line"><span style="color:#dbd7caee;">&lt;/s-image&gt;</span></span>
<span class="line"><span style="color:#dbd7caee;"></span></span>
<span class="line"><span style="color:#dbd7caee;"></span></span>
<span class="line"><span style="color:#dbd7caee;"></span></span>
<span class="line"><span style="color:#dbd7caee;">  &lt;s-image</span></span>
<span class="line"><span style="color:#dbd7caee;">   fit=&quot;cover&quot;</span></span>
<span class="line"><span style="color:#dbd7caee;">   src=&quot;https://biosafe.luoxunzmy.com:48756/izhibao/2023/02/01/352b6869-0a51-448b-8a83-16180b46c9bf.png&quot;&gt;</span></span>
<span class="line"><span style="color:#dbd7caee;">&lt;/s-image&gt;</span></span>
<span class="line"><span style="color:#dbd7caee;"></span></span>
<span class="line"><span style="color:#dbd7caee;">  &lt;s-image</span></span>
<span class="line"><span style="color:#dbd7caee;">   fit=&quot;scale-down&quot;</span></span>
<span class="line"><span style="color:#dbd7caee;">   src=&quot;https://biosafe.luoxunzmy.com:48756/izhibao/2023/02/01/352b6869-0a51-448b-8a83-16180b46c9bf.png&quot;&gt;</span></span>
<span class="line"><span style="color:#dbd7caee;">&lt;/s-image&gt;</span></span>
<span class="line"><span style="color:#dbd7caee;"></span></span>
<span class="line"><span style="color:#dbd7caee;">  &lt;s-image</span></span>
<span class="line"><span style="color:#dbd7caee;">   fit=&quot;none&quot;</span></span>
<span class="line"><span style="color:#dbd7caee;">   src=&quot;https://biosafe.luoxunzmy.com:48756/izhibao/2023/02/01/352b6869-0a51-448b-8a83-16180b46c9bf.png&quot;&gt;</span></span>
<span class="line"><span style="color:#dbd7caee;">&lt;/s-image&gt;</span></span>
<span class="line"><span style="color:#dbd7caee;">  &lt;s-image</span></span>
<span class="line"><span style="color:#dbd7caee;">   fit=&quot;initial&quot;</span></span>
<span class="line"><span style="color:#dbd7caee;">   src=&quot;https://biosafe.luoxunzmy.com:48756/izhibao/2023/02/01/352b6869-0a51-448b-8a83-16180b46c9bf.png&quot;&gt;</span></span>
<span class="line"><span style="color:#dbd7caee;">&lt;/s-image&gt;</span></span>
<span class="line"><span style="color:#dbd7caee;">   &lt;s-image</span></span>
<span class="line"><span style="color:#dbd7caee;">   fit=&quot;inherit&quot;</span></span>
<span class="line"><span style="color:#dbd7caee;">   src=&quot;https://biosafe.luoxunzmy.com:48756/izhibao/2023/02/01/352b6869-0a51-448b-8a83-16180b46c9bf.png&quot;&gt;</span></span>
<span class="line"><span style="color:#dbd7caee;">&lt;/s-image&gt;</span></span>
<span class="line"><span style="color:#dbd7caee;"></span></span>
<span class="line"><span style="color:#dbd7caee;"></span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#393a34;">&lt;s-image</span></span>
<span class="line"><span style="color:#393a34;">   fit=&quot;fill&quot;</span></span>
<span class="line"><span style="color:#393a34;">   src=&quot;https://biosafe.luoxunzmy.com:48756/izhibao/2023/02/01/352b6869-0a51-448b-8a83-16180b46c9bf.png&quot;&gt;</span></span>
<span class="line"><span style="color:#393a34;">&lt;/s-image&gt;</span></span>
<span class="line"><span style="color:#393a34;"></span></span>
<span class="line"><span style="color:#393a34;"></span></span>
<span class="line"><span style="color:#393a34;"></span></span>
<span class="line"><span style="color:#393a34;">  &lt;s-image</span></span>
<span class="line"><span style="color:#393a34;">   fit=&quot;cover&quot;</span></span>
<span class="line"><span style="color:#393a34;">   src=&quot;https://biosafe.luoxunzmy.com:48756/izhibao/2023/02/01/352b6869-0a51-448b-8a83-16180b46c9bf.png&quot;&gt;</span></span>
<span class="line"><span style="color:#393a34;">&lt;/s-image&gt;</span></span>
<span class="line"><span style="color:#393a34;"></span></span>
<span class="line"><span style="color:#393a34;">  &lt;s-image</span></span>
<span class="line"><span style="color:#393a34;">   fit=&quot;scale-down&quot;</span></span>
<span class="line"><span style="color:#393a34;">   src=&quot;https://biosafe.luoxunzmy.com:48756/izhibao/2023/02/01/352b6869-0a51-448b-8a83-16180b46c9bf.png&quot;&gt;</span></span>
<span class="line"><span style="color:#393a34;">&lt;/s-image&gt;</span></span>
<span class="line"><span style="color:#393a34;"></span></span>
<span class="line"><span style="color:#393a34;">  &lt;s-image</span></span>
<span class="line"><span style="color:#393a34;">   fit=&quot;none&quot;</span></span>
<span class="line"><span style="color:#393a34;">   src=&quot;https://biosafe.luoxunzmy.com:48756/izhibao/2023/02/01/352b6869-0a51-448b-8a83-16180b46c9bf.png&quot;&gt;</span></span>
<span class="line"><span style="color:#393a34;">&lt;/s-image&gt;</span></span>
<span class="line"><span style="color:#393a34;">  &lt;s-image</span></span>
<span class="line"><span style="color:#393a34;">   fit=&quot;initial&quot;</span></span>
<span class="line"><span style="color:#393a34;">   src=&quot;https://biosafe.luoxunzmy.com:48756/izhibao/2023/02/01/352b6869-0a51-448b-8a83-16180b46c9bf.png&quot;&gt;</span></span>
<span class="line"><span style="color:#393a34;">&lt;/s-image&gt;</span></span>
<span class="line"><span style="color:#393a34;">   &lt;s-image</span></span>
<span class="line"><span style="color:#393a34;">   fit=&quot;inherit&quot;</span></span>
<span class="line"><span style="color:#393a34;">   src=&quot;https://biosafe.luoxunzmy.com:48756/izhibao/2023/02/01/352b6869-0a51-448b-8a83-16180b46c9bf.png&quot;&gt;</span></span>
<span class="line"><span style="color:#393a34;">&lt;/s-image&gt;</span></span>
<span class="line"><span style="color:#393a34;"></span></span>
<span class="line"><span style="color:#393a34;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div><h2 id="显示加载中效果-待完善该功能" tabindex="-1">显示加载中效果 (待完善该功能) <a class="header-anchor" href="#显示加载中效果-待完善该功能" aria-hidden="true">#</a></h2>`,2),g=n(`<div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#dbd7caee;">   &lt;s-image</span></span>
<span class="line"><span style="color:#dbd7caee;">    :showLoading=&quot;true&quot;</span></span>
<span class="line"><span style="color:#dbd7caee;">    src=&quot;https://biosafe.luoxunzmy.com:48756/izhibao/2023/02/01/352b6869-0a51-448b-8a83-16180b46c9bf.png&quot;&gt;</span></span>
<span class="line"><span style="color:#dbd7caee;"> &lt;/s-image&gt;</span></span>
<span class="line"><span style="color:#dbd7caee;"></span></span>
<span class="line"><span style="color:#dbd7caee;"></span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#393a34;">   &lt;s-image</span></span>
<span class="line"><span style="color:#393a34;">    :showLoading=&quot;true&quot;</span></span>
<span class="line"><span style="color:#393a34;">    src=&quot;https://biosafe.luoxunzmy.com:48756/izhibao/2023/02/01/352b6869-0a51-448b-8a83-16180b46c9bf.png&quot;&gt;</span></span>
<span class="line"><span style="color:#393a34;"> &lt;/s-image&gt;</span></span>
<span class="line"><span style="color:#393a34;"></span></span>
<span class="line"><span style="color:#393a34;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="图片预览-待完善该功能" tabindex="-1">图片预览 (待完善该功能) <a class="header-anchor" href="#图片预览-待完善该功能" aria-hidden="true">#</a></h2>`,2),y=n(`<div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#dbd7caee;">&lt;s-image</span></span>
<span class="line"><span style="color:#dbd7caee;">    preview=&quot;true&quot;</span></span>
<span class="line"><span style="color:#dbd7caee;">    src=&quot;https://biosafe.luoxunzmy.com:48756/izhibao/2023/02/01/352b6869-0a51-448b-8a83-16180b46c9bf.png&quot;&gt;</span></span>
<span class="line"><span style="color:#dbd7caee;"> &lt;/s-image&gt;</span></span>
<span class="line"><span style="color:#dbd7caee;"></span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#393a34;">&lt;s-image</span></span>
<span class="line"><span style="color:#393a34;">    preview=&quot;true&quot;</span></span>
<span class="line"><span style="color:#393a34;">    src=&quot;https://biosafe.luoxunzmy.com:48756/izhibao/2023/02/01/352b6869-0a51-448b-8a83-16180b46c9bf.png&quot;&gt;</span></span>
<span class="line"><span style="color:#393a34;"> &lt;/s-image&gt;</span></span>
<span class="line"><span style="color:#393a34;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-hidden="true">#</a></h2><h3 id="image-props" tabindex="-1">image Props <a class="header-anchor" href="#image-props" aria-hidden="true">#</a></h3><table><thead><tr><th>名称</th><th>类型</th><th>默认值</th><th>说明</th><th>必传</th></tr></thead><tbody><tr><td>src</td><td>String</td><td>&#39;&#39;</td><td>图片地址</td><td>N</td></tr><tr><td>title</td><td>String</td><td>&#39;&#39;</td><td>鼠标放上面时，显示文本</td><td>N</td></tr><tr><td>alt</td><td>String</td><td>&#39;&#39;</td><td>规定图像的替代文本。</td><td>N</td></tr><tr><td>width</td><td>String/number</td><td></td><td>图片的宽度</td><td>N</td></tr><tr><td>height</td><td>String/number</td><td></td><td>图片的高度</td><td>N</td></tr><tr><td>fit</td><td>fill、contain、cover、scale-down、none、initial、inherit</td><td>对图片进行剪切，保留原始比例：</td><td>N</td><td></td></tr><tr><td>showLoading</td><td>Boolean</td><td>false</td><td>是否显示加载中效果</td><td>N</td></tr><tr><td>preview</td><td>Boolean</td><td>false</td><td>是否可进行预览</td><td>N</td></tr><tr><td>loading</td><td>String &lt;<code>eager</code>&gt; &lt;<code>lazy</code>&gt;</td><td><code>eager</code></td><td>指定浏览器是应立即加载图像还是延迟加载图像。</td><td>N</td></tr></tbody></table><h3 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-hidden="true">#</a></h3><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>open</td><td>打开预览</td></tr><tr><td>close</td><td>关闭预览</td></tr></tbody></table>`,6);function f(_,q,z,v,x,T){const s=o("s-image");return t(),p("div",null,[i,e("div",null,[a(s,{src:"https://biosafe.luoxunzmy.com:48756/izhibao/2023/02/01/352b6869-0a51-448b-8a83-16180b46c9bf.png"})]),r,e("div",b,[a(s,{width:"90px",height:"90px",src:"https://biosafe.luoxunzmy.com:48756/izhibao/2023/02/01/352b6869-0a51-448b-8a83-16180b46c9bf.png"}),a(s,{width:"60",height:"60",src:"https://biosafe.luoxunzmy.com:48756/izhibao/2023/02/01/352b6869-0a51-448b-8a83-16180b46c9bf.png"}),a(s,{width:"50%",height:"50%",src:"https://biosafe.luoxunzmy.com:48756/izhibao/2023/02/01/352b6869-0a51-448b-8a83-16180b46c9bf.png"})]),d,a(s,{loading:"lazy",src:"https://biosafe.luoxunzmy.com:48756/izhibao/2023/02/01/352b6869-0a51-448b-8a83-16180b46c9bf.png"}),u,e("div",h,[a(s,{fit:"fill",src:"https://biosafe.luoxunzmy.com:48756/izhibao/2023/02/01/352b6869-0a51-448b-8a83-16180b46c9bf.png"}),a(s,{fit:"contain",src:"https://biosafe.luoxunzmy.com:48756/izhibao/2023/02/01/352b6869-0a51-448b-8a83-16180b46c9bf.png"}),a(s,{fit:"cover",src:"https://biosafe.luoxunzmy.com:48756/izhibao/2023/02/01/352b6869-0a51-448b-8a83-16180b46c9bf.png"}),a(s,{fit:"scale-down",src:"https://biosafe.luoxunzmy.com:48756/izhibao/2023/02/01/352b6869-0a51-448b-8a83-16180b46c9bf.png"}),a(s,{fit:"none",src:"https://biosafe.luoxunzmy.com:48756/izhibao/2023/02/01/352b6869-0a51-448b-8a83-16180b46c9bf.png"}),a(s,{fit:"initial",src:"https://biosafe.luoxunzmy.com:48756/izhibao/2023/02/01/352b6869-0a51-448b-8a83-16180b46c9bf.png"}),a(s,{fit:"inherit",src:"https://biosafe.luoxunzmy.com:48756/izhibao/2023/02/01/352b6869-0a51-448b-8a83-16180b46c9bf.png"})]),m,a(s,{showLoading:!0,src:"https://biosafe.luoxunzmy.com:48756/izhibao/2023/02/01/352b6869-0a51-448b-8a83-16180b46c9bf.png"}),g,a(s,{preview:"true",src:"https://biosafe.luoxunzmy.com:48756/izhibao/2023/02/01/352b6869-0a51-448b-8a83-16180b46c9bf.png"}),y])}const w=l(c,[["render",f]]);export{S as __pageData,w as default};
