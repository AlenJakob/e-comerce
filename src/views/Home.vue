<template>
  <div class="home">
    <transition name="fade">
      <div class="overlay" v-if="isOpen" @click="manageGallery"></div>
    </transition>
    <transition name="bounce">
      <main-gallery
        v-if="isOpen"
        class="main-gallery"
        :images="product.images"
      ></main-gallery>
    </transition>
    <the-box>
      <template v-slot:gallery
        ><the-gallery
          :images="product.images"
          @open-gallery="manageGallery"
        ></the-gallery
      ></template>
      <template v-slot:product><the-product></the-product></template>
    </the-box>
  </div>
</template>

<script setup>
// @ is an alias to /src
import TheBox from "@/components/TheBox/TheBox.vue";
import TheGallery from "@/components/TheGallery";
import MainGallery from "@/components/ui/MainGallery";
import TheProduct from "@/components/TheProduct.vue";
import { ref } from "vue";
const isOpen = ref(false);
const product = ref({
  description: {
    manufactures: "Sneaker Company",
    title: "Fall Limiteles Sneakers",
    description:
      "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer",
    regularPrice: "250.00 ",
    discount: "50",
  },
  images: [
    {
      id: 1,
      img: "image-product-1",
      thumb: "image-product-1-thumbnail",
      alt: "shoes product",
    },
    {
      id: 2,
      img: "image-product-2",
      thumb: "image-product-2-thumbnail",
      alt: "shoes product",
    },
    {
      id: 3,
      img: "image-product-3",
      thumb: "image-product-3-thumbnail",
      alt: "shoes product",
    },
    {
      id: 4,
      img: "image-product-4",
      thumb: "image-product-4-thumbnail",
      alt: "shoes product",
    },
  ],
});
const manageGallery = () => {
  isOpen.value = !isOpen.value;
};
</script>

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
