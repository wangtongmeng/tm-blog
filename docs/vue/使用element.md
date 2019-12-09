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

