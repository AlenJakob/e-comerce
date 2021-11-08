<template>
  <div class="the-gallery">
    <div>
      <img
        class="the-gallery__image"
        :src="require(`../assets/img/${currentImg}.jpg`)"
        :alt="images[0].url"
      />
      <div class="the-gallery__panel">
        <img
          class="the-gallery__panel-thumbnail"
          v-for="img in images"
          :key="img.id"
          :src="require(`../assets/img/${img.thumb}.jpg`)"
          @click="getImage(img)"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    images: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      currentImg: this.images[0].img,
    };
  },
  methods: {
    getImage(image) {
      this.currentImg = image.img;
    },
  },
};
</script>

<style lang="scss" scoped>
.the-gallery {
  flex: 1;

  &__image {
    width: 230px;
    height: 230px;
    border-radius: 4px;
    margin-bottom: 8px;
  }

  &__panel {
    display: flex;
    gap: 10px;
  }

  &__panel-thumbnail {
    border-radius: 4px;
    width: 50px;
    height: 50px;
    &:hover {
      opacity: 0.8;
      cursor: pointer;
    }
    &:active {
      opacity: 0.7;
      cursor: pointer;
    }
  }
}
</style>
