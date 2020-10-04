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
            {text: 'Home', link: '/'},
            {text: 'Foo', link: '/foo/'},
            {text: 'Bar', link: '/bar/'},
            // {text: 'External', link: 'https://google.com', target: '_self', rel: ''},
            {text: 'External', link: 'https://www.giriawsh.com'},
            {
                text: 'Languages',
                ariaLabel: 'Language Menu',
                items: [
                    { text: 'Chinese', link: '/language/chinese/' },
                    { text: 'Japanese', link: '/language/japanese/' }
                ]
            },
        ],
        sidebar: [
            {
                title: 'FOO',
                path: '/foo/',
                collapsable: false,
                children: [
                    '/foo/one',
                ]
            },
            {
                title: 'BAR',
                path: '/bar/',
                collapsable: false,
                children: [
                    '/bar/three',
                    '/bar/four',
                ]
            }
        ]
    },

};