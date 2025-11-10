# Avatar 头像组件

一个简洁的圆形头像组件，用于显示用户头像或图片。

## 功能特性

- ✅ 圆形头像显示
- ✅ 支持自定义尺寸
- ✅ 图片自适应（object-fit: cover）
- ✅ 简洁易用

## Props

| 参数   | 说明           | 类型     | 默认值 | 必填 |
| ------ | -------------- | -------- | ------ | ---- |
| `url`  | 图片地址       | `String` | -      | 是   |
| `size` | 头像尺寸（px） | `Number` | `100`  | 否   |

## 使用示例

### 基础用法

```vue
<template>
  <Avatar url="https://example.com/avatar.jpg" :size="100" />
</template>

<script>
import Avatar from "@/components/Avatar";

export default {
  components: { Avatar },
};
</script>
```

### 不同尺寸

```vue
<template>
  <div>
    <!-- 小头像 -->
    <Avatar url="https://example.com/avatar.jpg" :size="50" />

    <!-- 中等头像 -->
    <Avatar url="https://example.com/avatar.jpg" :size="100" />

    <!-- 大头像 -->
    <Avatar url="https://example.com/avatar.jpg" :size="150" />
  </div>
</template>
```

### 动态绑定

```vue
<template>
  <Avatar :url="userInfo.avatar" :size="avatarSize" />
</template>

<script>
import Avatar from "@/components/Avatar";

export default {
  components: { Avatar },
  data() {
    return {
      userInfo: {
        avatar: "https://example.com/avatar.jpg",
      },
      avatarSize: 120,
    };
  },
};
</script>
```

## 样式说明

组件使用 `scoped` 样式，确保样式隔离。

### 样式特性

- `border-radius: 50%` - 圆形显示
- `object-fit: cover` - 图片自适应填充，保持比例
- `display: block` - 块级显示

## 注意事项

1. `url` 是必填属性，必须提供有效的图片地址
2. `size` 单位为像素（px），会同时设置宽度和高度
3. 图片会自动裁剪为圆形，使用 `object-fit: cover` 保持比例
4. 建议使用正方形图片以获得最佳显示效果

## 测试

运行测试页面：

```bash
npm run test:Avatar
```

或使用 vue serve：

```bash
vue serve ./src/components/Avatar/test.vue
```
