<template>
  <div class="the-product">
    <h2>prod2</h2>
    <p>{{ props.itemInfo }}</p>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  itemInfo: {
    type: Object,
    default: () => ({}),
  },
});
</script>
<style lang="scss" scoped>
.the-product {
  flex: 1;
}
</style>
