import { reactive } from "vue";
import SHOES_COLLECTION from "@/services/collections/index";
const state = reactive({
  cart: [],
  totalProducts: 0,
});

const methods = {
  addProduct(id, details) {
    console.log(state.cart.length);
    // console.log("CURRENT PRODUCT ", id);
    const isProductInCart = state.cart.find((prod) => id === prod.id);

    const product = SHOES_COLLECTION.shoes.find((product) => product.id === id);

    let fullyLoadedProduct = { ...product, ...details };

    if (isProductInCart) {
      //   console.log("SDASD___", isProductInCart);
      //   console.log(
      //     "%c That means product is in the cart",
      //     "background: #222; color: #bada55"
      //   );
      return (isProductInCart.quantity =
        isProductInCart.quantity + details.quantity);
    }
    state.cart.push(fullyLoadedProduct);
    // console.log(state.cart, "AFTER Added product");
  },
  removeProduct(id) {
    state.cart.find((product) => product.id === id);
    state.cart = state.cart.filter((item) => item.id !== id);
  },
};

export default {
  state,
  methods,
};
