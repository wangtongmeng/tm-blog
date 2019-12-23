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

#### 兼容 ie

> window.URL.createObjectURL Blob URL在IE中兼容问题

**问题**

window.URL.createObjectURL()可以直接生成blob:开头的链接，该链接产生于浏览器端，不会占用服务器资源。

window.URL.createObjectURL()在IE10, IE11以及Edge中生成的blob:链接，你不能把它加到一个`<a>`节点上，也不能直接在浏览器地址栏打开访问，并且得到“Error: 拒绝访问。IE9也不支持window.URL.createObjectURL创建Blob URLs。

IE / Edge和Chrome / Firefox对于window.URL.createObjectURL创建Blob链接最直观的区别在于得到的blob:链接形式不一样，分别在微软浏览器和标准浏览器中运行以下代码，得到两种Blob链接形式

- 第一种为chrome和firefox生成的带有当前域名的标准blob:链接形式
- 第二种为Microsoft IE和Microsoft Edge生成的不带域名的blob:链接。

可以通过window.URL.createObjectURL(new Blob()) . indexOf(location.host) < 0来检测是否是IE或早期生成Object URL不带域名的Edge。如果表达式返回true则时IE或Edge旧版本。

**解决方案**

```js
var download_csv_using_blob = function (file_name, content) {
  var csvData = new Blob([content], { type: 'text/csv' });
  // for IE
  if (window.navigator && window.navigator.msSaveOrOpenBlob) {
    window.navigator.msSaveOrOpenBlob(csvData, file_name);
  }
  // for Non-IE (chrome, firefox etc.)
  else {
    var a = document.createElement('a');
    document.body.appendChild(a);
    a.style = 'display: none';
    var url = window.URL.createObjectURL(csvData);
    a.href =  url;
    a.download = file_name;
    a.click();
    a.remove();
    window.URL.revokeObjectURL(url);
  }
```

**下载excel**

```js
export const downloadExcelUsingBlob = (fileName, content) => {
  const excelData = new Blob([content], {type: 'application/vnd.ms-excel'})
  // for IE
  if (window.navigator && window.navigator.msSaveOrOpenBlob) {
    window.navigator.msSaveOrOpenBlob(content, fileName);
  }
  // for Non-IE (chrome, firefox etc.)
  else {
    const a = document.createElement('a');
    document.body.appendChild(a);
    a.style = 'display: none';
    const url = window.URL.createObjectURL(excelData);
    a.href =  url;
    a.download = fileName;
    a.click();
    a.remove();
    window.URL.revokeObjectURL(url);
  }
}
```

使用

```js
downloadExcel(reqData).then(res => {
  downloadExcelUsingBlob('xxx.xls', res.data)
})
```


### 参考

 https://segmentfault.com/a/1190000016220106 

 https://blog.csdn.net/u014628388/article/details/81738704 