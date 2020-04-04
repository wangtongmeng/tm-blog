(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{273:function(s,a,t){"use strict";t.r(a);var e=t(28),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"webpack-4-课程学习"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#webpack-4-课程学习"}},[s._v("#")]),s._v(" webpack 4 课程学习")]),s._v(" "),t("p",[s._v("课程目标")]),s._v(" "),t("ul",[t("li",[s._v("彻底学会 Webpack 的配置")]),s._v(" "),t("li",[s._v("理解 Webpack 的作用及原理")]),s._v(" "),t("li",[s._v("上手项目的打包过程配置")]),s._v(" "),t("li",[s._v("拥有工程化的前端思维")]),s._v(" "),t("li",[s._v("步入高级前端工程师行里")])]),s._v(" "),t("h2",{attrs:{id:"第-2-章-webpack-初探"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#第-2-章-webpack-初探"}},[s._v("#")]),s._v(" 第 2 章 webpack 初探")]),s._v(" "),t("h3",{attrs:{id:"webpack-是什么"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#webpack-是什么"}},[s._v("#")]),s._v(" webpack 是什么")]),s._v(" "),t("p",[s._v("模块打包工具")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("模块相关阅读")]),s._v(" "),t("ul",[t("li",[s._v("documentation-concepts-modules")]),s._v(" "),t("li",[s._v("documentation-api-modules")])])])]),s._v(" "),t("h3",{attrs:{id:"安装-webapck"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装-webapck"}},[s._v("#")]),s._v(" 安装 webapck")]),s._v(" "),t("h4",{attrs:{id:"webapck-环境搭建"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#webapck-环境搭建"}},[s._v("#")]),s._v(" webapck 环境搭建")]),s._v(" "),t("p",[s._v("安装 Node 和 npm")]),s._v(" "),t("p",[s._v("node 版本越新，webpack 越快，webpack 会调用 node 的一些新特性加快 webpack 打包性能。")]),s._v(" "),t("p",[s._v("安装后，查看 node 和 npm")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("node -v\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" -v\n")])])]),t("h4",{attrs:{id:"webapck-全局安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#webapck-全局安装"}},[s._v("#")]),s._v(" webapck 全局安装")]),s._v(" "),t("p",[t("strong",[s._v("安装 webpack")])]),s._v(" "),t("div",{staticClass:"language-shel extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("npm install webpack webpack-cli -g\n")])])]),t("p",[t("strong",[s._v("查看 webpack 版本号")])]),s._v(" "),t("p",[s._v("查看版本号，确定安装成功")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("webpack -v\n")])])]),t("p",[t("strong",[s._v("卸载全局 webpack")])]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" uninstall webpack webpack-cli -g\n")])])]),t("p",[s._v("此时，通过 "),t("code",[s._v("webpack -v")]),s._v("就无法查看了")]),s._v(" "),t("blockquote",[t("p",[s._v("全局安装的坏处：若两个项目一个是 webpack 4 一个是 webpack 3，那么在全局安装 webpack 4 的情况下，3 的项目就无法运行了。")])]),s._v(" "),t("h4",{attrs:{id:"webapck-局部安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#webapck-局部安装"}},[s._v("#")]),s._v(" webapck 局部安装")]),s._v(" "),t("p",[s._v("进入项目目录")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" webapck webpack --save-dev\n// 或\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" webapck webpack -D\n")])])]),t("p",[s._v("安装后，确定版本号 "),t("code",[s._v("webpack -v")]),s._v("无法查看版本号，因为此命令会去全局环境下找 webpack 命令，而我们没有安装全局 webpack")]),s._v(" "),t("p",[s._v("查看项目中的 webpack 版本")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("npx webpack -v\n")])])]),t("p",[s._v("查看 wbepack 历史版本")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" info webpack\n")])])]),t("p",[s._v("安装老版本 webpack")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" webpack@4.16.5 webpack-cli -D\n")])])]),t("h3",{attrs:{id:"使用webpack的配置文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用webpack的配置文件"}},[s._v("#")]),s._v(" 使用Webpack的配置文件")]),s._v(" "),t("p",[s._v("项目根目录创建 webpack.config.js")]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// webpack.config.js")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" path "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'path'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\nmodule"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  entry"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./src/index.js'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  output"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    filename"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'bundle.js'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 改变输出路径需要使用 绝对路径，利用 node 的 path 模块的 resolve 方法，第一个参数 __dirname 指的是 index.js 所在目录 和 dist 结合，形成绝对路径。")]),s._v("\n    path"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" path"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("resolve")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("__dirname"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'dist'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),t("p",[s._v("运行 "),t("code",[s._v("npx webpack")]),s._v(" 即可。运行此命令，webpack 并不知道要如何打包，它回去找默认文件 "),t("code",[s._v("webpack.config.js")]),s._v(" 获取配置信息。")]),s._v(" "),t("p",[t("strong",[s._v("打包时，不使用默认配置文件")])]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("npx webpack --config webpackconfig.js\n")])])]),t("h2",{attrs:{id:"第-3-章-webpack-的核心概念"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#第-3-章-webpack-的核心概念"}},[s._v("#")]),s._v(" 第 3 章 Webpack 的核心概念")]),s._v(" "),t("p",[s._v("本章讲解 Webpack 中的一些核心概念，从 Loader 与 Plugin 开始，带你学明白 Webpack 的运行机制，然后逐步深入，扩展衍生出 SoureMap， HMR， WDS 等常见概念。本章课程学习过程中，额外增加了对 Webpack 官方文档的查阅方式讲解，帮助大家学会查阅文档。...")]),s._v(" "),t("h3",{attrs:{id:"_3-1-什么是loader"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-什么是loader"}},[s._v("#")]),s._v(" 3-1 什么是loader")]),s._v(" "),t("p",[s._v("webpack 是什么？模块打包工具")]),s._v(" "),t("p",[s._v("模块是什么？不只是js、css和图片等其他任何内容。")]),s._v(" "),t("p",[s._v("webpack配置文件的作用是什么？答案在前面")]),s._v(" "),t("p",[s._v("使用 file-loader 做 jpg 文件的打包")]),s._v(" "),t("p",[s._v("打包流程：")]),s._v(" "),t("ul",[t("li",[s._v("命令行 "),t("code",[s._v("npm run bundle")]),s._v("，执行 package.json  中的 script ，运行 bundle 命令，实际上是运行 webpack。")]),s._v(" "),t("li",[s._v("webpack 找它的配置，根据配置打包。\n"),t("ul",[t("li",[s._v("遇到 js文件，默认可以处理 js文件。")]),s._v(" "),t("li",[s._v("当遇到 jpg 图片文件，webpack 默认不知道如何打包，会去配置中找相应规则")])])])]),s._v(" "),t("h3",{attrs:{id:"_3-2-使用-loader-打包静态资源（图片篇）"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-使用-loader-打包静态资源（图片篇）"}},[s._v("#")]),s._v(" 3-2 使用 Loader 打包静态资源（图片篇）")]),s._v(" "),t("p",[s._v("使用 file-loader")]),s._v(" "),t("ul",[t("li",[s._v("图片名 + hash，通过占位符实现")]),s._v(" "),t("li",[s._v("更改输出位置")]),s._v(" "),t("li",[s._v("支持多种格式文件")])]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("webpack"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("config"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("js\nmodule"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t\trules"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t\t"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" test"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token regex"}},[s._v("/\\.(jpg|png|gif)$/")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("           "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 支持多种格式文件")]),s._v("\n\t\t\tuse"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t\t\t\tloader"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'file-loader'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\t\t\t\toptions"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t\t\t"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("\tname"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'[name]_[hash].[ext]'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 图片名 + hash")]),s._v("\n\t\t\t"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("\toutputPath"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'images/'")]),s._v("           "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 更改输出位置")]),s._v("\n\t\t\t\t"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\t\t\t"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" \n\t\t"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n")])])]),t("p",[s._v("url-loader 可以实现 file-loader 的一切功能。")]),s._v(" "),t("p",[s._v("url-loader 默认会把图片转换成base64格式，直接放入 bundle.js 中，而不是单独生成一个图像文件，需要配置文件小就base64，文件大还是单独存放，通过 limit 选项 2048，表示200个字节，204800表示200kb。")]),s._v(" "),t("ul",[t("li",[s._v("图片文件小转成 base64，图片文件大打包成图片名+hash。")])]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("webpack"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("config"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("js\nmodule"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t\trules"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t\t\ttest"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token regex"}},[s._v("/\\.(jpg|png|gif)$/")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("       \n\t\t\tuse"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        \n\t\t\t\tloader"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'url-loader'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("            "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 使用 url-loader")]),s._v("\n\t\t\t\toptions"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t\t\t\t\tname"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'[name]_[hash].[ext]'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("    \n\t\t\t\t\toutputPath"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'images/'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("    \n\t\t\t\t"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("\tlimit"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10240")]),s._v("                   "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 以 10kb 为限")]),s._v("\n\t\t\t\t"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\t\t\t"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" \n\t\t"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n")])])]),t("h3",{attrs:{id:"_3-3-使用-loader-打包静态资源（样式篇-上）"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-使用-loader-打包静态资源（样式篇-上）"}},[s._v("#")]),s._v(" 3-3 使用 Loader 打包静态资源（样式篇 - 上）")]),s._v(" "),t("p",[s._v("安装 loader")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" style-loader css-loader -D\n")])])]),t("p",[s._v("css-loader 会分析出几个 css 文件之间的关系，最终合并成一段 css。")]),s._v(" "),t("p",[s._v("style-loader 会把 css-loader 生成的内容挂载到页面的 head 部分。")]),s._v(" "),t("p",[s._v("sass-loader 把预处理器语言转化成 css。")]),s._v(" "),t("p",[s._v("loader 执行顺序：从下到上，从右到左。")]),s._v(" "),t("p",[s._v("css3 的厂商前缀，安装 postcss-loader。")]),s._v(" "),t("p",[s._v("postcss-loader 需要用到 autoprefixer 插件")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" autoprefixer -D\n")])])]),t("div",{staticClass:"language-json extra-class"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// postcss.config.js")]),s._v("\nmodule.exports = "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  plugins"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n  \trequire('autoprefixer')\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),t("h3",{attrs:{id:"_3-4-使用-loader-打包静态资源-样式篇-下"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-4-使用-loader-打包静态资源-样式篇-下"}},[s._v("#")]),s._v(" 3-4 使用 Loader 打包静态资源 (样式篇 - 下)")]),s._v(" "),t("p",[s._v("css-loader 常用配置项")]),s._v(" "),t("p",[s._v("当需要配置 loader 时，需要写成对象的形式，"),t("code",[s._v("importLoaders: 2")]),s._v("的作用是保证我们不管是在js 还是 css 中引入 scss 文件都可以保证打包成功。")]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    test"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token regex"}},[s._v("/\\.scss$/")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    use"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'style-loader'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            loader"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'css-loader'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            options"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                importLoaders"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("，\n                modules"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// css 模块化打包")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'sass-loader'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'postcss-loader'")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),t("p",[s._v("css 打包的模块化")]),s._v(" "),t("p",[s._v("通过设置 css-loader 的 "),t("code",[s._v("modules: true")])]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" style "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./index.scss'")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" img "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Image")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nimg"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("src "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" avatar\nimg"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("classList"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("style"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("avatar"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// css 模块化的使用")]),s._v("\n")])])]),t("p",[s._v("打包字体文件")]),s._v(" "),t("h3",{attrs:{id:"使用-plugins-让打包更便捷"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用-plugins-让打包更便捷"}},[s._v("#")]),s._v(" 使用 plugins 让打包更便捷")]),s._v(" "),t("p",[s._v("plugin 可以在webpack运行到某个时刻的时候，帮你做一些事情。")]),s._v(" "),t("p",[s._v("html-webpack-plugin，会在打包后，自动生成一个html文件，并把打包生成的js自动引入到这个html文件中。")]),s._v(" "),t("p",[s._v("配置模板文件")]),s._v(" "),t("p",[s._v("clean-webpack-plugin，每次打包前，先删除之前的包。它是第三方 Plugin，不是官方推荐。")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" clean-webpack-plugin -D\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);