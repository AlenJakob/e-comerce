<template>
  <div>
    <img
      class="the-thumbnail__img"
      :src="props.item.img"
      @click="getImage(props.item)"
    />
  </div>
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
.the-thumbnail__img {
  padding: 2px;
  margin-right: 8px;
  object-fit: cover;
  border-radius: 4px;
  width: 94px;
  height: 94px;
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
