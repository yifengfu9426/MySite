<template>
  <div class="test-container">
    <div class="image-wrapper">
      <ImageLoader
        src="https://picsum.photos/800/600?random=1"
        placeholder="https://picsum.photos/100/100?random=2"
        :duration="500"
        @load="handleLoad"
      />
    </div>
  </div>
</template>

<script>
import ImageLoader from "./index.vue";

export default {
  components: {
    ImageLoader,
  },
  data() {
    return {
      loaded: false,
    };
  },
  methods: {
    handleLoad() {
      this.loaded = true;
    },
  },
};
</script>

<style lang="less" scoped>
.test-container {
  padding: 20px;

  .image-wrapper {
    width: 800px;
    height: 600px;
    margin: 20px 0;
  }

  p {
    color: #7ebf50;
    font-weight: bold;
  }
}
</style>
