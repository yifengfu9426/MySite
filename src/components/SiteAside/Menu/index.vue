<template>
  <nav class="menu-container">
    <a
      v-for="obj in items"
      :key="obj.link"
      :href="obj.link"
      :class="{ selected: isSelected(obj) }"
    >
      <div class="icon">
        <Icon :type="obj.icon" />
      </div>
      <span>{{ obj.title }}</span>
    </a>
  </nav>
</template>

<script>
import Icon from "@/components/Icon";
export default {
  components: {
    Icon,
  },
  data() {
    return {
      items: [
        {
          link: "/",
          title: "首页",
          icon: "home",
          startWith: false,
        },
        {
          link: "/blog",
          title: "文章",
          icon: "blog",
          startWith: true,
        },
        {
          link: "/about",
          title: "关于我",
          icon: "about",
          startWith: true,
        },
        {
          link: "/project",
          title: "项目&效果",
          icon: "code",
          startWith: true,
        },
        {
          link: "/message",
          title: "留言板",
          icon: "chat",
          startWith: true,
        },
      ],
    };
  },
  methods: {
    isSelected(item) {
      var path = item.link.toLowerCase();
      var curPathname = location.pathname.toLowerCase();
      if (item.startWith) {
        return curPathname.startsWith(path);
      } else {
        return path === curPathname;
      }
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.menu-container {
  color: @gray;
  margin: 24px 0;
  a {
    color: inherit;
    padding: 0 50px;
    font-size: 20px;
    text-decoration: none;
    display: flex;
    align-items: center;
    height: 45px;
    .icon {
      margin-right: 20px;
    }
    &:hover {
      color: white;
    }
    &.selected {
      background: #2d2d2d;
    }
  }
}
</style>
