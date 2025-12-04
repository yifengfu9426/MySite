<template>
  <div class="imageloader-container">
    <!-- 占位图片，带模糊效果 -->
    <img
      :src="placeholder"
      class="placeholder-image"
      :class="{ hidden: isLoaded }"
      :style="{ transitionDuration: duration + 'ms' }"
      alt=""
    />
    <!-- 原始图片 -->
    <img
      :src="src"
      class="main-image"
      :class="{ loaded: isLoaded }"
      :style="{ transitionDuration: duration + 'ms' }"
      @load="handleLoad"
      alt=""
    />
  </div>
</template>

<script>
export default {
  name: "ImageLoader",
  data() {
    return {
      isLoaded: false,
    };
  },
  props: {
    src: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      default: 300,
    },
  },
  methods: {
    handleLoad() {
      this.isLoaded = true;
      // 延迟触发load事件，确保过渡效果开始后触发
      this.$nextTick(() => {
        setTimeout(() => {
          this.$emit("load");
        }, 50);
      });
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";

.imageloader-container {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;

  .placeholder-image,
  .main-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .placeholder-image {
    filter: blur(10px);
    opacity: 1;
    transition: opacity ease;

    &.hidden {
      opacity: 0;
    }
  }

  .main-image {
    opacity: 0;
    transition: opacity ease-in-out;

    &.loaded {
      opacity: 1;
    }
  }
}
</style>
