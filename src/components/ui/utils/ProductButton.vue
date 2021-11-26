<template>
  <button class="product-button">
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
});
</script>

<style lang="scss" scoped>
.product-button {
  margin: 2rem 0;
}
</style>
