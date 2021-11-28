<template>
  <div class="cart-tooltip">
    <div class="cart-tooltip__product" v-for="item in cart" :key="item.id">
      <!-- {{ item }} -->
      <div class="product-details">
        <p>{{ item.brand_name }}</p>
        <p>{{ item.price }}</p>
        <p>{{ item.price / 2 }}</p>
      </div>
      <button class="product-btn">remove</button>
    </div>
    <product-button class="cart-btn" text="checkout"></product-button>
  </div>
</template>

<script setup>
import ProductButton from "@/components/ui/utils/ProductButton";
import store from "@/store";
import { computed } from "vue";
const cart = computed(() => {
  return store.state.cart;
});
console.log(store);
</script>
<style scoped lang="scss">
.cart-tooltip {
  box-sizing: border-box;
  position: absolute;
  min-height: 180px;
  padding: 1rem;
  width: 300px;
  right: 0;
  top: calc(150px / 2 - 20px);
  background: white;
  box-shadow: 0px 15px 15px rgba($c-black, 0.1);
  &__product {
    margin: 1rem 0;
    display: flex;
  }
}
.product-details {
  display: flex;
  flex: 1;
  margin: 1rem;
}
.cart-btn.product-button {
  width: 100%;
}
</style>
