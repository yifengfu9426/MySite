<template>
  <div class="test-container">
    <SiteAside />
  </div>
</template>

<script>
import SiteAside from "@/components/SiteAside";
export default {
  components: {
    SiteAside,
  },
};
</script>

<style lang="less" scoped>
.test-container {
  width: 250px;
  height: 600px;
  margin: 0 auto;
}
</style>
