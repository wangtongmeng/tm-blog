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

A: npm install yarn -gx [xing]

B: yarn add / yarn remove

安装完成node后，基本上自带npm模块管理器

当我们需要第三方模块、插件、类库或者框架等，需要提前下载安装才能使用

- 搜索，找到下载地址，然后基于浏览器下载即可（资源混乱，不好搜索）
- 基于npm等第三方包管理器下载（yarn/bower...都是第三方模块管理器）

1.npm下载的资源都是在https://www.npmjs.com/中下载的

`npm install xxx`：把资源或者第三方模块下载到当前目录下

`npm install xxx -g (--global)`：把资源或者第三方模块安装到全局环境下（目的：以后可以基于命令操作一些事情）

`npm unistall xxx / npm uninstall xxx -g`：从本地或者全局卸载

> 基于npm安装的一些细节点：
>
> - 需要联网（基于npm是从国外服务器上下载资源，所以下载速度较慢）
> - 下载成功后，当前目录中增加一个node_modules文件夹，在这个文件夹中找到我们安装的模块
> - 一般来说，下载下来的内容包含源码和最后供开发者使用的压缩版本

2.解决下载慢的问题

**`基于nrm切换到国内下载源（一般是淘宝镜像）`**

全局安装nrm：`npm install nrm -g`

>安装完成后，我们可以使用nrm命令
>
>- nrm ls 查看当前可用源
>- nrm use xxx 使用某个源

**`基于yarn来安装管理`**

首先全局安装yarn，然后基于yarn安装我们需要的模块

> npm install yarn -g
>
> 基于yarn安装(只能安装在本地，不能安装到全局)
>
> yarn add xxx
>
> yarn remove xxx

`基于cnpm淘宝镜像来处理`

## node基础概念

1.node并不是一门语言，它是一个工具或环境

- 基于V8环境（webkit）渲染和解析JS的
- 单线程
- 无阻塞I/O操作的
- 事件驱动
- ...

之所以把node称之为服务端语言，是因为node给予JS操作服务的能力：我们在服务器端安装node，只用js完成服务器端需要处理的一些事情，最后把写好的js代码交给node 环境运行即可。

2.在node环境中把JS代码执行

- REPL命令（Read-Evaluate-Print-Loop：输入-求值-输出-循环）
  - node.js command prompt 或 cmd等终端输入node
- 基于 node xxx.js 命令执行
- 基于WB这类编辑工具直接执行

基于node命令执行，找到当前文件所在的文件夹，再此目录下打开DOS窗口，在窗口中执行 node xxx.js，这样就相当于在node环境下把JS文件中的代码执行了

> 如何在当前文件目录中打开DOS窗口
>
> - 基于DOS命令中的“cd”一层层进入
> - 在当前目录地址栏中输入cmd，快速在当前目录打开
> - shift+鼠标右键，在此处打开命令窗口