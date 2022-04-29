import { reactive } from "vue"
import SHOES_COLLECTION from "@/services/collections/index"

const state = reactive({
	cart: [],
	totalProducts: 0,
	messageStatus: false,
	messageText: "",
	messageState: "",
	overlayState: false
})

const methods = {
	addProduct(id, detail) {
		const isProductInCart = state.cart.find(
			(prod) => prod.id === id && prod.size === detail.size
		)

		this.showMessage("Product has been added to cart", "success")
		const product = SHOES_COLLECTION.shoes.find(
			(product) => product.id === id
		)
		let fullyLoadedProduct = { ...product, ...detail }
		if (isProductInCart) {
			return (isProductInCart.quantity =
				isProductInCart.quantity + detail.quantity)
		}
		state.cart.push(fullyLoadedProduct)
	},

	//while Back-end change - TODO: have to remove product base on id
	removeProduct(id, size) {
		state.cart = state.cart.filter((obj) => {
			return !(obj.id === id && obj.size === size)
		})
		this.showMessage("Product has been removed from cart", "danger")
	},

	showMessage(txt = "", msgState = "") {
		state.messageText = txt
		state.messageState = msgState
		state.messageStatus = true
		setTimeout(() => {
			state.messageStatus = false
		}, 1000)
	},

	toggleMobileMenu() {
		state.overlayState = !state.overlayState
	}
}

export default {
	state,
	methods
}
