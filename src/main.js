import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);

Vue.config.productionTip = false;
const dev = process.env.NODE_ENV == "development";
import { registerMicroApps, start } from "qiankun";
registerMicroApps([
  {
    name: "sys", // 应用的名字
    entry: dev ? "//localhost:9001" : `/app/sys`, // 默认会加载这个html 解析里面的js 动态的执行 （子应用必须支持跨域）fetch
    container: "#container", // 容器id
    activeRule: "/app/sys", // 根据路由 激活的路径
  },
  {
    name: "app",
    entry: dev ? "//localhost:9000" : `/app/app`,
    container: "#container",
    activeRule: "/app/app",
  },
]);
start({ prefetch: false });

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
