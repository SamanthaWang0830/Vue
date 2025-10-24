import { createRouter, createWebHistory } from "vue-router";
import Todo from "../views/Todo.vue";
import Home from "../views/Home.vue";
import CountNumber from "../views/CountNumber.vue";
import ShopView from "../views/ShopView.vue";
import Login from "../views/Login.vue";
import ProductDetail from "../views/ProductDetail.vue";
import User from "../views/User.vue";
import Profile from "../components/Profile.vue";
import Settings from "../components/Settings.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/like", component: CountNumber },
  { path: "/shop", component: ShopView },
  { path: "/product/:id", component: ProductDetail },
  {
    path: "/todo",
    component: Todo,
    meta: {
      requiresAuth: true,
    },
  },
  { path: "/login", component: Login },
  {
    path: '/user',
    component: User,
    // 子路由的 path 不要以 / 开头
    // 子路由 显示在父组件的 <router-view> 里
    children:[
      {
        path:'',
        component: Profile
      },
      {
        path:'profile',
        component: Profile
      },
      {
        path:'settings',
        component: Settings
      },
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
