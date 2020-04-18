# ts学习
## 开发环境搭建
- 使用npm初始化项目
- 全局安装部分依赖
- 使用tsc初始化配置
- 配置webpack
- 添加开发和打包命令
### npm初始化项目
github创建个仓库，拉取。进入项目，`npm init -y`，使用默认配置快速初始化项目。
```js
{
  "name": "typescript-learn", // 项目名称
  "version": "1.0.0",
  "description": "source code of ts-learning", // 项目描述
  "main": "src/index.ts", // 项目入口文件
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/wangtongmeng/typescript-learn.git"
  },
  "keywords": ["typescript"], // 关键词
  "author": "wangtongmeng<tongmengwang@163.com>", // 作者
  "license": "MIT", // 协议
  "bugs": {
    "url": "https://github.com/wangtongmeng/typescript-learn/issues"
  },
  "homepage": "https://github.com/wangtongmeng/typescript-learn#readme"
}
```
### 创建项目目录
```shell
|-- src
  |-- utils # 与业务相关的可复用方法
  |-- tools # 与业务无关的纯工具函数
  |-- assets # 静态资源，如图片、字体文件等
    |-- font
    |-- img
  |-- api # 可复用的接口请求方法
  |-- config # 配置文件，抽离项目配置
|-- typings # 为ts书写的声明文件
|-- build # 项目打包上线的配置以及本地开发配置，主要是webpack配置
```
### 全局安装部分依赖
全局安装部分依赖，`npm install typescript tslint -g`

tslint 是对ts进行代码检查的依赖。

typescript依赖安装完后，可以使用tsc命令。
### 使用tsc初始化配置
初始化ts配置，`tsc --init`，在根目录生成了tsconfig.json文件，其中是可以写注释的，因为ts1.8版本对齐进行了支持。
### 配置webpack
创建webpack配置文件，build/webpack.config.js

安装开发依赖，`npm install webpack webpack-cli webpack-dev-server -D` 

安装插件，`npm install clean-webpack-plugin html-webpack-plugin -D`

安装 ts-loader，`npm install ts-loader -D`

安装项目依赖typescript， `npm install typescript`
```js
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  // 编译入口文件
  entry: "./src/index.ts",
  // 编译后的输出文件信息
  output: {
    filename: "main.js"
  },
  resolve: {
    //自动解析文件，如 import xxx from './index.js' 如果配置了extension，可以不写扩展名 import xxx from './index
    extensions: ['.ts', '.tsx', '.js'] // .tsx文件中会写一些包含jsx的代码
  },
  // 使用指定loader处理指定后缀文件
  module: {
    rules: [{
      test: /\.tsx?$/, // 后缀为.ts / .tsx
      use: 'ts-loader', // npm install ts-loader -D
      exclude: '/node_modules/'
    }],
  },
  // source-map 方便代码调试
  devtool: process.env.NODE_ENV === 'production' ? false : 'inline-source-map',
  // 本地开发服务器的配置
  devServer: {
    // 本地开发服务运行时，基于的文件目录
    contentBase: './dist',
    // 启动本地服务后，在控制台打印哪些信息
    stats: 'errors-only',
    // 不启动压缩
    compress: false,
    host: 'localhost',
    port: 8089
  },
  plugins: [
    // clean-webpack-plugin，清理指定的文件夹/文件
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ['/.dist']
    }),
    // html-webpack-plugin，指定一个编译的html模板文件，此后的编译会基于此模板进行编译。webpack会自动在模板文件中引入js文件，不需要手动引入
    new HtmlWebpackPlugin({
      template: './src/template/index.html'
    })
  ]
}
```

### 添加开发和打包命令
安装 cross-env, `npm install cross-env -D`

添加本地开发命令start，通过`npm run start`或`npm start`运行。启动并应用webpack配置。

添加打包命令build，通过`npm run build`运行。
```json
// ./package.json
{
  "scripts": {
    // 使用webpack-dev-server启动开发服务，并使用webpack.config.js作为webpack的配置文件，使用cross-env配置开发环境的环境变量NODE_ENV为development
    "start": "webpack-dev-server --config ./build/webpack.config.js",
    "build": "cross-env NODE_ENV=production webpack --config ./build/webpack.config.js"
  }
}
```



