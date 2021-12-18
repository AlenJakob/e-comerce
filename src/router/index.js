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
    name: "Collections",
    component: () =>
      import(/* webpackChunkName: "collections" */ "../views/Collections.vue"),
  },
  {
    path: "/men",
    name: "Men",
    component: () => import(/* webpackChunkName: "men" */ "../views/Men.vue"),
  },
  {
    path: "/women",
    name: "Women",
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
    name: "Contact",
    component: () =>
      import(/* webpackChunkName: "contact" */ "../views/Contact.vue"),
  },
  {
    path: "/cart",
    name: "Cart",
    component: () => import(/* webpackChunkName: "cart" */ "../views/Cart.vue"),
  },
  {
    path: "/product/:id",
    name: "ProductDetails",
    props: true,
    component: () =>
      import(/* webpackChunkName: "cart" */ "../views/ProductDetails.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
