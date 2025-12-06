<template>
  <div class="test-container">
    <Loading v-show="isLoading" />
    <button @click="isLoading = !isLoading">隐藏显示</button>
  </div>
</template>

<script>
import Loading from "./";
export default {
  data() {
    return {
      isLoading: true,
    };
  },
  components: {
    Loading,
  },
};
</script>

<style lang="less" scoped>
.test-container {
  position: relative;
}
</style>
