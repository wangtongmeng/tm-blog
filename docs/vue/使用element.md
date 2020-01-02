# 使用 element

## table

### 根据单元格对应数据设置不同单元格的样式

```js
// 后端响应数据
data: [
  {
    name: '数据1',
    color: 'red',
    isValid: 1 // 1 不合法 0 合法
  }
]
// table 数据
tableData: [
  {
    data: 'data,red,1'
  }
]
const tableData = data.map(item => ({data: `${item.name},${item.color},${item.isValid}`)})
```

通过**字符串拼接**结合**table自定义模板**来做

```vue
<el-table-column label="data" width="180">
  <template slot-scope="scope">
 		<div v-if="scope.row.data.split(',')[2] == '1'" :style="{color: scope.row.data.split(',')[1]}">
      {{scope.row.data.split(',')[0]}}
    </div>
  </template>
</el-table-column>
```

### 表格冒泡的 tooltip设置宽度

 在el-table-column种使用:show-overflow-tooltip="true"的时候，内容太多会有一个 tooltip冒泡弹框 

 如果需要改变宽度的话，就需要修改tooltip的样式，如下 ：

```css
.el-tooltip__popper {
  max-width: 90% !important;
}
```

## tab

### tab切换时echarts不显示

不显示代码

```vue
<el-tabs v-model="activeName" value="" @tab-click="handleClick">
	<el-tab-pane label="用户" name="user">用户</el-tab-pane>
	<el-tab-pane label="服务人员" name="servicer">服务人员</el-tab-pane>
	<el-tab-pane label="订单" name="order">订单</el-tab-pane>
</el-tabs>
```

设置 el-tabs 的 v-model，并给 el-tab-pane 加上 lazy 属性

```vue
<el-tabs v-model="activeName" value="" @tab-click="handleClick">
	<el-tab-pane label="用户" name="user" lazy>用户</el-tab-pane>
	<el-tab-pane label="服务人员" name="servicer" lazy>服务人员</el-tab-pane>
	<el-tab-pane label="订单" name="order" lazy>订单</el-tab-pane>
</el-tabs>
```

**参考**

 https://blog.csdn.net/SanJiK/article/details/79764429 

## select

el-form-item 内的 el-select如何自适应宽度  https://segmentfault.com/q/1010000020225305 

## form

### 表单校验

https://www.e-learn.cn/content/javascript/921294

是否必填，格式验证，大小验证

```js
rules: {
    name:[{
      required: true, message: '请输入用户名', trigger: 'blur'
    }, {
      min: 2, max: 6, message: '长度在 2 到 6 个字符'
    },{
      pattern: /^[\u4E00-\u9FA5]+$/, message: '用户名只能为中文'
    },{
      pattern:/^[a-zA-Z]w{1,4}$/, message: '以字母开头，长度在2-5之间， 只能包含字符、数字和下划线'
    }],
    password: [{
        required: true, message: '请输入密码', trigger: 'blur'
    }, {
        min: 6, max: 16, message: '长度在 6 到 16个字符'
    }, {
        pattern: /^(\w){6,16}$/, message: '只能输入6-16个字母、数字、下划线'
    }],
    mobile:[{ 
        required: true, message: '请输入手机号码', trigger: 'blur'
    },{
    validator:function(rule,value,callback){
            if(/^1[34578]\d{9}$/.test(value) == false){
                callback(new Error("请输入正确的手机号"));
            }else{
                callback();
            }
        }, trigger: 'blur'}
    ],
   }
```



## cascader

### cascader 级联选择器hover选择效果

官网例子

```vue
<div class="block">
  <span class="demonstration">hover 触发子菜单</span>
  <el-cascader
    v-model="value"
    :options="options"
    :props="{ expandTrigger: 'hover' }"   这样是不生效的
    @change="handleChange"></el-cascader>
```

生效例子

```vue
<div class="block">
  <span class="demonstration">hover 触发子菜单</span>
  <el-cascader
    expand-trigger="hover"
    :options="options"
    v-model="selectedOptions2"
    @change="handleChange">
  </el-cascader>
</div
```

