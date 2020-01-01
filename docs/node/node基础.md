# node 基础

## node安装及基础介绍

### 安装node

https://nodejs.org/zh-cn/

建议使用LTS稳定版本，把安装包下载下来后，一路安装即可（最好把它安装到C盘[默认盘符]，记号安装目录）

> 如果安装不了，可以copy别人的安装目录，通过修改环境变量完成安装：
>
> 高级系统设置->环境变量->系统变量->Path，把原有的变量值备份一份，在原有的基础上增加node的安装目录，再粘贴回去即可。

**验证安装是否成功**

win+R => 打开运行窗口 => 输入cmd => 打开DOS窗口

在DOS窗口中，输入以下命令，能出现版本号，则安装成功；不能出现版本号，提示node不是内部或外部命令的，遵循第一步配置环境变量即可。

```shell
node --version
npm -v
```

### node特点

- 基于V8引擎渲染JS
  - REPL模式(Read-Evaluate-Print-Loop，输入-求值-输出-循环)
  - 在命令行中执行 or 在WB等编辑器中执行

- 单线程、无阻塞I/O操作、event-driven事件驱动

## npm模块管理

- 基于npm进行第三方模块管理

  https://www.npmjs.com/

  A: npm install xxx -g / npm install xxx (卸载是uninstall)

  B: npm root -g && npm view

- 基于yarn管理

A: npm install yarn -g

B: yarn add / yarn remove

## node基础概念



