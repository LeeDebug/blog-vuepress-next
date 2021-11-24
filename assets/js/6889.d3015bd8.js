"use strict";(self.webpackChunkblog_vuepress_next=self.webpackChunkblog_vuepress_next||[]).push([[6889],{1761:(e,t,a)=>{t.d=void 0;const l=a(6765),n=a(2119),i=a(1652),r=(e,t)=>e.hash===t.link||!!t.children&&t.children.some((t=>r(e,t))),s=(e,t)=>l.h("li",{...t},l.h(i.default,{class:"page-header-item",item:e})),o=e=>{var a;return(null===(a=e.children)||void 0===a?void 0:a.length)?e.children.map((e=>l.h(t.d,{item:e}))):[null]};t.d=({item:e})=>{const t=n.useRoute(),a=r(t,e);return e.children&&e.children.length>0?[s(e,{class:{[`page-header-menu-depth_${e.level||2}`]:!0,active:a}}),...o(e)]:[s(e,{class:{[`page-header-menu-depth_${e.level||2}`]:!0,active:a}})]},t.d.displayName="HeaderChild",t.d.props={item:{type:Object,required:!0}}},7040:(e,t,a)=>{t.s=void 0;const l=a(6765),n=a(2119),i=a(1652),r=e=>decodeURI(e).replace(/#.*$/,"").replace(/(index)?\.(md|html)$/,""),s=(e,t)=>!!((e,t)=>void 0!==t&&(e.hash===t||r(e.path)===r(t)))(e,t.link)||!!t.children&&t.children.some((t=>s(e,t))),o=(e,t)=>e.link?l.h(i.default,{...t,item:e}):l.h("h5",t,e.text),u=e=>{var a;return(null===(a=e.children)||void 0===a?void 0:a.length)?l.h("ul",e.children.map((e=>l.h("li",l.h(t.s,{item:e}))))):null};t.s=({item:e})=>{const t=n.useRoute(),a=s(t,e);return e.children?[l.h("section",{class:"series-group series-item"},[o(e,{class:{"series-heading":!0,active:a}}),u(e)])]:[o(e,{class:{"series-item":!0,active:a}})]},t.s.displayName="SeriesItem",t.s.props={item:{type:Object,required:!0}}},5826:function(e,t,a){var l=this&&this.__createBinding||(Object.create?function(e,t,a,l){void 0===l&&(l=a),Object.defineProperty(e,l,{enumerable:!0,get:function(){return t[a]}})}:function(e,t,a,l){void 0===l&&(l=a),e[l]=t[a]}),n=this&&this.__exportStar||function(e,t){for(var a in e)"default"===a||Object.prototype.hasOwnProperty.call(t,a)||l(t,e,a)};Object.defineProperty(t,"__esModule",{value:!0}),n(a(5591),t),n(a(709),t)},5591:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.resolveEditLink=t.editLinkPatterns=void 0;const l=a(8240),n=a(709);t.editLinkPatterns={GitHub:":repo/edit/:branch/:path",GitLab:":repo/-/edit/:branch/:path",Gitee:":repo/edit/:branch/:path",Bitbucket:":repo/src/:branch/:path?mode=edit&spa=0&at=:branch&fileviewer=file-view-default"},t.resolveEditLink=({docsRepo:e,docsBranch:a,docsDir:i,path:r,editLinkPattern:s})=>{const o=n.resolveRepoType(e);let u;if(s?u=s:null!==o&&(u=t.editLinkPatterns[o]),!u)return null;const d=r.replace(/\.html$/,".md");return u.replace(/:repo/,l.isLinkHttp(e)?e:`https://github.com/${e}`).replace(/:branch/,a).replace(/:path/,l.removeLeadingSlash(`${l.removeEndingSlash(i)}/${d}`))}},709:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.resolveRepoType=void 0;const l=a(8240);t.resolveRepoType=e=>!l.isLinkHttp(e)||/github\.com/.test(e)?"GitHub":/bitbucket\.org/.test(e)?"Bitbucket":/gitlab\.com/.test(e)?"GitLab":/gitee\.com/.test(e)?"Gitee":null},1462:(e,t,a)=>{a.d(t,{Z:()=>U});var l=a(6252),n=a(3577),i=a(2119),r=a(7621);const s={ref:"navbar",class:"navbar-container"},o={ref:"siteBrand",class:"site-brand"},u=["src","alt"];var d=a(2262),c=a(6333);const p={key:0,class:"navbar-links"};var v=a(8240),g=a(7241),h=a(5826),m=a(9963);const k=["aria-label"],b={class:"title"},w=(0,l._)("span",{class:"arrow down"},null,-1),f=["aria-label"],L={class:"title"},y={class:"nav-dropdown"},S={class:"dropdown-subtitle"},D={key:1},_={class:"dropdown-subitem-wrapper"};var F=a(1652);const H=(0,l.aZ)({setup(e){const t=e=>{e.style.height=e.scrollHeight+"px"},a=e=>{e.style.height=""};return(e,n)=>((0,l.wg)(),(0,l.j4)(m.Transition,{name:"dropdown",onEnter:t,onAfterEnter:a,onBeforeLeave:t},{default:(0,l.w5)((()=>[(0,l.WI)(e.$slots,"default")])),_:3}))}}),T=(0,l.aZ)({name:"DropdownLink",components:{Link:F.default,DropdownTransition:H},props:{item:{type:Object,required:!0}},setup(e){const{item:t}=(0,d.BK)(e),a=(0,d.Fl)((()=>t.value.ariaLabel||t.value.text)),n=(0,d.iH)(!1),r=(0,i.useRoute)();return(0,l.YP)((()=>r.path),(()=>{n.value=!1})),{open:n,dropdownAriaLabel:a,handleDropdown:e=>{const t=0===e.detail;n.value=!!t&&!n.value},isLastItemOfArray:(e,t)=>t[t.length-1]===e}}});var j=a(3744);const B=(0,j.Z)(T,[["render",function(e,t,a,i,r,s){const o=(0,l.up)("Link"),u=(0,l.up)("DropdownTransition");return(0,l.wg)(),(0,l.iD)("div",{class:(0,n.normalizeClass)(["dropdown-wrapper",{open:e.open}])},[(0,l._)("button",{class:"dropdown-title",type:"button","aria-label":e.dropdownAriaLabel,onClick:t[0]||(t[0]=(...t)=>e.handleDropdown&&e.handleDropdown(...t))},[(0,l._)("span",b,(0,n.toDisplayString)(e.item.text),1),w],8,k),(0,l._)("button",{class:"mobile-dropdown-title",type:"button","aria-label":e.dropdownAriaLabel,onClick:t[1]||(t[1]=t=>e.open=!e.open)},[(0,l._)("span",L,(0,n.toDisplayString)(e.item.text),1),(0,l._)("span",{class:(0,n.normalizeClass)(["arrow",e.open?"down":"right"])},null,2)],8,f),(0,l.Wm)(u,null,{default:(0,l.w5)((()=>[(0,l.wy)((0,l._)("ul",y,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e.item.children,((t,a)=>((0,l.wg)(),(0,l.iD)("li",{key:t.link||a,class:"dropdown-item"},[t.children?((0,l.wg)(),(0,l.iD)(l.HY,{key:0},[(0,l._)("h5",S,[t.link?((0,l.wg)(),(0,l.j4)(o,{key:0,item:t,onFocusout:a=>e.isLastItemOfArray(t,e.item.children)&&0===t.children.length&&(e.open=!1)},null,8,["item","onFocusout"])):((0,l.wg)(),(0,l.iD)("span",D,(0,n.toDisplayString)(t.text),1))]),(0,l._)("ul",_,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(t.children,(a=>((0,l.wg)(),(0,l.iD)("li",{key:a.link,class:"dropdown-subitem"},[(0,l.Wm)(o,{item:a,onFocusout:l=>e.isLastItemOfArray(a,t.children)&&e.isLastItemOfArray(t,e.item.children)&&(e.open=!1)},null,8,["item","onFocusout"])])))),128))])],64)):((0,l.wg)(),(0,l.j4)(o,{key:1,item:t,onFocusout:a=>e.isLastItemOfArray(t,e.item.children)&&(e.open=!1)},null,8,["item","onFocusout"]))])))),128))],512),[[m.vShow,e.open]])])),_:1})],2)}]]),x=e=>(0,v.isString)(e)?(0,g.useNavLink)(e):e.children?{...e,children:e.children.map(x)}:e,I=(0,l.aZ)({name:"NavbarLinks",components:{Link:F.default,DropdownLink:B},setup(){const e=(()=>{const e=(0,c.useThemeLocaleData)();return(0,d.Fl)((()=>(e.value.navbar||[]).map(x)))})(),t=(()=>{const e=(0,i.useRouter)(),t=(0,r.useRouteLocale)(),a=(0,r.useSiteLocaleData)(),l=(0,c.useThemeLocaleData)();return(0,d.Fl)((()=>{var n,i;const r=Object.keys(a.value.locales);if(r.length<2)return[];const s=e.currentRoute.value.path,o=e.currentRoute.value.fullPath;return[{text:null!=(n=l.value.selectLanguageText)?n:"unkown language",ariaLabel:null!=(i=l.value.selectLanguageAriaLabel)?i:"unkown language",children:r.map((n=>{var i,r,u,d,c,p;const v=null!=(r=null==(i=a.value.locales)?void 0:i[n])?r:{},g=null!=(d=null==(u=l.value.locales)?void 0:u[n])?d:{},h=`${v.lang}`,m=null!=(c=g.selectLanguageName)?c:h;let k;if(h===a.value.lang)k=o;else{const a=s.replace(t.value,n);k=e.getRoutes().some((e=>e.path===a))?a:null!=(p=g.home)?p:n}return{text:m,link:k}}))}]}))})(),a=(()=>{const e=(0,c.useThemeLocaleData)(),t=(0,d.Fl)((()=>e.value.repo)),a=(0,d.Fl)((()=>t.value?(0,h.resolveRepoType)(t.value):null)),l=(0,d.Fl)((()=>"GitHub"===a.value?`https://github.com/${t.value}`:t.value)),n=(0,d.Fl)((()=>l.value?e.value.repoLabel?e.value.repoLabel:null===a.value?"Source":a.value:null));return(0,d.Fl)((()=>l.value&&n.value?[{text:n.value,link:l.value}]:[]))})();return{navbarLinks:(0,d.Fl)((()=>[...e.value,...t.value,...a.value]))}}}),O=(0,j.Z)(I,[["render",function(e,t,a,n,i,r){const s=(0,l.up)("DropdownLink"),o=(0,l.up)("Link");return e.navbarLinks.length?((0,l.wg)(),(0,l.iD)("nav",p,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e.navbarLinks,(e=>((0,l.wg)(),(0,l.iD)("div",{key:e.link,class:"navbar-links-item"},[e.children?((0,l.wg)(),(0,l.j4)(s,{key:0,item:e},null,8,["item"])):((0,l.wg)(),(0,l.j4)(o,{key:1,item:e},null,8,["item"]))])))),128))])):(0,l.kq)("",!0)}]]),R=["title"],W=[(0,l._)("div",{class:"icon","aria-hidden":"true"},[(0,l._)("span"),(0,l._)("span"),(0,l._)("span")],-1)],Z=(0,l.aZ)({emits:["toggle"],setup(e,{emit:t}){const a=()=>{t("toggle")},n=(0,c.useThemeLocaleData)();return(e,t)=>((0,l.wg)(),(0,l.iD)("div",{class:"toggle-sidebar-button",title:(0,d.SU)(n).toggleSidebar,"aria-expanded":"false",role:"button",tabindex:"0",onClick:a},W,8,R))}}),$=(0,l.aZ)({components:{NavbarLinks:O,ToggleSidebarButton:Z},emits:["toggle-sidebar"],setup(e,t){const a=(0,r.useSiteLocaleData)(),n=(0,r.useRouteLocale)(),i=(0,c.useThemeLocaleData)(),s=(0,d.Fl)((()=>i.value.home||n.value)),o=(0,d.Fl)((()=>i.value.logo)),u=(0,d.Fl)((()=>a.value.title)),p=(0,d.iH)(null),v=(0,d.iH)(null),g=(0,d.iH)(0),h=(0,d.Fl)((()=>g.value?{maxWidth:g.value+"px"}:{}));return(0,l.bv)((()=>{const e=()=>{var e;window.innerWidth<=719?g.value=0:g.value=p.value.offsetWidth-((null==(e=v.value)?void 0:e.offsetWidth)||0)-50};e(),window.addEventListener("resize",e,!1),window.addEventListener("orientationchange",e,!1)})),{siteBrandLink:s,siteBrandLogo:o,siteBrandTitle:u,linksWrapperStyle:h,withBase:r.withBase,navbar:p,siteBrand:v,toggleSidebar:()=>{t.emit("toggle-sidebar")}}}}),C=(0,j.Z)($,[["render",function(e,t,a,i,r,d){const c=(0,l.up)("ToggleSidebarButton"),p=(0,l.up)("RouterLink"),v=(0,l.up)("NavbarLinks"),g=(0,l.up)("NavbarSearch");return(0,l.wg)(),(0,l.iD)("header",s,[(0,l.Wm)(c,{onToggle:e.toggleSidebar},null,8,["onToggle"]),(0,l._)("span",o,[(0,l.Wm)(p,{to:e.siteBrandLink},{default:(0,l.w5)((()=>[e.siteBrandLogo?((0,l.wg)(),(0,l.iD)("img",{key:0,class:"logo",src:e.withBase(e.siteBrandLogo),alt:e.siteBrandTitle},null,8,u)):(0,l.kq)("",!0),e.siteBrandTitle?((0,l.wg)(),(0,l.iD)("span",{key:1,class:(0,n.normalizeClass)(["site-name",{"can-hide":e.siteBrandLogo}])},(0,n.toDisplayString)(e.siteBrandTitle),3)):(0,l.kq)("",!0)])),_:1},8,["to"])],512),(0,l._)("div",{class:"navbar-links-wrapper",style:(0,n.normalizeStyle)(e.linksWrapperStyle)},[(0,l.Wm)(v),(0,l.Wm)(g)],4)],512)}]]),P={class:"series-container"};var A=a(7040);const q=(0,l.aZ)({components:{SeriesItem:A.s,NavbarLinks:O},setup:()=>({sidebarItems:(0,g.useSidebarItems)()})}),N=(0,j.Z)(q,[["render",function(e,t,a,n,i,r){const s=(0,l.up)("NavbarLinks"),o=(0,l.up)("SeriesItem");return(0,l.wg)(),(0,l.iD)("aside",P,[(0,l.Wm)(s),((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e.sidebarItems,(e=>((0,l.wg)(),(0,l.j4)(o,{key:e.link||e.text,item:e},null,8,["item"])))),128))])}]]),G={class:"page-header-container"},K=(0,l._)("h5",{class:"tip"},"ON THIS PAGE",-1);var V=a(1761);const E=(0,l.aZ)({components:{HeaderChild:V.d},setup:()=>({pageHeaders:(0,g.usePageHeaders)()})}),Y=(0,j.Z)(E,[["render",function(e,t,a,n,i,r){const s=(0,l.up)("HeaderChild");return(0,l.wg)(),(0,l.iD)("div",G,[K,(0,l._)("ul",null,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e.pageHeaders,(e=>((0,l.wg)(),(0,l.j4)(s,{key:e.link||e.text,item:e},null,8,["item"])))),128))])])}]]),z=(0,l.aZ)({name:"Common",components:{Navbar:C,Series:N,PageHeaders:Y},setup(){const e=(0,r.usePageFrontmatter)(),{isOpenSidebar:t,isShowSidebar:a,isShowHeaders:n,toggleSidebar:s}=(0,g.useSidebarData)();let o;return(0,l.bv)((()=>{const e=(0,i.useRouter)();o=e.afterEach((()=>{s(!1)}))})),(0,l.Ah)((()=>{o()})),{frontmatter:e,isOpenSidebar:t,isShowSidebar:a,isShowHeaders:n,toggleSidebar:s}}}),U=(0,j.Z)(z,[["render",function(e,t,a,i,r,s){const o=(0,l.up)("Navbar"),u=(0,l.up)("Series"),d=(0,l.up)("PageHeaders");return(0,l.wg)(),(0,l.iD)("div",{class:(0,n.normalizeClass)({"common-wrapper":!0,"sidebar-open":e.isOpenSidebar,"no-sidebar":!e.isShowSidebar,"show-page-headers":e.isShowHeaders})},[(0,l.Wm)(o,{onToggleSidebar:e.toggleSidebar},null,8,["onToggleSidebar"]),(0,l._)("div",{class:"sidebar-mask",onClick:t[0]||(t[0]=t=>e.toggleSidebar(!1))}),(0,l.Wm)(u),(0,l.WI)(e.$slots,"default"),e.isShowHeaders?((0,l.wg)(),(0,l.j4)(d,{key:0})):(0,l.kq)("",!0)],2)}]])},1652:(e,t,a)=>{a.r(t),a.d(t,{default:()=>c});var l=a(6252),n=a(3577);const i=["href","rel","target","aria-label"];var r=a(2262),s=a(2119),o=a(7621),u=a(8240);const d=(0,l.aZ)({name:"Link",inheritAttrs:!1,props:{item:{type:Object,required:!0}},setup(e){const t=(0,s.useRoute)(),a=(0,o.useSiteData)(),{item:l}=(0,r.BK)(e),n=(0,r.Fl)((()=>(0,u.isLinkHttp)(l.value.link))),i=(0,r.Fl)((()=>(0,u.isLinkMailto)(l.value.link)||(0,u.isLinkTel)(l.value.link))),d=(0,r.Fl)((()=>{if(!i.value)return l.value.target?l.value.target:n.value?"_blank":void 0})),c=(0,r.Fl)((()=>"_blank"===d.value)),p=(0,r.Fl)((()=>!n.value&&!i.value&&!c.value)),v=(0,r.Fl)((()=>{if(!i.value)return l.value.rel?l.value.rel:c.value?"noopener noreferrer":void 0})),g=(0,r.Fl)((()=>l.value.ariaLabel||l.value.text)),h=(0,r.Fl)((()=>{const e=Object.keys(a.value.locales);return e.length?!e.some((e=>e===l.value.link)):"/"!==l.value.link}));return{isActiveInSubpath:(0,r.Fl)((()=>!(!p.value||!h.value)&&t.path.startsWith(l.value.link))),isBlankTarget:c,isRouterLink:p,linkRel:v,linkTarget:d,linkAriaLabel:g}}}),c=(0,a(3744).Z)(d,[["render",function(e,t,a,r,s,o){const u=(0,l.up)("RouterLink"),d=(0,l.up)("OutboundLink");return e.isRouterLink?((0,l.wg)(),(0,l.j4)(u,(0,l.dG)({key:0,class:["nav-link",{"router-link-active":e.isActiveInSubpath}],to:e.item.link,"aria-label":e.linkAriaLabel},e.$attrs),{default:(0,l.w5)((()=>[(0,l.WI)(e.$slots,"before"),(0,l.Uk)(" "+(0,n.toDisplayString)(e.item.text)+" ",1),(0,l.WI)(e.$slots,"after")])),_:3},16,["class","to","aria-label"])):((0,l.wg)(),(0,l.iD)("a",(0,l.dG)({key:1,class:"nav-link",href:e.item.link,rel:e.linkRel,target:e.linkTarget,"aria-label":e.linkAriaLabel},e.$attrs),[(0,l.WI)(e.$slots,"before"),(0,l.Uk)(" "+(0,n.toDisplayString)(e.item.text)+" ",1),e.isBlankTarget?((0,l.wg)(),(0,l.j4)(d,{key:0})):(0,l.kq)("",!0),(0,l.WI)(e.$slots,"after")],16,i))}]])},8856:(e,t,a)=>{a.d(t,{Z:()=>c});var l=a(6252),n=a(3577);const i={key:0,class:"page-info"};var r=a(2262),s=a(6333),o=a(221),u=a(5261);const d=(0,l.aZ)({name:"PageInfo",components:{Icon:u.default},props:{pageData:{type:Object,default:()=>({})},currentCategory:{type:String,default:""},currentTag:{type:String,default:""},hideValineViews:{type:Boolean,default:!1}},setup(e){const{pageData:t,hideValineViews:a}=(0,r.BK)(e),{solution:l,options:n}=(0,o.useComment)(),i=(0,s.useThemeLocaleData)(),u=(0,r.Fl)((()=>{var e,a;return(null==(a=null==(e=null==t?void 0:t.value)?void 0:e.frontmatter)?void 0:a.author)||i.value.author||""})),d=(0,r.Fl)((()=>{var e,a;const l=null==(a=null==(e=null==t?void 0:t.value)?void 0:e.frontmatter)?void 0:a.date;return l?new Date(l).toLocaleString():""})),c=(0,r.Fl)((()=>{var e,a;return(null==(a=null==(e=null==t?void 0:t.value)?void 0:e.frontmatter)?void 0:a.categories)||[]})),p=(0,r.Fl)((()=>{var e,a;return(null==(a=null==(e=null==t?void 0:t.value)?void 0:e.frontmatter)?void 0:a.tags)||[]})),v=(0,r.Fl)((()=>!!(u.value||d.value||c.value&&c.value.length>0||p.value&&p.value.length>0))),g=(0,r.Fl)((()=>"valine"===l.value&&0!=n.value.visitor&&!a.value));return{author:u,date:d,categories:c,tags:p,showPageInfo:v,solution:l,showValineViews:g}}}),c=(0,a(3744).Z)(d,[["render",function(e,t,a,r,s,o){const u=(0,l.up)("Icon"),d=(0,l.up)("ValineViews"),c=(0,l.up)("RouterLink");return e.showPageInfo?((0,l.wg)(),(0,l.iD)("div",i,[e.author?((0,l.wg)(),(0,l.j4)(u,{key:0,icon:"solid user",text:e.author},null,8,["text"])):(0,l.kq)("",!0),e.date?((0,l.wg)(),(0,l.j4)(u,{key:1,icon:"solid calendar-alt",text:e.date},null,8,["text"])):(0,l.kq)("",!0),e.showValineViews?((0,l.wg)(),(0,l.j4)(u,{key:2,icon:"solid mask"},{default:(0,l.w5)((()=>[(0,l.Wm)(d,{numStyle:{}})])),_:1})):(0,l.kq)("",!0),e.categories&&e.categories.length>0?((0,l.wg)(),(0,l.j4)(u,{key:3,icon:"solid th-list"},{default:(0,l.w5)((()=>[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e.categories,((t,a)=>((0,l.wg)(),(0,l.j4)(c,{key:a,class:(0,n.normalizeClass)(["category",{active:e.currentCategory===t}]),to:`/categories/${t}/1/`},{default:(0,l.w5)((()=>[(0,l.Uk)((0,n.toDisplayString)(t),1)])),_:2},1032,["class","to"])))),128))])),_:1})):(0,l.kq)("",!0),e.tags&&e.tags.length>0?((0,l.wg)(),(0,l.j4)(u,{key:4,icon:"solid tags"},{default:(0,l.w5)((()=>[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e.tags,((t,a)=>((0,l.wg)(),(0,l.j4)(c,{key:a,class:(0,n.normalizeClass)(["tag",{active:e.currentTag===t}]),to:`/tags/${t}/1/`},{default:(0,l.w5)((()=>[(0,l.Uk)((0,n.toDisplayString)(t),1)])),_:2},1032,["class","to"])))),128))])),_:1})):(0,l.kq)("",!0)])):(0,l.kq)("",!0)}]])}}]);