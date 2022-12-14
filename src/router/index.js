import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/all",
    name: "characters",
    component: () => import("../views/CharactersView.vue"),
  },
  {
    path: "/character/:id",
    name: "person",
    component: () => import("../views/CharacterView.vue"),
  },
  {
    path:"/search",
    name: "search",
    component: ()=> import("../views/SearchView.vue")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
