import "./mock/index";
import Vue from "vue";
import App from "./App.vue";
import "./styles/global.less";
import router from "@/router/index.js";
import showMessage from "@/utils/showMessage";

Vue.prototype.$showMessage = showMessage;

const vm = new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
