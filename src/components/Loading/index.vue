<template>
  <img class="loading-container" :src="url" alt="" />
</template>

<script>
import url from "@/assets/loading.svg";
export default {
  data() {
    return {
      url,
    };
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/mixin.less";
.loading-container {
  .self-center();
}
</style>
