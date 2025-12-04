<template>
  <div class="site-aside-container">
    <Avatar :url="avatar.url" :size="avatar.size" />
    <Menu />
    <Contact />
  </div>
</template>

<script>
import Avatar from "@/components/Avatar";
import Menu from "@/components/SiteAside/Menu";
import Contact from "@/components/SiteAside/Contact";
export default {
  components: {
    Avatar,
    Menu,
    Contact,
  },
  data() {
    return {
      avatar: {
        url: "https://cdn.pixabay.com/photo/2025/06/25/22/55/lavender-9680870_1280.jpg",
        size: 150,
      },
    };
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
@import "~@/styles/global.less";
html,
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.site-aside-container {
  width: 100%;
  height: 100%;
  background: @dark;
  padding: 20px 0;
  color: @gray;
  box-sizing: border-box;
  overflow: auto;
  // overflow-y: auto;
  .avatar-container {
    margin: 0 auto;
    margin-bottom: 100px;
  }
  .menu-container {
    margin-bottom: 100px;
  }
}
</style>
