/* eslint-disable prettier/prettier */
import { createRouter, createWebHistory } from "vue-router";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    {
      path: "/aboutMe",
      name: "aboutMe",
      component: () => import("../views/AboutMe.vue"),
    },

    {
      path: "/carrer",
      name: "carrer",
      component: () => import("../views/Carrer.vue"),

    },

    {
      path: "/",
      name: "main",
      component: () => import("../views/HomeView.vue"),
    },


    {
      path: "/:notFound",
      component: () => import("../views/404.vue"),
    },

    
    {
      path: "/search",
      component: () => import("../views/Search.vue"),
    },

    {
      path: "/articles",
      component: () => import("../views/Articles.vue"),
    },

    {
      path: "/spline3D",
      component: () => import("../temporary/ArticleFrontEnd.vue"),
    },

  ],
});



export default router;
