<template>
  <div class="test-container">
    <Icon v-for="t in types" :key="t" :type="t" />
  </div>
</template>

<script>
import Icon, { types } from "./index.vue";

export default {
  components: {
    Icon,
  },
  data() {
    return {
      types,
    };
  },
};
</script>

<style lang="less" scoped>
.test-container {
  display: flex;
  justify-content: center;
  .icon-container {
    margin: 10px 10px;
    font-size: 40px;
  }
}
</style>
