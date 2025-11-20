<template>
  <div class="empty-container">
    <Icon :type="type" />
    <p>{{ text }}</p>
  </div>
</template>

<script>
import Icon from "@/components/Icon/index.vue";
export default {
  components: {
    Icon,
  },
  data() {
    return {
      type: "empty",
    };
  },
  props: {
    text: {
      type: String,
      default: "无数据",
      required: false,
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
@import "~@/styles/mixin.less";
.empty-container {
  .self-center();
  color: @gray;
  .icon-container {
    font-size: 120px;
  }
  p {
    margin-top: 10px;
    font-size: 26px;
    font-weight: bold;
    text-align: center;
  }
}
</style>
