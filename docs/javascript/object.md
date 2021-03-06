# object

对象相关

## 循环

### for-in

for-in 循环：遍历一个对象中的键值对，有多少组键值对，就遍历多少次

```js
let obj = {name: 'xxx', age: 27, 0: 0, sex: 0, score: 100, 1: 1}
// for (let key in obj) {
//   console.log(key) // key存储的是每一次循环获取的属性名
//   console.log(obj[key]) // 每次循环基于key获取属性值
// }
// =>FOR-IN遍历的时候有自己的顺序：先遍历数字属性名（按照小->大），再遍历字符串属性名（按照书写顺序）
// for (let attr in obj) {
//   console.log(attr) // 0 1 name age sex score
// }
// obj.__proto__ === Object.prototype：obj是Object这个类的实例
// 大括号中的是obj的私有属性，Object.prototype上的是obj公有属性
Object.prototype.bbbb = 1000
for (let key in obj) {
  // for-in循环只遍历当前对象的可枚举（可遍历）的属性
  // 1.对象的私有属性（自己写的）是可枚举的
  // 2.浏览器内置的属性一般是不可枚举的
  // 3.自己在类的原型上设置的属性也是可枚举的，for-in循环时也会被遍历出来（一般情况下我们是不想遍历到原型上的共有属性的）
  // console.log(key) // 0 1 name age sex score bbbb 
  if (obj.hasOwnProperty(key)) {
    console.log(key) // 0 1 name age sex score
  }
}
```

