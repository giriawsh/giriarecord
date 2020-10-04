module.exports = {
    title: '网站标题',
    description: '网站描述',
    // 注入到当前页面的 HTML <head> 中的标签
    head: [
        ['link', {rel: 'icon', href: '/favicon.ico'}], // 增加一个自定义的 favicon(网页标签的图标)
    ],
    base: '/giriarecord/', // 这是部署到github相关的配置 下面会讲
    markdown: {
        lineNumbers: true // 代码块显示行号
    },
    themeConfig: {
        // sidebarDepth: 2, // e'b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
        lastUpdated: 'Last Updated',// 文档更新时间：每个文件git最后提交的时间
        searchMaxSuggestions: 10,
        nav: [
            {text: '主页', link: '/'},
            {
                text: '源码学习',
                items: [
                    {text: "Element UI", link: '/source/element/'}
                ],
            },
            {
                text: '书籍学习',
                items: [
                    {text: "JavaScript权威指南", link: '/books/theDefinitiveGuideToJavaScript/'}
                ],
            },
            {
                text: '前端相关',
                items: [
                    {text: "Node.js", link: '/fe/nodejs/'},
                    {text: "Vue.js", link: '/fe/vuejs/'},
                    {text: "Nuxt框架", link: '/fe/nuxtjs/'},
                ],
            },
            // {text: '', link: '/bar/'},
            // {text: 'External', link: 'https://google.com', target: '_self', rel: ''},
            {text: '博客文章', link: 'https://www.giriawsh.com'},
        ],
        sidebar: [
            {
                title: '源码学习',
                path: '/source/element/',
                collapsable: false,
                children: [
                    '/source/element/element-yuan-ma-xue-xi-alert-zu-jian',
                    '/source/element/element-yuan-ma-xue-xi-layout-zu-jian',
                ]
            },
            // {
            //     title: 'BAR',
            //     path: '/bar/',
            //     collapsable: false,
            //     children: [
            //         '/bar/three',
            //         '/bar/four',
            //     ]
            // }
        ]
    },

};