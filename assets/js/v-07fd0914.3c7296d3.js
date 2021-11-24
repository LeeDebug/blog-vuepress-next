"use strict";(self.webpackChunkblog_vuepress_next=self.webpackChunkblog_vuepress_next||[]).push([[3033],{8243:(n,s,a)=>{a.r(s),a.d(s,{data:()=>t});const t={key:"v-07fd0914",path:"/views/front-end/keep-the-scroll-bar.html",title:"加载聊天历史记录并保留滚动条当前位置",lang:"en-US",frontmatter:{title:"加载聊天历史记录并保留滚动条当前位置",categories:["Vue"],tags:["Vue"],keywords:"Vue",description:"加载聊天历史记录并保留滚动条当前位置",cover:"https://cdn.jsdelivr.net/gh/LeeDebug/PicGo/img/20210413164038.png",date:"2021-03-08T12:35:19.000Z"},excerpt:"",headers:[],git:{createdTime:1637766986e3,updatedTime:1637766986e3,contributors:[{name:"licc",email:"961150665@qq.com",commits:1}]}}},4298:(n,s,a)=>{a.r(s),a.d(s,{default:()=>p});const t=(0,a(6252).uE)('<blockquote><p>在聊天框中，加载历史消息肯定是往消息的上面去加载，即对应数组的<code>Array.unshift()</code>操作，此时默认滚动条会回到顶部，所以我们需要重置滚动条的位置</p></blockquote><h1 id="vue中代码实现" tabindex="-1"><a class="header-anchor" href="#vue中代码实现" aria-hidden="true">#</a> Vue中代码实现</h1><p>首先记录加载历史前，滚动条的位置<code>scrollHeight</code></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> scrollHeight<span class="token operator">:</span> number <span class="token operator">=</span> <span class="token punctuation">(</span>document <span class="token keyword">as</span> any<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;messageBox&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>scrollHeight<span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>加载历史消息</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> outMsg<span class="token punctuation">.</span>list<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token comment">// todo sth, ex: 消息处理</span>\n  activeList<span class="token punctuation">.</span><span class="token function">unshift</span><span class="token punctuation">(</span>list<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>滚动到原来的位置</p><p>注：因为我是在vue环境下，需要确保页面已经渲染完，再滚动到加载前的位置，所以使用<code>Vue.nextTick()</code></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">nextTick</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> scrollDom<span class="token operator">:</span> any <span class="token operator">=</span> <span class="token punctuation">(</span>document <span class="token keyword">as</span> any<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;messageBox&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  scrollDom<span class="token punctuation">.</span>scrollTop <span class="token operator">=</span> <span class="token punctuation">(</span>scrollDom<span class="token punctuation">.</span>scrollHeight <span class="token operator">-</span> scrollHeight<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h1 id="jquery代码实现" tabindex="-1"><a class="header-anchor" href="#jquery代码实现" aria-hidden="true">#</a> jQuery代码实现</h1><p>原理同上，直接上代码</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> scrollHeight <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&quot;messageBox&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>scrollHeight<span class="token punctuation">;</span>\n<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&quot;#messageBox&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">scrollTop</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&quot;messageBox&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>scrollHeight <span class="token operator">-</span> scrollHeight<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h1 id="祝君无bug" tabindex="-1"><a class="header-anchor" href="#祝君无bug" aria-hidden="true">#</a> 祝君无Bug~</h1>',13),e={},p=(0,a(3744).Z)(e,[["render",function(n,s){return t}]])}}]);