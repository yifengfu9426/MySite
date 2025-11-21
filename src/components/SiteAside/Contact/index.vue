<template>
  <div class="contact-container">
    <ul>
      <li>
        <a
          href="//github.com/yifengfu9426"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon type="github" />
          <span>yifengfu9426</span>
        </a>
      </li>
      <li>
        <a>
          <Icon type="qq" />
          <span>2206059364</span>
        </a>
        <div class="pop">
          <img :src="require('@/images/qqqrcode.png')" alt="二维码" />
        </div>
      </li>
      <li>
        <a>
          <Icon type="weixin" />
          <span>Mux212_</span>
        </a>
        <div class="pop">
          <img :src="require('@/images/wxqrcode.png')" alt="二维码" />
        </div>
      </li>
      <li>
        <a>
          <Icon type="mail" />
          <span>2206059364@qq.com</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import Icon from "@/components/Icon";
export default {
  components: {
    Icon,
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.contact-container {
  padding: 20px;
  margin: 0;
  background: @dark;
  ul {
    list-style: none;
    padding: 0;
    li {
      position: relative;
      height: 30px;
      line-height: 30px;
      margin: 20px 0;
      a {
        position: relative;
        z-index: 1;
        text-decoration: none;
        color: @gray;
        display: flex;
        cursor: pointer;
        &:hover {
          color: @write;
        }
        span {
          display: inline-block;
          transform: translateY(-1px); /* 向上挪 2 像素，可按需调整 */
        }
        .iconfont {
          margin-right: 10px;
          font-size: 24px;
        }
      }
      a:hover ~ .pop,
      .pop:hover {
        opacity: 1;
        visibility: visible;
      }
      .pop {
        position: relative;
        z-index: 100;
        display: flex;
        justify-content: center;
        align-items: center;
        transform: translateY(-190px);
        background: @write;
        width: 150px;
        height: 150px;
        opacity: 0;
        visibility: hidden;
        transition: opacity 0.3s ease, visibility 0.3s ease;
        &::after {
          content: "";
          position: absolute;
          bottom: -8px;
          left: 50%;
          transform: translateX(-50%);
          width: 0;
          height: 0;
          border-left: 8px solid transparent;
          border-right: 8px solid transparent;
          border-top: 8px solid @write;
        }
        img {
          width: 120px;
          height: 120px;
        }
      }
    }
  }
}
</style>
