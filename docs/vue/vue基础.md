# vue基础

[TOC]

## vue设计思想

- 数据驱动应用
- MVVM模式的践行者

MVVM

- View=>DOM
- ViewModel(DOM Listeners&DataBindings)=>Vue
- Model=>Plain JavaScript Objects

MVVM框架的三要素：响应式、模板引擎及其渲染

- 响应式：vue如何监听数据变化？
- 模板：vue的模板如何编写和解析？
- 渲染：vue如何将模板转换成html？

## 安装

## 模板语法

### 插值

- 文本
- 原始HTML
- Attribute
- 使用javascript表达式

文本

```vue
<div>{{msg}}</div>
<div v-once>{{msg1}}</div>
```

原始HTML

```vue
<p>Using mustaches: {{ rawHtml }}</p>
<p>Using v-html directive:<span v-html="rawHtml"></span></p>
```

Attribute

```vue
<div v-bind:id="dynamicId"></div>
```

使用javascript表达式

```vue
{{number + 1}}
{{ ok ? 'YES' : 'NO' }}
{{ message.split('').reverse().join('') }}
<div v-bind:id="'list' + id"></div>
```

### 指令

- 参数
- 动态参数
- 修饰符

### 缩写

- v-bind 缩写
- v-on 缩写

## 计算属性和侦听器

## 生命周期

## 组件化实践

## vue必会API

## 动画

## 可复用性

## 工程化

## 路由

## 状态管理









