<template>
  <div class="the-product-info">
    <p>{{ itemInfo.brand_name }}</p>
    <p>{{ itemInfo.name }}</p>
    <p>{{ itemInfo.sku }}</p>
    <p>{{ itemInfo.description }}</p>
    <p>{{ itemInfo.collection_slugs }}</p>
    <p>{{ itemInfo.color }}</p>
    <p>{{ itemInfo.price }}</p>
    <p>{{ itemInfo.price * 2 }}</p>
    <p>{{ itemInfo.discount }}</p>
    <p>{{ SHOE_CALCULATE(itemInfo.size_range) }}</p>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
// NOTE: method accept array
import SHOE_CALCULATE from "@/helpers/index";
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
p {
  padding: 10px;
  margin: 10px;
  border: 1px solid orange;
}
</style>
