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
