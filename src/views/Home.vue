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
    <!-- <the-box>
      <template v-slot:gallery
        ><the-gallery
          :images="product.images"
          @open-gallery="manageGallery"
        ></the-gallery
      ></template>
      <template v-slot:product><the-product></the-product></template>
    </the-box> -->
  </div>
</template>

<script setup>
// @ is an alias to /src
// import TheBox from "@/components/TheBox/TheBox.vue";
// import TheGallery from "@/components/TheGallery";
// import TheProduct from "@/components/TheProduct.vue";
import MainGallery from "@/components/ui/MainGallery";
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
</script>
