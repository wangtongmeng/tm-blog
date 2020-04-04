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
        }, {
          text: 'webpack',
          link: '/webpack/'
        }]
      },
      // {
      //   text: '开发工具',
      //   items: [{
      //     text: 'Git',
      //     link: 
      //   }]
      // },
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
      '/webpack/': [
        '',
        'webpack4学习'
      ]
    },
    lastUpdated: '更新时间'
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@img': '/img'
      }
    }
  },
  plugins: [
    [
      '@vuepress/last-updated',
      {
        transformer: (timestamp, lang) => {
          const moment = require('moment')
          moment.locale('zh-cn')
          return moment(timestamp).fromNow()
        }
      }
    ]
  ]
}