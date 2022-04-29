import { createRouter, createWebHistory } from "vue-router"
import Home from "../views/Home.vue"

const routes = [
	{
		path: "/",
		name: "Home",
		component: Home
	},
	{
		path: "/collections",
		name: "Collections",
		component: () =>
			import(
				/* webpackChunkName: "collections" */ "../views/Collections.vue"
			),
		meta: {
			breadcrumbs: [{ name: "collections" }]
		}
	},
	{
		path: "/men",
		name: "Men",
		component: () =>
			import(/* webpackChunkName: "men" */ "../views/Men.vue"),
		meta: {
			breadcrumbs: [{ name: "men" }]
		}
	},
	{
		path: "/women",
		name: "Women",
		component: () =>
			import(/* webpackChunkName: "women" */ "../views/Women.vue"),
		meta: {
			breadcrumbs: [{ name: "women" }]
		}
	},
	{
		path: "/contact",
		name: "Contact",
		component: () =>
			import(/* webpackChunkName: "contact" */ "../views/Contact.vue"),
		meta: {
			breadcrumbs: [{ name: "contact" }]
		}
	},
	{
		path: "/cart",
		name: "Cart",
		component: () =>
			import(/* webpackChunkName: "cart" */ "../views/Cart.vue"),
		meta: {
			breadcrumbs: [{ name: "cart" }]
		}
	},
	{
		path: "/:id",
		name: "ProductDetails",
		props: true,
		component: () =>
			import(
				/* webpackChunkName: "productCartDetails" */ "../views/ProductDetails.vue"
			),
		meta: {
			breadcrumb() {
				const { name } = this.$route
				return {
					label: name,
					parent: "settings"
				}
			}
		}
	}
]
const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
})

export default router
