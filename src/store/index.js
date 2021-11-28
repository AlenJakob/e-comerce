import { reactive } from "vue";
import SHOES_COLLECTION from "@/services/collections/index";
const state = reactive({
  cart: [],
});

const methods = {
  addProduct(id, details) {
    console.log(id);
    console.log(details);
    console.log(SHOES_COLLECTION);
    const product = SHOES_COLLECTION.shoes.find((product) => product.id === id);
    const fullyProductDetails = { ...product, ...details };
    console.log(fullyProductDetails);
    state.cart.push(fullyProductDetails);
  },
  removeProduct(id) {
    console.log(id);
  },
};

export default {
  state,
  methods,
};
