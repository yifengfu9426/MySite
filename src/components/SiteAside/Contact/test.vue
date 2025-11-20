<template>
  <div class="test-contact-container">
    <Contact />
  </div>
</template>

<script>
import Contact from "../Contact";
export default {
  components: {
    Contact,
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.test-contact-container {
  height: 1000px;
  padding-top: 300px;
  background: @dark;
}
</style>
