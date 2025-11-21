<template>
  <div class="home-container" ref="container">
    <h1>首页</h1>
    <button @click="handleClick">click</button>
  </div>
</template>

<script>
export default {
  methods: {
    handleClick() {
      this.$showMessage({
        context: "点击成功",
        type: "success",
        duration: 2000,
        container: this.$refs.container,
        callback: function () {
          console.log("成功！");
        },
      });
    },
  },
};
</script>

<style>
.home-container {
  width: 300px;
  height: 500px;
}
</style>
