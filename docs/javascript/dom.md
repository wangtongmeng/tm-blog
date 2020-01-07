# dom

## 操作DOM的属性和方法

- 获取元素或元素集合
- 描述节点和节点之间的属性
- 动态操作DOM
- 零散的

### 获取元素或元素集合

getElementById

- 上下文只能是document（只有document这个实例的原型链上才能找到这个方法，其它实例都找不到）

- ID重复了获取第一个

- E6~7中会把表单元素的name当做id使用

getElementsByTagName

- 获取当前上下文中，所有子子孙孙中标签名叫做XXX的元素

getElementsByClassName

- E6~8中不兼容

getElementsByName

- 在IE浏览器中只对表单元素的name起作用
- 上下文也只能是document

querySelector

querySelectorAll

- 不兼容IE6~8
- 没有DOM映射

document.documentElement

document.body

document.head

### 描述节点和节点之间的属性

|          | nodeType | nodeName   | nodeValue |
| -------- | -------- | ---------- | --------- |
| 元素节点 | 1        | 大写标签名 | null      |
| 文本节点 | 3        | #text      | 文本内容  |
| 注释节点 | 8        | #comment   | 注释内容  |
| 文档节点 | 9        | #document  | null      |

childNodes：所有子节点

children：所有元素子节点（IE6~8中会把注释当做元素节点）

parentNode

previousSibling / previousElementSibling

nextSibling

firstChild

lastChild

### 动态操作DOM

createElement

createDocumentFragment

appendChild

insertBefore

cloneNode(true/false)

removeChild

set/get/removeAttribute

### 零散的

xxx.style.xxx = xxx 设置行内样式

=>xxx.style.xxx 获取行内样式

xxx.className = 'xxx'

xxx.onclick = function...

## JS盒子模型

在JS中通过相关的属性可以获取(设置)元素的样式信息,这些属性就是盒子模型属性（基本上都是有关于样式的）。

client=>top/left/width/height

offset=>top/left/width/height/**parent**

scroll=>top/left/width/height

1.clientWidth & clientHeight：获取当前元素可视区域的宽高（内容的宽高+左右/上下PADDING）

=>和内容是否有溢出无关（和是否设置了OVERFLOW:HIDDEN也无关），就是我们自己设定的内容的宽高+PADDING