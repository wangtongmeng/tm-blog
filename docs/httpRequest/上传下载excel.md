# 上传下载 excel
## 下载 excel
url:http:www.xxx.com/api/download
参数​id:11,time:2018.9.1

### 1. window.location.href 下载
思路:借助a标签的原生功能,写成div嵌套a标签,a标签的href指向URL.
```html
<html>
	<div onclick="exportExcel">
 		<a href="javascript:;">下载表格</a>
   </div>
<script>
	const url = 'www.xxx.com/api/download'
  const id = 11
  const time = 2018.9.1
 	exportExcel () {
  	window.location.href= `${url}?id=${id}&time=${time}`
  }
  exportExcel()
}
</script>
</html>
```

post 方法：正常传参，后端返回下载地址，在使用 window.location.href = '地址' 进行下载。

### 2. 修改 responseType

 文件属于流文件不是json，所以要改响应类型responseType为arraybuffer而不是改header。**拿到二进制文件还需要按照服务器响应头的数据类型转换。**

1. 前端请求

```js
this.$http({
  method: 'post',
  url: 'http:www.xxx.com/api/download',
  data: {
    di: 11,
    time: '2018.9.1'
  },
  responseType: 'arraybuffer',
}).then(res => {
  // res.data 为后端返回数据，这里应为excel文件，type的值需要根据后端响应头填写
  let blob = new Blob([res.data], {type: ""})
  let objectUrl = URL.createObjectURL(blob)
  window.location.href = objectUrl
})
```

2.  访问下后端提供的下载接口,复制接口response headers的content-type放在type的字符串中 

如果响应头的content-type 是如下

```shell
Response Headers
  ....
	content-type: appliction/vnd.openxmlformats-officedocument.spreadsheetml.sheet
	...
```

填写type

```js
this.$http({
  method: 'post',
  url: 'http:www.xxx.com/api/download',
  data: {
    di: 11,
    time: '2018.9.1'
  },
  responseType: 'arraybuffer', // 1 填写 responseType
}).then(res => {
  let blob = new Blob([res.data], {type: "appliction/vnd.openxmlformats-officedocument.spreadsheetml.sheet"}) // 2 填写 type
  let objectUrl = URL.createObjectURL(blob)
  window.location.href = objectUrl
})
```

> 问题：
>
>  接口报错时，由于后端响应数据被处理成文件流，后端返回的error是个json时，前端看到的会是乱码 

解决方法：

1.  报错后端直接返回http状态码4XX,带error 
2.  http状态码还是200,需要和后端在响应头约定下报错格式。比如后端在header里新增个errcode属性和error_content属性,如果errcode不等于undefined,中断执行,弹窗error-contente内容 

### 其他参考

 https://segmentfault.com/a/1190000016220106 