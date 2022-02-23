<template>
  <div class="cart">
    <!-- // Steps goes here -> step 1 -> step 2 -> step 3 -->
    <div class="cart-box">
      <checkout-list
        class="checkout-list-container"
        :cart="cart"
      ></checkout-list>
      <checkout-details :total-price="totalPrice.price"></checkout-details>
    </div>
  </div>
</template>

<script setup>
import store from "@/store";
import { computed, onMounted, reactive } from "vue";
import CheckoutList from "@/components/TheCheckout/CheckoutList";
import CheckoutDetails from "@/components/TheCheckout/CheckoutDetails";
import { DISCOUNT_CALCULATE } from "@/helpers/calculate/discountCalculator.js";

const totalPrice = reactive({ price: 0 });

const cart = computed(() => {
  return store.state.cart;
});
onMounted(() => {
  const allProductsPrices = store.state.cart.map(
    (prod) => DISCOUNT_CALCULATE(prod.discount, prod.price) * prod.quantity
  );
  if (allProductsPrices.length) {
    totalPrice.value = allProductsPrices.reduce((acc, val) => (acc += val));
  }
});
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
</style>
