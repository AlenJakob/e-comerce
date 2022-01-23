<template>
  <div class="cart-details">
    <div class="cart-details__info">
      <h3 class="cart-details__info-value">
        total price: <span v-show="total">{{ total }} $</span>
      </h3>
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
  border-radius: 4px;
  &__info {
    display: flex;
    box-sizing: border-box;
    padding: 0.5rem;
    margin-bottom: 1rem;
    border: 2px solid rgba($c-accent, 0.2);
    width: 350px;
    height: 100px;
  }
  &__info-value {
    margin: auto;
  }
}
</style>
