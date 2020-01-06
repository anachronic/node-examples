import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/data",
    name: "data",
    component: () => import(/* webpackChunkName: "about" */ "../views/Data.vue")
  },
  {
    path: "/computed",
    name: "computed",
    component: () =>
      import(/* webpackChunkName: "computed" */ "../views/Computed.vue")
  },
  {
    path: "/props",
    name: "props",
    component: () =>
      import(/* webpackChunkName: "props" */ "../views/Props.vue")
  },
  {
    path: "/form",
    name: "form",
    component: () => import(/* webpackChunkName: "form" */ "../views/Form.vue")
  },
  {
    path: "/mounted",
    name: "mounted",
    component: () =>
      import(/* webpackChunkName: "mounted" */ "../views/Mounted.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
