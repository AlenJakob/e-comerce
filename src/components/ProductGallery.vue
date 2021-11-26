<template>
  <div class="product-gallery">
    <div class="product-big-gallery">
      <screen-overlay :is-open="isOpen" @click="manageGallery"></screen-overlay>
      <transition name="bounce">
        <product-full-screen-gallery
          class="product-full-screen-gallery"
          v-if="isOpen"
          :images="thumbnails"
          :active-image="activeImage"
        ></product-full-screen-gallery>
      </transition>
    </div>

    <img
      class="product-gallery__image"
      :src="currentImg"
      alt="temporary alt please put something here"
      @click="manageGallery"
    />
    <div class="thumbnail">
      <product-thumbnail
        v-for="(item, index) in thumbnails"
        :key="item.id"
        :item="item"
        :class="{ active: index === activeItem }"
        @click="setActiveClass(index)"
        @set-image="setImage"
      ></product-thumbnail>
    </div>
  </div>
</template>

<script setup>
import ProductFullScreenGallery from "@/components/ui/ProductFullScreenGallery";
import ProductThumbnail from "@/components/ProductThumbnail";
import ScreenOverlay from "@/components/ui/utils/ScreenOverlay";
import { ref, defineProps, computed } from "vue";
const props = defineProps({
  images: {
    type: Array,
    default: () => [],
  },
  thumbnails: {
    type: Array,
    default: () => [],
  },
});
const currentImg = ref(props.images[0].img);
const activeItem = ref(0);

const setImage = (item) => {
  currentImg.value = item;
};
const setActiveClass = (i) => {
  activeItem.value = i;
};
const activeImage = computed(() => {
  return activeItem.value;
});

const isOpen = ref(false);

const manageGallery = () => {
  isOpen.value = !isOpen.value;
  document.querySelector(".overlay").classList.toggle("hide-outside");
};
</script>

<style lang="scss" scoped>
.main {
  position: absolute;
  left: 0;
  top: 0;
}
.thumbnail {
  display: flex;
  flex: 1;
  gap: 10px;
}

.product-gallery {
  flex: 1;

  &__image {
    cursor: pointer;
    object-fit: cover;
    width: 300px;
    height: 300px;
    border-radius: 4px;
    margin-bottom: 8px;
    &:hover {
      opacity: 0.9;
    }
  }
}
.active {
  border-color: $c-orange;
}
</style>

<style lang="scss" scoped>
body {
  margin: 0;
  padding: 0;
  overflow: hidden;
}
.header {
  color: $c-red;
}
.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.35s reverse;
}
@keyframes bounce-in {
  0% {
    transform: translate(-50%, -50%) scale(0);
  }
  50% {
    transform: translate(-50%, -50%) scale(1.1);
  }
  100% {
    transform: translate(-50%, -50%) scale(1);
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
