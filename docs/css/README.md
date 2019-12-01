# css 笔记
## [笔记1](./笔记1.md)
### 笔记1-1
### 笔记1-2
### 笔记1-3
## 笔记2
::: tip 提醒
This is a tip
:::
::: warning 警告
This is a warning
:::
::: danger 危险警告
This is a dangerous warning
:::

``` js
export default {
  name: 'MyComponent',
  // ...
}
```

``` html
<ul>
  <li
    v-for="todo in todos"
    :key="todo.id"
  >
    {{ todo.text }}
  </li>
</ul>
```

<ul>
  <li
    v-for="todo in todos"
    :key="todo.id"
  >
    {{ todo.text }}
  </li>
</ul>

``` js {4,6}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```