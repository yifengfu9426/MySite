<template>
  <ul class="right-list-container">
    <li v-for="item in list" :key="item.name">
      <span @click="clickHandler(item)" :class="{ active: item.selected }">{{
        item.name
      }}</span>
      <RightList :list="item.chlidren" @select="selectHandler" />
    </li>
  </ul>
</template>

<script>
export default {
  name: "RightList",
  props: {
    // [{name:"xxx",selected:true,chlidren[{name:"xxx",selected:true,chlidren:{}}]}]
    list: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    clickHandler(item) {
      this.$emit("select", item);
    },
    selectHandler(item) {
      this.$emit("select", item);
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.right-list-container {
  list-style: none;
  padding: 0;
  .right-list-container {
    margin-left: 1em;
  }
  li {
    min-height: 40px;
    line-height: 40px;
    font-size: 20px;
    cursor: pointer;
    color: black;
    font-weight: normal;
    span.active {
      color: @warn;
      font-weight: bold;
    }
  }
}
</style>
