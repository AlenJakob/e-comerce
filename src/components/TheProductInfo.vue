<template>
  <div class="the-product-info">
    <h3>{{ itemInfo.brand_name }}</h3>
    <h3>{{ itemInfo.name }}</h3>
    <h3>{{ itemInfo.sku }}</h3>
    <p>{{ itemInfo.description }}</p>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
  itemInfo: {
    type: Object,
    default: () => ({}),
  },
});
</script>
<style lang="scss" scoped>
.the-product-info {
  flex: 1;
}
</style>
