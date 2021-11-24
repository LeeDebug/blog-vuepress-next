"use strict";(self.webpackChunkblog_vuepress_next=self.webpackChunkblog_vuepress_next||[]).push([[2886],{6258:(n,s,a)=>{a.r(s),a.d(s,{data:()=>t});const t={key:"v-3a27ad0c",path:"/views/front-end/viewerjs.html",title:"viewerjs查看大图组件",lang:"en-US",frontmatter:{title:"viewerjs查看大图组件",categories:["Vue"],tags:["Vue"],keywords:"Vue",description:"viewerjs查看大图组件",cover:"https://cdn.jsdelivr.net/gh/LeeDebug/PicGo/img/20210225140807.png",date:"2021-02-06T23:07:33.000Z"},excerpt:"",headers:[],git:{createdTime:1637766986e3,updatedTime:1637766986e3,contributors:[{name:"licc",email:"961150665@qq.com",commits:1}]}}},4214:(n,s,a)=>{a.r(s),a.d(s,{default:()=>e});const t=(0,a(6252).uE)('<blockquote><p>因为项目没有使用<code>element-ui</code>，所以不能使用自带的<code>el-image</code>组件进行大图查看，遂找了一个单独的组件</p></blockquote><h1 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h1><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> viewerjs\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h1 id="使用案例" tabindex="-1"><a class="header-anchor" href="#使用案例" aria-hidden="true">#</a> 使用案例</h1><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token comment">&lt;!-- 单个图片查看 --&gt;</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>image<span class="token punctuation">&quot;</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>picture.jpg<span class="token punctuation">&quot;</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Picture<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token comment">&lt;!-- 多个图片查看 --&gt;</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>images<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>picture-1.jpg<span class="token punctuation">&quot;</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Picture 1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>picture-2.jpg<span class="token punctuation">&quot;</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Picture 2<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>picture-3.jpg<span class="token punctuation">&quot;</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Picture 3<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// see document: https://github.com/fengyuanchen/viewerjs/blob/master/README.md</span>\n<span class="token keyword">import</span> Viewer <span class="token keyword">from</span> <span class="token string">&#39;viewerjs&#39;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token string">&#39;viewerjs/dist/viewer.css&#39;</span><span class="token punctuation">;</span>\n<span class="token keyword">let</span> viewer<span class="token operator">:</span> any<span class="token punctuation">;</span>\n<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">initImageViewer</span><span class="token punctuation">(</span>thumbnail<span class="token operator">:</span> string <span class="token operator">=</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token comment">// 获取最新的消息框实例</span>\n  <span class="token keyword">const</span> msgDom<span class="token operator">:</span> any <span class="token operator">=</span> <span class="token punctuation">(</span>document <span class="token keyword">as</span> any<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;messageBox&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token comment">// 已加载过</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>viewer<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// 更新实例里的图片源</span>\n    viewer<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span>msgDom<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span> <span class="token comment">// 第一次加载</span>\n    viewer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Viewer</span><span class="token punctuation">(</span>msgDom<span class="token punctuation">,</span> <span class="token punctuation">{</span>\n      <span class="token comment">// 只筛选出图片消息</span>\n      <span class="token function">filter</span><span class="token punctuation">(</span><span class="token parameter">image<span class="token operator">:</span> any</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">const</span> isImgMsg <span class="token operator">=</span> image<span class="token punctuation">.</span>className<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token string">&#39;imageMsg&#39;</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>\n        <span class="token keyword">return</span> isImgMsg<span class="token punctuation">;</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token comment">// 去掉url中的缩略图参数</span>\n      <span class="token function">url</span><span class="token punctuation">(</span><span class="token parameter">image<span class="token operator">:</span> any</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> image<span class="token punctuation">.</span>src<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span>thumbnail<span class="token punctuation">,</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><h1 id="祝君无bug" tabindex="-1"><a class="header-anchor" href="#祝君无bug" aria-hidden="true">#</a> 祝君无Bug~</h1>',7),p={},e=(0,a(3744).Z)(p,[["render",function(n,s){return t}]])}}]);