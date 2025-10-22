import { createRouter, createWebHistory } from "vue-router";
import Todo from "../views/Todo.vue";
import Home from "../views/Home.vue";
import CountNumber from "../views/CountNumber.vue";
import ShopView from "../views/ShopView.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/like", component: CountNumber },
  { path: "/shop", component: ShopView },
  {
    path: "/todo",
    component: Todo,
    meta: {
      requiresAuth: true,
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
