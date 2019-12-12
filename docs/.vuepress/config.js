module.exports = {
  title: 'tm wang 的笔记',
  description: 'Just playing around',
  base: '/tm-blog/',
  themeConfig: {
    nav: [{
        text: '首页',
        link: '/'
      },
      {
        text: '前端笔记',
        items: [{
          text: 'css',
          link: '/css/'
        }, {
          text: 'javascript',
          link: '/javascript/'
        }, {
          text: 'vue',
          link: '/vue/'
        }]
      },
      {
        text: '关于我',
        link: '/about/'
      },
    ],
    sidebar: [
      '/',
      ['/css/', 'css'],
      ['/javascript/', 'javascript'] // 第二个参数是别名
    ],
    sidebarDepth: 2,
    displayAllHeaders: true, // 显示所有页面的标题链接
    lastUpdated: 'Last Updated'
  },
  markdown: {
    lineNumbers: true
  },
  // plugins: ['autobar']
}