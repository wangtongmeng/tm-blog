# javascript
数据类型、堆栈内存、作用域与作用域链、闭包、原型与原型链、面向对象

四大高阶技巧：惰性函数、柯里化函数、curring函数（混装）、compose函数（立即调用函数扁平化）



两座大山：堆栈内存闭包、面向对象

专题一：JS中this的五种情况

专题二：JS中数据类型检测的四种方案

专题三：JS中的四大继承方案

浏览器的底层机制、dom重流重绘



null 空对象指针 ，让变量不再指向任何堆内存，当前堆内存就不会被引用，chrome浏览器会在空闲时，检测没有做占用的堆内存并手动释放，如果是IE浏览器通过引用计数

## 数组/对象常用方法

#### 数组

https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array 

Array.prototype：concat、copyWithin、entries、every、fill、filter、findIndex、flat、flatMap、forEach、includes、indexOf、join、keys、lastIndexOf、map、pop、push、reduce、reduceRight、reverse、shift、slice、some、sort、splice、tolocaleString、unshift、values、 Symbol(Symbol.iterator)、 Symbol(Symbol.unscopables) 

Array：from、isArray

#### 对象

 https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object 

Object.prototype： hasOwnProperty 、 isPrototypeOf 、 propertyIsEnumerable 、toLocaleString、toString、valueOf 

Object： assign、create 、defineProperties、defineProperty、entries、freeze、fromEntries、 getOwnPropertyDescriptor、getOwnPropertyDescriptors、getOwnPropertyNames、getOwnPropertySymbols、getPrototypeOf、is、isExtensible、isFrozen、isSealed、keys

## JS 中的四大继承方案

- 原型继承
- call继承
- 寄生组合继承
- class实现继承
- 应用场景：封装插件或类库（或React中）
- ...

继承：子类继承父类中的属性和方法（JS中的继承机制和其它后台语言是不一样的，有自己的独特处理方式）

### 类的多态

类的多态：重载和重写
java
        重载：函数名相同，但是传参类型、数量不同或者返回值不一样，这相当与把一个函数重载了 （JS中没有类似于后台语言中的重载机制：JS中的重载只的是同一个方法，根据传参不同，实现不同的业务逻辑）
        重写：子类重写父类上的方法

java中类的重载

```java
public String fn(int n, int m) {}
public String fn(int n) {}
public String fn(int n, double m) {}
// 相同函数名，传参不同，调用的函数不同
fn(10, 20)
fn(10)
fn(10, 20.86)
```

js中并不能实现严格意义的重载

```js
function fn (n, m) {
  if (!m) {
    // ...
	}
}
// 相同函数名，传参不同，调用的还是同一个函数。多个相同函数名，后者会覆盖前者。
fn(10, 20)
fn(10)
```

### 方案一：原型继承

原型继承：子类的原型指向父类的一个实例（B子类 => A父类）

原型继承特点：
1. 并不会把父类中的方法克隆一份给子类，而是建立了子类和父类之间的原型查找机制。
2. 重定向子类的原型后，默认丢失了原本的constructor属性（或者原本的原型上设置的属性和方法）。
3. 子类或子类的实例，可以基于原型链"肆意"修改父类上的方法，**对父类造成一些"不必要的破坏"**。
4. 会把父类中私有的属性方法作为子类的公有的属性方法继承过来（父类中不管是公有还是私有，最后都变成子类公有的）。

```js
function A() {
  this.x = 100
}
A.prototype.getX = function getX() {
  console.log(this.x)
}

function B() {
  this.y = 200
}
B.prototype = new A
B.prototype.getY = function getY() {
  console.log(this.y)
}
let b = new B
```
<img :src="$withBase('/assets/img/js/继承-原型继承.png')" alt="继承-原型继承">

### 方案二：call继承

call继承：把父类当做普通函数执行，让其执行时方法中的this变为子类的实例即可。

【特点】

1. 只能继承父类中的私有方法（继承的私有属性赋值给实例的私有属性） ，而且是类似拷贝过来一份，而不是链式查找。
2. 因为只是父类当做普通的方法执行，所以父类原型上的共有属性方法无法被继承过来。
```js
function A() {
  this.x = 100
}
A.prototype.getX = function getX() {
  console.log(this.x)
}

function B() {
  //CALL继承
  A.call(this) // this.x = 100;  b.x=100;
  this.y = 200
}
B.prototype.getY = function getY() {
  console.log(this.y)
};
let b = new B
console.log(b)
```

### 方案三： 寄生组合继承

寄生组合继承：call继承+变异版的原型继承共同完成的。

- call继承实现：私有到私有。
- 原型继承实现：公有到公有。

由于本质上还是基于原型继承，所以原型继承的缺点它也具备。
```js
function A() {
  this.x = 100
}
A.prototype.getX = function getX() {
  console.log(this.x)
}
function B() {
  A.call(this)
  this.y = 200
}
// Object.create(obj) 创建一个空对象，让其__proto__指向obj（把obj作为对象的原型）
B.protoype = Object.create(A.prototype)
B.prototype.constructor = B
B.prototype.getY = function getY() {
  console.log(this.y)
}
let b = new B
console.log(b)
```
<img :src="$withBase('/assets/img/js/继承-寄生组合继承.png')" alt="继承-寄生组合继承">

### 方案四：class实现继承

 ES6创建类用class 
 ```js
class A {
  constructor() {
    this.x = 100
  }
  getX() {
    console.log(this.x)
  }
}
// extends继承和寄生组合继承基本类似
class B extends A {
  constructor() {
    super(100) // 一但使用extends实现继承，只要自己写了constructor，就必须写super  <=> A.call(this,100)
    this.y = 200
  }
  getY() {
    console.log(this.y)
  }
}

let b = new B
console.log(b)
 ```
ES7中设置私有属性的方式
```js
class A {
  constructor() {
    this.x = 1000
  }
  // 这样和构造函数中的this.xxx=xxx没啥区别，设置的是私有属性（ES7）
  num = 100
  // 设置到A.prototype上的方法
  getX() {
    console.log(this.x)
  }
  // 把A当做普通对象设置的属性和方法
  static n = 200
  static getN() {}
}
console.log(new A)
console.log(A.n, A.getN)
```

## JS中数据类型检测的四种方案

- typeof
- instanceof
- constructor
- Object.prototype.toString.call

### 检测数据类型1：typeof
返回结果都是字符串，字符串中包含了对应的数据类型"number"/"string"/"boolean"/"undefined"/"symbol"/"object"/"function"

【局限性】
- typeof null => "object"   null不是对象，它是空对象指针
- 检测数据或者正则等特殊的对象，返回结果都是"object"，所以无法基于typeof判断是数据还是正则
```js
console.log(typeof 1) // "number"
console.log(typeof '1') // "string"
console.log(typeof true) // "boolean"
console.log(typeof undefined) // "undefined"
console.log(typeof null) // "object"
console.log(typeof Symbol()) // "symbol"

console.log(typeof []) // "object"
console.log(typeof {}) // "object"
console.log(typeof /a/) // "object"
console.log(typeof function () {}) // "function"
```

### 检测类型2/3：instanceof / constructor

监测某个实例是否属于这个类。检测底层机制：所有出现在其原型链上的类，检测结果都是true。
【局限性】

- 由于可以基于__proto__或prototype改动原型链的动向，所以基于instanceof检测出来的结果并不一定是准确的。
- 基本数据类型的值，连对象都不是，更没有__proto__，虽说也是所属类的实例，在js中也可以调取所属类原型上的方法，，但是instanceof是不认的。

instanceof的简单使用
```js
console.log(12 instanceof Number) // false
console.log(new Number(12) instanceof Number) // true
console.log(/^$/ instanceof RegExp) // true
console.log([] instanceof Array) // true
console.log([] instanceof Object) // true

let arr = []
arr.__proto__ = Object.prototype
console.log(arr instanceof Array) / false

function Fn() {}
Fn.prototype.__proto__ = Array.prototype
let f = new Fn() // 原型链：f -> Fn.prototype -> Array.prototype -> Object.prototype
```
constructor的简单使用
```js
let arr = []
console.log(arr.constructor === Array) // true
let n = 12
console.log(n.constructor === Number) // true

Array.prototype.constructor = null
console.log(arr.constructor === Array) // false
```
### 检测数据类型4：Object.prototype.toString.call([value]) / ({}).toString.call([value])

不是用来转换为字符串的，而是返回当前实例所属类的信息

格式："[object 所属类信息]"

"[object Object/Array/RegExp/Date/Function/Null/Undefined/Number/String/Boolean/Symbol...]"

这种方式基本上没有什么局限性，是检测数据类型最准确的方式

Number/String/Boolean/Symbol他们的原型上都有:
- toString：转化为字符串
- valueOf：返回原始值

Array/RegExp/Function等内置类的原型上都有:
- toString：转化为字符串

Object的原型上:
- toString：返回当前实例所属类的信息
- valueOf：返回原始值

