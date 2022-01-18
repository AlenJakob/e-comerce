<template>
  <div>
    <checkout-list-item
      class="checkout-list"
      v-for="item in cartList"
      :key="`item-${item}`"
      :product-name="item.name"
      :brand-name="item.brand_name"
      :product-price="item.price"
      :product-discount="item.discount"
      :product-image="item.main_image[0]"
      :product-id="item.id"
      :product-size="item.size"
      :product-qty="item.quantity"
    ></checkout-list-item>
  </div>
</template>

<script setup>
import CheckoutListItem from "./CheckoutListItem.vue";
import { defineProps, computed } from "vue";

const props = defineProps({
  cart: {
    type: Array,
    default: () => [],
  },
});

const cartList = computed(() => {
  return props.cart;
});
</script>

<style lang="scss" scoped></style>
