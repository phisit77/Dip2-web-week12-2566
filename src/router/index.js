import { createRouter, createWebHistory } from "vue-router";
import RedirectPage from "../view/RedirectVue.vue";
import NotFound from "../view/NotFound.vue";

 const routes = [
   {
     path: "/",
     name: "home",
     component: () => import("../view/HomePage.vue"),
   },
   {
     path: "/user",
     name: "user",
     component: () => import("../view/UsersPage.vue"),
   },
   {
     path: "/redirect",
     name: "redirect",
     component: RedirectPage,
   },
   {
     path: "/member",
     redirect: "/redirect",
   },
   {
     path: "/:pathMatch(.*)*",
     name: "NotFound",
     component: NotFound,
   },
 ];
    
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;