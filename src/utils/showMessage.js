import getComponentRootDom from "./getComponentRootDom";
import Icon from "@/components/Icon";
import styles from "@/utils/showMessage.module.less";

/**
 * 显示提示信息（Toast / Message）
 *
 * @param {Object} [options] - 配置对象
 * @param {string} [options.context=""] - 显示的文本内容
 * @param {"info"|"success"|"warn"|"error"} [options.type="info"] - 提示类型
 * @param {number} [options.duration=2000] - 显示时长，单位毫秒
 * @param {HTMLElement} [options.container=document.body] - 提示插入的容器节点
 * @param {Function} [options.callback] - 提示消失后执行的回调函数
 *
 * @returns {void}
 */
export default function (options = {}) {
  // 读取弹出体参数
  const context = options.context || "";
  const type = options.type || "info";
  const duration = options.duration || 2000;
  const container = options.container || document.body;

  const iconDom = getComponentRootDom(Icon, {
    type,
  });
  const dom = document.createElement("div");
  // 设置弹出体样式
  dom.innerHTML = `<span class="${styles.icon}">${iconDom.outerHTML}</span><span>${context}</span>`;
  dom.className = `${styles.message} ${styles["message-" + type]}`;
  // 判断是否为绝对定位
  if (
    container !== document.body &&
    getComputedStyle(container).position === "static"
  ) {
    container.style.position = "relative";
  }
  container.appendChild(dom);

  // 强制重新渲染
  dom.clientHeight;
  dom.style.opacity = 1;
  dom.style.transform = `translate(-50%, -50%)`;

  // 消失动画结束后删除自身
  setTimeout(() => {
    dom.style.opacity = 0;
    dom.style.transform = `translate(-50%, -50%) translateY(-25px)`;
    dom.addEventListener(
      "transitionend",
      function () {
        dom.remove();
        options.callback && options.callback();
      },
      { once: true }
    );
  }, duration);
}
