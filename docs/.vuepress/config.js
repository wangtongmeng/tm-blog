module.exports = {
  base: '/tm-blog/',
  themeConfig: {
    logo: '/assets/img/hero.png',
    nav: [{
        text: '首页',
        link: '/'
      },
      {
        text: '前端',
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
        link: '/about'
      },
    ],
    sidebar: {
      '/javascript/': [
        '',
        'js基础'
      ],
      '/css/': [
        '',
        '布局',
        '常用技巧'
      ],
      '/vue/': [
        '',
        'vue基础',
      ],
    },
    lastUpdated: '更新时间'
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@img': '/img'
      }
    }
  }
}