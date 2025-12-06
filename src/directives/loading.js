import url from "@/assets/loading.svg";
import style from "./loading.module.less";

// 判断Loading元素是否存在
function isExist(el) {
  return el.querySelector("img[data-role=loading]");
}

// 创建Loading元素
function getLoadingElement() {
  const loading = document.createElement("img");
  loading.dataset.role = "loading";
  loading.className = style.loading;
  loading.src = url;
  return loading;
}

// 导出指令的配置对象
export default function (el, binding) {
  const loading = isExist(el);
  if (binding.value) {
    if (!loading) {
      const img = getLoadingElement();
      el.appendChild(img);
    }
  } else {
    if (loading) {
      loading.remove();
    }
  }
}
