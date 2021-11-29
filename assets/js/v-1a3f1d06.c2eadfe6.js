"use strict";(self.webpackChunkblog_vuepress_next=self.webpackChunkblog_vuepress_next||[]).push([[5441],{7598:(n,a,s)=>{s.r(a),s.d(a,{data:()=>e});const e={key:"v-1a3f1d06",path:"/views/front-end/LeetCode-common-topic.html",title:"LeetCode常见题",lang:"en-US",frontmatter:{title:"LeetCode常见题",categories:["LeetCode"],tags:["LeetCode"],keywords:"LeetCode",description:"LeetCode",cover:"https://cdn.jsdelivr.net/gh/LeeDebug/PicGo/img/20201111170207.png",date:"2020-07-01T22:32:05.000Z"},excerpt:"",headers:[{level:2,title:"- 双指针",slug:"双指针",children:[]},{level:2,title:"- 排序",slug:"排序",children:[]},{level:2,title:"- 贪心思想",slug:"贪心思想",children:[]},{level:2,title:"- 二分查找",slug:"二分查找",children:[]},{level:2,title:"- 分治",slug:"分治",children:[]},{level:2,title:"- 搜索",slug:"搜索",children:[]},{level:2,title:"- 动态规划",slug:"动态规划",children:[]},{level:2,title:"- 数学",slug:"数学",children:[]},{level:2,title:"- 链表",slug:"链表",children:[]},{level:2,title:"- 树",slug:"树",children:[]},{level:2,title:"- 栈和队列",slug:"栈和队列",children:[]},{level:2,title:"- 哈希表",slug:"哈希表",children:[]},{level:2,title:"- 字符串",slug:"字符串",children:[]},{level:2,title:"- 数组与矩阵",slug:"数组与矩阵",children:[]},{level:2,title:"- 图",slug:"图",children:[]},{level:2,title:"- 位运算",slug:"位运算",children:[]}],git:{createdTime:1638196944e3,updatedTime:1638196944e3,contributors:[{name:"qducc",email:"961150665@qq.com",commits:1}]}}},2498:(n,a,s)=>{s.r(a),s.d(a,{default:()=>t});const e=(0,s(6252).uE)('<blockquote><p>算法对前端的重要性可以说至关重要，不可小觑。</p></blockquote><h1 id="算法思想" tabindex="-1"><a class="header-anchor" href="#算法思想" aria-hidden="true">#</a> 算法思想</h1><ul><li>基础技巧: 分治、二分、贪心</li><li>排序算法: 快速排序、归并排序、计数排序</li><li>搜索算法: 回溯、递归、深度优先遍历，广度优先遍历，二叉搜索树等</li><li>图论: 最短路径、最小生成树</li><li>动态规划: 背包问题、最长子序列</li></ul><h2 id="双指针" tabindex="-1"><a class="header-anchor" href="#双指针" aria-hidden="true">#</a> - 双指针</h2><blockquote><ol start="88"><li>合并两个有序数组</li></ol></blockquote><p>给你两个有序整数数组 nums1 和 nums2，请你将 nums2 合并到 nums1 中，使 nums1 成为一个有序数组。</p><p>说明: 初始化 nums1 和 nums2 的元素数量分别为 m 和 n 。 你可以假设 nums1 有足够的空间（空间大小大于或等于 m + n）来保存 nums2 中的元素。</p><p>示例:</p><ul><li>输入: <ul><li>nums1 = [1,2,3,0,0,0], m = 3</li><li>nums2 = [2,5,6], n = 3</li></ul></li><li>输出: <ul><li>[1,2,2,3,5,6]</li></ul></li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token doc-comment comment">/**\n * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums1</span>\n * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">m</span>\n * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums2</span>\n * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">n</span>\n * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token keyword">void</span><span class="token punctuation">}</span></span> Do not return anything, modify nums1 in-place instead.\n */</span>\n<span class="token keyword">var</span> <span class="token function-variable function">merge</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">nums1<span class="token punctuation">,</span> m<span class="token punctuation">,</span> nums2<span class="token punctuation">,</span> n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">var</span> i <span class="token operator">=</span> m <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">,</span> j <span class="token operator">=</span> n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">,</span> len <span class="token operator">=</span> m <span class="token operator">+</span> n <span class="token operator">-</span><span class="token number">1</span>\n    <span class="token keyword">while</span> <span class="token punctuation">(</span>i <span class="token operator">&gt;=</span> <span class="token number">0</span> <span class="token operator">||</span> j <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            nums1<span class="token punctuation">[</span>len<span class="token operator">--</span><span class="token punctuation">]</span> <span class="token operator">=</span> nums2<span class="token punctuation">[</span>j<span class="token operator">--</span><span class="token punctuation">]</span>            \n        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>j <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            nums1<span class="token punctuation">[</span>len<span class="token operator">--</span><span class="token punctuation">]</span> <span class="token operator">=</span> nums1<span class="token punctuation">[</span>i<span class="token operator">--</span><span class="token punctuation">]</span>\n        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>nums1<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&gt;</span> nums2<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            nums1<span class="token punctuation">[</span>len<span class="token operator">--</span><span class="token punctuation">]</span> <span class="token operator">=</span> nums1<span class="token punctuation">[</span>i<span class="token operator">--</span><span class="token punctuation">]</span>\n        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n            nums1<span class="token punctuation">[</span>len<span class="token operator">--</span><span class="token punctuation">]</span> <span class="token operator">=</span> nums2<span class="token punctuation">[</span>j<span class="token operator">--</span><span class="token punctuation">]</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><h2 id="排序" tabindex="-1"><a class="header-anchor" href="#排序" aria-hidden="true">#</a> - 排序</h2><h2 id="贪心思想" tabindex="-1"><a class="header-anchor" href="#贪心思想" aria-hidden="true">#</a> - 贪心思想</h2><h2 id="二分查找" tabindex="-1"><a class="header-anchor" href="#二分查找" aria-hidden="true">#</a> - 二分查找</h2><h2 id="分治" tabindex="-1"><a class="header-anchor" href="#分治" aria-hidden="true">#</a> - 分治</h2><h2 id="搜索" tabindex="-1"><a class="header-anchor" href="#搜索" aria-hidden="true">#</a> - 搜索</h2><h2 id="动态规划" tabindex="-1"><a class="header-anchor" href="#动态规划" aria-hidden="true">#</a> - 动态规划</h2><h2 id="数学" tabindex="-1"><a class="header-anchor" href="#数学" aria-hidden="true">#</a> - 数学</h2><h1 id="数据结构相关" tabindex="-1"><a class="header-anchor" href="#数据结构相关" aria-hidden="true">#</a> 数据结构相关</h1><ul><li>数组与链表:单/双向链表</li><li>栈与队列</li><li>哈希表</li><li>堆:最大堆/最小堆</li><li>树与图:最近公共祖先、并查集</li><li>字符串:前缀树(字典树) /后缀树</li></ul><h2 id="链表" tabindex="-1"><a class="header-anchor" href="#链表" aria-hidden="true">#</a> - 链表</h2><h2 id="树" tabindex="-1"><a class="header-anchor" href="#树" aria-hidden="true">#</a> - 树</h2><h2 id="栈和队列" tabindex="-1"><a class="header-anchor" href="#栈和队列" aria-hidden="true">#</a> - 栈和队列</h2><h2 id="哈希表" tabindex="-1"><a class="header-anchor" href="#哈希表" aria-hidden="true">#</a> - 哈希表</h2><h2 id="字符串" tabindex="-1"><a class="header-anchor" href="#字符串" aria-hidden="true">#</a> - 字符串</h2><h2 id="数组与矩阵" tabindex="-1"><a class="header-anchor" href="#数组与矩阵" aria-hidden="true">#</a> - 数组与矩阵</h2><h2 id="图" tabindex="-1"><a class="header-anchor" href="#图" aria-hidden="true">#</a> - 图</h2><h2 id="位运算" tabindex="-1"><a class="header-anchor" href="#位运算" aria-hidden="true">#</a> - 位运算</h2><h1 id="祝君无bug" tabindex="-1"><a class="header-anchor" href="#祝君无bug" aria-hidden="true">#</a> 祝君无Bug~</h1>',28),t={render:function(n,a){return e}}}}]);