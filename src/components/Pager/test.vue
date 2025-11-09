<template>
  <div>
    <h3 style="color: #333; padding: 16px; background: #f6f6f6">
      Pager 测试页 — 如果你看得到这行，说明 JS 已挂载
    </h3>
    <Pager />
  </div>
</template>

<script>
import Pager from "./index.vue";
export default {
  components: { Pager },
  mounted() {
    // 如果控制台能看到这条，说明组件已被挂载
    console.log("test.vue mounted");
  },
};
</script>

<style scoped>
/* 确保 Pager 中的链接可见 */
.pager-container a {
  color: #1a73e8;
  margin: 0 6px;
  text-decoration: none;
}
</style>