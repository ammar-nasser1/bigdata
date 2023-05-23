import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import HumanInfo from "../views/HumanInfo.vue";
import dashboard from "../views/DashboardApp.vue";
import disease from "../views/DiseaseApp.vue";
import microbiome from "../views/MicroApp.vue";
import team from "../views/TeamApp.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/home",
    name: "home",
    component: HomeView,
  },
  {
    path: "/team",
    name: "team",
    component: team,
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
        path: "/delete",
        name: "delete",
        component: () =>
          import(/* webpackChunkName: "Messages" */ "../views/DeleteApp.vue"),
      },
      {
        path: "/update",
        name: "update",
        component: () =>
          import(/* webpackChunkName: "Profile" */ "../views/UpdateHuman.vue"),
      },
      {
        path: "/creatmh",
        name: "creatmh",
        component: () =>
          import(
            /* webpackChunkName: "Settings" */ "../views/CreatManyhuman.vue"
          ),
      },
      {
        path: "/creat",
        name: "creat",
        component: () =>
          import(/* webpackChunkName: "Settings" */ "../views/CreateApp.vue"),
      },
    ],
  },
  {
    path: "/disease",
    name: "disease",
    component: disease,
    children: [
      {
        path: "/diseasedata",
        name: "diseasedata",
        component: () =>
          import(/* webpackChunkName: "Overview" */ "../views/DiseaseShow.vue"),
      },
      {
        path: "/deletedisease",
        name: "deletedisease",
        component: () =>
          import(
            /* webpackChunkName: "Messages" */ "../views/DeletDisease.vue"
          ),
      },
      {
        path: "/update",
        name: "update",
        component: () =>
          import(/* webpackChunkName: "Profile" */ "../views/UpdateHuman.vue"),
      },
      {
        path: "/creatdisease",
        name: "creatdisease",
        component: () =>
          import(
            /* webpackChunkName: "Settings" */ "../views/CreateDisease.vue"
          ),
      },
    ],
  },
  {
    path: "/microbiome",
    name: "microbiome",
    component: microbiome,
    children: [
      {
        path: "/microdata",
        name: "microdata",
        component: () =>
          import(/* webpackChunkName: "Overview" */ "../views/MicroShow.vue"),
      },
      {
        path: "/deletemicro",
        name: "deletemicro",
        component: () =>
          import(/* webpackChunkName: "Messages" */ "../views/DeleteMicro.vue"),
      },
      {
        path: "/profile",
        name: "profile",
        component: () =>
          import(/* webpackChunkName: "Profile" */ "../views/UpdateHuman.vue"),
      },
      {
        path: "/creatmicro",
        name: "creatmicro",
        component: () =>
          import(/* webpackChunkName: "Settings" */ "../views/CreateMicro.vue"),
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
