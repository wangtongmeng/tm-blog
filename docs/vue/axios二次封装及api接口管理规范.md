# axios二次封装及api接口管理规范
## 数据请求的进化史：ajax -> axios -> fetch
http://www.axios-js.com/zh-cn/docs/

http://developer.mozilla.org/zh-CN/docs/Web/API/Fetch_API/Fetch_API/Using_Fetch

发展过程：ajax -> jquery封装的ajax -> axios（结合promise） -> fetch

axios是基于ajax和promise进行封装的库。所以jquery的ajax和axios都是基于ajax的进一步封装。

fetch是浏览器内置的api，**fetch和ajax不同，它们是两套完全不同的机制**。fetch的好处：它是内置的类，进行数据请求，天生就是基于Promise进行管理的。需要兼容的话，可以安装babel-Polyfill依赖。

## 基于axios实现接口请求库的封装
> 高级处理技巧：接口环境切换、断网处理等

安装依赖 `yarn add axios qs`，qs能够把对象转换成urlencoded的格式，也能把urlencoded格式的字符串变成对象。

自己配置启动命令，修改选择不同运行环境，package.json
```js
{
  "scripts": {
    "serve": "vue-cli-service serve",
    "serve:test": "set NODE_ENV=test&&vue-cli-service serve",
    "serve:production": "set NODE_ENV=production&&vue-cli-service serve",
    "build": "vue-cli-service build"
  },
}
```
## 基于fetch实现接口请求库的封装