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


  ],
});



export default router;
