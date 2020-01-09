# 使用 axios
## axios配置后，post提交formdata
```js
var fd = new FormData()
fd.append('name', '111')
let config = {
  headers: {
    'Content-Type': 'multipart/form-data'
  }
}
axios.post(url, fd, config).then( res => {
  console.log(res)
}).catch( res => {
  console.log(res)
})
// json 转 formData，封装一个函数
const formatData = data => {
  const catchData = new FormData();
  Object.keys(data).forEach(key => {
    catchData.append(key, data[key]);
  });
 
  return catchData;
};

```
## post请求传参json格式转formData(是查询参数的形式？)
使用 node 的 qs 模块
```js
import axios from 'axios'
import qs from 'qs'
let base = 'xxx'
export const addUser = params => {
  return axios.post(`${base}/user/addUser`, qs.stringify(params))
}
```