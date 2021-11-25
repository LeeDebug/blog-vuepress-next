import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'

const personalDev = require('./config/env/personal.config').getConfig()
const isDev = process.env.NODE_ENV === 'development'
const sidebar = require('./config/sidebar')

export default defineUserConfig<DefaultThemeOptions>({
  // html title + loading + ↖️ logo
  title: '淳淳同学的个人博客',
  description: '日拱一卒无有尽，功不唐捐终入海',

  // 启动域名
  host: personalDev.host,
  // 启动端口
  port: personalDev.port,
  // 部署站点的基础路径，需要是 /<REPO>/ 的仓库名才行
  // 详见：https://vuepress.vuejs.org/zh/guide/deploy.html#github-pages
  base: isDev ? '/' : '/blog-vuepress-next/',
  // 编译产物的路径
  // dest: 'docs/.vuepress/dist',
  // 热更新相关路径？临时文件
  // temp: 'docs/.vuepress/.temp',
  // 是否需要缓存
  // TODO By Licc: 为何写在 npm script 里有效，写在这里却无效？
  // cache: 'docs/.vuepress/.cache',

  head: [
    // 网页标签栏图标
    ['link', { rel: 'icon', href: '/imgs/favicon.ico' }],
    // 移动栏优化
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }],
    // 引入jquery
    ['script', {
      'language': 'javascript',
      'type': 'text/javascript',
      'src': 'https://cdn.bootcdn.net/ajax/libs/jquery/3.5.1/jquery.min.js'
    }],
    // 引入鼠标点击脚本（爱国富强）
    ['script', {
      'language': 'javascript',
      'type': 'text/javascript',
      'src': '/js/MouseClickEffect.js'
    }],
    // ['link', { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/katex.min.css' }],
    // ['script', { src: 'scripts/demo.js' }],
  ],

  // 多语言
  // locales: {
  //   // 作为特例，默认语言可以使用 '/' 作为其路径。
  //   '/': {
  //     // 将会被设置为 <html> 的 lang 属性
  //     lang: 'en-US',
  //     // title: '淳淳同学的个人博客',
  //     // description: 'Vue-powered Static Site Generator',
  //   },
  //   // 键名是该语言所属的子路径
  //   // '/zh/': {
  //   //   lang: 'zh-CN',
  //   //   // html title + ↖️ logo
  //   //   title: '淳淳同学的个人博客',
  //   //   description: '日拱一卒无有尽，功不唐捐终入海',
  //   // },
  // },

  // 修改当前主题
  theme: 'reco',
  themeConfig: {
    style: '@vuepress-reco/style-default',
    // 作者
    author: 'Licc',
    logo: '/logo.png',
    // docsRepo: 'https://github.com/vuepress-reco/vuepress-theme-reco-next',
    // docsBranch: 'main',
    // docsDir: 'example',
    // 最后更新时间
    lastUpdatedText: 'Last Updated',
    navbar:
    [
      { text: 'Home', link: '/' },
      { text: 'Categories', link: '/categories/reco/1/' },
      { text: 'Tags', link: '/tags/tag1/1/' },
      { text: 'TimeLines', link: '/timeline/' },
      // { text: '文章列表', link: '/views/' },
      { text: 'Docs',
        children: [
          { text: 'vuepress-reco', link: '/docs/theme-reco/theme' },
          { text: 'Docs丨Vuepress 2.x', link: 'https://v2.vuepress.vuejs.org/zh/' },
          { text: 'Github丨theme-reco-next', link: 'https://github.com/vuepress-reco/vuepress-theme-reco-next' },
        ]
      },
      {
        text: 'About Me',
        children: [
          { text: 'GitHub丨LeeDebug', link: 'https://github.com/LeeDebug' },
          { text: 'JueJin丨LeeDebug', link: 'https://juejin.cn/user/2189882894323975/posts' },
          { text: 'Blog丨Vuepress 1.x', link: 'https://blog.leedebug.cn/blog-vuepress/' },
          { text: 'Blog丨Vuepress 2.x', link: 'https://blog.leedebug.cn/blog-vuepress-next/' },
          { text: 'Blog丨Hexo & Butterfly', link: 'https://blog.leedebug.cn' },
        ]
      }
    ],
    // series 为原 sidebar
    series: {
      '/docs/theme-reco/': [
        {
          text: 'module one',
          children: ['home', 'theme']
        },
        {
          text: 'module two',
          children: ['api', 'plugin']
        }
      ]
    },
    // valineConfig 配置与 1.x 一致
    // valineConfig: {
    //   appId: 'jvc9s4BkJYQNOcpsbVTPMePe-gzGzoHsz',
    //   appKey: 'Js91M9DfM9vPwVaUj7xdkbxh',
    //   placeholder: '填写邮箱可以收到回复提醒哦！',
    //   verify: true, // 验证码服务
    //   // notify: true,
    //   recordIP: true,
    //   // hideComments: true // 隐藏评论
    // },
  },
  // debug: true,
})
