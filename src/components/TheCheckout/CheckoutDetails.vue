<template>
  <div class="cart-details">
    <h3>total price</h3>
    <span> {{ total }}</span>
  </div>
</template>

<script setup>
import { defineProps, computed } from "vue";

const props = defineProps({
  totalPrice: {
    type: Number,
    default: 0,
  },
});

const total = computed(() => {
  return props.totalPrice.value;
});
</script>

<style lang="scss" scoped>
.cart-details {
  box-sizing: border-box;
  padding: 0.5rem;
  background: rgba($c-black, 0.1);
  width: 350px;
  height: 200px;
}
</style>
