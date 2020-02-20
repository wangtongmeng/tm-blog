# react 学习
React是FaceBook 工作研发的一款JS框架（MVC）
## React的脚手架
React是一款框架：具备自己的开发的独立思想（MVC： Model View Controller）
- 划分组件

- 基于路由的SPA单页面开发

- 基于ES6来编写代码（最后部署上线时，我们需要把ES6编译成ES5=>基于Babel来完成编译）

- 可能用到Less/Sass等，我们也需要使用对应的插件把他们进行预编译

- 最后为了优化性能（减少HTTP请求次数），我们需要把JS或CSS进行合并压缩

- ...

- webpack来完成以上页面组件合并、JS/CSS编译加合并等工作

**前端工程化开发：**

- 基于框架的组件化/模块化开发

- 基于webpack的自动部署
但是配置webpack是一个相对复杂的工作，我们需要自己安装很多包，还需要自己写相对复杂的配置文件..如果我们有一个插件，基于它可以快速构建一套完整的自动化工程项目结构，那么有助于提高开发的效率=>"脚手架"
	​	vue: vue-cli
	​	react: create-react-app
## create-react-app的使用
> $ npm install create-react-app -g

把模块安装在全局环境下，mac电脑安装时，前面需要加sudo，否则没有权限

> $ npm root -g

查看npm根目录，C:\Users\admin\AppData\Roaming\npm，可以查看执行全局安装的依赖的cmd文件，如create-react-app.cmd

> $ create-react-app [项目名称]

基于脚手架命令，创建出一个基于React的自动化/工程化项目目录，和npm发包时的命名规范一样，项目名称中不能出现：大写字母、中文汉字、特殊符号（-或者_是可以的）等

【脚手架生成目录的一些内容】

​	node_modules 当前项目中依赖的包都安装在这里
​	.bin 本地项目中可执行命令，在package.json的scripts中配置对应的脚本即可（其中有一个就是：react-scripts命令）

​	public 存放的是当前项目的html页面（单页面应用放一个index.html即可，多页面根据自己需求放置需要的页面）

```html
在react框架中，所有的逻辑都是在js中完成的（包括页面接口的创建），如果想给当前的页面导入一些css样式或img图片等内容，我们有两种方式：
1.在js中基于ES6 modules模块规范，使用import导入，这样webpack在编译合并js时，会把导入的资源文件等插入到页面的结构中（绝对不能在js管控的结构中通过相对目录./或者../，导入资源，因为在webpack编译时，地址就不在是之前的地址了）
2.如果不想在js中导入（js中导入的资源最后都会基于webpack编译），我们也可以把资源手动的在html中导入，但是html最后也要基于webpack编译，导入的地址也不建议写相对地址，而是使用 "%PUBLIC_URL% 写成绝对地址
<link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
```

​	src 项目结构中最主要的目录，因为后期所有的JS、路由、组件等都是放在这里面（包括需要编写的css或图片等）
​		index.js 是当前项目的入口文件

​		.gitignore git提交时，忽略提交文件的配置项

​		package.json 当前项目的配置清单
​				"dependencies": {
​					"react": "^16.12.0",
​					"react-dom": "^16.12.0",
​					"react-scripts": "3.4.0"
​				},
​				基于脚手架生成工程目录，自动帮我们安装了三个模块：react/react-dom/react-scripts
​				react-scripts集成了webpack需要的内容
​					->Babel一套
​					->CSS处理的一套
​					->eslint一套
​					->webpack一套
​					->其它
​				没有less/sass的处理内容（项目中使用less，我们需要自己额外的安装）

```js
"scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
```

可执行的脚本“$ npm run start / $ yarn start”
	start：开发环境下，基于webpack编译处理，最后可以预览当前开发的项目成果(在webpack中安装了webpack-dev-server插件基于这个插件会自动创建一个web服务[端口号默认是3000]，webpack会帮我们自动打开浏览器，冰球展示我们的页面，并且能够监听我们代码的变化，如果代码改变了，webpack会自动重新编译，并且刷新浏览器来完成重新编译)
	build：项目需要部署到服务器上，我们先执行yarn build，把项目整体编译打包（完成后会在项目中生成一个build文件夹，这个文件夹包含了所有编译后的内容，我们把它上传到服务器即可）；而且在服务商进行部署时，不需要安装任何模块了（因为webpack已经把需要的内容都打包到一个JS中了）

## React脚手架的深入剖析

create-react-app脚手架为了让结构目录清晰，把安装的webpack及配置文件都集成在了react-scripts模块中，放到了node_modules中

都是在真实项目中，我们需要再脚手架默认安装的基础上，额外安装一些我们需要的模块，例如：react-router-dom/axios...再比如：less/less-loader...

情况一：如果我们安装其他的组件，但是安装成功后不需要修改webpack的配置项，此时我们直接安装，并且调取使用即可

```js
// src/index.js
import qs from 'qs';

console.log(qs.parse('name=zhangsan&age=20')) // {name: "zhangsan", age: "20"}
```

情况二：我们安装的插件是基于webpack处理的，也就是需要把安装的模块配置到webpack中（重新修改webpack配置项了）
	=>首先需要把隐藏到node_modules中的配置项暴露到项目中，`yarn eject`，首先会提示确认是否执行eject操作，操作不可逆转，一旦暴露出来配置项，就无法再隐藏回去了（如果当前的项目基于git管理，在执行eject时，如果还有没有提交到历史区的内容，需要先提交到历史区，然后再eject才可以，否则报错）。
	=>再去修改对应的配置项即可
		一旦暴露后，项目目录中多了两个文件夹：
			config 存放的是webpack的配置文件
				react16.4.1版本
​				webpack.config.dev.js 开发环境下的配置项（yarn start）
​				webpack.config.prod.js 生产环境下的配置项（yarn build）
​				react16.12.0文件发生了变化，config只有webpack.config.js

​			scripts 存放的是可执行脚本的JS文件
​				start.js yarn start执行的就是这个js
​				build.js yarn build执行的就是这个js

​	package.json中的内容也改了
​		【举例：需要配置less】
​				$ yarn add less less-loader
​				less是开发和生产环境下都需要配置的

```js
react16.4.1版本，修改dev和prod两个js文件
{
  test: /\.(css|less)$/,
  use: [
    require.resolve('style-loader'),
    ...
    {
      loader: require.resolve('less-loader')
    }
  ]
}
```

react16.12.0版本

```js
// config/webpack.config.js
const lessRegex = /\.less/;
const lessModuleRegex = /\.module\.less/;

// 配置less
{
  test: lessRegex,
    exclude: lessModuleRegex,
      use: getStyleLoaders(
        {
          importLoaders: 2,
          sourceMap: isEnvProduction
          ? shouldUseSourceMap
          : isEnvDevelopment,
        },
        'less-loader'
      ),   
        sideEffects: true,
},
  {
    test: lessModuleRegex,
      use: getStyleLoaders(
        {
          importLoaders: 2,
          sourceMap: isEnvProduction
          ? shouldUseSourceMap
          : isEnvDevelopment,
          modules: true,
          getLocalIdent: getCSSModuleLocalIdent,
        },
        'less-loader'
      ),
  },
```



我们预览项目时，也是先基于webpack编译，把编译后的内容放到浏览器中运行，所有如果项目中使用了less，我们需要修改webpack配置项，把配置项中加入less的编译工作，这样后期预览项目，首先基于webpack把less编译成css，然后在呈现在页面中。

> $ set HTTPS=true&&npm start 开启https协议模式（设置环境变量https的值）

> $ set PORT=63341&&yarn start 修改端口号

改回去

> $ set HTTPS=false&&set PORT=3000&&yarn start

## JSX语法-大括号

react & react-dom
【渐进式框架】
		一种最流行的框架设计思想，一般框架中都包含很多内容，这样到这框架的体积过于臃肿，拖慢加载的速度。真实项目中，我们使用一个框架，不一定用到所有的功能，此时我们应该把框架的功能进行拆分，用户想用什么，让其自己自由组合即可。

​		全家桶：渐进式框架N多部分的组合

​		vue全家桶：vue-cli/vue/vue-router/vuex/axios(fetch)/vue element/vant/iview
​		react全家桶：create-react-app/react/react-dom/react-router/redux/react-redux/axios/ant/dva/saga/mobx

1.react：react框架的核心部分，提供了Component类供我们进行组件开发，提供了钩子函数（声明周期函数：所有的声明周期函数都是基于回调函数完成的）

2.react-dom：把JSX语法（react独有的语法）渲染为真实dom（能够放到页面中展示的结构都叫做真实的dom）的组件

**ReactDOM.render**

ReactDOM.render([jsx],[container],[callback])：把jsx元素渲染到页面中
	jsx：react虚拟元素
	container：容器，我们把元素放到页面中的哪个容器中
	callback：当把内容放到页面中呈现触发的回调函数

```js
// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(<div id="box">hello world {data}</div>, root, () => {
  let oBox =document.querySelector('#box')
  console.log(oBox.innerHTML)
})
```

**jsx语法**

jsx：react独有的语法 javascript+xml 都是把html结构代码和js代码或数据混合在一起，但是它不是字符串。

 1.不建议我们把jsx直接渲染到body中，而是放在自己创建一个容器中，一般我们都放在一个id为root的div中即可
 2.在jsx中出现的{}是存放js的，但是要求js代码指执行完成有返回结果（js表达式）
	->不能直接放一个对象数据类型的值（对象(除了给style赋值)、数组(数组中如果没有对象都是基本值或者是jsx元素，这样是可以的)、函数都不行）
	->可以是基本类型的值（布尔类型什么都不显示、null、undefined也是jsx元素，代表的是空）
	->循环判断的语句都不支持，但支持三元运算符
3.循环数组创建jsx元素(一般都基于数组的map方法完成迭代)，需要给创建的元素设置唯一的key值（当前本次循环内唯一即可）

```js
// src/index.js
import React from 'react';
import ReactDOM from 'react-dom'; 

let root = document.getElementById('root')
let data = [
  { name: 'zhangsan', age: 22 },
  { name: 'lisi', age: 24 }
]

ReactDOM.render(<div id="box">
  {/* {
    data ? 'ok' : 'no'
  } */}
  <ul>
    {
      data.map((item, index) => {
        let {name, age} = item
        return <li key={index}>
          <span>{name}</span>
          <span>{age}</span>
        </li>
      })
    }
  </ul>
</div>, root)
```

4.只能出现一个根元素
5.给元素设置样式类用的是className而不是class
6.style中不能直接写样式字符串，需要基于一个样式对象来遍历赋值

```js
// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';

let root = document.getElementById('root')

ReactDOM.render(<div id='box' className='box' style={{color: 'red'}}>
  <h1>标题</h1>
  <p>内容</p>
</div>, root)
```

## jsx语法的渲染机制

**jsx语法的渲染流程**

把jsx（虚拟dom）编程真实的dom

