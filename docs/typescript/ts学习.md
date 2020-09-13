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
初始化ts配置，`tsc --init`，在根目录生成了tsconfig.json文件，其中是可以写注释的，因为ts1.8版本对其进行了支持。
### 配置webpack

创建入口文件，./src/index.ts

创建模板文件，./src/template/index.html

安装webpack开发依赖，`npm install webpack webpack-cli webpack-dev-server -D` 

安装loader，`npm install ts-loader -D`

安装plugins插件，`npm install clean-webpack-plugin html-webpack-plugin -D`

安装项目依赖， `npm install typescript`

创建webpack配置文件，build/webpack.config.js
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
## 基础类型
11中基础类型+类型断言
- 布尔值
- 数值
- 字符串
- 数组
- 元组
- 枚举值
- any
- void
- null 和 undefined 
- never
- object
- 类型断言

安装vscode插件，tslint，ts代码提示

ts在线编译 https://www.typescriptlang.org/play

### 布尔类型
直接声明赋值
```js
let bool:boolean = false
```
也可以先声明再赋值
```js

let bool: boolean // 先声明
bool = true // 再赋值

```
不能赋值其他类型的值
```js
bool = 123 // Type '123' is not assignable to type 'boolean'.
```
### 数值类型
ts和js一样，所有数值都是浮点数，所以只有一个number类型。ts 数值支持二、八、十、十六进制数字字面量。
```js
let num: number = 123
// num = 'abc' // Type '"abc"' is not assignable to type 'number'.
num = 0b1111011 // 二进制
num = 0o173 // 八进制
num = 0x7b // 十六进制
```
### 字符串类型
```js
let str: string
str = 'abc' // 'abc' 也是一种类型，字符串字面量类型，后面会讲到
str = `数值是${num}` // 支持模板字面量写法
console.log(str) // '数值是123'
```
### 数组类型
两种写法
```js
// 写法1
let arr: number[] // 声明一个变量arr，类型是元素都是number的数组
arr = [5, 3, 9]
// 写法2
let arr2: Array<number>

let arr3: (string | number)[] // 变量arr3的元素既可以是string也可以是number组成的数组
let arr4: Array<string | number>
arr3 = [1, 'a']
arr4 = [1, 'a']
```
### 元组类型
```js
let tuple: [string, number, boolean] // 与数组的区别，固定长度、类型位置固定
tuple = ['a', 1, false]
// tuple = ['a', 1, false, 12] // 超出长度的元素叫做越界元素。2.6版本之前，只要越界元素类型在规定类型范围之内就符合。2.6版本后，不允许超出
```
### 枚举类型
```js
enum Roles { // 名字对应序列号，序列号默认从0开始
  SUPER_ADMIN,
  ADMIN,
  USER
}
console.log(Roles.SUPER_ADMIN) // 0
console.log(Roles.ADMIN) // 1
console.log(Roles.USER) // 2
// 也可以指定值
enum Roles2 {
  SUPER_ADMIN = 1,
  ADMIN = 3,
  USER = 8
}
// 也可以指定部分值，其他依次递增
enum Roles3 {
  SUPER_ADMIN = 1, // 1
  ADMIN, // 2
  USER // 3
}
enum Roles4 {
  SUPER_ADMIN, // 0
  ADMIN = 5, // 5
  USER // 6
}
// 通过名字取到索引值，也可以通过索引值取到名字
console.log(Roles4[5], Roles4[0]) // ADMIN SUPER_ADMIN
```
### any类型
任意类型
```js
let value: any
value = 'abc'
value = 123
value = false
const arr5: any[] = [1, 'a'] // 数组元素类型任意
```
### void类型
void类型与any类型相反，表示任意类型都不是
```js
const consoleText = (text: string): void => { // 参数text这里需要类型，后面可以通过配置成不指定类型也不会报错。指定函数返回值是void
  console.log(text)
}
console.log('abc') // 'abc'
let v: void
v = undefined // undefined和null可以赋值给void类型
v = null // 需要再tsconfig.json中关掉"strict": true
```
### null和undefined
在js中null和undefined是基础类型。在ts中他们既是值也是类型。

null和undefined是其他类型的子类型，可以把它们直接赋值给其他任意类型。
```js
let u: undefined
u = undefined
// u = 123 // Type '123' is not assignable to type 'undefined'.
let n: null
n = null
// n = 'abc' // Type '"abc"' is not assignable to type 'null'.
num = undefined // 如果开启"strictNullChecks": true，则undefined只能赋值给undefined类型了
num = null // 同理
```
### never类型
表示那些永远不存在的值得类型。

never类型是任意类型的子类型，而没有任何类型是never的子类型，所以never类型的值可以赋值给其他任意类型
```js
// 示例1，抛出错误，不可能有返回值
const errorFunc = (message: string): never => {
  throw new Error(message)
}
errorFunc('abc')
// 示例2，死循环，不可能有返回值
const infiniteFunc = (): never => {
  while (true) {}
}
let neverVariable = (() => {
  while (true) {}
})()
neverVariable = 123 // Type '123' is not assignable to type 'never'.
num = neverVariable
```
### object类型
```js
let obj = {
  name: 'zhangsan'
}
function getObject(obj: object): void {
  console.log(obj)
}
getObject(obj) // {name: "zhangsan"}
```
### 类型断言
类似于类型转换
```js
const getLength = (target: string | number): number => { // 高级类型的自定义类型保护，只需要做一次类型包含即可
  if ((<string>target).length || (target as string).length === 0) { // 写法1，尖括号形式。写法2：as形式。如果使用jsx，只能使用as形式
    return (<string>target).length
  } else {
    return target.toString().length
  }
}
getLength(123)
getLength('123')
```