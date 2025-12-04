<template>
  <nav class="menu-container">
    <router-link
      v-for="obj in items"
      :key="obj.name"
      :to="{ name: obj.name }"
      :exact="obj.exact"
    >
      <div class="icon">
        <Icon :type="obj.icon" />
      </div>
      <span>{{ obj.title }}</span>
    </router-link>
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
          name: "Home",
          title: "首页",
          icon: "home",
          exact: true,
        },
        {
          name: "Blog",
          title: "文章",
          icon: "blog",
          exact: false,
        },
        {
          name: "About",
          title: "关于我",
          icon: "about",
          exact: true,
        },
        {
          name: "Project",
          title: "项目&效果",
          icon: "code",
          exact: true,
        },
        {
          name: "Message",
          title: "留言板",
          icon: "chat",
          exact: true,
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
    padding: 0 30px;
    font-size: 22px;
    text-decoration: none;
    display: flex;
    align-items: center;
    white-space: nowrap;
    height: 55px;
    .icon {
      margin-right: 20px;
    }
    &:hover {
      color: white;
    }
    &.router-link-active {
      background: #2d2d2d;
    }
  }
}
</style>
