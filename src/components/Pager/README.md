# Pager 分页器组件

一个功能完整的分页导航组件，支持首页、上一页、下一页、末页操作。

## 功能特性

- ✅ 支持首页、上一页、下一页、末页导航
- ✅ 自动计算总页数
- ✅ 禁用状态处理（首页/末页时禁用对应按钮）
- ✅ 当前页高亮显示
- ✅ 支持自定义可见页码数量

## Props

| 参数      | 说明         | 类型     | 默认值 | 必填 |
| --------- | ------------ | -------- | ------ | ---- |
| `total`   | 数据总数     | `Number` | `10`   | 否   |
| `current` | 当前页码     | `Number` | `1`    | 否   |
| `limit`   | 每页显示数量 | `Number` | `10`   | 否   |
| `visible` | 可见页码数量 | `Number` | `10`   | 否   |

## Events

| 事件名           | 说明           | 回调参数                    |
| ---------------- | -------------- | --------------------------- |
| `update:current` | 页码改变时触发 | `(page: number)` - 新的页码 |

## 使用示例

### 基础用法

```vue
<template>
  <Pager
    :total="100"
    :current="currentPage"
    :limit="10"
    @update:current="handlePageChange"
  />
</template>

<script>
import Pager from "@/components/Pager";

export default {
  components: { Pager },
  data() {
    return {
      currentPage: 1,
    };
  },
  methods: {
    handlePageChange(page) {
      this.currentPage = page;
      // 在这里可以加载对应页的数据
      this.loadData(page);
    },
    loadData(page) {
      // 加载数据的逻辑
    },
  },
};
</script>
```

### 使用 v-model（推荐）

```vue
<template>
  <Pager :total="totalItems" v-model:current="currentPage" :limit="pageSize" />
</template>

<script>
import Pager from "@/components/Pager";

export default {
  components: { Pager },
  data() {
    return {
      currentPage: 1,
      totalItems: 100,
      pageSize: 10,
    };
  },
  watch: {
    currentPage(newPage) {
      // 页码改变时自动加载数据
      this.loadData(newPage);
    },
  },
};
</script>
```

## 样式说明

组件使用 Less 编写样式，依赖以下全局样式文件：

- `@/styles/global.less` - 全局样式
- `@/styles/var.less` - 变量定义

### 样式类名

- `.pager-container` - 分页器容器
- `.active` - 当前页样式
- `.disabled` - 禁用状态样式

## 注意事项

1. `total` 和 `limit` 用于计算总页数：`Math.ceil(total / limit)`
2. 当 `current === 1` 时，首页和上一页按钮会被禁用
3. 当 `current === pages` 时，下一页和末页按钮会被禁用
4. 组件会自动计算总页数，无需手动传入

## 测试

运行测试页面：

```bash
npm run test:Pager
```

或使用 vue serve：

```bash
vue serve ./src/components/Pager/test.vue
```
