<template>
  <img
    class="product-thumbnail__img"
    :src="props.item.img"
    alt="temporary shoes please place alt"
    @click="getImage(props.item)"
  />
</template>

<script setup>
import { defineProps, defineEmits } from "vue";
const props = defineProps({
  item: {
    type: Object,
    default: () => ({}),
  },
  index: {
    type: Number,
    default: 0,
  },
});

const emit = defineEmits(["set-image"]);
const getImage = ({ img }) => {
  emit("set-image", img);
};
</script>

<style lang="scss" scoped>
.product-thumbnail__img {
  border: 3px dashed transparent;
  padding: 2px;
  margin-right: 8px;
  object-fit: cover;
  border-radius: 4px;
  width: 70px;
  height: 70px;
  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }
  &:active {
    opacity: 0.7;
    cursor: pointer;
  }
  &:last-child {
    margin-right: 0;
  }
}
</style>
