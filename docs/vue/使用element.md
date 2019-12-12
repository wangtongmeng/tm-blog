# 使用 element

## table

根据单元格对应数据设置不同单元格的样式

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

