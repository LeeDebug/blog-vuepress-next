"use strict";(self.webpackChunkblog_vuepress_next=self.webpackChunkblog_vuepress_next||[]).push([[1561],{9823:(e,n,a)=>{a.r(n),a.d(n,{data:()=>s});const s={key:"v-02f57866",path:"/views/front-end/js-md5.html",title:"js-md5",lang:"en-US",frontmatter:{title:"js-md5",categories:["npm"],tags:["npm"],keywords:"npm",description:"前端插件",cover:"https://cdn.jsdelivr.net/gh/LeeDebug/PicGo/img/20201111170415.png",date:"2020-06-10T22:49:18.000Z"},excerpt:"",headers:[{level:2,title:"安装",slug:"安装",children:[]},{level:2,title:"引入",slug:"引入",children:[]},{level:2,title:"使用",slug:"使用",children:[]}],git:{createdTime:163785445e4,updatedTime:163785445e4,contributors:[{name:"licc",email:"961150665@qq.com",commits:1}]}}},5653:(e,n,a)=>{a.r(n),a.d(n,{default:()=>h});var s=a(6252);const r=(0,s._)("blockquote",null,[(0,s._)("p",null,"前端在用户登录时尝使用md5对用户的登录信息进行加密操作")],-1),d=(0,s._)("h1",{id:"md5简介",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#md5简介","aria-hidden":"true"},"#"),(0,s.Uk)(" MD5简介")],-1),l=(0,s._)("p",null,"MD5信息摘要算法（英语：MD5 Message-Digest Algorithm），一种被广泛使用的密码散列函数，可以产生出一个128位（16字节）的散列值（hash value），用于确保信息传输完整一致。",-1),i=(0,s._)("h1",{id:"js-md5简介",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#js-md5简介","aria-hidden":"true"},"#"),(0,s.Uk)(" js-md5简介")],-1),t=(0,s.Uk)("A simple MD5 hash function for JavaScript supports UTF-8 encoding. 详情请查看npm的"),c={href:"https://www.npmjs.com/package/js-md5",target:"_blank",rel:"noopener noreferrer"},p=(0,s.Uk)("js-md5"),u=(0,s.Uk)("部分"),b=(0,s.uE)('<h1 id="使用教程" tabindex="-1"><a class="header-anchor" href="#使用教程" aria-hidden="true">#</a> 使用教程</h1><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ npm i js-md5\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="引入" tabindex="-1"><a class="header-anchor" href="#引入" aria-hidden="true">#</a> 引入</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ import md5 from &#39;js-md5&#39;\n\n// 如果在main.js中引入，需要注册\n$ Vue.prototype.$md5 = md5\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>md5(&#39;&#39;); // d41d8cd98f00b204e9800998ecf8427e\nmd5(&#39;The quick brown fox jumps over the lazy dog&#39;); // 9e107d9d372bb6826bd81d3542a419d6\nmd5(&#39;The quick brown fox jumps over the lazy dog.&#39;); // e4d909c290d0fb1ca068ffaddf22cbd0\n \n// It also supports UTF-8 encoding\nmd5(&#39;中文&#39;); // a7bac2239fcdcb3a067903d8077c4a07\n \n// It also supports byte `Array`, `Uint8Array`, `ArrayBuffer`\nmd5([]); // d41d8cd98f00b204e9800998ecf8427e\nmd5(new Uint8Array([])); // d41d8cd98f00b204e9800998ecf8427e\n \n// Different output\nmd5(&#39;&#39;); // d41d8cd98f00b204e9800998ecf8427e\nmd5.hex(&#39;&#39;); // d41d8cd98f00b204e9800998ecf8427e\nmd5.array(&#39;&#39;); // [212, 29, 140, 217, 143, 0, 178, 4, 233, 128, 9, 152, 236, 248, 66, 126]\nmd5.digest(&#39;&#39;); // [212, 29, 140, 217, 143, 0, 178, 4, 233, 128, 9, 152, 236, 248, 66, 126]\nmd5.arrayBuffer(&#39;&#39;); // ArrayBuffer\nmd5.buffer(&#39;&#39;); // ArrayBuffer, deprecated, This maybe confuse with Buffer in node.js. Please use arrayBuffer instead.\nmd5.base64(&#39;&#39;); // 1B2M2Y8AsgTpgAmY7PhCfg==\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h1 id="祝君无bug" tabindex="-1"><a class="header-anchor" href="#祝君无bug" aria-hidden="true">#</a> 祝君无Bug~</h1>',8),m={},h=(0,a(3744).Z)(m,[["render",function(e,n){const a=(0,s.up)("OutboundLink");return(0,s.wg)(),(0,s.iD)(s.HY,null,[r,d,l,i,(0,s._)("p",null,[t,(0,s._)("a",c,[p,(0,s.Wm)(a)]),u]),b],64)}]])}}]);