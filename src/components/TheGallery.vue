<template>
  <div class="the-gallery">
    <div class="the-big-gallery">
      <transition name="fade">
        <div class="overlay" v-if="isOpen" @click="manageGallery"></div>
      </transition>
      <transition name="bounce">
        <main-gallery
          class="main-gallery"
          v-if="isOpen"
          :images="thumbnails"
        ></main-gallery>
      </transition>
    </div>
    <div>
      <img
        class="the-gallery__image"
        :src="currentImg"
        :alt="images[0].url"
        @click="manageGallery"
      />
    </div>
    <div class="thumbnail">
      <the-thumbnail
        v-for="(item, i) in thumbnails"
        :key="item.id"
        :index="i"
        class="thumbnail__img"
        :class="{ active: i === activeItem }"
        :item="item"
        @set-image="setImage"
        @click="setActiveClass(i)"
      ></the-thumbnail>
    </div>
  </div>
</template>

<script setup>
import MainGallery from "@/components/ui/MainGallery";
import TheThumbnail from "@/components/TheThumbnail";
import { ref, defineProps } from "vue";
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

// const emit = defineEmits(["open-gallery"]);

const setImage = (item) => {
  currentImg.value = item;
};
const setActiveClass = (i) => {
  activeItem.value = i;
};
// const emitIsOpen = () => {
//   emit("open-gallery");
// };

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
.main-gallery {
  position: absolute;
  left: 50%;
  top: 50%;
}
.thumbnail {
  display: flex;
  flex: 1;
  gap: 10px;
}
.thumbnail__img {
  border: 3px dashed transparent;
}
.the-gallery {
  flex: 1;
  cursor: pointer;

  &__image {
    object-fit: cover;
    width: 400px;
    height: 400px;
    border-radius: 4px;
    margin-bottom: 8px;
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
.overlay {
  z-index: 1;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
  height: 100vh;
  min-width: 100vh;
}

.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
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
