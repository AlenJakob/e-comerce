<template>
  <div class="the-gallery">
    <div>
      <img
        class="the-gallery__image"
        :src="require(`../assets/img/${currentImg}.jpg`)"
        :alt="images[0].url"
        @click="emitIsOpen"
      />
    </div>
    <div class="thumbnail">
      <the-thumbnail
        v-for="(img, i) in images"
        :class="{ active: i === activeItem }"
        :key="img.id"
        :img="img"
        @set-image="setImage"
        @click="setActiveClass(i)"
      ></the-thumbnail>
    </div>
  </div>
</template>

<script>
import TheThumbnail from "@/components/TheThumbnail";

export default {
  components: {
    TheThumbnail,
  },
  props: {
    images: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      currentImg: this.images[0].img,
      isActive: false,
      activeItem: 0,
    };
  },
  methods: {
    setImage(item) {
      this.currentImg = item.img;
    },
    setActiveClass(i) {
      this.activeItem = i;
    },
    emitIsOpen() {
      console.log("emit");
      this.$emit("open-gallery");
    },
  },
};
</script>

<style lang="scss" scoped>
.main-gallery {
  position: absolute;
  left: 0;
  top: 50%;
}
.thumbnail {
  display: flex;
  flex: 1;
}
.the-gallery {
  position: relative;
  flex: 1;
  cursor: pointer;

  &__image {
    width: 240px;
    height: 240px;
    border-radius: 4px;
    margin-bottom: 8px;
  }
}
</style>
