import { reactive } from "vue";
import SHOES_COLLECTION from "@/services/collections/index";
import { DISCOUNT_CALCULATE } from "@/helpers/calculate/discountCalculator.js";

const state = reactive({
	cart: [],
	messageStatus: false,
	messageText: "",
	messageState: "",
	overlayState: false,
	totalPrice: 0,
});

const methods = {
	addProduct(id, detail) {
		const isProductInCart = state.cart.find(
			(prod) => prod.id === id && prod.size === detail.size
		);

		const product = SHOES_COLLECTION.shoes.find((product) => product.id === id);
		let fullyLoadedProduct = { ...product, ...detail };

		if (isProductInCart) {
			isProductInCart.quantity = isProductInCart.quantity + detail.quantity;
			this.recalculateProdutsPrices();
			return 
		}
		state.cart.push(fullyLoadedProduct);

		this.showMessage("Product has been added to cart", "success");
		this.recalculateProdutsPrices();
	},

	//while Back-end change - TODO: have to remove product base on id
	removeProduct(id, size) {
		state.cart = state.cart.filter((obj) => {
			return !(obj.id === id && obj.size === size);
		});
		this.recalculateProdutsPrices();
		this.showMessage("Product has been removed from cart", "danger");
	},

	showMessage(txt = "", msgState = "") {
		state.messageText = txt;
		state.messageState = msgState;
		state.messageStatus = true;
		setTimeout(() => {
			state.messageStatus = false;
		}, 2000);
	},

	toggleMobileMenu() {
		state.overlayState = !state.overlayState;
	},

	recalculateProdutsPrices() {
		const allProductsPrices = state.cart.map((prod) => {
			return DISCOUNT_CALCULATE(prod.discount, prod.price) * prod.quantity;
		});
		state.totalPrice = allProductsPrices.reduce((acc, val) => (acc += val), 0);
	},
};

export default {
	state,
	methods,
};
