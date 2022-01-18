<template>
  <div class="cart">
    // Steps goes here -> step 1 -> step 2 -> step 3
    <div class="cart-box">
      <checkout-list
        class="checkout-list-container"
        :cart="cart"
      ></checkout-list>
      <div class="mock-box"></div>
    </div>
  </div>
</template>

<script setup>
import store from "@/store";
import { computed } from "vue";
import CheckoutList from "@/components/TheCheckout/CheckoutList";
const cart = computed(() => {
  return store.state.cart;
});

// const emit = defineEmits(["close-cart"]);
// const closeCart = () => {
//   emit("close-cart");
// };
</script>

<style lang="scss" scoped>
.checkout-list-container {
  width: 100%;
}
.cart-box {
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
  padding: 1rem 0;
  gap: 1rem;
}
.mock-box {
  box-sizing: border-box;
  padding: 0.5rem;
  background: rgba($c-black, 0.1);
  width: 350px;
  height: 200px;
}
</style>
