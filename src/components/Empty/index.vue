<template>
  <div class="empty-container">
    <Icon :type="type" />
    <span>{{ text }}</span>
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
.empty-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: @gray;
  .iconfont {
    font-size: 120px;
  }
  span {
    margin-top: 10px;
    font-size: 22px;
    font-weight: bold;
  }
}
</style>
