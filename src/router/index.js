import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/collections",
    name: "collections",
    component: () =>
      import(/* webpackChunkName: "collections" */ "../views/Collections.vue"),
  },
  {
    path: "/men",
    name: "men",
    component: () => import(/* webpackChunkName: "men" */ "../views/Men.vue"),
  },
  {
    path: "/women",
    name: "women",
    component: () =>
      import(/* webpackChunkName: "women" */ "../views/Women.vue"),
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/contact",
    name: "contact",
    component: () =>
      import(/* webpackChunkName: "contact" */ "../views/Contact.vue"),
  },
  {
    path: "/cart",
    name: "cart",
    component: () => import(/* webpackChunkName: "cart" */ "../views/Cart.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
export default router;
