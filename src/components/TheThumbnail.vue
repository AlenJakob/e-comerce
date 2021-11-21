<template>
  <img
    class="the-thumbnail__img"
    :class="{ active: id === img.id }"
    :src="require(`../assets/img/${img.thumb}.jpg`)"
    @click="getImage(img)"
  />
</template>

<script>
export default {
  props: {
    img: {
      type: Object,
      default: () => ({}),
    },
    id: {
      type: Number,
      default: 0,
    },
  },
  methods: {
    getImage(img) {
      this.$emit("set-image", img);
    },
  },
  computed: {},
};
</script>

<style lang="scss" scoped>
.the-thumbnail__img {
  margin-right: 8px;
  object-fit: contain;
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
.active {
  box-shadow: 0 0 0 2px $c-orange;
  filter: grayscale(60%);
}
</style>
