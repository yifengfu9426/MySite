import "./mock/index";
import Vue from "vue";
import App from "./App.vue";
import "./styles/global.less";
import router from "@/router/index.js";
import showMessage from "@/utils/showMessage";

Vue.prototype.$showMessage = showMessage;

// 注册全局指令
import vloading from "@/directives/loading";
Vue.directive("loading", vloading);

const vm = new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
