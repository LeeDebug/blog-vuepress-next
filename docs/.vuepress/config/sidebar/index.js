
// 侧边栏
// 更多侧边栏配置：
// https://vuepress.vuejs.org/zh/theme/default-theme-config.html
// 侧边栏案例：
// 1. https://lovelijunyi.gitee.io/blog/views/
// 2. https://blog.smallsunnyfox.com/note/html5/html5de-yu-yi-yuan-su.html
// 3. https://zpj80231.github.io/znote/views/
module.exports = {
    '/views/': [
        '',
        {
            title: '前端 Front-end',
            collapsable: true,
            children: [
                'front-end/interview-2020',
                'front-end/interview-2021',
                'front-end/GitHub-Corners',
                'front-end/JavaScript-operator-precedence',
                'front-end/LeetCode-common-topic',
                'front-end/Mac-configure-multiple-SSH-Key',
                'front-end/Ubuntu-16-04-deployment-command',
                'front-end/VSCode-BetterComments',
                'front-end/v3-carousel',
                'front-end/Vue-interpretation-of-source-code',
                'front-end/angular',
                'front-end/copy-webpack-plugin',
                'front-end/gitcalendar',
                'front-end/No-contribution-record-after-git-push',
                'front-end/Simple-git-push-script',
                'front-end/hello-world',
                'front-end/js-md5',
                'front-end/jsdelivr',
                'front-end/linear-gradient',
                'front-end/navigator.userAgent',
                'front-end/Packaging-project-lead-to-memory-overflow',
                'front-end/qiankun-2-0-24',
                'front-end/qiankun-CSS-sandbox-isolation-solution',
                'front-end/react',
                'front-end/viewerjs',
                'front-end/vue',
                'front-end/Vue3-life-cycle-of-the-hook',
                'front-end/hexo-blog',
                'front-end/To-prevent-XSS-attacks',
                'front-end/modify-element-ui-global-conf',
                'front-end/You-dont-know-JavaScript--coil',
                'front-end/front-end-inside',
                'front-end/look-at-the-lines-of-code',
                'front-end/realize-the-input-box',
                'front-end/programmer-develop-docs',
                'front-end/Websocket-principle',
                'front-end/android-wx-input',
                'front-end/vue-bus-ts',
                'front-end/qducc-project-specification',
                'front-end/keep-the-scroll-bar',
                // 'front-end/angular',
            ]
        },
        {
            title: '后端 Back-end',
            collapsable: true,
            children: [
                'back-end/django',
            ]
        },
    ],
    // '/note/': [
    //     {
    //         title: 'HTML5',
    //         collapsable: true,
    //         children: ['html5/HTML5的语义元素', 'html5/HTML5多媒体标签', 'html5/HTML5表单元素', 'html5/HTML5中的API', 'html5/Canvas']
    //     },
    //     {
    //         title: 'CSS',
    //         collapsable: true,
    //         children: ['css/css3新特性', 'css/css3Flip']
    //     },
    //     {
    //         title: 'JS',
    //         collapsable: true,
    //         children: ['js/js数据类型', 'js/js对象', 'js/js继承', 'js/js原型链、闭包', 'js/js函数的四种调用方式']
    //     },
    //     {
    //         title: 'Vue.js',
    //         collapsable: true,
    //         children: ['Vue/Vue基础笔记', 'Vue/Vue组件']
    //     },
    //     {
    //         title: '前端单元测试',
    //         collapsable: true,
    //         children: ['fe-unit-test/chai', 'fe-unit-test/mocha', 'fe-unit-test/vueTestUtils']
    //     },
    //     {
    //         title: '微信小程序',
    //         collapsable: true,
    //         children: ['wechat-mini-program/初识微信小程序']
    //     }
    // ],
}