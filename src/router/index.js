import Vue from "vue";
import VueRouter from "vue-router";
import Main from "../views/Main/indexMain.vue";
import Login from "../views/Login/indexLogin.vue";
Vue.use(VueRouter);
const routes = [
  {
    path: "/",
    name: "Login",
    component: Login,
  },
  {
    path: "/main",
    name: "Main",
    component: Main,
    children: [
      {
        path: "/home",
        name: "Home",
        component: () => import("../views/Home/indexHome.vue"),
      },
    ],
  },
  {
    path: "/app/*",
    name: "App",
    component: Main,
  },
];

const router = new VueRouter({
  mode: "history",
  // base: process.env.BASE_URL,
  base: "",
  routes,
});

export default router;
