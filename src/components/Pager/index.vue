<template>
  <div class="pager-container" v-if="pages > 1">
    <a :class="{ disabled: current === 1 }" @click="handlePage(1)">
      |&lt;&lt;
    </a>
    <a :class="{ disabled: current === 1 }" @click="handlePage(current - 1)">
      &lt;&lt;
    </a>
    <a
      v-for="(n, i) in numbers"
      :key="i"
      :class="{ active: n === current }"
      @click.prevent="handlePage(n)"
      >{{ n }}</a
    >
    <a
      :class="{ disabled: current === pages }"
      @click="handlePage(current + 1)"
    >
      &gt;&gt;
    </a>
    <a :class="{ disabled: current === pages }" @click="handlePage(pages)">
      &gt;&gt;|
    </a>
  </div>
</template>

<script>
export default {
  computed: {
    pages() {
      return Math.ceil(this.total / this.limit);
    },
    visibleMin() {
      let min = this.current - Math.floor(this.visible / 2);
      if (min < 1) {
        min = 1;
      }
      return min;
    },
    visibleMax() {
      let max = this.visibleMin + this.visible - 1;
      if (max > this.pages) {
        max = this.pages;
      }
      return max;
    },
    numbers() {
      let nums = [];
      for (let i = this.visibleMin; i <= this.visibleMax; i++) {
        nums.push(i);
      }
      return nums;
    },
  },
  methods: {
    handlePage(newPage) {
      if (newPage < 1) {
        newPage = 1;
      }
      if (newPage > this.pages) {
        newPage = this.pages;
      }
      if (newPage === this.current) {
        return;
      }
      this.$emit("pageChange", newPage);
    },
  },
  props: {
    total: {
      type: Number,
      default: 10,
    },
    current: {
      type: Number,
      default: 1,
    },
    limit: {
      type: Number,
      default: 10,
    },
    visible: {
      type: Number,
      default: 10,
    },
  },
};
</script>

<style lang="less" scoped>
@import "@/styles/global.less";
@import "@/styles/var.less";
.pager-container {
  display: flex;
  justify-content: center;
  align-items: center;
  a {
    margin: 0 6px;
    color: @primary;
    cursor: pointer;
  }
  .active {
    color: @words;
    font-weight: bold;  
    cursor: default;
  }
  .disabled {
    color: @gray;
    cursor: no-drop;
  }
}
</style>
