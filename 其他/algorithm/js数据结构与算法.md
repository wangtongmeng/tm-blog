## 环境搭建
ES6、Jest、NPM、Git

> 关于git的资料，https://github.com/cucygh/fe-material
- 源码 git clone 
- 拷贝配置文件
- .babelrc
  - .eslintrc.js
  - package.json
- 安装 npm install

使用源码

- 拷贝源码：git clone 源码地址 leetcode
- master分支：环境搭建原始内容 git checkout master
- dev分支：所有源码 git checkout dev

检测效果

```shell
npm test
```

设备

- Windows: node/atom/bash
- Mac:  node/atom/item2

atom插件与配置

- es6-javascript
- javascript-snippets
- platformio-ide-terminal
- linter-eslint

## 简单算法

- 字符串
- 数组
- 正则
- 排序
- 递归

### 字符串

- 反转字符串中的单词
- 技术二进制子串

#### 反转字符串中的单词

 https://leetcode-cn.com/problems/reverse-words-in-a-string-iii/ 

子输入：走到中间，忽略前面的，后面的就是子输入，多个类似的子输入=>遍历or递归

使用linux命令创建目录及文件，leetcode根目录

```shell
mkdir -p code/string
touch code/string/lession1.js
mkdir -p test/string
touch test/string/lession1.test.js
```

