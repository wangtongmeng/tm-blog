# react 学习

React是FaceBook 工作研发的一款JS框架（MVC）

## vscode使用react

插件

配置

- vscode编写react代码 jsx中html标签tab键自动补全
**在setting界面搜索 includeLanguages** ，点击Edit in setting.json，添加如下配置：
```js
"emmet.includeLanguages": {
	"javascript": "javascriptreact"
}
```
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

## jsx语法的渲染机制（渲染流程）

**jsx语法的渲染机制=>把jsx（虚拟dom）编程真实的dom**

 https://babeljs.io/repl 

jsx=>真实dom

```js
// src/index.js
import React from 'react';
import ReactDOM, {render} from 'react-dom'; // 从react-dom中导入一个ReactDOM，逗号后面的内容时把ReactDOM这个对象进行解构 <=> import {render} from 'react-dom';

let root = document.getElementById('root');
let styleObj = {color: 'red'};
// jsx语句可以通过  https://babeljs.io/repl 在线转义查看
render(<h1 id='titleBox' className='title' style={styleObj}>
  hello world
  </h1>, root)
```

1.基于babel中的语法解析模块（babel-preset-react）把jsx语法编译为 React.createElement(...) 结构

```js
React.createElement(
    "h1",
    { id: "titleBox", className: "title", style: styleObj}, 
 );
```

2.执行 React.createElement(type, props, children)，创建一个对象（虚拟DOM）

```js
{
 		type: 'h1',
    props: {
      id: 'titleBox',
        className: 'title',
          style: {color: "red"},
            children: "hello world" // 存放的是元素中的内容
    },
    ref: null,
    key:: null
    ...
    __proto__:Object.prototype
}
```

3.ReactDOM.render(jsx语法最后生成的对象，容器)，基于render方法把生成的对象动态创建为dom元素，插入到制定的容器中

## jsx语法的渲染机制（createElement）

基于babel中的语法解析模块（babel-preset-react）把jsx语法编译为 React.createElement(...) 结构，createElement返回一个对象。
createElement处理逻辑：
	1.创建一个对象（默认有四个属性：type/props/ref/key），最后要把这个对象返回
	2.根据传递的值修改这个对象
			type => 传递的type
			props => 需要做一些处理：大部分传递props中的属性都赋值给对象的props，有一些比较特殊
				->如果是ref或key，我们需要把传递的props中的这两个属性值，给创建对象的两个属性，而传递的props中把这两个值删除掉
				->把传递的children作为新创建对象的props中的一个属性

```js
// src/3-self-jsx.js
function createElement(type, props, children) {
  props = props || {}
  // 创建一个对象，设置一些默认属性值
  let obj = {
    type: null,
    props: {
      children: ''
    },
    ref: null,
    key: null
  }
  // 用传递的type和props覆盖原有的默认值
  // obj = {...obj, type, props}
  obj = {...obj, type, props: {...props, children}}
  // 把ref和key提取出来(并且删除props中的属性)
  'key' in obj.props ? (obj.key = obj.props.key, obj.props.key = undefined): null
  'ref' in obj.props ? (obj.ref = obj.props.ref, obj.props.ref = undefined): null

  return obj
}

let objJSX = createElement(
  "h1",
{ id: "titleBox", className: "title", style: {color: 'red'}, ref: 'AA', key: '12'},
"hello world"
)
// 测试 node 3-self-jsx.js console.log(objJSX)
/**
 * {
 *    type: 'h1',
 *    props: {
 *      id: "titleBox", 
 *      className: "title", 
 *      style: { color: 'red' },
 *      children: "hello world",
 *      ref: undefined,
 *      key: undefined
 *    },
 *    ref: 'AA',
 *    key: 12,
 *    __proto__: Object.prototype
 * }
 */
```

## jsx语法的渲染机制（render）

ReactDOM.render(jsx语法最后生成的对象，容器, 回调)，基于render方法把生成的对象动态创建为dom元素，插入到制定的容器中

```js
// src/3-self-jsx.js 
/**
  * render: 把创建的对象生成对应的dom元素，最后插入到页面中
  */
 function render(obj, container, callBack) {
  let {type, props} = obj || {},
      newElement = document.createElement(type)
  for (const attr in props) {
    if (props.hasOwnProperty(attr)) {
      if (!props.hasOwnProperty(attr)) break // 不是私有的直接结束遍历
      if (!props[attr]) continue // 如果当前属性没有值，直接不处理即可
      
      let value = props[attr]
      // className
      if (attr === 'className') {
        newElement.setAttribute('class', value) 
        continue
      }

      // style
      if (attr === 'style') {
        if (value === '') continue
        for (const styKey in value) {
          if (value.hasOwnProperty(styKey)) {
            newElement['style'][styKey] = value[styKey]
          }
        }
        continue
      }

      // children
      if (attr === 'children') {
        if (typeof value === 'string') {
          let text = document.createTextNode(value)
          newElement.appendChild(text)
        }
        continue
      }

      // 基于setAttribute 可以让设置的属性表现在html的结构上
      newElement.setAttribute(attr, value) 

    }
  }
 }
 
 render(objJSX, root, () => {
   console.log('ok')
 })
```

## jsx语法的渲染机制（复杂结构的jsx处理）

```js
// src/self-jsx-复杂
/**
 * createElement: 创建jsx对象
 *    参数：至少两个 type/props，children这个部分可能有多个
 */
function createElement(type, props, ...childrens) {
  props = props || {}
  // 创建一个对象，设置一些默认属性值
  let obj = {
    type: null,
    props: {
      children: ''
    },
    ref: null,
    key: null
  }
  // 用传递的type和props覆盖原有的默认值
  // obj = {...obj, type, props}
  obj = {
    ...obj,
    type,
    props: {
      ...props,
      children: childrens.length <= 1 ? (childrens[0] || '') : childrens
    }
  }
  // 把ref和key提取出来(并且删除props中的属性)
  'key' in obj.props ? (obj.key = obj.props.key, obj.props.key = undefined) : null
  'ref' in obj.props ? (obj.ref = obj.props.ref, obj.props.ref = undefined) : null

  return obj
}

function render(obj, container, callBack) {
  let {type,props} = obj || {},
    newElement = document.createElement(type)
  for (const attr in props) {
    if (!props.hasOwnProperty(attr)) break // 不是私有的直接结束遍历
    let value = props[attr]
    if (!props[attr]) continue // null or undefined，如果当前属性没有值，直接不处理即可

    switch (attr.toUpperCase()) {
      case 'CLASSNAME':
        newElement.setAttribute('class', value)
        break;
      case 'STYLE':
        if (value === '') break;
        for (const styKey in value) {
          if (value.hasOwnProperty(styKey)) {
            newElement['style'][styKey] = value[styKey]
          }
        }
        break;
      case 'CHILDREN':
        /**
         * 可能是一个值：可能是字符串也可能是一个jsx对象
         * 可能是一个数组：数组中的每一项可能是字符串也可能是jsx对象
         */
        // 首页把一个值变为数组，这样后期统一操作数组即可
        !(value instanceof Array) ? (value = [value]) : null;
        value.forEach((item, index) => {
          // 验证item是什么类型的：如果是字符串就是创建文本节点，如果是对象，我们需要再次执行render方法，把创建的元素放到最开始创建的大盒子中
          if (typeof item === 'string') {
            let text = document.createTextNode(item)
            newElement.appendChild(text)
          } else {
            render(item, newElement)
          }
        })
        break;
      default:
        // 基于setAttribute 可以让设置的属性表现在html的结构上
        newElement.setAttribute(attr, value)
        break;
    }
  }
}

export {
  createElement,
  render
}
```

```js
// 测试jsx
<h1 id='box' className='box' style={{color: 'red'}}>
  <h2 className='title'>系统提示</h2>
  <div className='content'>
  	温馨提示：语法错误
  </div>
  	此为测试
</h1>

import React from 'react';
import ReactDOM from 'react-dom'; // 从react-dom中导入一个ReactDOM，逗号后面的内容时把ReactDOM这个对象进行解构 <=> import {render} from 'react-dom';

import {createElement, render} from './3-self-jsx-复杂'

let root = document.getElementById('root');

let objJSX = createElement("h1", {
  id: "box",
  className: "box",
  style: {
    color: 'red'
  }
}, createElement("h2", {
  className: "title"
}, "\u7CFB\u7EDF\u63D0\u793A"), createElement("div", {
  className: "content"
}, "\u6E29\u99A8\u63D0\u793A\uFF1A\u8BED\u6CD5\u9519\u8BEF"), "\u6B64\u4E3A\u6D4B\u8BD5");

render(objJSX, root)
```

## react组件的基础语法

1.react组件

​	不管是vue还是react框架，设计之初都是期望我们按照“组件/模块管理”的方式来构建程序的，也就是把一个程序划分为一个个的组件来单独处理

**优势**：1.有助于多人协作开发 2.组件复用

**react中创建组件有两种方式**：1.函数声明式组件 2.基于继承Component类来创建组件

声明一个函数声明式组件Dialog，src/component/Dialog.js

```js
import React from 'react' // 每一个组件中都要导入react，因为需要基于它的createEle
/**
 * 函数式声明组件
 *  1.函数返回结果是一个新的jsx（也就是当前组件的jsx结构）
 *  2.props变量存储的值是一个对象，包含了调取组件时传递的属性值(不传递是一个空对象)
 */
export default function Dialog(props) {
  let {con, lx = 0} = props,
    title = lx === 0 ? '系统提示' : '系统警告'
  return <section>
    <h2>{title}</h2>
    <div>{con}</div>
  </section>
}
```

使用Dialog，src/index.js

```js
import React from 'react';
import ReactDOM from 'react-dom'; 
import Dialog from './component/Dialog'

const root = document.getElementById('root')

ReactDOM.render(<div>
  {/* 注释：jsx中调取组件，只需要把组件当做一个标签调取使用即可（单闭合和双闭合都可以） */}
  <Dialog con='哈哈' />
  <Dialog con='嘿嘿' lx={2}></Dialog>
  {/* 属性值不是字符串，我们需要使用大括号包起来 */}
</div>, root)
```

## 函数式组件的渲染机制

知识点：createElement在处理时，遇到一个组件，返回返回的对象中：type就不再是字符串标签名了，而是一个函数（类），但是属性还是存在props中

包裹函数式组件的jsx

```jsx
<div>
  <Dialog con='哈哈' />
  <Dialog con='嘿嘿' lx={2}></Dialog>
</div>
```

babel编译成createElement

```js
React.createElement("div", null, React.createElement(Dialog, {
  con: "\u54C8\u54C8"
}), React.createElement(Dialog, {
  con: "\u563F\u563F",
  lx: 2
}));
```

通过console.log(React.createElement(...))查看返回的对象

```js
{
  type: Dialog,
  props: {
    lx: 1,
    con: 'xxx',
    children: 一个值或一个数组
  }
}
```

> render渲染时，我们需要做处理，首先判断type的类型，如果是字符串，就创建一个元素标签，如果是函数或类，就把函数执行，把props中的每一项（包含children）传递给函数
>
> 在执行函数时，把函数中return的jsx转换为新的对象（通过createElement），把这个对象返回；紧接着render按照以往的渲染方式，创建dom元素，插入到制定的容器中即可

组件上的属性，最终都会通过props传递给组件，再在组件中使用才会生效。

```js
// src/index.js
import React from 'react';
import ReactDOM from 'react-dom'; 
import Dialog from './component/Dialog'

const root = document.getElementById('root')

ReactDOM.render(<div>
  {/* 注释：jsx中调取组件，只需要把组件当做一个标签调取使用即可（单闭合和双闭合都可以） */}
  <Dialog con='哈哈' style={{color: 'red'}} />
  <Dialog con='嘿嘿' lx={2}>
    <span>1</span>
    <span>2</span>
  </Dialog>
  {/* 属性值不是字符串，我们需要使用大括号包起来 */}
</div>, root)
```

```js
// src/component/Dialog.js
import React from 'react' // 每一个组件中都要导入react，因为需要基于它的createEle
/**
 * 函数式声明组件
 *  1.函数返回结果是一个新的jsx（也就是当前组件的jsx结构）
 *  2.props变量存储的值是一个对象，包含了调取组件时传递的属性值(不传递是一个空对象)
 */
export default function Dialog(props) {
  let {con, lx = 0, children, style} = props,
    title = lx === 0 ? '系统提示' : '系统警告'
    // console.log(React.Children)

    // children：可能有可能没有，可能只有一个值，也可能是一个数组，可能每一项是一个字符串，也可能是一个对象等（代表双闭合组件中的子元素）
  return <section style={style}>
    <h2>{title}</h2>
    <div>{con}</div>
    {/* 把属性中传递的子元素放到组件中的指定位置 */}
    {/* {children} */}
    {/* 也可以基于react提供的专门遍历children的方法来完成遍历操作 */}
    {
      React.Children.map(children, item => item)
    }
  </section>
} 
```

## 封装Dialog

使用bootstrap，`yarn add bootstrap@3`
使用面板样式， https://v3.bootcss.com/components/#panels 
在src/index.js中全局引入bootstrap，`import 'bootstrap/dist/css/bootstrap.css';`

封装Dialog，src/component/Dialog

```js
import React from 'react'
export default function Dialog(props) {
  let {type, content, children} = props
  // 处理样式
  let objStyle = {
    width: '50%',
    margin: '10px auto'
  }
  // 类型的处理
  let typeValue = type || '系统提示'
  if (typeof type === 'number') {
    switch (type) {
      case 0:
        typeValue = '系统提示'
        break
      case 1:
        typeValue = '系统警告'
        break
      case 2:
        typeValue = '系统错误'
        break
    }
  }

  return <section className='panel panel-default' style={objStyle}>
    <div className="panel-heading">
      <h3 className="panel-title">{typeValue}</h3>
    </div>
    <div className='panel-body'>{content}</div>
    {/* 如果传递了children，我们把内容放到尾部中，不传递什么都不显示 */}
    {
      children ? <div className="panel-footer">
        {React.Children.map(children, item=>item)}
      </div> : null
    }
  </section>
}
```

使用Dialog，src/index.js

```js
import React from 'react';
import ReactDOM from 'react-dom'; 
import './static/css/reset.min.css'
import 'bootstrap/dist/css/bootstrap.css';
import Dialog from './component/Dialog'
/*
 * 1.我们一般都把程序中的公用样式放到INDEX中导入，这样在其它组件中也可以使用了（WEBPACK会把所有的组件最后都编译到一起，INDEX是主入口）
 *
 * 2.导入bootstrap，需要导入的是不经过压缩处理的文件，否则无法编译（真实项目中bootstrap已经是过去事，我们后期项目中使用组件都是用ANT来做）
 */
const root = document.getElementById('root')

ReactDOM.render(<main>
  <Dialog content='早上好' />
  <Dialog type={2} content='快迟到了！' />
  <Dialog type='请登录' content={
     <div>
       <input type="text" className="form-control" placeholder="请输入用户名" />
        <br/>
      <input type="password" className="form-control" placeholder="请输入密码" />
     </div>
    }>
    <button className='btn btn-success'>登录</button>
    <button className='btn btn-danger'>取消</button>
  </Dialog>
</main>, root)
```

## 基于类创建react组件

基于继承Component类来创建组件

​		基于createElement把jsx转换为一个对象，当render渲染这个对象时，遇到type是一个函数或者类，不是直接创建元素，而是先把方法执行：
​		->如果是函数式声明的组件，就把它当做普通方法执行（方法中的this是undefined），把函数返回的jsx元素（也是解析后的对象）进行渲染
​		->如果是类声明式的组件，会把当前类new它执行，创建类的一个实例（当前本次调取的组件就是它的实例），执行constructor之后，会执行this.render()，把render中返回的jsx拿过来渲染，所以“类声明式组件，必须有一个render的方法，方法中返回一个jsx元素”

​		但是不管哪种方式，最后都会把解析出来的props属性对象作为实参传递给对应的函数或者类
**关于constructor中的props**

```js
// src/index.js
import React from 'react';
import ReactDOM from 'react-dom'; 

const root = document.getElementById('root')

class Dialog extends React.Component {
  constructor(props) { // props, context, updater
    // props：当render渲染并且把当前类执行创建实例时，会把之前jsx解析出来的props对象（可能有children）中的信息传递给参数props => "调取组件传递的属性"

    super(props) // es6中的extends继承，一旦使用了constructor，第一行位置必须设置super执行：相当于React.Component.call(this)，也就是call继承，把父类私有的属性继承过来
      // 如果只写super()：虽然创建实例时把属性传递进来了，但是没有传递给父组件，也就是没有把属性挂载到实例上，使用this.props获取的结果是undefined
      // 如果写super(props)：在继承父类私有属性时，就把传递的属性挂载到了子类实例上，constructor中就可以使用this.props了
    /**
     * this.props：属性集合
     * this.refs：ref集合（非受控组件中用到）
     * this.context：上下文
     */
    console.log(props)
    console.log(this.props)
  }

  render() {
    return <section>
      <h3>系统提示</h3>
      <div></div>
    </section>
  }
}

ReactDOM.render(<div>
  <Dialog lx={2} con='哈哈哈'>
    <span>子元素</span>
  </Dialog>
</div>, root)
```

**constructor之外的props**

```js
// src/index.js
import React from 'react';
import ReactDOM from 'react-dom'; 

const root = document.getElementById('root')

class Dialog extends React.Component {
  constructor() { 
    super()
    // 即使在constructor中不设置形参props接收属性，执行super时也不传这个属性，除了constructor中不能直接使用this.props，其他声明周期函数中都可以使用（也就是执行完成constructor，react已经帮我们把传递的属性接收，并且挂在到实例上了）
  }

  componentWillMount() {
    // 第一次渲染之前
    console.log(this.props)
  }

  render() {
    console.log(this.props)

    return <section>
      <h3>系统提示</h3>
      <div></div>
    </section>
  }
}

ReactDOM.render(<div>
  <Dialog lx={2} con='哈哈哈'>
    <span>子元素</span>
  </Dialog>
</div>, root)
```

## 创建组件的两种方式总结

总结：创建组件有两种方式，“函数式”、“创建类式”

[函数式]
	1.操作非常简单
	2.能实现的功能也很简单，只是简单的调取和返回jsx而已
[创建类式]
	1.操作相对复杂一些，但是也可以实现更为复杂的业务功能
	2.能够使用生命周期函数操作业务
	3.函数式可以理解为静态组件（组件中的内容调取时就已经固定了，很难再修改），而类这种方式，可以基于组件内部的状态来动态更新渲染的内容。
	4......

## 组件中的属性管理

