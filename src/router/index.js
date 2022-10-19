import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ProjectView from "../views/ProjectView.vue";
import DetailProject from "../views/DetailProject.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: HomeView,
    },
    {
      path: "/project",
      name: "Project",
      component: ProjectView,
    },
    {
      path: "/project/:id",
      name: "Detail Project",
      component: DetailProject,
    },
    {
      path: "/contact",
      name: "Contact",
      component: () => import("../views/ContactView.vue"),
    },
  ],
});

export default router;
