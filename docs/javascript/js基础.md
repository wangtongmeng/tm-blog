# js基础
数据类型、堆栈内存、作用域与作用域链、闭包、原型与原型链、面向对象

四大高阶技巧：惰性函数、柯里化函数、curring函数（混装）、compose函数（立即调用函数扁平化）



两座大山：堆栈内存闭包、面向对象

专题一：JS中this的五种情况

专题二：JS中数据类型检测的四种方案

专题三：JS中的四大继承方案

浏览器的底层机制、dom重流重绘



null 空对象指针 ，让变量不再指向任何堆内存，当前堆内存就不会被引用，chrome浏览器会在空闲时，检测没有做占用的堆内存并手动释放，如果是IE浏览器通过引用计数

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

## 方案三： 寄生组合继承

寄生组合继承：call继承+变异版的原型继承共同完成的。

- call继承实现：私有到私有。
- 原型继承实现：公有到公有。

由于本质上还是基于原型集成，所以原型继承的缺点它也具备。
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