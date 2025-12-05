<template>
  <div
    class="carousel-item-container"
    ref="container"
    @mousemove="handleMousemove"
  >
    <div class="carousel-img" ref="image" :style="imagePosition">
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
      titleWidth: 0,
      descriptionWidth: 0,
      containerSize: {
        width: 0,
        height: 0,
      },
      innerSize: {
        width: 0,
        height: 0,
      },
      moveLeft: 0,
      moveTop: 0,
    };
  },
  props: {
    banner: { type: Object, default: () => ({}) },
  },
  computed: {
    imagePosition() {
      return {
        left: this.moveLeft + "px",
        top: this.moveTop + "px",
      };
    },
  },
  mounted() {
    this.titleWidth = this.$refs.title.clientWidth;
    this.descriptionWidth = this.$refs.description.clientWidth;
    this.setSize();
    window.addEventListener("resize", this.setSize);
  },
  destroyed() {
    window.removeEventListener("resize", this.setSize);
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
    setSize(e) {
      this.containerSize.width = this.$refs.container.clientWidth;
      this.containerSize.height = this.$refs.container.clientHeight;

      this.innerSize.width = this.$refs.image.clientWidth;
      this.innerSize.height = this.$refs.image.clientHeight;
    },
    handleMousemove(e) {
      // 计算图片需要移动的距离
      this.moveLeft = Math.floor(
        (e.offsetX / this.containerSize.width) *
          (this.containerSize.width - this.innerSize.width)
      );
      this.moveTop = Math.floor(
        (e.offsetY / this.containerSize.height) *
          (this.containerSize.height - this.innerSize.height)
      );
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.carousel-item-container {
  position: relative;
  color: white;
  width: 100%;
  height: 100%;
  overflow: hidden;
  .carousel-img {
    width: 110%;
    height: 110%;
    position: absolute;
    z-index: -1;
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
