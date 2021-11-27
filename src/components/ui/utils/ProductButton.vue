<template>
  <button class="product-button" :class="{ 'product-button--bold': isBold }">
    <slot></slot>
    <span>{{ props.text }}</span>
  </button>
</template>

<script setup>
import { defineProps } from "vue";
const props = defineProps({
  text: {
    type: String,
    default: "click",
  },
  isBold: {
    type: Boolean,
    default: false,
  },
});
</script>

<style lang="scss" scoped>
.product-button {
  margin: 2rem 0;
  background: $c-orange;
  color: $c-white;
  border-radius: 0.4rem;
  border: none;
  height: 46px;
  min-width: 200px;
  cursor: pointer;
  &:hover {
    background: rgba($c-orange, 0.9);
  }
  &--bold {
    font-weight: $fw-bold;
  }
}
</style>
