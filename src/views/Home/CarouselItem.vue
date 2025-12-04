<template>
  <div class="carousel-item-container">
    <div class="carousel-img">
      <ImageLoader
        @load="handleLoad"
        :src="banner.bigImg"
        :placeholder="banner.midImg"
      />
    </div>
    <div class="title" ref="title">
      {{ banner.title }}
    </div>
    <div class="description" ref="description">
      {{ banner.description }}
    </div>
  </div>
</template>

<script>
import ImageLoader from "@/components/ImageLoader";
export default {
  components: {
    ImageLoader,
  },
  data() {
    return {
      titleWidth,
      descriptionWidth,
    };
  },
  props: {
    banner: { type: Object, default: () => ({}) },
  },
  mounted() {
    this.titleWidth = this.$refs.title.clientWidth;
    this.descriptionWidth = this.$refs.description.clientWidth;
  },
  methods: {
    handleLoad() {
      this.widthTo();
    },
    widthTo() {
      this.$refs.title.style.opacity = 1;
      this.$refs.title.style.width = 0;
      this.$refs.title.clientWidth;
      this.$refs.title.style.width = this.titleWidth + "px";

      this.$refs.description.style.opacity = 1;
      this.$refs.description.style.width = 0;
      this.$refs.description.clientWidth;
      this.$refs.description.style.width = this.descriptionWidth + "px";
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.carousel-item-container {
  position: relative;
  background: @dark;
  color: white;
  width: 100%;
  height: 100%;
  .carousel-img {
    width: 100%;
    height: 100%;
  }
  .title,
  .description {
    position: absolute;
    left: 30px;
    color: white;
    text-shadow: 1px 0 0 rgba(0, 0, 0, 0.5), -1px 0 0 rgba(0, 0, 0, 0.5),
      0 1px 0 rgba(0, 0, 0, 0.5), 0 -1px 0 rgba(0, 0, 0, 0.5);
    white-space: nowrap;
    overflow: hidden;
    opacity: 0;
  }

  .title {
    top: calc(50% - 120px);
    font-size: 2em;
    transition: 1s;
  }
  .description {
    top: calc(50% - 60px);
    font-size: 1.1em;
    transition: 2s 1s;
  }
}
</style>
