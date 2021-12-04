import { reactive } from "vue";
import SHOES_COLLECTION from "@/services/collections/index";
const state = reactive({
  cart: [],
  totalProducts: 0,
});

const methods = {
  addProduct(id, detail) {
    const isProductInCart = state.cart.find(
      (prod) => prod.id === id && prod.size === detail.size
    );

    const product = SHOES_COLLECTION.shoes.find((product) => product.id === id);

    let fullyLoadedProduct = { ...product, ...detail };
    if (isProductInCart) {
      return (isProductInCart.quantity =
        isProductInCart.quantity + detail.quantity);
    }

    state.cart.push(fullyLoadedProduct);
  },
  //   TODO: while Back end will change - have to remove product base on id
  removeProduct(id, size) {
    state.cart = state.cart.filter((obj) => {
      return !(obj.id === id && obj.size === size);
    });
  },
};

export default {
  state,
  methods,
};
