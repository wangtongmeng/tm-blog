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
        link: '/me'
      },
    ],
    sidebar: 'auto',
    // sidebar: {
    //   '/foo/': [
    //     '',
    //     'one',
    //     'two'
    //   ],
    //   '/bar/': [
    //     '',
    //     'three',
    //     'four'
    //   ],
    //   '/': [
    //     '',
    //     'contact',
    //     'about'
    //   ]
    // }
    lastUpdated: 'Last Updated'
  },
  markdown: {
    lineNumbers: true
  }
}