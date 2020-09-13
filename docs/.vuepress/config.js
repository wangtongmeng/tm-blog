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
          text: 'typescript',
          link: '/typescript/'
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
    sidebar: [
      {
        title: '首页',
        path: '/',
        collapsable: true,
        sidebarDepth: 4
      },
      {
        title: 'css',
        path: '/css/',
        collapsable: true,
        sidebarDepth: 4,
        children: [
          'css/',
          'css/布局',
          'css/常用技巧'
        ]
      },
      {
        title: 'javascript',
        path: '/javascript/',
        collapsable: true,
        sidebarDepth: 4,
        children: [
          'javascript/',
          'javascript/js基础'
        ]
      },
      {
        title: 'typescript',
        path: '/typescript/',
        collapsable: true,
        sidebarDepth: 4,
        children: [
          'typescript/',
          'typescript/ts学习'
        ]
      },
      {
        title: 'vue',
        path: '/vue/',
        collapsable: true,
        sidebarDepth: 4,
        children: [
          'vue/',
          'vue/vue基础'
        ]
      },
      {
        title: 'webpack',
        path: '/webpack/',
        collapsable: true,
        sidebarDepth: 4,
        children: [
          'webpack/',
          'webpack/webpack4学习'
        ]
      },
    ],
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