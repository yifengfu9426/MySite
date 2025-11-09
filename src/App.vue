<template>
  <div>
    <h1>App组件</h1>
    <Avatar
      url="https://cdn.pixabay.com/photo/2025/06/25/22/55/lavender-9680870_1280.jpg"
      :size="150"
    />
    <Pager />
  </div>
</template>
<script>
import Avatar from "./components/Avatar";
import Pager from "./components/Pager/index.vue";
export default {
  name: "App",
  components: {
    Avatar,
    Pager,
  },
};
</script>