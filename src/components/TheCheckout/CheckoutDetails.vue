<template>
  <div class="cart-details">
    <div class="cart-details__info">
      <h3>total price</h3>
      <span v-show="total">
        <h3>{{ total }} $</h3></span
      >
    </div>
    <base-button :is-bold="true" uppercase text="next"></base-button>
  </div>
</template>

<script setup>
import BaseButton from "@/components/ui/utils/BaseButton";
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
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  &__info {
    box-sizing: border-box;
    padding: 0.5rem;
    background: rgba($c-accent, 0.1);
    width: 350px;
    height: 200px;
  }
}
</style>
