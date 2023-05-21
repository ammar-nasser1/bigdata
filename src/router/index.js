import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import HumanInfo from "../views/HumanInfo.vue";
import dashboard from "../views/DashboardApp.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/human",
    name: "human",
    component: HumanInfo,
  },
  {
    path: "/dash",
    name: "dash",
    component: dashboard,
    children: [
      {
        path: "/over",
        name: "over",
        component: () =>
          import(/* webpackChunkName: "Overview" */ "../views/OverviewApp.vue"),
      },
      {
        path: "/messages",
        name: "messages",
        component: () =>
          import(/* webpackChunkName: "Messages" */ "../views/MessagesApp.vue"),
      },
      {
        path: "/profile",
        name: "profile",
        component: () =>
          import(/* webpackChunkName: "Profile" */ "../views/ProfileApp.vue"),
      },
      {
        path: "/settings",
        name: "settings",
        component: () =>
          import(/* webpackChunkName: "Settings" */ "../views/SettingsApp.vue"),
      },
    ],
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
